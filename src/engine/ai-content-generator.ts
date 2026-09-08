import { getContentStrategy } from './ai-content-strategy';
import type { AiContentRequest, GeneratedBusinessContent } from './ai-content';

/**
 * Provider-neutral generator contract. Phase 3 can plug Gemini/OpenAI/etc. in here
 * without coupling the website renderer to a model SDK.
 */
export interface AiContentGenerator { generate(request: AiContentRequest): Promise<GeneratedBusinessContent>; }

export function createPrompt(request: AiContentRequest): string {
  const strategy = getContentStrategy(request.industryPresetId);
  return [
    'Generate structured website content for an Indonesian UMKM.',
    `Business: ${request.businessName}`,
    `Industry: ${request.industry}`,
    `Tone: ${request.tone || strategy.tone}`,
    `Language: ${request.language || 'id'}`,
    `Services: ${request.serviceCount || strategy.serviceCount}`,
    `FAQs: ${request.faqCount || strategy.faqCount}`,
    `Include pricing: ${request.includePricing ?? strategy.includePricing}`,
    'Return JSON only and follow the GeneratedBusinessContent schema exactly.',
  ].join('\n');
}

/** Safe fallback used before an external AI provider is configured. */
export const fallbackContentGenerator: AiContentGenerator = {
  async generate(request) {
    const strategy = getContentStrategy(request.industryPresetId);
    return {
      tagline: `${request.businessName} — layanan terpercaya untuk kebutuhan Anda`,
      heroHeadline: `${request.businessName}, solusi terpercaya untuk ${request.industry}`,
      heroDescription: `Layanan ${request.industry} yang profesional, mudah dihubungi, dan berorientasi pada kepuasan pelanggan.`,
      primaryCtaText: strategy.ctaGoal === 'booking' ? 'Booking Sekarang' : strategy.ctaGoal === 'consultation' ? 'Konsultasi Sekarang' : strategy.ctaGoal === 'purchase' ? 'Belanja Sekarang' : 'Kunjungi Kami',
      secondaryCtaText: 'Lihat Layanan',
      about: { p1: `${request.businessName} hadir untuk membantu pelanggan mendapatkan layanan ${request.industry} yang praktis dan terpercaya.`, p2: 'Kami mengutamakan kualitas layanan, komunikasi yang jelas, dan pengalaman pelanggan yang nyaman.', highlights: ['Pelayanan profesional', 'Respons cepat', 'Berorientasi pada pelanggan'] },
      services: Array.from({ length: strategy.serviceCount }, (_, i) => ({ name: `Layanan ${i + 1}`, description: `Layanan ${request.industry} yang disesuaikan dengan kebutuhan pelanggan.` })),
      pricingPackages: strategy.includePricing ? [{ name: 'Paket Utama', tagline: 'Pilihan praktis untuk kebutuhan utama', price: 0, features: ['Konsultasi', 'Pengerjaan profesional'] }] : [],
      whyChooseUs: [{ title: 'Terpercaya', description: 'Mengutamakan kualitas dan kepuasan pelanggan.' }, { title: 'Profesional', description: 'Proses layanan jelas dan terarah.' }, { title: 'Mudah Dihubungi', description: 'Siap membantu melalui kanal komunikasi yang tersedia.' }],
      testimonials: [],
      process: [{ title: 'Konsultasi', description: 'Sampaikan kebutuhan Anda.' }, { title: 'Pengerjaan', description: 'Tim kami mengerjakan sesuai kebutuhan.' }, { title: 'Selesai', description: 'Hasil diperiksa sebelum diserahkan.' }],
      faqs: Array.from({ length: strategy.faqCount }, (_, i) => ({ question: `Pertanyaan umum ${i + 1}`, answer: `Hubungi ${request.businessName} untuk informasi lengkap mengenai layanan ${request.industry}.` })),
      seo: { title: `${request.businessName} | ${request.industry}`, description: `Informasi layanan ${request.businessName} untuk kebutuhan ${request.industry}.`, keywords: [request.businessName, request.industry, 'UMKM', 'layanan'] },
    };
  },
};
