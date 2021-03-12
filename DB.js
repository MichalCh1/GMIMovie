const request = require('request');

const movie = require('./schemas/movieSchema');
const comment = require('./schemas/commentSchema');


const addToDB = async(req) => {
    let reqJson = JSON.parse(req)

    const movieDoc = new movie({
        title: reqJson.Title,
        year: reqJson.Year,
        rated: reqJson.Rated,
        released: reqJson.Released,
        runtime: reqJson.Runtime,
        genre: reqJson.Genre,
        director: reqJson.Director,
        writer: reqJson.Writer,
        actors: reqJson.Actors,
        plot: reqJson.Plot,
        language: reqJson.Language,
        country: reqJson.Country,
        awards: reqJson.Awards,
        poster: reqJson.Poster,
        ratings: reqJson.Ratings,
        metascore: reqJson.Metascore,
        imdbRating: reqJson.imdbRating,
        imdbVotes: reqJson.imdbVotes,
        imdbID: reqJson.imdbID,
        type: reqJson.Type,
        totalSeasons: reqJson.totalSeasons
    })
    await movieDoc.save();
}

const sendRequest = async(req, res) => {
    if (req.body.title.length === 0) {
        res.json({
            Response: false,
            Body: "Empty title!"
        })
    } else {

        await request.get({
            url: `http://www.omdbapi.com/?t=${req.body.title.replace(' ', '+')}&apikey=f3253b5`
        }, (error, responce, body) => {
            if (error) {
                console.log(error)
            } else {
                try {
                    addToDB(responce.body);
                    res.json({ Response: true })
                } catch (err) {
                    console.log(err)
                    res.json({ Response: false })
                }

            }
        })
    }
}

const getAllMovies = async(req, res) => {
    const result = await movie.find().exec();
    res.json(result);
}
const getMovieById = async(req, res) => {
    const result = await movie.find({ _id: req.params.ID }).exec();
    res.json(result)
}
const createComment = async(req, res) => {

    const commentDoc = new comment({
        movieID: req.body.id,
        comment: req.body.comment
    })
    if (commentDoc.comment.length === 0) {
        res.json({
            "Response": false,
            "body": "Comment body is empty!"
        })
    } else {
        await commentDoc.save()
        res.json({ "Response": true })
    }
}
const getAllComments = async(req, res) => {
    const result = await comment.find().exec();
    res.json(result)
}
const getCommentByMovieID = async(req, res) => {
    const result = await comment.find({ movieID: req.params.titleID }).exec();
    res.json(result);
}

exports.sendRequest = sendRequest;
exports.getAllMovies = getAllMovies;
exports.getMovieById = getMovieById;
exports.createComment = createComment;
exports.getAllComments = getAllComments;
exports.getCommentByMovieID = getCommentByMovieID;