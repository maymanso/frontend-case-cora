import React from "react";
import { formattedDateAndTime } from "../../../../../utils/date.util";

interface TransactionProps {
  type: 'credit' | 'refund' | 'debit';
  title: string;
  description: string;
  date: string;
  amount: number;
  icon: string
}
const Transaction: React.FC<TransactionProps> = ({ type, title, date, amount, description, icon }) => {
  const amountType = {
    credit: '+',
    refund: '',
    debit: '-'
  };

  return (
    <article className='bankStatement__grid'>
      <article className='bankStatement__article'>
        <img src={icon} />
        <p className={`bankStatement__title--${type}`}>
          {title}
        </p>
      </article>
      <p className='bankStatement__cell'>
        {description}
      </p>
      <p className='bankStatement__cell'>
        {formattedDateAndTime(date)}
      </p>
      <p className={`bankStatement__amount--${type}`}>
        {`${amountType[type]} R$ ${amount / 100},00`}
      </p>
    </article>
  );
};

export default Transaction;
