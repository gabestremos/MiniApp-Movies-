const express = require('express');

const movieRouter = express.Router();

/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line node/no-extraneous-require
const bodyParser = require('body-parser');

const movieController = require('../controller/movieController');

movieRouter.use(bodyParser.json());
movieRouter.use(movieController);

module.exports = movieRouter;
