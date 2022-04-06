const express = require('express');
const router = express.Router();
const authRouter = require('./auth.route');
const usersRouter = require('./users.route');
const messagesRouter = require('./messages.route');


//================== Routes ======================
router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/messages', messagesRouter);
//================================================

module.exports = router;