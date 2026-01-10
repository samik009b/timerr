import express, { urlencoded } from "express";
import ENV from "./config/env";
import Logger from "./utils/logger";
import { router } from "./routes/journal";
import { MongoDBConnector, connectToDatabase } from "./db/dbConnector";
import cors from "cors";
import corsConfig from "./config/corsConfig";

const app = express();
const port = ENV.PORT;
const uri: string = ENV.MONGO_URI;
const mongoDBConnector = new MongoDBConnector(uri);

app.use(cors(corsConfig));

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

const startServer = () => {
  connectToDatabase(mongoDBConnector)
    .then(() => {
      app.listen(port);
    })
    .catch((err) => {
      Logger.error(`server error -> ${err}`);
    })
    .finally(() => {
      Logger.info(`env: ${ENV.NODE_ENV}`);
    });
};
startServer();
