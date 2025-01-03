import { BlockchainTransaction } from '../types/payment';
import { blockchainExplorers } from '../config/payment';

export const getExplorerUrl = (transaction: BlockchainTransaction): string => {
  return `${blockchainExplorers[transaction.method]}${transaction.txHash}`;
};

export const formatTransactionStatus = (transaction: BlockchainTransaction): string => {
  if (transaction.status === 'confirmed') {
    return `Confirmed (${transaction.confirmations} confirmations)`;
  }
  return transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1);
};