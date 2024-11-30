import { Request, Response } from "express";

class postUndanganController {
  welcomeMessage = async (req: Request, res: Response) => {
    console.log("Endpoint hit!");
    res.send("API Undangan online hit!!");
  };

  loginUser = async (req: Request, res: Response) => {
    
  };
}

export const UndanganController = new postUndanganController();
