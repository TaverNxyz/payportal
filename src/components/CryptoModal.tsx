import React from 'react';
import { X } from 'lucide-react';
import QRCode from 'qrcode.react';

interface CryptoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  cryptoAddress: string;
}

export function CryptoModal({ isOpen, onClose, title, cryptoAddress }: CryptoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-xl border border-purple-500/20 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-orbitron text-white">{title} Payment</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="text-center">
          <QRCode 
            value={cryptoAddress}
            size={256}
            level="H"
            className="mx-auto mb-4"
          />
          <p className="text-gray-300 break-all text-sm mb-4">{cryptoAddress}</p>
          <p className="text-gray-400 text-sm">Scan the QR code or copy the address above to make your payment</p>
        </div>
      </div>
    </div>
  );
}