import { FontOption, FontOptionId } from '../types/business';

/**
 * Modern, Mobile-Friendly Font Options
 * Hand-picked for maximum readability, clean aesthetics, and native-app feel on mobile devices.
 */
export const fontOptions: FontOption[] = [
  {
    id: 'plus-jakarta',
    name: 'Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'Modern Geometric & Humanist',
    description: 'Standar font produk digital modern Indonesia. Sangat bersih, proporsional, dan nyaman dibaca di layar HP.',
  },
  {
    id: 'outfit',
    name: 'Outfit',
    family: "'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'Modern Premium & Lifestyle',
    description: 'Font geometris elegan dengan karakter kontemporer. Cocok untuk barbershop, cafe, resto, dan lifestyle brand.',
  },
  {
    id: 'dm-sans',
    name: 'DM Sans',
    family: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'Clean Minimalist & Tech',
    description: 'Desain kontras rendah dengan keterbacaan tinggi pada ukuran teks kecil di smartphone.',
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'Friendly Geometric',
    description: 'Font ramah dan hangat yang sangat populer untuk bisnis UMKM, kuliner, dan jasa keluarga.',
  },
  {
    id: 'inter',
    name: 'Inter',
    family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'Universal Precision UI',
    description: 'Font netral dengan x-height tinggi, standar emas keterbacaan antarmuka layar ponsel dan desktop.',
  },
];

export const getFontById = (id?: FontOptionId): FontOption => {
  const match = fontOptions.find((f) => f.id === id);
  return match || fontOptions[0]; // Default to Plus Jakarta Sans
};
