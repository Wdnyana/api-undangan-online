import { Request, Response } from "express";
import { UndanganService } from "../service/undanganServices";
import { CreateUndanganTypes } from "../type/type";

export class UndanganController {
  private undanganService: UndanganService;

  constructor() {
    this.undanganService = new UndanganService();
  }

  createUndangan = async (
    req: Request<{}, {}, CreateUndanganTypes>,
    res: Response
  ) => {
    try {
      const { namaundangan }: CreateUndanganTypes = req.body;

      const newUndangan = await this.undanganService.createUndangan({
        namaundangan,
      });

      res.status(201).json({
        message: "Undangan berhasil dibuat",
        undangan: newUndangan,
      });
    } catch (error) {
      console.error("Kesalahan saat mencoba create undangan:", error);
    }
  };

  getAllUndangans = async (res: Response) => {
    try {
      const undangans = await this.undanganService.getAllUndangans();
      res.status(200).json(undangans);
    } catch (error) {
      console.error("Kesalahan saat mengambil data undangan:", error);
    }
  };
}

export const UndangansController = new UndanganController();
