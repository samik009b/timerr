import mongoose, { mongo, MongooseError } from "mongoose";
import Logger from "./logger";

const connectToMongoose = async (URI: string) => {
  try {
    const mongooseConnectionInstance = await mongoose.connect(URI);
    Logger.info(`db connection: ${mongooseConnectionInstance.connection.host}`);
  } catch (err) {
    if ((err = typeof MongooseError)) {
      Logger.error(`db error occurred -> ${err}`);
    } else {
      Logger.error(`server error -> ${err}`);
    }
    process.exit(1);
  }
};

export default connectToMongoose;
