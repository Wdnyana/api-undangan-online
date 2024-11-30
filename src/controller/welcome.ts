import { Request, Response } from "express";

class postUndanganController {
  welcomeMessage = async (req: Request, res: Response) => {
    console.log("Endpoint hit!");
    res.send("API Undangan online hit!!");
  };
}

export const UndanganController = new postUndanganController();
