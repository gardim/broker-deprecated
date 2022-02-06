import { Record } from "../domain/models/Record.js";
const RecordFromMessage = ({ topic, message, }) => {
    const result = new Record();
    result.code = topic;
    result.humidity = parseInt(message) || 0;
    return result;
};
export { RecordFromMessage };
