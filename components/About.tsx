import React from 'react';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 bg-rom-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-24 items-center">

          {/* 3D Image Composition */}
          <ScrollReveal className="w-full lg:w-1/2 relative">
            <div className="relative z-20 rounded-[40px] overflow-hidden shadow-floating border-[12px] border-white">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Construction Architecture"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Background elements for depth */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-rom-accent/5 rounded-[60px] z-10 shadow-elevated border border-rom-black/5"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 border-[2px] border-rom-black/5 rounded-[40px] z-0"></div>

            {/* Floating Info Tag */}
            <div className="absolute bottom-12 right-0 translate-x-1/2 z-30 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-floating border border-white/20">
              <span className="block text-4xl font-serif font-black mb-1 text-rom-accent">20+</span>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{t.about.experience}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="w-full lg:w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-rom-accent/10 border border-rom-accent/20 text-[10px] font-bold uppercase tracking-widest text-rom-accent mb-8">
              {t.about.company}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-10 leading-[1.1] text-rom-black">
              {t.about.title} <br />
              <span className="italic text-gray-400 font-light">{t.about.subtitle}</span>
            </h2>
            <div className="space-y-8 text-gray-600 text-xl leading-relaxed font-light">
              <p className="relative pl-6 border-l-2 border-rom-accent">
                {t.about.text1}
              </p>
              <p>
                {t.about.text2}
              </p>
            </div>

            <div className="mt-14 pt-10 border-t border-rom-black/10 flex gap-12">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-rom-black mb-2">100%</h4>
                <p className="text-sm text-gray-500">{t.about.stats.onTime}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-rom-black mb-2">Exzellent</h4>
                <p className="text-sm text-gray-500">{t.about.stats.material}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;