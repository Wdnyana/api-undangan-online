import { Request, Response, NextFunction } from "express";
import { UserService } from "../service/userServices";
import { CreateUserTypes } from "type/type";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { nama, password }: CreateUserTypes = req.body;

      const newUser = await this.userService.createUser({ nama, password });

      res.status(201).json({
        message: "User berhasil dibuat",
        user: newUser,
      });
    } catch (error) {
      next(error);
    }
  };
}

export const UsersController = new UserController();
