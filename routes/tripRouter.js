const express = require('express');
const tripRouter = express.Router();
const TripService = require('../services/tripService');
const userService = require('../services/userService')

tripRouter.post('/', (req, res, next) => {
    const { name, country, city, departure_date, return_date, user_uid } = req.body;
    userService.readUserByUid(user_uid)
    .then(user => {
        return TripService.create(name, country, city, departure_date, return_date, user.id)
    })
    .then(({ id }) => {
                res.status(200);
                res.json({ id });
            })
            .catch(err => {
                console.log(err)
                next(err);
            })
    
});

// This route retrieves a trip's basic bag and todolist info
tripRouter.get('/init/:id', async (req, res, next) => {
    const { id } = req.params;
    const tripDetails = TripService.read(id);
    const allLists = TripService.getAllListsByTripID(id);
    const allBags = TripService.getAllBagsByTripID(id);
    try {
        const [trip, lists, bags] = await Promise.all([tripDetails, allLists, allBags]);
        res.status(200);
        res.json({trip, lists, bags});
    } catch (err) {
        next(err);
    };
});

tripRouter.get('/:id', (req, res, next) => {
    const { id } = req.params;

    TripService.read(id)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
});

tripRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;

    TripService.updateTrip(req.body, id)
        .then(data => {
            res.status(200);
            res.json({ success: `Updated Trip #${id}` })
        })
        .catch(err => {
            next(err);
        })
})

tripRouter.delete('/:id', (req,res, next) => {
    const { id } = req.params;
    
    TripService.delete(id)
        .then(data => {
            res.status(200);
            res.json({ success: `Deleted Trip #${id}` })
        })
})

module.exports = tripRouter;