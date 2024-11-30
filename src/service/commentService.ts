import prisma from "../../prisma/index";
import { CommentTypes, CommentsTypes } from "../type/type";

export class CommentService {
  async createComment(data: CommentTypes) {
    const { nama, comment } = data;

    if (!nama || !comment) {
      throw new Error("Nama dan komentar harus diisi.");
    }

    const newComment = await prisma.comment.create({
      data: { nama, comment },
    });

    return newComment;
  }

  public async getAllComments(): Promise<CommentsTypes[]> {
    const comments = await prisma.comment.findMany();
    return comments;
  }
}
