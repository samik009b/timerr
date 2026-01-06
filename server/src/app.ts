import express, { urlencoded } from "express";
import ENV from "./config/env";
import Logger from "./utils/logger";
import connectToMongoose from "./utils/db";
import { router } from "./routes/journal";

const app = express();
const port = ENV.PORT;

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

const startServer = () => {
  connectToMongoose(ENV.MONGO_URI)
    .then(() => {
      app.listen(port);
    })
    .catch((err) => {
      Logger.error(`server error -> ${err}`);
    })
    .finally(() => {
      Logger.info(`Express is listening at http://localhost:${port}`);
    });
};
startServer();
