const express = require('express');

const movieRouter = express.Router();

/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line node/no-extraneous-require
const bodyParser = require('body-parser');

const checkJwt = require('../middleware/jwt');

const movieService = require('../services/movie');

movieRouter.use(bodyParser.json());

movieRouter.use(movieService.invalidToken);
movieRouter.route('/').get(movieService.redirectHome);
movieRouter.route('/home').get(movieService.getAllMovies);
movieRouter.route('/movie/genres/:genre').get(movieService.getMoviesbyGenre);
movieRouter.route('/movie/:id').get(movieService.getMovie);
movieRouter.route('/movie/:id/countries').get(movieService.getCountriesofMovie);
movieRouter.route('/movie/:id/writers').get(movieService.getWritersofMovie);
movieRouter.route('/writers').get(movieService.getMoviesbyWriter);
movieRouter.route('/search').get(movieService.getSearchedMovies);
movieRouter.route('/delete/:id').get(checkJwt, movieService.deleteMovie);
movieRouter
  .route('/update/:id')
  .get(checkJwt, movieService.getUpdateMovie)
  .put(checkJwt, movieService.putUpdateMovie);

module.exports = movieRouter;
