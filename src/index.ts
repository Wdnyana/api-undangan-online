import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { router } from "./router/router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/undangan", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
