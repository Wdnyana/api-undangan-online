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
exports.LoginUndanganController = void 0;
const nookies_1 = require("nookies");
const login_1 = require("../service/login");
const loginService = new login_1.LoginService();
class LoginController {
    constructor() {
        this.LoginUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.body || typeof req.body !== "object") {
                return res.status(400).json({ message: "Body request tidak valid" });
            }
            const { nama, password } = req.body;
            if (!nama || !password) {
                return res.status(400).json({ message: "Nama dan password harus diisi" });
            }
            try {
                const { token } = yield loginService.LoginUser({ nama, password });
                (0, nookies_1.setCookie)({ res }, "token", token, {
                    httpOnly: true,
                    maxAge: 5400,
                    sameSite: "strict",
                });
                res.status(200).json({ message: "Login berhasil" });
            }
            catch (error) {
                console.error("Kesalahan saat mencoba login:", error);
                res.status(401).json({ message: error.message });
            }
        });
    }
}
exports.LoginUndanganController = new LoginController();
