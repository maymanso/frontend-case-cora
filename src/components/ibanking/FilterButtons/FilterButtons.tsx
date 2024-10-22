import React, { useCallback } from 'react';
import './filterButtons.style.css';
import ButtonFilter from './components/ButtonFilter/ButtonFilter';


interface FilterButtonsProps {
  actionDebit: () => void;
  actionCredit: () => void;
  isDebitSelect: boolean;
  isCreditSelect: boolean;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ actionCredit, actionDebit, isDebitSelect, isCreditSelect }) => {
  const handleDebitClick = useCallback(() => {
    actionDebit();
  }, [actionDebit]);

  const handleCreditClick = useCallback(() => {
    actionCredit();
  }, [actionCredit]);

  return (
    <div className='filterButtons'>
      <ButtonFilter
        isSelect={isDebitSelect}
        action={handleDebitClick}
      >
        Débito
      </ButtonFilter>
      <ButtonFilter
        isSelect={isCreditSelect}
        action={handleCreditClick}
      >
        Crédito
      </ButtonFilter>

    </div >
  )
};

export default FilterButtons;