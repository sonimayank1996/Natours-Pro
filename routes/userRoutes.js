const express = require('express');
const userRouter = express.Router();
const { getAllUser, createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');

userRouter.route('/').get(getAllUser).post(createUser);
userRouter.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;