import { useEffect, useState } from 'react';

import useTransactionsStore from '../../store/ibanking/transactions.store';

import FilterButtons from '../../components/ibanking/FilterButtons/FilterButtons';
import BankStatement from '../../components/ibanking/BankStatement/BankStatement';

import './ibanking.style.css'


const IBanking = () => {
  const [isFilterDebit, setIsFilterDebit] = useState(false);
  const [isFilterCredit, setIsFilterCredit] = useState(false);

  const { getTransactions, transactions } = useTransactionsStore()

  useEffect(() => {
    getTransactions();
  }, []);

  const handleFilterClick = (type: 'debit' | 'credit') => {
    const isDebit = type === 'debit';

    const isCurrentlySelected = isDebit ? isFilterDebit : isFilterCredit;

    if (isCurrentlySelected) {
      setIsFilterDebit(false);
      setIsFilterCredit(false);
    } else {
      setIsFilterDebit(isDebit);
      setIsFilterCredit(!isDebit);
    }
  };

  return (<section className='ibanking'>
    <div className='ibanking__container'>
      <FilterButtons
        actionCredit={() => handleFilterClick('credit')}
        actionDebit={() => handleFilterClick('debit')}
        isCreditSelect={isFilterCredit}
        isDebitSelect={isFilterDebit}
      />
      <>
        {
          transactions.results.length === 0 ?
            <div>Nenhuma transação encontrada</div>
            :
            transactions.results.map((result) => {
              return (
                <BankStatement
                  key={result.id}
                  transactions={result}
                  date={result.date}
                  isFilterDebit={isFilterDebit}
                  isFilterCredit={isFilterCredit}
                />
              )
            })
        }

      </>
    </div>
  </section>);
}

export default IBanking; 