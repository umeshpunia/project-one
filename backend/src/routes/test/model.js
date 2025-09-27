import mongoose, { Schema, model } from "mongoose";

const testSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const TestModel = model("test", testSchema);

export default TestModel;
