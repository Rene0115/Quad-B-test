import express from "express";
import pino, {Logger} from "pino"
import dotenv from "dotenv";
dotenv.config();

const app: express.Application = express();
const logger: Logger = pino();

const port: string | number = process.env.PORT || 4000;

const start = (port:string | number) => {
   app.listen(port, () => {
      logger.info(`Listening on ${port}`);
   })
}

