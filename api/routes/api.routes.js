const express = require('express');
const transactionsRouter = require('./transactions/transactions.routes');
const authRouter = require('./auth/auth.routes');
const authRoutesMiddleware = require('../middleware/transactions/authRoutes.middleware');


const router = express();

router.use('/login', authRouter)

router.use(authRoutesMiddleware.protect);

router.use('/transactions', transactionsRouter);

module.exports = router;
