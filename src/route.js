import { Router } from 'express';
import entityRouter from './entity.route.js';

const router = Router();

router.use('/', entityRouter);

export default router;
