const todoListRouter = require('express').Router();
const { create, update, deleteTodoList } = require('../services/todoListService');

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

todoListRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;
    update(req.body, id)
    .then(() => {
        res.status(200);
        res.json({
            message: `List ${id} updated.`
        })
    })
});

todoListRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    deleteTodoList(id)
    .then(() => {
        res.status(200);
        res.json({
            message: `List ${id} deleted.`
        })
    });
});

module.exports = todoListRouter;