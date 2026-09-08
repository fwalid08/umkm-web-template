import React from 'react';
import { BusinessConfig } from '../types/business';
import { CheckCircle2, Award } from 'lucide-react';
import { ScrollReveal } from './common/ScrollReveal';

interface AboutProps {
  business: BusinessConfig;
}

export const About: React.FC<AboutProps> = ({ business }) => {
  return (
    <section id="tentang" className="py-16 sm:py-20 bg-white scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Image & Experience Badge */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <ScrollReveal direction="up" delay={0.1}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] border-4 border-slate-50 bg-slate-100">
                <img
                  src={business.aboutImageUrl}
                  alt={`Tentang ${business.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Float Experience Card */}
              <div 
                className="absolute -bottom-6 -right-4 sm:right-6 text-white p-5 rounded-2xl shadow-xl max-w-xs"
                style={{ backgroundColor: business.theme.secondaryColor }}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 font-extrabold text-xl"
                    style={{ backgroundColor: business.theme.primaryColor }}
                  >
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xl font-black text-white">{business.aboutText.experienceYears}+ Tahun</p>
                    <p className="text-xs text-slate-300">Dedikasi Pengalaman di {business.contact.city}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            <ScrollReveal direction="up" delay={0.15}>
              <div className="space-y-2">
                <span 
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                  style={{ color: business.theme.primaryColor }}
                >
                  Tentang Kami
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Membangun Kepercayaan Lewat Kejujuran & Keahlian Profesional
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25}>
              <p className="text-base text-slate-600 leading-relaxed">
                {business.aboutText.p1}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base text-slate-600 leading-relaxed">
                {business.aboutText.p2}
              </p>
            </ScrollReveal>

            {/* Highlights Grid */}
            <ScrollReveal direction="up" delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {business.aboutText.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 
                      className="w-5 h-5 shrink-0 mt-0.5" 
                      style={{ color: business.theme.primaryColor }}
                    />
                    <span className="text-sm font-semibold text-slate-800">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Trust Quote */}
            <ScrollReveal direction="up" delay={0.4}>
              <div className="p-4 rounded-xl border-l-4 bg-amber-50 border-amber-500 text-amber-900 text-sm italic">
                "Kami selalu mengedepankan transparansi penjelasan dan persetujuan pelanggan sebelum tindakan pengerjaan."
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
