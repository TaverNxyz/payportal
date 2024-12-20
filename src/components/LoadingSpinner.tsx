import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
      <div className="animate-spin text-white">
        <Loader2 size={48} />
      </div>
    </div>
  );
}