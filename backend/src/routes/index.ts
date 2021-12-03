import { Router } from "express";
import {
  getArticles,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/article";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo/index";

const router: Router = Router();

router.get("/todos", getTodos);

router.post("/add-todo", addTodo);

router.put("/edit-todo/:id", updateTodo);

router.delete("/delete-todo/:id", deleteTodo);

router.get("/articles", getArticles);

router.get("/article/:id", getArticleById);

router.post("/add-article", addArticle);

router.put("/edit-article/:id", updateArticle);

router.delete("/delete-article/:id", deleteArticle);

export default router;
