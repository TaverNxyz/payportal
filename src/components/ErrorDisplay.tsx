import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50">
      <div className="text-red-600 text-center">
        <h2 className="text-xl font-bold mb-2">Error</h2>
        <p>{message}</p>
      </div>
    </div>
  );
}