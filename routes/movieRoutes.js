const express = require('express');
const movies = require('../DB');
const router = express.Router();

router.post('/title', movies.sendRequest);
router.post('/comment', movies.createComment);

router.get('/comments', movies.getAllComments)
router.get('/comments/:titleID', movies.getCommentByMovieID);
router.get('/movies', movies.getAllMovies);
router.get('movies/:ID', movies.getMovieById);


module.exports = router;