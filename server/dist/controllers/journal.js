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
const logger_1 = __importDefault(require("../utils/logger"));
const journal_1 = __importDefault(require("../models/journal"));
exports.default = {
    createJournalEntry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let newDay;
            const previousDay = yield journal_1.default.findOne().sort({ day: -1 }).select("day");
            if (!previousDay)
                newDay = 1;
            else
                newDay = +previousDay.day + 1;
            const newEntry = yield journal_1.default.create({
                day: newDay,
            });
            logger_1.default.info(`${req.method} ${req.url}`);
            return res.status(201).json(newEntry);
        }
        catch (err) {
            logger_1.default.error(`server error ${err}`);
            return res.status(400).json({ message: "internal server error" });
        }
    }),
    getJournalEntries: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const limit = 10;
        const page = parseInt(req.params.page);
        const totalSkipped = limit * (page - 1);
        const journalEntries = yield journal_1.default.find().skip(totalSkipped).limit(limit);
        const totalCount = yield journal_1.default.countDocuments();
        const totalPages = Math.ceil(totalCount / limit);
        logger_1.default.info(`${req.method} ${req.url}`);
        return res.status(200).json({
            journals: journalEntries,
            totalPages,
        });
    }),
    updateJournalEntry: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const journalId = req.params.id;
        const { newText } = req.body;
        const updatedJournal = yield journal_1.default.findByIdAndUpdate(journalId, {
            text: newText,
        }, { new: true });
        logger_1.default.info(`${req.method} ${req.url}`);
        return res.status(200).json(updatedJournal);
    }),
};
//# sourceMappingURL=journal.js.map