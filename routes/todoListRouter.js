const todoListRouter = require('express').Router();
const { create } = require('../services/todoListService');

todoListRouter.post('/', (req, res, next) => {
    const { name, trip_id } = req.body;
    create(name, trip_id)
    .then(({ id }) => {
        res.status(200);
        res.json({
             id,
        });
    })
    .catch(err => {
        next(err)
    });
});

module.exports = todoListRouter;