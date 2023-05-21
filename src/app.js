const express = require('express');
const pino = require('pino');
const dotenv = require('dotenv');
const database = require('./db.config.js');
require('reflect-metadata');

dotenv.config();

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
