"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const article_1 = require("../controllers/article");
const router = (0, express_1.Router)();
router.get("/articles", article_1.getArticles);
router.get("/article/:id", article_1.getArticleById);
router.post("/add-article", article_1.addArticle);
router.put("/edit-article/:id", article_1.updateArticle);
router.delete("/delete-article/:id", article_1.deleteArticle);
exports.default = router;
//# sourceMappingURL=index.js.map