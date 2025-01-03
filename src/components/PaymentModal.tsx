import React from 'react';
import { X, DollarSign, CircleDollarSign, Bitcoin, Coins } from 'lucide-react';
import { Product, PricingTier } from '../types/product';
import { PaymentMethod } from '../types/payment';

interface PaymentModalProps {
  product: Product;
  selectedTier: PricingTier;
  onClose: () => void;
  onSelectPayment: (method: PaymentMethod) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  product,
  selectedTier,
  onClose,
  onSelectPayment,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-100">{product.name}</h2>
            <p className="text-gray-400">{selectedTier.period} - ${selectedTier.price}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-400">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => onSelectPayment('cashapp')}
            className="w-full flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <DollarSign className="text-green-500" size={24} />
              <span className="font-medium text-gray-100">Cash App</span>
            </div>
            <span className="text-gray-400">${selectedTier.price}</span>
          </button>

          <button
            onClick={() => onSelectPayment('paypal')}
            className="w-full flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-blue-500" size={24} />
              <span className="font-medium text-gray-100">PayPal</span>
            </div>
            <span className="text-gray-400">${selectedTier.price}</span>
          </button>

          <button
            onClick={() => onSelectPayment('bitcoin')}
            className="w-full flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Bitcoin className="text-orange-500" size={24} />
              <span className="font-medium text-gray-100">Bitcoin</span>
            </div>
            <span className="text-gray-400">${selectedTier.price}</span>
          </button>

          <button
            onClick={() => onSelectPayment('litecoin')}
            className="w-full flex items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Coins className="text-gray-400" size={24} />
              <span className="font-medium text-gray-100">Litecoin</span>
            </div>
            <span className="text-gray-400">${selectedTier.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}