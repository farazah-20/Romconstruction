import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Visual Side with heavy 3D stacking */}
          <div className="w-full lg:w-1/2 relative perspective-1000">
            <div className="relative z-20 rounded-2xl overflow-hidden shadow-3d-floating border-4 border-white transform hover:rotate-y-2 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200&grayscale=true" 
                alt="Construction Site Grayscale" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* 3D Decoration Layers (Floating elements) */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-rom-gray-light rounded-3xl shadow-3d-heavy z-10 hidden md:flex items-center justify-center border border-white">
              <div className="text-center">
                <span className="block font-serif text-5xl font-bold">20+</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 font-bold">Jahre Erfahrung</span>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-gray-50 rounded-full z-0 opacity-50"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-block border-b-2 border-black pb-2 mb-8">
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400">Das Unternehmen</span>
            </div>
            
            <h2 className="font-serif text-5xl md:text-6xl font-black mb-10 leading-tight text-rom-black">
              Bauen mit Verstand. <br/>
              <span className="text-gray-300 italic font-light">Wohnen mit Gefühl.</span>
            </h2>
            
            <div className="space-y-8 text-gray-500 text-xl leading-relaxed">
              <p className="relative">
                <span className="absolute -left-6 top-0 bottom-0 w-1 bg-black"></span>
                Romconstruction steht für <strong className="text-black">Qualität, Termintreue und Transparenz</strong> im Bauwesen. Als modernes Bauunternehmen begleiten wir Sie bei der Realisierung Ihrer Träume.
              </p>
              <p>
                Unsere Philosophie vereint traditionelles Handwerk mit innovativen Bautechnologien. Wir schaffen Räume, die nicht nur funktional überzeugen, sondern durch Ästhetik bestechen.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-3d-heavy hover:shadow-3d-floating transition-all duration-300">
                <h4 className="font-serif text-4xl font-bold mb-2 text-black">100%</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Termintreue</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-3d-heavy hover:shadow-3d-floating transition-all duration-300">
                <h4 className="font-serif text-4xl font-bold mb-2 text-black">Exzellent</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Materialwahl</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;