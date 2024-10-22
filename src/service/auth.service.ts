import { DataLoginType } from '../types/auth/auth.type';
import AxiosService from './axios.service';

export default class AuthService extends AxiosService {
  login = async (data: DataLoginType) => {
    const response = await this.api.post('/login', data);
    return response;
  }
}
