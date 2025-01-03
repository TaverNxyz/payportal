import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'exodus-apex',
    name: 'Exodus Apex',
    pricing: [
      { period: 'day', price: 7 },
      { period: 'week', price: 35 },
      { period: 'month', price: 70 }
    ],
    description: 'Advanced Apex Legends enhancement suite',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'exodus-hwid',
    name: 'Exodus HWID',
    pricing: [
      { period: 'day', price: 4 },
      { period: 'week', price: 25 },
      { period: 'month', price: 55 }
    ],
    description: 'Hardware ID spoofer and protection',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'udp-eft',
    name: 'UDP EFT External',
    pricing: [
      { period: 'day', price: 7 },
      { period: 'week', price: 40 },
      { period: 'month', price: 80 }
    ],
    description: 'External enhancement suite for Escape from Tarkov',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80'
  }
];