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
    <section id="services" className="py-24 bg-rom-gray-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4 text-rom-black">Unsere Leistungen</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Fundierte Expertise in allen Phasen des Bauens. Wir schaffen bleibende Werte durch handwerkliche Exzellenz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 shadow-3d hover:shadow-3d-hover border border-gray-100"
            >
              <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-gray-100">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 text-rom-black">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;