import mongoose from "mongoose";
import { dbConfig } from "../config/index.js";

async function dbConnection() {
  try {
    const { dbName, uri } = dbConfig;

    await mongoose.connect(`${uri}/${dbName}`);

    console.log("db connected");
  } catch (error) {
    console.log("db error", error);
  }
}

export default dbConnection;
