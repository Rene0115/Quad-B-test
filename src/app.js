import express from 'express';
import pino from 'pino';
import { config } from 'dotenv';
import database from './db.config.js';
import 'reflect-metadata';

config();

const app = express();
const logger = pino();

const port = process.env.PORT || 4000;

const start = () => {
  database();
  app.listen(port, () => {
    logger.info(`Listening on port ${port}`);
  });
};

start();
