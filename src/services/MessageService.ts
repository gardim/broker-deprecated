import { Record } from "../domain/models/Record.js";

const RecordFromMessage = ({
  topic,
  message,
}: {
  topic: string;
  message: string;
}) => {
  const result = new Record();

  result.code = topic;
  result.humidity = parseInt(message) || 0;

  return result;
};

export { RecordFromMessage };
