import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { Account } from '../types';

const Accounts: React.FC = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        const data = await apiService.getAccounts();
        setAccounts(data);
      } catch (err) {
        setError('Failed to fetch accounts');
        console.error('Error fetching accounts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <div className="loading">Loading accounts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-content">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <h1 className="page-title">Accounts Overview</h1>
      <div className="accounts-grid">
        {accounts.map((account) => (
          <div key={account.id} className="account-card">
            <div className="account-number">{account.accountNumber}</div>
            <div className="account-name">{account.accountName}</div>
            <div className="account-type">{account.accountType}</div>
            <div className="account-balance">
            {account.balance.toLocaleString('ar-MA', {
                style: 'currency',
                currency: 'MAD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            })}
            </div>
            <div className="account-date">
              Created: {new Date(account.createdDate).toLocaleDateString()}
            </div>
            <div className={`account-status ${account.isActive ? 'active' : 'inactive'}`}>
              {account.isActive ? 'Active' : 'Inactive'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounts;