import mongoose from "mongoose";
import Journal from "./models/journal";
import Day from "./models/day";
import Logger from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) throw new Error("mongo uri not defiend");

const seed = async () => {
  await mongoose.connect(MONGO_URI);
  Logger.info("seeding started");

  await Journal.deleteMany();
  await Day.deleteMany();

  for (let i = 0; i <= 57; i++) {
    await Journal.create({
      day: i,
    });
    await Day.create({
      day: i,
    });
  }
  Logger.info("seeding has ended");
  await mongoose.disconnect();
  process.exit(0);
};

seed();
