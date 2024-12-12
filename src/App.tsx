import React, { useEffect, useState } from 'react';
import { PaymentCard } from './components/PaymentCard';
import { VideoUpload } from './components/VideoUpload';
import { PAYMENT_METHODS } from './config/payments';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen animate-gradient text-white">
      <div 
        className="cursor-spotlight" 
        style={{ left: mousePos.x, top: mousePos.y }} 
      />
      
      <header className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="logo-text text-2xl font-bold">
            PlentifulPower.xyz
          </h1>
        </div>
      </header>

      <main className="pb-16">
        <section className="container mx-auto px-6 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-orbitron mb-4 bg-gradient-to-r 
                         from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Choose Your Payment Method
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Secure, fast, and flexible payment options for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PAYMENT_METHODS.map((method, index) => (
              <PaymentCard key={index} {...method} />
            ))}
          </div>
        </section>

        <VideoUpload />
      </main>
    </div>
  );
}