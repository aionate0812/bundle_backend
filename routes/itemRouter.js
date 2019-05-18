const express = require('express');
const itemRouter = express.Router();
const ItemService = require('../services/itemService');

itemRouter.post('/', (req, res, next) => {
    const { name, packed, quantity, bag_id, category_id } = req.body;

    ItemService.create(name, packed, quantity, bag_id, category_id)
        .then(({ id }) => {
            res.status(200);
            res.json({ id });
        })
        .catch(err => {
            next(err);
        })
});

module.exports = itemRouter;