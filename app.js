const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const routes = require('./routes/movieRoutes');

app.use(bodyParser.json());

app.use('/api', routes);


mongoose.connect(`mongodb+srv://${process.env.DB_HOST}:${process.env.DB_PASSWORD}@cluster0.q0wj6.mongodb.net/GMIMovies`, { useNewUrlParser: true })
    .then(() => { console.log('Connected!') })
    .catch(() => { console.log('Connected Failed!') });

app.listen(process.env.PORT || 5000);