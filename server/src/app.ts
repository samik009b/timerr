import express from "express";
import ENV from "./config/env";
import Logger from "./utils/logger";
const app = express();
const port = ENV.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  Logger.info("happy horibol");
  Logger.error("happy horibol");
  Logger.warning("happy horibol");
  return console.log(`Express is listening at http://localhost:${port}`);
});
