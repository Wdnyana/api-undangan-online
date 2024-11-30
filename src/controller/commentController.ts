import { Request, Response } from "express";
import { CommentService } from "../service/commentService";

export class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  addComment = async (req: Request, res: Response) => {
    try {
      const { nama, comment } = req.body;

      const newComment = await this.commentService.createComment({
        nama,
        comment,
      });

      res.status(201).json(newComment);
    } catch (error) {
      console.error("Kesalahan saat mengambil data comment:", error);
    }
  };

  getAlllsComment = async (res: Response) => {
    try {
      const comments = await this.commentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      console.error("Kesalahan saat mengambil data comment:", error);
    }
  };
}

export const CommentsController = new CommentController();
