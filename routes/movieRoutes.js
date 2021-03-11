const express = require('express');
const movies = require('../DB');
const router = express.Router();

router.post('/title', movies.sendRequest)

module.exports = router;