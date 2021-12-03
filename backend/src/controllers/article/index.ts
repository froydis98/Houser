import { Response, Request } from "express";
import { IArticle } from "../../types/article";
import Article from "../../models/article";

const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const articles: IArticle[] = await Article.find();
    res.status(200).json({ articles });
  } catch (error) {
    throw error;
  }
};

const getArticleById = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
    } = req;
    const article: IArticle = await Article.findById(id);
    res.status(200).json({ article });
  } catch (error) {
    throw error;
  }
};

const addArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const body = req.body as Pick<
      IArticle,
      "title" | "description" | "status" | "published" | "lastEdited"
    >;

    const article: IArticle = await new Article({
      title: body.title,
      description: body.description,
      status: body.status,
      published: body.published,
      lastEdited: body.lastEdited,
    }).save();

    res.status(201).json({ message: "Article added", article });
  } catch (error) {
    throw error;
  }
};

const updateArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const update: IArticle | null = await Article.findByIdAndUpdate(
      { _id: id },
      body
    );
    res.status(200).json({
      message: "Article updated",
      article: update,
    });
  } catch (error) {
    throw error;
  }
};

const deleteArticle = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedArticle: IArticle | null = await Article.findByIdAndRemove(
      req.params.id
    );
    res.status(200).json({
      message: "Todo deleted",
      article: deletedArticle,
    });
  } catch (error) {
    throw error;
  }
};

export {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
