# GMIMovies

## Using Technologies
#### Node Js
#### MongoDB 
#### Express Js
#### Mongoose

## Documentation

### Movies List
GET /api/movies

### Specific movie by ID 
GET /api/movies/{Movie Title}

### Specific comment by Movie ID
GET /api/comments/{Movie ID}

### Comments List
GET /api/comments

### Add Movie to The DB
POST /api/title
body: {
    "title": "Movie Title"
}

### Add Comment
POST /api/comment
body: {
    "id": "eg. 1",
	"comment": "comment body"
}


### Runing Process
https://gmimovies.herokuapp.com
