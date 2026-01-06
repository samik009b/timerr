import mongoose from "mongoose";
import Journal from "./models/journal";
import Day from "./models/day";
import Logger from "./utils/logger";
import dotenv from "dotenv"
dotenv.config()
const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
  await mongoose.connect(MONGO_URI);
  Logger.info("seeding started");

  await Journal.deleteMany();
  await Day.deleteMany();

  for (let i = 1; i <= 50; i++) {
    await Journal.create();
    await Day.create();
  }
  Logger.info("seeding has ended");
};

seed();
