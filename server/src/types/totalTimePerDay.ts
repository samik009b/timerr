import { Document, Schema } from "mongoose";

export interface TimePerDay extends Document {
  id: Schema.Types.ObjectId;
  day: number;
  sprints: number;
  totalSeconds: number;
}
