import React, { useState } from 'react';
import { ExternalLink, RefreshCw } from 'lucide-react';
import { BlockchainTransaction } from '../types/payment';
import { getExplorerUrl, formatTransactionStatus } from '../utils/blockchain';

interface TransactionTrackerProps {
  onClose: () => void;
}

export const TransactionTracker: React.FC<TransactionTrackerProps> = ({ onClose }) => {
  const [txHash, setTxHash] = useState('');
  const [email, setEmail] = useState('');
  const [transaction, setTransaction] = useState<BlockchainTransaction | null>(null);

  const handleTrackTransaction = async () => {
    // Simulated tracking - in production, this would call your backend
    setTransaction({
      txHash,
      method: 'bitcoin',
      amount: 0.001,
      status: 'pending',
      confirmations: 0,
      timestamp: Date.now()
    });
  };

  const handleSendReceipt = async () => {
    // In production, this would call your backend to send the receipt
    alert('Receipt sent to ' + email);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-gray-100">Track Payment</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Transaction Hash
            </label>
            <input
              type="text"
              value={txHash}
              onChange={(e) => setTxHash(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Enter transaction hash..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Email for Receipt
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email..."
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleTrackTransaction}
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={18} />
              Track
            </button>
            <button
              onClick={handleSendReceipt}
              className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              Send Receipt
            </button>
          </div>

          {transaction && (
            <div className="mt-4 p-4 bg-gray-700/50 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300">Status:</span>
                <span className="text-gray-100">{formatTransactionStatus(transaction)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Explorer:</span>
                <a
                  href={getExplorerUrl(transaction)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  View <ExternalLink size={16} />
                </a>
              </div>
            </div>
          )}

          <button
            onClick={onClose}
            className="w-full mt-4 bg-gray-700 text-gray-100 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}