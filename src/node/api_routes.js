const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Movie = require('./models');

// Router
const myRouter = express.Router();

// Welcome
myRouter.get('/', async (req, res) => {
    res.send({
        message: 'Welcome on the CineTime Movie API !',
        routes: {
            GET: {
                'Get Movies': 'http://localhost:3000/api/movies/all',
                'Get Movie' : 'http://localhost:3000/api/movie/:id'
            },
            POST: {
                'Create Movie': 'http://localhost:3000/api/movies'
            },
            PATCH: {
                'Update Movie': 'http://localhost:3000/movies/:id'
            },
            DELETE: {
                'Delete Movie': 'http://localhost:3000/movies/:id'
            }
        }
    });
})

// Get Movies
myRouter.get('/movies/all', (req, res, next) => {
    Movie.find({}).then(function(movie) {
        res.send(movie);
    })
})

//Get Movie
myRouter.get('/movies/:id', (req, res, next) => {
    Movie.findById(req.params.id).then(function(movie) {
        res.send(movie);
    })
})


// Add Movie
myRouter.post('/movies', (req, res, next) => {
    Movie.create(req.body).then(function(movie) {
        res.send(movie);
    }).catch(next);
});

// Update Movie
myRouter.put('/movies/:id', function (req, res, next) {
    Movie.findByIdAndUpdate(req.params.id, req.body).then(function() {
        Movie.findById(req.params.id).then(function(movie) {
            res.send(movie);
        })
    })
})

// Delete Movie
myRouter.delete('/movies/:id', function(req, res, next) {
    Movie.findByIdAndRemove(req.params.id).then(function(movie) {
        res.send(movie);
    }).catch(next);
})

module.exports = myRouter;