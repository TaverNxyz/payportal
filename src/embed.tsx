import React from 'react';
import { createRoot } from 'react-dom/client';
import PaymentGateway from './components/PaymentGateway';
import './index.css';

declare global {
  interface Window {
    CryptoPayment: {
      init: (config: PaymentConfig) => void;
    };
  }
}

interface PaymentConfig {
  merchantId: string;
  amount: number;
  currency: string;
  orderId?: string;
  containerId: string;
}

// Initialize payment gateway
function init({ merchantId, amount, currency, orderId, containerId }: PaymentConfig) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with id "${containerId}" not found`);
    return;
  }

  const root = createRoot(container);
  root.render(
    <PaymentGateway
      merchantId={merchantId}
      amount={amount}
      currency={currency}
      orderId={orderId}
    />
  );
}

// Export global initialization function
window.CryptoPayment = {
  init
};