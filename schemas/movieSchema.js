const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    Title: { Type: String, required: true },
    Year: { Type: String, required: true },
    Rated: { Type: String, required: true },
    Released: { Type: String, required: true },
    Runtime: { Type: String, required: true },
    Genre: { Type: String, required: true },
    Director: { Type: String, required: true },
    Writer: { Type: String, required: true },
    Actors: { Type: String, required: true },
    Plot: { Type: String, required: true },
    Language: { Type: String, required: true },
    Country: { Type: String, required: true },
    Awards: { Type: String, required: true },
    Poster: { Type: String, required: true },
    Ratings: { Type: Object, required: true },
    Metascore: { Type: String, required: true },
    imdbRating: { Type: String, required: true },
    imdbVotes: { Type: String, required: true },
    imdbID: { Type: String, required: true },
    Type: { Type: String, required: true },
    totalSeasons: { Type: String, required: true }
});

module.exports = mmongoose.model("GMIMovies", movieSchema);