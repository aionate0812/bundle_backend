const express = require('express');
const itemRouter = express.Router();
const ItemService = require('../services/itemService');

itemRouter.post('/', (req, res, next) => {
    const { name, packed, quantity, bag_id, category_id, image } = req.body;

    ItemService.create(name, packed, quantity, bag_id, category_id, image)
        .then(({ id }) => {
            res.status(200);
            res.json({ id });
        })
        .catch(err => {
            next(err);
        })
});

itemRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;
    
    ItemService.update(req.body, id)
        .then(data => {
            res.status(200);
            res.json({success: `Updated Item #${id}`});
        })
        .catch(err => {
            next(err);
        })
})

itemRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    
    ItemService.delete(id)
        .then(data => {
            res.status(200);
            res.json({
                success: `Deleted Item #${id}`,
                result: data
        });
        })
        .catch(err => {
            next(err);
        })
});


module.exports = itemRouter;