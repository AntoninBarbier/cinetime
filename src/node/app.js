const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const hostname = 'localhost'; 
const port = process.env.PORT || 3000; 

// Connection to MongoDB
mongoose.connect('mongodb://localhost/cinetime', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Middlewares
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // allow cross origin requests
const routes = require('./api_routes.js'); // importing routes
app.use('/api', routes); // intializing routes
app.use(function(err, req, res, next) {
    //console.log(err);
    res.status(422).send({error: err.message});
})

app.listen(port, () => console.log(`Server started on http://${hostname}:${port}`));
