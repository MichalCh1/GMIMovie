const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    movieID: String,
    comment: String
})

module.exports = mongoose.model("Comments", commentSchema);