const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
    Id: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Url: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
});

module.exports = Venues = mongoose.model('Venues', VenueSchema);