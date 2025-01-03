import React, { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { PaymentMethod } from '../types/payment';
import { paymentConfig } from '../config/payment';
import { TransactionTracker } from './TransactionTracker';

interface PaymentInstructionsProps {
  method: PaymentMethod;
  amount: number;
  onClose: () => void;
}

export const PaymentInstructions: React.FC<PaymentInstructionsProps> = ({
  method,
  amount,
  onClose,
}) => {
  const [copied, setCopied] = React.useState(false);
  const [showTracker, setShowTracker] = useState(false);
  const paymentId = paymentConfig[method];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(paymentId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getMethodName = (method: PaymentMethod) => {
    switch (method) {
      case 'cashapp':
        return 'Cash App';
      case 'paypal':
        return 'PayPal';
      case 'bitcoin':
        return 'Bitcoin';
      case 'litecoin':
        return 'Litecoin';
    }
  };

  const isCrypto = ['bitcoin', 'litecoin'].includes(method);

  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700">
          <h2 className="text-xl font-semibold mb-4 text-gray-100">
            Payment Instructions
          </h2>
          <div className="space-y-4">
            <p className="text-gray-400">
              To complete your purchase of ${amount}, send payment to the
              following {getMethodName(method)} address:
            </p>

            <div className="flex items-center gap-2 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
              <code className="flex-1 font-mono text-gray-300">
                {paymentId}
              </code>
              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-gray-700 rounded-full text-gray-400 hover:text-gray-300 transition-colors"
              >
                {copied ? (
                  <Check className="text-green-500" size={20} />
                ) : (
                  <Copy size={20} />
                )}
              </button>
            </div>

            {isCrypto && (
              <button
                onClick={() => setShowTracker(true)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink size={18} />
                Track Payment
              </button>
            )}

            <button
              onClick={onClose}
              className="w-full bg-gray-700 text-gray-100 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>

      {showTracker && (
        <TransactionTracker onClose={() => setShowTracker(false)} />
      )}
    </>
  );
};
