export interface Merchant {
  id: string;
  name: string;
  btcAddress: string;
  ltcAddress: string;
  apiKey: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  merchantId: string;
  orderId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}