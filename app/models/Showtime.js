const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShowtimeSchema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        required: true
    },
    /*
    VenueId: {
        type: String,
        required: true
    },
    Url: {
        type: String,
        required: true
    },
    Times: {
        type: String,
        required: true
    },
    Director: {
        type: String
    },
    Year: {
        type: String
    }
    */
});

module.exports = Showtimes = mongoose.model('Showtimes', ShowtimeSchema);