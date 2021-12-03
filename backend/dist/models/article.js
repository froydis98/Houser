"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    },
    published: {
        type: Date,
        required: true,
    },
    lastEdited: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Article", articleSchema);
//# sourceMappingURL=article.js.map