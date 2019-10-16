const express = require('express');

const router = express.Router();

const movieService = require('../services/movieService');

const getAllMovies = router.get('/home', movieService.getAllMovies);
const getMovie = router.get('/movie/:id', movieService.getMovie);
const getMoviesbyGenre = router.get(
  '/movie/genres/:genre',
  movieService.getMoviesbyGenre
);
const getCountriesofMovie = router.get(
  '/movie/:id/countries',
  movieService.getCountriesofMovie
);
const getWritersofMovie = router.get(
  '/movie/:id/writers',
  movieService.getWritersofMovie
);
const getMoviesbyWriter = router.get(
  '/writers',
  movieService.getMoviesbyWriter
);
const getSearchedMovies = router.get('/search', movieService.getSearchedMovies);
const deleteMovie = router.get('/delete/:id', movieService.deleteMovie);
const getUpdateMovie = router.get('/update/:id', movieService.getUpdateMovie);
const putUpdateMovie = router.put('/update/:id', movieService.putUpdateMovie);
const redirectHome = router.get('/', movieService.redirectHome);
const invalidToken = router.get(movieService.invalidToken);

module.exports = {
  getAllMovies,
  getMoviesbyGenre,
  getMovie,
  getCountriesofMovie,
  getWritersofMovie,
  getMoviesbyWriter,
  getSearchedMovies,
  deleteMovie,
  getUpdateMovie,
  putUpdateMovie,
  redirectHome,
  invalidToken
};
