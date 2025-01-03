export interface PricingTier {
  period: 'day' | 'week' | 'month';
  price: number;
}

export interface Product {
  id: string;
  name: string;
  pricing: PricingTier[];
  description: string;
  image: string;
}