const express = require('express');
const fetchDataAndCreateEntities = require('./controller.js');

const entityRouter = express.Router();

entityRouter.post('/create', fetchDataAndCreateEntities);

module.exports = entityRouter;
