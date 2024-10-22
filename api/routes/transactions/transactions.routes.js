const express = require('express');
const TransactionsController = require('../../controller/transactions/transactions.controller');

const router = express();

router.get('/bank-balance', TransactionsController.getBankTransactions);

module.exports = router;