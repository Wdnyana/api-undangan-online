import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: String | Number = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ data: "API Undangan hit!!" });
});

app.listen(port, () =>
  console.log(`[: Server is running at http://localhost:${port}`)
);
