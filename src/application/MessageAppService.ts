import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events.js";
import RecordRepository from "../infrastructure/RecordRepository.js";
import { GetConversionStrategyService } from "../services/GetConversionStrategyService.js";
import { RecordFromMessageService } from "../services/RecordFromMessageService.js";

const HandleMessage = (
  socket: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) => {
  return async (topic: string, message: Buffer) => {
    const content = message.toString();

    const conversionStrategy = GetConversionStrategyService(topic);

    const result = conversionStrategy(content);

    const record = RecordFromMessageService({
      topic,
      raw: content,
      parsed: result.parsed,
      unit: result.unit,
    });

    await RecordRepository.save(record);

    socket.emit(topic, JSON.stringify(record));

    console.log(
      `Topic: ${topic} Raw: ${content} ${result.unit}: ${result.parsed} persisted`
    );
  };
};

export default HandleMessage;
