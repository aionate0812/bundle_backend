const express = require('express');
const tripRouter = express.Router();
const TripService = require('../services/tripService');


tripRouter.post('/', (req, res, next) => {
    const { name, country, city, departure_date, return_date, user_id } = req.body;

    TripService.create(name, country, city, departure_date, return_date, user_id)
        .then(({ id }) => {
            res.status(200);
            res.json({ id });
        })
        .catch(err => {
            next(err);
        })
});


module.exports = tripRouter;