import React from 'react';
import './bankStatementSummary.style.css';

interface BankStatementSummaryProps {
  date: string;
  amount: number
}

const BankStatementSummary: React.FC<BankStatementSummaryProps> = ({ date, amount }) => (
  <article className='bankStatementSummary'>
    <h3 className='bankStatementSummary__title'>{date}</h3>
    <p>saldo do dia <span className='bankStatementSummary__amount'>{`R$ ${amount / 100},00`}</span></p>
  </article>
);

export default BankStatementSummary;
