import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Star, ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Rom Construction Int GmbH Marburg');
const MAP_EMBED_URL = 'https://maps.google.com/maps?q=Auf%20dem%20Halmburger%2016%2C%2035043%20Marburg&t=&z=15&ie=UTF8&iwloc=&output=embed';

import { useTranslation } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="location" className="py-32 bg-rom-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16 gap-10">
          <ScrollReveal className="max-w-xl">
            <h2 className="font-serif text-5xl font-bold mb-4 text-rom-black tracking-tight">{t.contact.title}</h2>
            <p className="text-gray-600 text-lg">Auf dem Halmburger 16, 35043 Marburg.</p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/60 backdrop-blur-md p-6 rounded-[32px] shadow-floating flex items-center gap-6 border border-rom-black/5 group"
            >
              <div className="w-14 h-14 bg-rom-accent/10 rounded-2xl flex items-center justify-center border border-rom-accent/20 text-rom-accent">
                <Star size={22} fill="currentColor" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="font-black text-2xl tracking-tighter text-rom-black group-hover:text-rom-accent transition-colors">{t.contact.reviews}</span>
                  <ArrowUpRight size={16} className="text-rom-accent" />
                </div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{t.contact.reviewsLink}</p>
              </div>
            </a>
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
              {mapLoaded ? (
                <iframe
                  title={t.contact.map.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src={MAP_EMBED_URL}
                  className="absolute inset-0 w-full h-full filter contrast-100 opacity-90 hover:opacity-100 transition-all duration-1000"
                ></iframe>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                  <div className="w-16 h-16 bg-rom-accent/10 rounded-2xl flex items-center justify-center mb-6 text-rom-accent border border-rom-accent/20">
                    <MapPin size={28} />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-8">{t.contact.map.notice}</p>
                  <button
                    type="button"
                    onClick={() => setMapLoaded(true)}
                    className="bg-rom-black text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-rom-accent hover:text-rom-black transition-all duration-300 shadow-elevated hover:shadow-floating hover:-translate-y-1"
                  >
                    {t.contact.map.load}
                  </button>
                  <Link to="/datenschutz" className="mt-6 text-xs text-gray-600 underline underline-offset-4 hover:text-rom-accent transition-colors">
                    {t.contact.map.privacy}
                  </Link>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;