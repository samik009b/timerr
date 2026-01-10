import chalk from "chalk";
import ENV from "../config/env";

type LogLevel = "info" | "warning" | "error";

class Formatter {
  static info(message: string) {
    const date = new Date().toLocaleString();
    return chalk.cyanBright(`[INFO]: [${date}] : ` + chalk.underline(message));
  }

  static warning(message: string) {
    const date = new Date().toLocaleString();
    return chalk.yellow(`[WARNING]: [${date}] : ` + chalk.underline(message));
  }

  static error(message: string) {
    const date = new Date().toLocaleString();
    return chalk.red(`[ERROR]: [${date}] : ` + chalk.underline(message));
  }
}

class Logger {
  log(level: LogLevel, message: string) {
    switch (level) {
      case "info":
        console.log(Formatter.info(message));
        break;
      case "warning":
        console.log(Formatter.warning(message));
        break;
      case "error":
        console.log(Formatter.error(message));
        break;
    }
  }

  info(message: string) {
    // if (ENV.NODE_ENV !== "Production") 
      this.log("info", message);
  }

  warning(message: string) {
    this.log("warning", message);
  }

  error(message: string) {
    this.log("error", message);
  }
}

export default new Logger();
