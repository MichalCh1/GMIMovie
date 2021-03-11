const request = require('request');

const sendRequest = async(req, res) => {
    await request.get({
        url: `http://www.omdbapi.com/?t=${req.body.title.replace(' ', '+')}&apikey=f3253b5`
    }, (error, responce, body) => {
        if (error) {
            console.log(error)
        } else {
            res.json({ responce: "success" })
            console.log(body);
        }
    })
}

exports.sendRequest = sendRequest;