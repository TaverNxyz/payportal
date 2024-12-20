import React, { useEffect, useState } from 'react';
import PaymentGateway from './components/PaymentGateway';
import { createTestMerchant } from './lib/test-data';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorDisplay } from './components/ErrorDisplay';

export default function App() {
  const [merchantId, setMerchantId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function initializeMerchant() {
      try {
        const merchant = await createTestMerchant();
        setMerchantId(merchant.id);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to initialize merchant');
      }
    }

    initializeMerchant();
  }, []);

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (!merchantId) {
    return <LoadingSpinner />;
  }

  return (
    <PaymentGateway
      merchantId={merchantId}
      amount={100}
      currency="USD"
    />
  );
}