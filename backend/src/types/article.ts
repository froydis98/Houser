export interface IArticle {
  title: string;
  description: JSON;
  status: Status;
}

export enum Status {
  DRAFT = 0,
  PUBLISHED = 1,
  DELETED = 2,
}
