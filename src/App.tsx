import React, { useState } from 'react';
import { ProductCard } from './components/ProductCard';
import { PaymentModal } from './components/PaymentModal';
import { PaymentInstructions } from './components/PaymentInstructions';
import { products } from './data/products';
import { Product, PricingTier } from './types/product';
import { PaymentMethod } from './types/payment';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedTier, setSelectedTier] = useState<PricingTier | null>(null);
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod | null>(null);

  const handleProductSelect = (product: Product, tier: PricingTier) => {
    setSelectedProduct(product);
    setSelectedTier(tier);
  };

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
    setShowPaymentInstructions(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setSelectedTier(null);
    setSelectedPaymentMethod(null);
    setShowPaymentInstructions(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">Products</h1>
        <p className="text-gray-400 text-center mb-8">Select a product and subscription period to get started</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={handleProductSelect}
            />
          ))}
        </div>

        {selectedProduct && selectedTier && !showPaymentInstructions && (
          <PaymentModal
            product={selectedProduct}
            selectedTier={selectedTier}
            onClose={handleClose}
            onSelectPayment={handlePaymentMethodSelect}
          />
        )}

        {showPaymentInstructions && selectedPaymentMethod && selectedTier && (
          <PaymentInstructions
            method={selectedPaymentMethod}
            amount={selectedTier.price}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}

export default App;