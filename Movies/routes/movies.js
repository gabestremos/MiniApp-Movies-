const express = require('express');

const movieRouter = express.Router();

/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line node/no-extraneous-require
const bodyParser = require('body-parser');

const checkJwt = require('../middleware/jwt');

const movieController = require('../controller/movieController');

movieRouter.use(bodyParser.json());

movieRouter.use(movieController.invalidToken);
movieRouter.use(movieController.redirectHome);
movieRouter.use(movieController.getAllMovies);
movieRouter.use(movieController.getMoviesbyGenre);
movieRouter.use(movieController.getMovie);
movieRouter.use(movieController.getCountriesofMovie);
movieRouter.use(movieController.getWritersofMovie);
movieRouter.use(movieController.getMoviesbyWriter);
movieRouter.use(movieController.getSearchedMovies);
movieRouter.use(checkJwt, movieController.deleteMovie);
movieRouter.use(checkJwt, movieController.getUpdateMovie);
movieRouter.use(checkJwt, movieController.putUpdateMovie);

module.exports = movieRouter;
