import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../lib/storage';
import type { Payment } from '../lib/types';

interface PaymentState {
  orderId: string;
  btcAddress: string;
  ltcAddress: string;
  status: string;
}

export function usePayment(merchantId: string, amount: number, currency: string, orderId?: string) {
  const [payment, setPayment] = useState<PaymentState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function createPayment() {
      try {
        const merchant = storage.getMerchant(merchantId);
        
        if (!merchant) {
          throw new Error('Merchant not found');
        }

        const newPayment: Payment = {
          id: uuidv4(),
          merchantId,
          orderId: orderId || `ORD-${uuidv4()}`,
          amount,
          currency,
          status: 'pending',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        const savedPayment = storage.createPayment(newPayment);

        if (isMounted) {
          setPayment({
            orderId: savedPayment.orderId,
            btcAddress: merchant.btcAddress,
            ltcAddress: merchant.ltcAddress,
            status: savedPayment.status
          });
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    createPayment();

    return () => {
      isMounted = false;
    };
  }, [merchantId, amount, currency, orderId]);

  return { payment, loading, error };
}