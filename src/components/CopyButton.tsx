import React from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  text: string;
  type: string;
  copied: string | null;
  setCopied: (type: string | null) => void;
}

export function CopyButton({ text, type, copied, setCopied }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
    >
      {copied === type ? (
        <Check className="w-5 h-5 text-green-400" />
      ) : (
        <Copy className="w-5 h-5 text-white/70" />
      )}
    </button>
  );
}