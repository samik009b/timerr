import { Document, Schema } from "mongoose";

export interface Journal extends Document {
  day: Number;
  text: String;
  productivityRating: number;
}
