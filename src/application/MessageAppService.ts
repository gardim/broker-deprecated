import RecordRepository from "../infrastructure/RecordRepository.js";
import { RecordFromMessage } from "../services/MessageService.js";

const HandleMessage = async (topic: string, message: Buffer) => {
  const content = message.toString();

  const record = RecordFromMessage({ topic, message: content });

  await RecordRepository.save(record);

  console.log(`${topic} ${content} SAVED!`);
};

export default HandleMessage;
