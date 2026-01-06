import { Router } from "express";
import journal from "../controllers/journal";

export const router = Router();

router.post("/journal", journal.createJournalEntry);
router.get("/journal/:page", journal.getJournalEntries);
router.patch('/journal/:id', journal.updateJournalEntry)