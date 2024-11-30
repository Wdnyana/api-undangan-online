import prisma from "../../prisma/index";
import { CreateUserTypes } from "../type/type";

export class UserService {
  async createUser(data: CreateUserTypes) {
    const { nama, password } = data;

    if (!nama || !password) {
      throw new Error("Nama dan password harus diisi.");
    }

    const existingUser = await prisma.users.findFirst({
      where: { nama },
    });

    if (existingUser) {
      throw new Error("Nama sudah terdaftar.");
    }

    const newUser = await prisma.users.create({
      data: {
        nama,
        password,
      },
    });

    return newUser;
  }
}
