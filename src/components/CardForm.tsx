import React, { useState } from 'react';

interface CardFormProps {
  onClose: () => void;
}

export function CardForm({ onClose }: CardFormProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const formatCardNumber = (value: string) => {
    return value.replace(/\s/g, '').match(/.{1,4}/g)?.join(' ') || '';
  };

  const formatExpiry = (value: string) => {
    value = value.replace(/\D/g, '');
    if (value.length >= 2) {
      return value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    return value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here
    console.log('Processing payment...');
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-300 text-sm mb-2">Card Number</label>
        <input
          type="text"
          maxLength={19}
          value={formatCardNumber(cardNumber)}
          onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ''))}
          className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
          placeholder="1234 5678 9012 3456"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Expiry Date</label>
          <input
            type="text"
            maxLength={5}
            value={formatExpiry(expiry)}
            onChange={(e) => setExpiry(e.target.value.replace('/', ''))}
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            placeholder="MM/YY"
          />
        </div>
        <div>
          <label className="block text-gray-300 text-sm mb-2">CVV</label>
          <input
            type="text"
            maxLength={3}
            value={cvv}
            onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
            className="w-full bg-gray-800 rounded-lg px-4 py-2 text-white border border-gray-700 focus:border-purple-500 focus:outline-none"
            placeholder="123"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-600 text-white rounded-lg py-3 font-orbitron
                 hover:bg-purple-500 transition-colors duration-300 mt-6"
      >
        Process Payment
      </button>
    </form>
  );
}