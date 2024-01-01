const express = require('express');
const Venue = require('./../models/Venue');
const Showtime = require('./../models/Showtime');

const router = express.Router();

// Home page route
router.get('/', async (req, res) => {
    const showtimes = await Showtime.find({Date: Date.now()})
    res.render("home", {
        showtimes: (Object.keys(showtimes).length > 0 ? showtimes : {})
    });
});

// Venues page route
router.get('/venues', async (req, res) => {
    const venues = await Venue.find()
    res.render("venues", {
        venues: (Object.keys(venues).length > 0 ? venues : {})
    });
});


// admin page route
router.get('/admin', async (req, res) => {
    res.render("admin");
});

// POST - Submit Showtime
router.post('/admin', (req, res) => {
    const newShowtime = new Showtime({
        Title: req.body.title,
        Date: Date.now()
    });

    newShowtime.save()
    .then(showtime => res.redirect('/'))
    .catch(err => console.log(err));
});

/*
// POST - Destroy todo item
router.post('/todo/destroy', async (req, res) => {
    const taskKey = req.body._key;
    const err = await Todo.findOneAndRemove({_id: taskKey})
    res.redirect('/');
});
*/


module.exports = router;