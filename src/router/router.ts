import express, { Request, Response } from "express";
import { UndanganController } from "../controller/welcome";
import { LoginUndanganController } from "../controller/login";
import { CommentsController } from "../controller/commentController";
import { UsersController } from "../controller/userController";
import { UndangansController } from "../controller/undanganController";

export const router = express.Router();

router.get("/welcome", (req: Request, res: Response) => {
  console.log("Router triggered!");
  UndanganController.welcomeMessage(req, res);
});

router.post("/login", (req: Request, res: Response) => {
  LoginUndanganController.LoginUser(req, res);
  console.log("Login");
});

router.post("/comment", (req: Request, res: Response) => {
  CommentsController.addComment(req, res);
  console.log("comment created");
});

router.get("/comments", (req: Request, res: Response) => {
  CommentsController.getAlllsComment(res);
  console.log("comment display");
});

router.post("/user", (req: Request, res: Response) => {
  UsersController.createUser(req, res);
  console.log("user created");
});

router.post("/nama-undangan", (req: Request, res: Response) => {
  UndangansController.createUndangan(req, res);
  console.log("undangan created");
});

router.get("/nama-undangans", (res: Response) => {
  UndangansController.getAllUndangans(res);
  console.log("undangan created");
});
