import AxiosService from "./axios.service";


export default class IBankingService extends AxiosService {
  getTransactions = async () => {
    const response = await this.api('/transactions/bank-balance');
    return response;
  }
}