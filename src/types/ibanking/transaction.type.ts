export interface TransacionStoreType {
  transactions: TransactionType
  getTransactions: () => Promise<void>
}

export type TransactionItemType = {
  id: string;
  description: string;
  label: string;
  entry: 'DEBIT' | 'CREDIT';
  amount: number;
  name: string;
  dateEvent: string;
  status: string;
}

export type BankBalanceType = {
  id: number;
  items: Array<TransactionItemType>;
  date: string;
  dayAmount: {
    CREDIT: number;
    DEBIT: number
  };
  dayBalance: number;
};

export type TransactionType = {
  results: Array<BankBalanceType> | [];
  itemsTotal: number;
  initialBankBalance: number;
}

