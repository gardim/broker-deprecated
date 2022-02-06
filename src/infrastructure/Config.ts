const ThrowError = (varName: string) => {
  throw Error(`${varName} is not set`);
};

export const MQTT_URL = process.env.MQTT_URL || ThrowError("MQTT_URL");
export const MYSQL_URL = process.env.MYSQL_URL || ThrowError("MYSQL_URL");
export const MYSQL_USER = process.env.MYSQL_USER || ThrowError("MYSQL_USER");
export const MYSQL_PORT = parseInt(process.env.MYSQL_PORT || "3306");
export const MYSQL_PASSWORD =
  process.env.MYSQL_PASSWORD || ThrowError("MYSQL_PASSWORD");
export const MYSQL_DATABASE =
  process.env.MYSQL_DATABASE || ThrowError("MYSQL_DATABASE");
