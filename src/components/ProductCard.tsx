import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Product, PricingTier } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product, tier: PricingTier) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-all">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover opacity-80"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{product.name}</h3>
        <p className="text-gray-400 mb-4">{product.description}</p>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between text-gray-300 hover:text-white transition-colors"
        >
          <span>View Pricing</span>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {isExpanded && (
          <div className="mt-4 space-y-3">
            {product.pricing.map((tier) => (
              <button
                key={tier.period}
                onClick={() => onSelectProduct(product, tier)}
                className="w-full py-2 px-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-gray-100 flex items-center justify-between transition-colors"
              >
                <span className="capitalize">{tier.period}</span>
                <span>${tier.price}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}