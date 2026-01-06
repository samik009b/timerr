import chalk from "chalk";

const Logger = {
  info: (message: string) => {
    const date = new Date().toISOString();
    console.log(chalk.cyan(`[INFO]: [${date}] : ` + chalk.underline(message)));
  },

  warning: (message: string) => {
    const date = new Date().toISOString();
    console.log(chalk.yellow(`[WARNING]: [${date}] : ` + chalk.underline(message)));
  },

  error: (message: string) => {
    const date = new Date().toISOString();
    console.log(chalk.red(`[ERROR]: [${date}] : ` + chalk.underline(message)));
  },
};

export default Logger;
