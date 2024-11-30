"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const login_1 = require("../controller/login");
const commentController_1 = require("../controller/commentController");
const userController_1 = require("../controller/userController");
const undanganController_1 = require("../controller/undanganController");
exports.router = express_1.default.Router();
exports.router.post("/login", (req, res) => {
    login_1.LoginUndanganController.LoginUser(req, res);
    console.log("Login");
});
exports.router.post("/comment", (req, res) => {
    commentController_1.CommentsController.addComment(req, res);
    console.log("comment created");
});
exports.router.get("/comments", (req, res) => {
    commentController_1.CommentsController.getAlllsComment(res);
    console.log("comment display");
});
exports.router.post("/user", (req, res) => {
    userController_1.UsersController.createUser(req, res);
    console.log("user created");
});
exports.router.post("/nama-undangan", (req, res) => {
    undanganController_1.UndangansController.createUndangan(req, res);
    console.log("undangan created");
});
exports.router.get("/nama-undangans", (res) => {
    undanganController_1.UndangansController.getAllUndangans(res);
    console.log("undangan created");
});
