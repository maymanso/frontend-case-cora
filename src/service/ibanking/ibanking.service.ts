import BaseService from "../base.service";


export default class IBankingService extends BaseService {
  getTransactions = async () => {
    const response = await this.api('/transactions/bank-balance');
    return response;
  }
}