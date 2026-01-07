"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const Logger = {
    info: (message) => {
        const date = new Date().toLocaleString();
        console.log(chalk_1.default.cyanBright(`[INFO]: [${date}] : ` + chalk_1.default.underline(message)));
    },
    warning: (message) => {
        const date = new Date().toLocaleString();
        console.log(chalk_1.default.yellow(`[WARNING]: [${date}] : ` + chalk_1.default.underline(message)));
    },
    error: (message) => {
        const date = new Date().toLocaleString();
        console.log(chalk_1.default.red(`[ERROR]: [${date}] : ` + chalk_1.default.underline(message)));
    },
};
exports.default = Logger;
//# sourceMappingURL=logger.js.map