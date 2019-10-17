const express = require('express');

const router = express.Router();

const checkJwt = require('../middleware/jwt');

const movieService = require('../services/movieService');

router.get('/', movieService.redirectHome);
router.get(movieService.invalidToken);
router.get('/home', movieService.getAllMovies);
router.get('/movie/:id', movieService.getMovie);
router.get('/movie/genres/:genre', movieService.getMoviesbyGenre);
router.get('/movie/:id/countries', movieService.getCountriesofMovie);
router.get('/movie/:id/writers', movieService.getWritersofMovie);
router.get('/writers', movieService.getMoviesbyWriter);
router.get('/search', movieService.getSearchedMovies);
router.get('/delete/:id', checkJwt, movieService.deleteMovie);
router.get('/update/:id', checkJwt, movieService.getUpdateMovie);
router.put('/update/:id', checkJwt, movieService.putUpdateMovie);

module.exports = router;
