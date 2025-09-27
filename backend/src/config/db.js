import { config } from "dotenv";

config();

const { MONGO_URI, MONGO_DB_NAME } = process.env;
const dbConfig = {
  uri: MONGO_URI,
  dbName: MONGO_DB_NAME,
};

export default dbConfig;
