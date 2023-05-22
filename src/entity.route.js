import express from 'express';
import fetchDataAndCreateEntities from './controller.js';

const entityRouter = express.Router();

entityRouter.post('/create', fetchDataAndCreateEntities);

export default entityRouter;
