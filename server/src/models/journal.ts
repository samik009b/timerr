import { Schema, model } from "mongoose";
import { Journal } from "../types/journal";

const journalSchema = new Schema<Journal>({
  day: Number,
  text: {
    type: String,
    default: "new text",
    maxLength: 100,
  },
  productivityRating: {
    type: Number,
    default: 0,
    minLength: 0,
    maxLength: 10,
  },
});

const Journal = model("Journal", journalSchema, "journals");
export default Journal;
