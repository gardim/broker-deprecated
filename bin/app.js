import { connect } from "mqtt";
import "reflect-metadata";
import HandleMessage from "./application/MessageAppService.js";
import { MQTT_URL } from "./infrastructure/Config.js";
const client = connect(MQTT_URL, {
    clientId: `mqtt_${Math.random().toString(16).slice(3)}`,
});
const topic = "#";
client.on("connect", function () {
    console.log("Connected");
    client.subscribe(topic, function (err) {
        if (!err) {
            console.log(`Subscribed to ${topic}`);
        }
        else {
            console.error(`Could not subscribe ${err}`);
        }
    });
});
client.on("message", HandleMessage);
