import { Router } from "express";
import {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article";

const router: Router = Router();

router.get("/articles", getArticles);

router.get("/article/:id", getArticleById);

router.post("/add-article", addArticle);

router.put("/edit-article/:id", updateArticle);

router.delete("/delete-article/:id", deleteArticle);

export default router;
