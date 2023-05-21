import { json, urlencoded } from 'express';
import cors from 'cors';
import router from './route.js';
import { urlencoded as _urlencoded, json as _json } from 'body-parser';

const middleware = (app) => {
  // Enable CORS
  app.use(cors());

  // Parse incoming JSON data
  app.use(json());

  // Parse incoming URL-encoded data
  app.use(urlencoded({ extended: true }));

  // Parse incoming URL-encoded data and JSON data
  app.use(_urlencoded({ extended: false }));
  app.use(_json());

  // Register the router
  app.use(router);

  // Fallback route handler
  app.use('*', (req, res) => {
    res.status(200).send('Server is Running Check API docs');
  });
};

export default middleware;
