import type { Status } from "./status";

export interface IArticle {
    title: string;
    description: JSON;
    status: Status;
}