import dotnev from "dotenv";
import { envSchema } from "../types/env";
dotnev.config();

const ENV: envSchema = {
  PORT: parseInt(process.env.PORT) || 4000,
  MONGO_URI: process.env.MONGO_URI || "",
  NODE_ENV: process.env.NODE_ENV || "development"
};

export default ENV;
