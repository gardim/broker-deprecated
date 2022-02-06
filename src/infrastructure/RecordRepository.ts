import { Record } from "../domain/models/Record.js";
import connection from "./Connection.js";

export default (await connection).getRepository(Record);
