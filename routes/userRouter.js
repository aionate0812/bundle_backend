const express = require('express');
const userRouter = express.Router();
const UserService = require('../services/userService');

userRouter.post('/', (req, res, next) => {
    const { uid, username, email } = req.body;

    UserService.createUser(uid, username, email)
    .then(({ id }) => {
        res.status(200)
        res.json(id)
    })
    .catch(err => next(err))
});

module.exports = userRouter;