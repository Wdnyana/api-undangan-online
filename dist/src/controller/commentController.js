"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsController = exports.CommentController = void 0;
const commentService_1 = require("../service/commentService");
class CommentController {
    constructor() {
        this.addComment = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, comment } = req.body;
                const newComment = yield this.commentService.createComment({
                    nama,
                    comment,
                });
                res.status(201).json(newComment);
            }
            catch (error) {
                console.error("Kesalahan saat mengambil data comment:", error);
            }
        });
        this.getAlllsComment = (res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const comments = yield this.commentService.getAllComments();
                res.status(200).json(comments);
            }
            catch (error) {
                console.error("Kesalahan saat mengambil data comment:", error);
            }
        });
        this.commentService = new commentService_1.CommentService();
    }
}
exports.CommentController = CommentController;
exports.CommentsController = new CommentController();
