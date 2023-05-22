import express from 'express';
import pino from 'pino';
import { config } from 'dotenv';
import 'reflect-metadata';
import middleware from './middleware.js';
import dataSource from './db.config.js'

config();

const app = express();
const logger = pino();
middleware(app);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
  await dataSource.initialize();
  logger.info('Database Connected');
  }
  catch (err) {
    logger.error(err.message);
  }
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

start();

export default logger;
