"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../controllers/todo/index");
const router = (0, express_1.Router)();
router.get("/todos", index_1.getTodos);
router.post("/add-todo", index_1.addTodo);
router.put("/edit-todo/:id", index_1.updateTodo);
router.delete("/delete-todo/:id", index_1.deleteTodo);
exports.default = router;
//# sourceMappingURL=index.js.map