import axios, { AxiosInstance } from 'axios';

export default class AxiosService {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: 'http://localhost:3000' })
  }
}