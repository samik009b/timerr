"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const journal_1 = __importDefault(require("../controllers/journal"));
exports.router = (0, express_1.Router)();
exports.router.post("/journal", journal_1.default.createJournalEntry);
exports.router.get("/journal/:page", journal_1.default.getJournalEntries);
exports.router.patch('/journal/:id', journal_1.default.updateJournalEntry);
//# sourceMappingURL=journal.js.map