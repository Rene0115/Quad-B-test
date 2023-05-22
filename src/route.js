import express from 'express';
import entityRouter from './entity.route.js';

const router = express.Router();

router.use('/entity', entityRouter);

export default router;
