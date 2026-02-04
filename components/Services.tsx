import React from 'react';
import { ServiceItem } from '../types';
import { Building2, Home, PenTool, Layout } from 'lucide-react';

const Services: React.FC = () => {
  const services: (ServiceItem & { icon: React.ReactNode })[] = [
    {
      title: "Hochbau",
      description: "Präzise Umsetzung von Wohn- und Gewerbeimmobilien mit höchstem Anspruch an Material und Statik.",
      icon: <Building2 className="w-8 h-8 text-black" />
    },
    {
      title: "Sanierung",
      description: "Fachgerechte Modernisierung und energetische Optimierung von Bestandsimmobilien und Baudenkmälern.",
      icon: <Home className="w-8 h-8 text-black" />
    },
    {
      title: "Schlüsselfertiges Bauen",
      description: "Von der Planung bis zur Übergabe. Wir koordinieren alle Gewerke für ein stressfreies Bauerlebnis.",
      icon: <Layout className="w-8 h-8 text-black" />
    },
    {
      title: "Projektmanagement",
      description: "Professionelle Bauleitung, Kostenkontrolle und Terminplanung für Großprojekte und Privathäuser.",
      icon: <PenTool className="w-8 h-8 text-black" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-rom-gray-light border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-rom-black">Unsere Leistungen</h2>
          <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Fundierte Expertise in allen Phasen des Bauens. Wir schaffen bleibende Werte durch handwerkliche Exzellenz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl p-10 transition-all duration-500 hover:-translate-y-4 shadow-3d-heavy hover:shadow-3d-floating border border-gray-100 relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-gray-100 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-rom-black">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;