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
const mongoose_1 = __importDefault(require("mongoose"));
const journal_1 = __importDefault(require("./models/journal"));
const day_1 = __importDefault(require("./models/day"));
const logger_1 = __importDefault(require("./utils/logger"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI)
    throw new Error("mongo uri not defiend");
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(MONGO_URI);
    logger_1.default.info("seeding started");
    yield journal_1.default.deleteMany();
    yield day_1.default.deleteMany();
    for (let i = 0; i <= 57; i++) {
        yield journal_1.default.create({
            day: i,
        });
        yield day_1.default.create({
            day: i,
        });
    }
    logger_1.default.info("seeding has ended");
    yield mongoose_1.default.disconnect();
    process.exit(0);
});
seed();
//# sourceMappingURL=seeder.js.map