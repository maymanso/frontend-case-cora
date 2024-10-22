import { create } from 'zustand';

import IBankingService from '../../service/ibanking/ibanking.service';
import { TransacionStoreType } from '../../types/ibanking/transaction.type';

const ibankingService = new IBankingService()

const useTransactionsStore = create<TransacionStoreType>((set) => ({
  transactions: {
    results: [],
    itemsTotal: 0,
    initialBankBalance: 0
  },
  getTransactions: async () => {
    try {
      const response = await ibankingService.getTransactions();
      set({ transactions: response.data })
    } catch (error) {
      console.log({ error })
    }
  }
}));

export default useTransactionsStore;