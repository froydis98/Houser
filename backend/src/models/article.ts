import { Schema, model } from "mongoose";
import { IArticle } from "../types/article";

const articleSchema: Schema = new Schema(
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

export default model<IArticle>("Article", articleSchema);
