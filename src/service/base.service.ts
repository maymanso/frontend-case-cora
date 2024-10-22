import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import Cookie from 'js-cookie';

export default class BaseService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: 'http://localhost:5003/api' });
    this.api.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {

        const token = Cookie.get('token')
        if (token) {
          config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
      }
    );
  }
}