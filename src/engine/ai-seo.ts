export interface LocalSeoInput { businessName: string; industry: string; city?: string; province?: string; }

export function buildLocalSeo(input: LocalSeoInput) {
  const location = [input.city, input.province].filter(Boolean).join(', ');
  const suffix = location ? ` di ${location}` : '';
  return {
    title: `${input.businessName} | ${input.industry}${location ? ` ${location}` : ''}`,
    description: `${input.businessName} menyediakan layanan ${input.industry}${suffix}. Hubungi kami untuk informasi layanan dan pemesanan.`,
    keywords: [input.businessName, input.industry, input.city, input.province, 'UMKM'].filter((v): v is string => Boolean(v)),
  };
}
