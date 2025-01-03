export type PaymentMethod = 'cashapp' | 'paypal' | 'bitcoin' | 'litecoin';

export interface PaymentDetails {
  cashapp: string;
  paypal: string;
  bitcoin: string;
  litecoin: string;
}

export interface BlockchainTransaction {
  txHash: string;
  method: 'bitcoin' | 'litecoin';
  amount: number;
  status: 'pending' | 'confirmed' | 'failed';
  confirmations: number;
  timestamp: number;
}
