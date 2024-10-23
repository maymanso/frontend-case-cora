const transactionsDb = require('../../db/transactions.json')
class TransactionsController {
  constructor() {
    this.transactions = transactionsDb;
    this._dayAmounts = this._calculateDayAmount();
  }

  _calculateDayAmount = () => {
    return this.transactions.results.map(result => {
      const dayAmount = result.items.reduce((acc, item) => {
        acc[item.entry] = (acc[item.entry] || 0) + item.amount;
      }, { DEBIT: 0, CREDIT: 0 });

      return {
        ...result,
        dayAmount
      };
    });
  };

  _calculateInitialBankBalance = () => {
    const initialValue = this._dayAmounts.reduce((acc, result) => {
      acc.CREDIT += result.dayAmount.CREDIT;
      acc.DEBIT += result.dayAmount.DEBIT;
      return acc;
    }, { DEBIT: 0, CREDIT: 0 });

    return {
      itemsTotal: this.transactions.itemsTotal,
      results: this._dayAmounts,
      initialBankBalance: Math.abs(initialValue.CREDIT - initialValue.DEBIT)
    };
  };

  _calculateBalances = () => {
    const bankTransactions = this._calculateInitialBankBalance();
    let previousDayBalance = bankTransactions.initialBankBalance;

    for (let index = bankTransactions.results.length - 1; index >= 0; index--) {
      const { dayAmount } = bankTransactions.results[index];
      const dayBalance = previousDayBalance + (dayAmount.CREDIT - dayAmount.DEBIT);

      bankTransactions.results[index] = {
        id: index,
        ...bankTransactions.results[index],
        dayBalance
      };

      previousDayBalance = dayBalance;
    }

    return bankTransactions;
  };

  getBankTransactions = (req, res) => {
    const response = this._calculateBalances();

    res.status(200).json(response);
  }
}

module.exports = new TransactionsController();