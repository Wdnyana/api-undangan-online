import jwt from "jsonwebtoken";

import { PrismaClient } from "@prisma/client";
import { LoginTypes } from "../type/type";
const prisma = new PrismaClient();

export class LoginService {
  async LoginUser(payload: LoginTypes) {
    const { nama, password } = payload;

    const user = await prisma.users.findFirst({
      where: { nama },
    });

    if (!user) {
      throw new Error("Nama pengguna tidak ditemukan");
    }

    if (password !== user.password) {
      throw new Error("Kata sandi salah");
    }

    const jwtSecret = process.env.JWT_SECRET || "";
    const token = jwt.sign({ userId: user.id, userName: user.nama }, jwtSecret);

    return { token };
  }
}
