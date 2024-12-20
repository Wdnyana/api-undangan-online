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
exports.UsersController = exports.UserController = void 0;
const userServices_1 = require("../service/userServices");
class UserController {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { nama, password } = req.body;
                const newUser = yield this.userService.createUser({ nama, password });
                res.status(201).json({
                    message: "User berhasil dibuat",
                    user: newUser,
                });
            }
            catch (error) {
                console.error("Kesalahan saat membuat user baru:", error);
            }
        });
        this.userService = new userServices_1.UserService();
    }
}
exports.UserController = UserController;
exports.UsersController = new UserController();
