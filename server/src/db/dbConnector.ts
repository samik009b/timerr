import mongoose, { MongooseError } from "mongoose";
import Logger from "../utils/logger";
import { IDatabaseConnector } from "../types/db";

class MongoDBConnector implements IDatabaseConnector {
  constructor(private URI: string) {}

  async connect(): Promise<void> {
    try {
      const mongooseConnectionInstance = await mongoose.connect(this.URI);
      Logger.info(`MongoDB connected: ${mongooseConnectionInstance.connection.host}`);
    } catch (err) {
      if (err instanceof MongooseError) {
        Logger.error(`MongoDB error -> ${err}`);
      } else {
        Logger.error(`Unexpected server error -> ${err}`);
      }
      process.exit(1);
    }
  }
}

class MySqlConnector implements IDatabaseConnector {
  constructor(private URI: string) {}
  async connect(): Promise<void> {}
}

const connectToDatabase = async (connector: IDatabaseConnector) => {
  await connector.connect();
};

export { MongoDBConnector, connectToDatabase };
