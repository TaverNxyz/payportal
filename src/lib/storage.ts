import { Merchant, Payment } from './types';

const MERCHANTS_KEY = 'crypto_payment_merchants';
const PAYMENTS_KEY = 'crypto_payment_payments';

export const storage = {
  getMerchant: (id: string): Merchant | null => {
    const merchants = JSON.parse(localStorage.getItem(MERCHANTS_KEY) || '[]');
    return merchants.find((m: Merchant) => m.id === id) || null;
  },

  createMerchant: (merchant: Merchant): Merchant => {
    const merchants = JSON.parse(localStorage.getItem(MERCHANTS_KEY) || '[]');
    merchants.push(merchant);
    localStorage.setItem(MERCHANTS_KEY, JSON.stringify(merchants));
    return merchant;
  },

  createPayment: (payment: Payment): Payment => {
    const payments = JSON.parse(localStorage.getItem(PAYMENTS_KEY) || '[]');
    payments.push(payment);
    localStorage.setItem(PAYMENTS_KEY, JSON.stringify(payments));
    return payment;
  },

  getPayment: (id: string): Payment | null => {
    const payments = JSON.parse(localStorage.getItem(PAYMENTS_KEY) || '[]');
    return payments.find((p: Payment) => p.id === id) || null;
  }
};