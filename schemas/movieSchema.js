const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    year: String,
    rated: String,
    released: String,
    runtime: String,
    genre: String,
    director: String,
    writer: String,
    actors: String,
    plot: String,
    language: String,
    country: String,
    awards: String,
    poster: String,
    ratings: Object,
    metascore: String,
    imdbRating: String,
    imdbVotes: String,
    imdbID: String,
    type: String,
    totalSeasons: String
});

module.exports = mongoose.model("GMIMovies", movieSchema);