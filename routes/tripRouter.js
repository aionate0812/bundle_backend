const express = require('express');
const tripRouter = express.Router();
const TripService = require('../services/tripService');
const userService = require('../services/userService');
const BagService = require("../services/bagService");
const ItemService = require('../services/itemService');

//trip creation v2, handles every aspect of the trip creation from one route
tripRouter.post('/', async (req, res, next) => {
    const {
        name,
        city,
        country,
        departure_date,
        return_date,
        user_uid,
        items,
    } = req.body;
    // if a user_uid was passed in, fetch their id using userServices
    const user = user_uid ? await userService.readUserByUid(user_uid) : null;
    try {
        // if the user exists in our DB, create a NEW trip with their id
        const {
            id: trip_id
        } = user ? await TripService.create(name, country, city, departure_date, return_date, user.id) : await TripService.create(name, country, city, departure_date, return_date, null)
        // create three bags for the trip
        const [{
            id: personal_id
        }, {
            id: carry_on_id
        }, {
            id: checked_id 
        }] = await Promise.all([BagService.create(trip_id, 1), BagService.create(trip_id, 2), BagService.create(trip_id, 3)]);
        const categories = Object.keys(items);
        const itemsArr = []
        const categoryObj = {
            clothing: 1,
            accessories: 2,
            electronics: 3,
            personals: 4,
            documents: 5,
            "first-aid": 6,
            essentials: 7,
            children: 8,
            misc: 4
        };
        // create all the items the user selected using the bag ids created above
        for (let category of categories) {
            for (let e of items[category]) {
                if (e.pack) {
                    if (e.bag_type === "personal") {
                        const {
                            id
                        } = await ItemService.create(e.name, false, e.quantity, personal_id, categoryObj[e.category], e.image)
                        itemsArr.push({
                            name: e.name,
                            id,
                        });
                    }
                    if (e.bag_type === "carry-on") {
                        const {
                            id
                        } = await ItemService.create(e.name, false, e.quantity, carry_on_id, categoryObj[e.category], e.image)
                        itemsArr.push({
                            name: e.name,
                            id,
                        });
                    }
                    if (e.bag_type === "checked") {
                        const {
                            id
                        } = await ItemService.create(e.name, false, e.quantity, checked_id, categoryObj[e.category], e.image)
                        itemsArr.push({
                            name: e.name,
                            id,
                        });
                    }
                }
            }
        }
        // return the result
        res.status(200);
        res.json({
            success: true,
            trip_id,
            allItems: itemsArr,
        })
    } catch (err) {
        console.log(err)
        next(err);
    }

});

// This route retrieves a trip's basic bag and todolist info
tripRouter.get('/init/:id', async (req, res, next) => {
    const {
        id
    } = req.params;
    const tripDetails = TripService.read(id);
    const allLists = TripService.getAllListsByTripID(id);
    const allBags = TripService.getAllBagsByTripID(id);
    try {
        const [trip, lists, bags] = await Promise.all([tripDetails, allLists, allBags]);
        res.status(200);
        res.json({
            trip,
            lists,
            bags
        });
    } catch (err) {
        next(err);
    };
});

tripRouter.get('/:id', (req, res, next) => {
    const {
        id
    } = req.params;

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
    const {
        id
    } = req.params;

    TripService.updateTrip(req.body, id)
        .then(data => {
            res.status(200);
            res.json({
                success: `Updated Trip #${id}`
            })
        })
        .catch(err => {
            next(err);
        })
})

tripRouter.delete('/:id', (req, res, next) => {
    const {
        id
    } = req.params;

    TripService.delete(id)
        .then(data => {
            res.status(200);
            res.json({
                success: `Deleted Trip #${id}`
            })
        })
})

module.exports = tripRouter;