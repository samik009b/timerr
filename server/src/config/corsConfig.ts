import { CorsOptions } from "cors";
import ENV from "./env";

const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    if (ENV.NODE_ENV === "Production") {
      if (origin === ENV.ALLOWED_ORIGIN) {
        callback(null, true);
      } else {
        callback(new Error("Origin not allowed by cors"));
      }
    } else {
      if (origin.startsWith("http://localhost") || origin.startsWith("http://127.0.0.1")) {
        callback(null, true);
      } else {
        callback(new Error("origin not allowed by cors in dev"));
      }
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

export default corsConfig;
