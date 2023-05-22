import express from 'express';
import cors from 'cors';
import router from './route.js';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const middleware = (app) => {
  // Enable CORS
  app.use(cors());

  // Logging
  app.use(morgan('dev'));

  // Parse incoming JSON data
  app.use(bodyParser.json());

  // Parse incoming URL-encoded data
  app.use(bodyParser.urlencoded({ extended: true }));

  // Register the router
  app.use(router);

  // Fallback route handler
  app.use('*', (req, res) => {
    res.status(200).send('Server is Running Check API docs');
  });
};

export default middleware;
