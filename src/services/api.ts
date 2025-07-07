import axios from 'axios';
import { Account, CompanyInfo } from '../types';

const API_BASE_URL = 'https://localhost:7173/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const apiService = {
  // Accounts
  getAccounts: async (): Promise<Account[]> => {
    const response = await api.get<Account[]>('/accounts');
    return response.data;
  },

  getAccount: async (id: number): Promise<Account> => {
    const response = await api.get<Account>(`/accounts/${id}`);
    return response.data;
  },

  // Company
  getCompanyInfo: async (): Promise<CompanyInfo> => {
    const response = await api.get<CompanyInfo>('/company/info');
    return response.data;
  },
};