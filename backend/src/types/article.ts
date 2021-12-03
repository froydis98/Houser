export interface IArticle {
  title: string;
  description: string;
  status: Status;
  published: Date;
  lastEdited: Date;
}

export enum Status {
  DRAFT = 0,
  PUBLISHED = 1,
  DELETED = 2,
}
