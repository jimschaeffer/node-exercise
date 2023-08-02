import mysql2 from "mysql2";
import config from "../config";

const connection = mysql2.createPool(config.mysql2);

export default connection;