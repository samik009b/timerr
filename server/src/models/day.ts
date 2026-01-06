import { Schema, model } from "mongoose";
import { TimePerDay } from "../types/totalTimePerDay";

const daySchema = new Schema<TimePerDay>({
  day: Number,
  sprints: [
    {
      type: Number,
      default: 0,
    },
  ],
  totalSeconds: {
    type: Number,
    default: 0,
  },
});

const Day = model("Day", daySchema, "days");
export default Day;
