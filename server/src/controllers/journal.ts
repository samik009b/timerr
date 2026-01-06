import { Request, Response } from "express";
import Logger from "../utils/logger";
import Journal from "../models/journal";

export default {
  createJournalEntry: async (req: Request, res: Response) => {
    try {
      let newDay: number;
      const previousDay = await Journal.findOne().sort({ day: -1 }).select("day");
      if (!previousDay) newDay = 1;
      else newDay = +previousDay.day + 1;

      const newEntry = await Journal.create({
        day: newDay,
      });
      Logger.info(`${req.method} ${req.url}`);
      return res.status(201).json(newEntry);
    } catch (err) {
      Logger.error(`server error ${err}`);
      return res.status(400).json({ message: "internal server error" });
    }
  },

  getJournalEntries: async (req: Request, res: Response) => {
    const limit = 10;
    const page = parseInt(req.params.page);
    const totalJournalSkipped = limit * (page - 1);
    const journalEntries = await Journal.find().skip(totalJournalSkipped).limit(limit);

    Logger.info(`${req.method} ${req.url}`);

    return res.status(200).json(journalEntries);
  },

  updateJournalEntry: async (req: Request, res: Response) => {
    const journalId = req.params.id;
    const { newText } = req.body;

    const updatedJournal = await Journal.findByIdAndUpdate(
      journalId,
      {
        text: newText,
      },
      { new: true },
    );
    Logger.info(`${req.method} ${req.url}`);

    return res.status(200).json(updatedJournal);
  },
};
