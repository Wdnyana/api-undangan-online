import { Request, Response, NextFunction } from "express";
import { UndanganService } from "../service/undanganServices";
import { CreateUndanganTypes } from "type/type";

export class UndanganController {
  private undanganService: UndanganService;

  constructor() {
    this.undanganService = new UndanganService();
  }

  createUndangan = async (req: Request, res: Response, next: NextFunction) => {
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
      next(error);
    }
  };

  getAllUndangans = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const undangans = await this.undanganService.getAllUndangans();
      res.status(200).json(undangans);
    } catch (error) {
      next(error);
    }
  };
}

export const UndangansController = new UndanganController();
