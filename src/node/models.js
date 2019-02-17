const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    releaseYear: {
        type: String
    },
    language: {
        type: String
    },
    directorName: {
        type: String
    },
    directorNationality: {
        type: String
    },
    directorBirthdate: {
        type: String
    },
    genre: {
        type: String
    },
    rating: {
        type: Number
    }
})

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;