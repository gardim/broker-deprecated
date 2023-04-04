import { connect } from "mqtt";
import "reflect-metadata";
import HandleMessage from "./application/MessageAppService.js";
import { MQTT_URL } from "./infrastructure/Config.js";
import { httpSocket, httpsSocket } from "./infrastructure/Socket.js";

//---------------------------------------------------------
const mqttClient = connect(MQTT_URL, {
  clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
  protocol: "ws",
  port: 8080,
});

const topic = "gardim/esp32/000000/#";

mqttClient.on("connect", function () {
  console.log("Connected to MQTT");

  mqttClient.subscribe(topic, function (err) {
    if (!err) {
      console.log(`Subscribed to ${topic}`);
    } else {
      console.error(`Could not subscribe ${err}`);
    }
  });
});

mqttClient.on("message", HandleMessage(httpsSocket));
//--------------------------------------------------------
