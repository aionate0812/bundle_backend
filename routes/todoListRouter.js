const todoListRouter = require('express').Router();
const { create, read, readAllTodosFromList, update, deleteTodoList } = require('../services/todoListService');
const todoRouter = require('./todoRouter');

todoListRouter.use('/todo', todoRouter);

todoListRouter.post('/', (req, res, next) => {
    const { name, trip_id, list_type } = req.body;
    create(name, trip_id, list_type)
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

todoListRouter.get('/:tdl_id/all', (req, res, next) => {
    const { tdl_id } = req.params;
    readAllTodosFromList(tdl_id)
        .then((data) => {
            res.status(200);
            res.json(data);
        })
        .catch(err => {
            next(err);
        })
})

todoListRouter.get('/:tdl_id', (req, res, next) => {
    const { tdl_id } = req.params;
    read(tdl_id)
        .then((data) => {
            res.status(200);
            res.json(data)
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