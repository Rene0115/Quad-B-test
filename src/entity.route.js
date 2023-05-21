import { Router } from 'express';
import fetchDataAndCreateEntities from './controller.js';

const entityRouter = Router();

entityRouter.post('/create', fetchDataAndCreateEntities);

export default entityRouter;
