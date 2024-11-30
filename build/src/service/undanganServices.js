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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UndanganService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class UndanganService {
    createUndangan(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { namaundangan } = data;
            if (!namaundangan) {
                throw new Error("Nama undangan harus diisi.");
            }
            const existingUndangan = yield index_1.default.undangan.findFirst({
                where: { namaundangan },
            });
            if (existingUndangan) {
                throw new Error("Nama undangan sudah tersedia.");
            }
            const newUndangan = yield index_1.default.undangan.create({
                data: { namaundangan },
            });
            return newUndangan;
        });
    }
    getAllUndangans() {
        return __awaiter(this, void 0, void 0, function* () {
            const undangans = yield index_1.default.undangan.findMany();
            return undangans;
        });
    }
}
exports.UndanganService = UndanganService;
