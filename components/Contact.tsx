import React from 'react';
import { MapPin, Phone, Mail, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

import { useTranslation } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-32 bg-rom-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-10">
          <ScrollReveal className="max-w-xl">
            <h2 className="font-serif text-5xl font-bold mb-4 text-rom-black tracking-tight">{t.contact.title}</h2>
            <p className="text-gray-500 text-lg">Auf dem Halmburger 16, 35043 Marburg.</p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="bg-white/60 backdrop-blur-md p-6 rounded-[32px] shadow-floating flex items-center gap-6 border border-rom-black/5">
            <div className="w-14 h-14 bg-rom-accent/10 rounded-2xl flex items-center justify-center border border-rom-accent/20">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-6 h-6 opacity-80" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="font-black text-2xl tracking-tighter text-rom-black">4.9</span>
                <div className="flex text-rom-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">42 {t.contact.reviews}</p>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            {[
              { icon: <MapPin size={22} />, title: t.contact.address, detail: "Auf dem Halmburger 16\n35043 Marburg", href: null },
              { icon: <Mail size={22} />, title: t.contact.email, detail: "service@romconstruction.de", href: "mailto:service@romconstruction.de" },
              { icon: <Phone size={22} />, title: t.contact.phone, detail: "+49 6421 3508081", href: "tel:+4964213508081" }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100} className="bg-white/60 backdrop-blur-md p-8 rounded-[32px] shadow-elevated border border-rom-black/5 group hover:shadow-floating transition-all duration-500 hover:-translate-y-1">
                <div className="w-12 h-12 bg-rom-accent/10 rounded-xl flex items-center justify-center mb-6 text-rom-accent border border-rom-accent/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2 text-rom-black">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-gray-600 hover:text-rom-accent transition-colors block text-sm leading-relaxed whitespace-pre-line font-medium px-1 -mx-1 rounded">
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{item.detail}</p>
                )}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400} className="lg:col-span-2 relative group">
            <div className="h-full min-h-[500px] bg-white rounded-[40px] overflow-hidden shadow-floating border-[8px] border-white relative">
              <iframe
                title="Map"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://maps.google.com/maps?q=Auf%20dem%20Halmburger%2016%2C%2035043%20Marburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="filter contrast-100 opacity-90 hover:opacity-100 transition-all duration-1000"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </div >
    </section >
  );
};

export default Contact;