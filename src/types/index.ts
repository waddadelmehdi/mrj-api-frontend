export interface Account {
  id: number;
  accountNumber: string;
  accountName: string;
  accountType: string;
  balance: number;
  createdDate: string;
  isActive: boolean;
}

export interface CompanyInfo {
  companyName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  yearEstablished: number;
  services: string[];
}