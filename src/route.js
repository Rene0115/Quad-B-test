const express = require('express');
const entityRouter = require('./entity.route.js');

const router = express.Router();

router.use('/', entityRouter);

module.exports = router;
