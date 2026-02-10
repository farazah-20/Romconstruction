import React from 'react';
import { Building2, Home, PenTool, Layout } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

import { useTranslation } from '../contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t.services.items.hochbau.title,
      description: t.services.items.hochbau.desc,
      icon: <Building2 className="w-8 h-8" />
    },
    {
      title: t.services.items.sanierung.title,
      description: t.services.items.sanierung.desc,
      icon: <Home className="w-8 h-8" />
    },
    {
      title: t.services.items.bau.title,
      description: t.services.items.bau.desc,
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: t.services.items.management.title,
      description: t.services.items.management.desc,
      icon: <PenTool className="w-8 h-8" />
    }
  ];

  return (
    <section id="services" className="py-32 bg-rom-white relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <ScrollReveal className="max-w-xl">
            <h2 className="font-serif text-5xl font-bold mb-6 text-rom-black leading-tight">{t.services.title}</h2>
            <p className="text-gray-500 text-lg">{t.services.desc}</p>
          </ScrollReveal>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <ScrollReveal
              key={index}
              delay={index * 100}
              className="group relative bg-white/5 backdrop-blur-sm rounded-[32px] p-10 transition-all duration-500 hover:-translate-y-4 shadow-elevated hover:shadow-floating border border-white/10"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-inner-3d border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <div className="text-white opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.icon}
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-rom-black">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;