const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies.controllers');

router.get('/', moviesController.list);

router.get('/:id', moviesController.movieId);

module.exports = router;
