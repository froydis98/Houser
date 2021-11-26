import { Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description: string;
  status: Status;
}

export enum Status {
  NEW = 0,
  ACTIVE = 1,
  DONE = 2,
}
