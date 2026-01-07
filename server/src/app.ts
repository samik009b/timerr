import express, { urlencoded } from "express";
import ENV from "./config/env";
import Logger from "./utils/logger";
import connectToMongoose from "./utils/db";
import { router } from "./routes/journal";
import cors from "cors";

const app = express();
const port = ENV.PORT;

app.use(
  cors({
    origin: "http://localhost:5173",
    // allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  }),
);

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

const mongodbConnectionString: string =
  ENV.NODE_ENV === "Production" ? ENV.MONGO_URI : "mongodb://127.0.0.1/mydb";

const startServer = () => {
  connectToMongoose(mongodbConnectionString)
    .then(() => {
      app.listen(port);
    })
    .catch((err) => {
      Logger.error(`server error -> ${err}`);
    })
    .finally(() => {
      Logger.info(`env: ${ENV.NODE_ENV}, endpoint: http://localhost:${port}`);
    });
};
startServer();
