import { v4 as uuidv4 } from 'uuid';
import { storage } from './storage';
import type { Merchant } from './types';

export async function createTestMerchant(): Promise<Merchant> {
  const merchant = {
    id: uuidv4(),
    name: 'Test Merchant',
    apiKey: `key_${uuidv4()}`,
    btcAddress: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
    ltcAddress: 'LQLz2YnNxCuSQdoJVXSJyQfGs1T8dpQrJM',
    createdAt: new Date().toISOString()
  };

  return storage.createMerchant(merchant);
}