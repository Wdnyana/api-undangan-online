import { Request, Response } from "express";
import { setCookie } from "nookies";

import { LoginService } from "../service/login";
import { LoginTypes } from "type/type";

const loginService = new LoginService();

class LoginController {
  LoginUser = async (req: Request<{}, {}, LoginTypes>, res: Response) => {
    if (!req.body || typeof req.body !== "object") {
      return res.status(400).json({ message: "Body request tidak valid" });
    }

    const { nama, password } = req.body;

    if (!nama || !password) {
      return res.status(400).json({ message: "Nama dan password harus diisi" });
    }

    try {
      const { token } = await loginService.LoginUser({ nama, password });

      setCookie({ res }, "token", token, {
        httpOnly: true,
        maxAge: 5400,
        sameSite: "strict",
      });

      res.status(200).json({ message: "Login berhasil" });
    } catch (error: any) {
      console.error("Kesalahan saat mencoba login:", error);
      res.status(401).json({ message: error.message });
    }
  };
}

export const LoginUndanganController = new LoginController();
