const todoRouter = require('express').Router();
const { create, update, deleteTodo } = require('../services/todoService');

todoRouter.post('/', (req, res, next) => {
    const { task_name, complete, item_id, todolist_id } = req.body;
    create(task_name, complete, item_id, todolist_id)
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

todoRouter.put('/:id', (req, res, next) => {
    const { id } = req.params;
    update(req.body, id)
    .then(() => {
        res.status(200);
        res.json({
            message: `Task ${id} updated.`
        })
    })
    .catch(err => {
        next(err)
    });
});

todoRouter.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    deleteTodo(id)
    .then(() => {
        res.status(200);
        res.json({
            message: `Task ${id} deleted.`
        })
    });
});

module.exports = todoRouter;