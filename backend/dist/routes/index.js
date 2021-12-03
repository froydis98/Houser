"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const article_1 = require("../controllers/article");
const index_1 = require("../controllers/todo/index");
const router = (0, express_1.Router)();
router.get("/todos", index_1.getTodos);
router.post("/add-todo", index_1.addTodo);
router.put("/edit-todo/:id", index_1.updateTodo);
router.delete("/delete-todo/:id", index_1.deleteTodo);
router.get("/articles", article_1.getArticles);
router.get("/article/:id", article_1.getArticleById);
router.post("/add-article", article_1.addArticle);
router.put("/edit-article/:id", article_1.updateArticle);
router.delete("/delete-article/:id", article_1.deleteArticle);
exports.default = router;
//# sourceMappingURL=index.js.map