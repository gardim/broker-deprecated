import { Record } from "../domain/models/Record.js";

const RecordFromMessageService = ({
  topic,
  raw,
  parsed,
  unit,
}: {
  topic: string;
  raw: string;
  parsed: string;
  unit: string;
}) => {
  const result = new Record();

  result.code = topic;
  result.raw = parseInt(raw) || 0;
  result.parsed = parseFloat(parsed) || 0;
  result.unit = unit;

  return result;
};

export { RecordFromMessageService };
