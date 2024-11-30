import { Request, Response, NextFunction } from "express";
import { CommentService } from "../service/commentService";

export class CommentController {
  private commentService: CommentService;

  constructor() {
    this.commentService = new CommentService();
  }

  addComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { nama, comment } = req.body;

      const newComment = await this.commentService.createComment({
        nama,
        comment,
      });

      res.status(201).json(newComment);
    } catch (error) {
      next(error);
    }
  };

  getAlllsComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const comments = await this.commentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      next(error);
    }
  };
}

export const CommentsController = new CommentController();
