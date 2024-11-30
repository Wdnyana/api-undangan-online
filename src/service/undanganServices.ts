import prisma from "../../prisma/index";

import { CreateUndanganTypes } from "../type/type";

export class UndanganService {
  async createUndangan(data: CreateUndanganTypes) {
    const { namaundangan } = data;

    if (!namaundangan) {
      throw new Error("Nama undangan harus diisi.");
    }

    const existingUndangan = await prisma.undangan.findFirst({
      where: { namaundangan },
    });
    if (existingUndangan) {
      throw new Error("Nama undangan sudah tersedia.");
    }

    const newUndangan = await prisma.undangan.create({
      data: { namaundangan },
    });

    return newUndangan;
  }

  async getAllUndangans() {
    const undangans = await prisma.undangan.findMany();
    return undangans;
  }
}
