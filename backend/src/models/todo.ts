import { Schema, model } from "mongoose";
import { Status, ITodo } from "../types/todo";

const todoSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    status: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ITodo>("Todo", todoSchema);
