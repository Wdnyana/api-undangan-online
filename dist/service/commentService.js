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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CommentService {
    createComment(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nama, comment } = data;
            if (!nama || !comment) {
                throw new Error("Nama dan komentar harus diisi.");
            }
            const newComment = yield prisma_1.default.comment.create({
                data: { nama, comment },
            });
            return newComment;
        });
    }
    getAllComments() {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield prisma_1.default.comment.findMany();
            return comments;
        });
    }
}
exports.CommentService = CommentService;
