import React, { useState, useEffect } from 'react';
import { Bitcoin, Coins, Copy, Check, Loader2 } from 'lucide-react';
import { usePayment } from '../hooks/usePayment';
import { CopyButton } from './CopyButton';
import { LoadingSpinner } from './LoadingSpinner';

interface PaymentGatewayProps {
  merchantId: string;
  amount: number;
  currency: string;
  orderId?: string;
}

export default function PaymentGateway({ merchantId, amount, currency, orderId }: PaymentGatewayProps) {
  const { payment, loading, error } = usePayment(merchantId, amount, currency, orderId);
  const [copied, setCopied] = useState<string | null>(null);

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-6 rounded-lg">
        <div className="text-white text-center">
          <h2 className="text-xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (loading || !payment) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-[400px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Bitcoin className="w-16 h-16 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Crypto Payment</h1>
          <p className="text-white/80">Complete your payment using BTC or LTC</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 space-y-6 shadow-xl">
          <div className="flex justify-between items-center pb-4 border-b border-white/20">
            <span className="text-white/80">Order ID:</span>
            <span className="text-white font-mono">{payment.orderId}</span>
          </div>

          {/* Bitcoin Address */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Bitcoin className="text-[#F7931A]" />
              <h2 className="text-white font-semibold">Bitcoin Address</h2>
            </div>
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 pr-12 font-mono text-sm text-white/90 break-all">
                {payment.btcAddress}
              </div>
              <CopyButton
                text={payment.btcAddress}
                type="btc"
                copied={copied}
                setCopied={setCopied}
              />
            </div>
          </div>

          {/* Litecoin Address */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Coins className="text-[#345D9D]" />
              <h2 className="text-white font-semibold">Litecoin Address</h2>
            </div>
            <div className="relative group">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 pr-12 font-mono text-sm text-white/90 break-all">
                {payment.ltcAddress}
              </div>
              <CopyButton
                text={payment.ltcAddress}
                type="ltc"
                copied={copied}
                setCopied={setCopied}
              />
            </div>
          </div>

          {/* Payment Details */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <h3 className="text-white font-semibold mb-3">Payment Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Amount:</span>
                <span className="text-white">{amount} {currency}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Status:</span>
                <span className="text-yellow-400">{payment.status}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-white/60 text-sm">
          Payment will be confirmed after 3 network confirmations
        </div>
      </div>
    </div>
  );
}