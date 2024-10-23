import { DataLoginType } from '../../types/auth/auth.type';
import BaseService from '../base.service';

export default class AuthService extends BaseService {
  login = async (data: DataLoginType) => {
    const response = await this.api.post('/login', data);
    return response;
  }
}
