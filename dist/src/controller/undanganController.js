"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndangansController = exports.UndanganController = void 0;
const undanganServices_1 = require("../service/undanganServices");
class UndanganController {
    constructor() {
        this.createUndangan = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { namaundangan } = req.body;
                const newUndangan = yield this.undanganService.createUndangan({
                    namaundangan,
                });
                res.status(201).json({
                    message: "Undangan berhasil dibuat",
                    undangan: newUndangan,
                });
            }
            catch (error) {
                console.error("Kesalahan saat mencoba create undangan:", error);
            }
        });
        this.getAllUndangans = (res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const undangans = yield this.undanganService.getAllUndangans();
                res.status(200).json(undangans);
            }
            catch (error) {
                console.error("Kesalahan saat mengambil data undangan:", error);
            }
        });
        this.undanganService = new undanganServices_1.UndanganService();
    }
}
exports.UndanganController = UndanganController;
exports.UndangansController = new UndanganController();
