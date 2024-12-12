import React from 'react';
import { ExternalLink } from 'lucide-react';
import { CryptoModal } from './CryptoModal';
import { useState } from 'react';

interface PaymentCardProps {
  title: string;
  description: string;
  cryptoAddress?: string;
  stripeUrl?: string;
}

export function PaymentCard({ title, description, cryptoAddress, stripeUrl }: PaymentCardProps) {
  const [showCryptoModal, setShowCryptoModal] = useState(false);

  const handleClick = () => {
    if (cryptoAddress) {
      setShowCryptoModal(true);
    } else if (stripeUrl) {
      window.open(stripeUrl, '_blank');
    }
  };

  return (
    <>
      <div className="payment-card group cursor-pointer" onClick={handleClick}>
        <div className="spotlight" />
        <div className="relative z-10">
          <h3 className="text-xl font-orbitron text-white mb-2">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
          <button className="mt-2 px-6 py-2 bg-purple-600 text-white rounded-lg
                         hover:bg-purple-500 transition-colors duration-300
                         font-orbitron text-sm hover-trigger flex items-center gap-2">
            {stripeUrl ? (
              <>
                Pay with Card <ExternalLink size={16} />
              </>
            ) : (
              'Pay with Crypto'
            )}
          </button>
        </div>
      </div>

      {cryptoAddress && (
        <CryptoModal 
          isOpen={showCryptoModal}
          onClose={() => setShowCryptoModal(false)}
          title={title}
          cryptoAddress={cryptoAddress}
        />
      )}
    </>
  );
}