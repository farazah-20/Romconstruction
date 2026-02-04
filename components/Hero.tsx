import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-white to-rom-gray-light contour-bg">
      {/* 3D Decorative Elements (Subtle Grayscale) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm">
            <h2 className="text-xs font-bold tracking-widest text-gray-500 uppercase">Romconstruction | Marburg</h2>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-rom-black mb-8 drop-shadow-sm">
            Präzision am Bau. <br />
            <span className="italic font-light text-gray-600 text-4xl md:text-6xl">Visionäre Architektur.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Wir bauen heute für die Generationen von morgen. 
            Meisterhafte Ausführung und verlässliche Projektplanung für Ihr Bauvorhaben.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact" 
              className="group bg-rom-black text-white text-lg px-8 py-4 rounded-full inline-flex items-center hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Projekt anfragen
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+4964213508081" 
              className="bg-white text-gray-800 font-medium px-8 py-4 rounded-full hover:bg-gray-50 transition-all border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1"
            >
              Beratungstermin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;