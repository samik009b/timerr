import dotnev from "dotenv";
dotnev.config();

const ENV = {
  PORT: parseInt(process.env.PORT) || 4000,
};

export default ENV;
