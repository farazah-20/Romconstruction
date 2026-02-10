import React from 'react';
import { ArrowRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import ScrollReveal from './ScrollReveal';

import { useTranslation } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 overflow-hidden bg-rom-white">
      <ParticlesBackground />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full contour-bg opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full border border-rom-black/5 bg-white/60 backdrop-blur-sm shadow-sm">
              <span className="w-2 h-2 rounded-full bg-rom-accent animate-pulse"></span>
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-gray-600 uppercase">{t.hero.badge}</h2>
            </div>

            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] text-rom-black mb-10 tracking-tighter">
              {t.hero.title} <br />
              <span className="italic font-light text-rom-accent/80">{t.hero.subtitle}</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
              {t.hero.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="#contact"
                className="group relative bg-rom-accent text-white text-lg px-10 py-5 rounded-2xl flex items-center shadow-floating hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <span className="relative z-10 font-bold">{t.hero.cta}</span>
                <ArrowRight className="relative z-10 ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="tel:+4964213508081"
                className="px-10 py-5 rounded-2xl text-rom-black font-semibold border border-gray-200 bg-white shadow-elevated hover:shadow-floating hover:-translate-y-1 transition-all duration-300"
              >
                +49 6421 3508081
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;