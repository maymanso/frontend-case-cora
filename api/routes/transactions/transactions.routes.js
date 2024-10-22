const express = require('express');
const TransactionsController = require('../../controller/transactions/transactions.controller');

const router = express();

router.get('/bankBalance', TransactionsController.getBankTransactions);

module.exports = router;