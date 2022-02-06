import typerom from "typeorm";
const { createConnection } = typerom;
import { Record } from "../domain/models/Record.js";
import {
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_URL,
  MYSQL_USER,
} from "./Config.js";

const connection = createConnection({
  type: "mysql",
  host: MYSQL_URL,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  entities: [Record],
  synchronize: true,
  logging: false
});

export default connection;
