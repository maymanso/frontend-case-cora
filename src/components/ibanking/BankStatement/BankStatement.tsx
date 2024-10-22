import BankStatementSummary from './components/BankStatementSummary/BankStatementSummary';
import Transaction from './components/Transaction/Transaction';

import arrowBack from '../../../assets/arrow-back.svg';
import arrowUpOut from '../../../assets/arrow-up-out.svg';
import arrowDownIn from '../../../assets/arrow-down-in.svg';

import { BankBalanceType, TransactionItemType } from '../../../types/ibanking/transaction.type';

import { formattedDate } from '../../../utils/date.util';

import './bankStatement.style.css';
import React, { useCallback, useMemo } from 'react';


interface BankStatemnetProps {
  transactions: BankBalanceType,
  date: string;
  isFilterDebit: boolean;
  isFilterCredit: boolean;
}

interface TransactionComponentByTypeProps {
  key: string
  title: string;
  description: string;
  date: string;
  amount: string;
}

const TransactionMemo = React.memo(Transaction);

const BankStatement: React.FC<BankStatemnetProps> = ({ transactions, date, isFilterDebit, isFilterCredit }) => {

  const transactionComponentByType = {
    DEBIT: ({ title, description, date, amount, key }: TransactionComponentByTypeProps) => (
      <TransactionMemo
        key={key}
        type='debit'
        icon={arrowUpOut}
        title={title}
        description={description}
        date={date}
        amount={amount}
      />
    ),
    CREDIT: ({ title, description, date, amount, key }: TransactionComponentByTypeProps) => (
      <TransactionMemo
        key={key}
        type='credit'
        icon={arrowDownIn}
        title={title}
        description={description}
        date={date}
        amount={amount}
      />
    ),
    REFUND: ({ title, description, date, amount, key }: TransactionComponentByTypeProps) => {
      return (
        <>
          <TransactionMemo
            key={key}
            type='credit'
            icon={arrowDownIn}
            title={title}
            description={description}
            date={date}
            amount={amount}
          />
          <TransactionMemo
            key={`${key}--refund`}
            type='refund'
            icon={arrowBack}
            title={title}
            description={description}
            date={date}
            amount={amount}
          />
        </>
      )
    },

  }

  const filteredTransactions = useMemo(() => {
    return transactions.items.filter(item =>
      (isFilterDebit && item.entry === 'DEBIT') ||
      (isFilterCredit && item.entry === 'CREDIT') ||
      (!isFilterDebit && !isFilterCredit)
    );
  }, [transactions.items, isFilterDebit, isFilterCredit]);

  const renderTransaction = useCallback((item: TransactionItemType) => {
    const props = {
      key: item.id,
      title: item.name,
      description: item.description,
      date: item.dateEvent,
      amount: item.amount.toString()
    };
    const entryType: keyof typeof transactionComponentByType = item.entry;

    return (
      <>
        <BankStatementSummary
          date={formattedDate(date)}
          amount={transactions.dayBalance}
        />
        <div className='bankStatement__verticalLine'></div>
        <section className='bankStatement__container'>
          {item.description.includes('Reembolso') ?
            transactionComponentByType.REFUND({ ...props }) :
            transactionComponentByType[entryType]({ ...props })}
        </section >
        <div className='bankStatement__verticalLine'></div>
      </>
    )
  }, []);

  return (
    <>
      {filteredTransactions.map(renderTransaction)}
    </>
  )
}

export default BankStatement;