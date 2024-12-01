"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const router_1 = require("./router/router");
const welcome_1 = require("./controller/welcome");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3005;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    console.log("Router triggered!");
    welcome_1.WelcomeController.welcomeMessage(req, res);
});
app.use("/api/v1/undangan", router_1.router);
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
