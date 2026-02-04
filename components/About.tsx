import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Visual Side */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800&grayscale=true" 
                alt="Construction Site Grayscale" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* 3D Decoration Layers */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-200 bg-gray-50 rounded-xl z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-gray-100 rounded-full mix-blend-multiply blur-3xl opacity-50"></div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <span className="block border border-gray-200 bg-gray-50 text-gray-800 w-fit px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
              Das Unternehmen
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight text-rom-black">
              Bauen mit Verstand. <br/>
              <span className="text-gray-400 italic font-normal">Wohnen mit Gefühl.</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed border-l-2 border-gray-100 pl-6">
              <p>
                Romconstruction steht für Qualität, Termintreue und Transparenz im Bauwesen. Als modernes 
                <strong className="text-black font-semibold"> Bauunternehmen</strong> begleiten wir private und gewerbliche Bauherren 
                in Marburg und Hessen bei der Realisierung ihrer Träume.
              </p>
              <p>
                Unsere Philosophie vereint traditionelles Handwerk mit innovativen Bautechnologien. 
                Wir schaffen Räume, die nicht nur funktional überzeugen, sondern durch Ästhetik und Langlebigkeit bestechen.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-8">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-serif text-3xl font-bold mb-1 text-black">20+</h4>
                <p className="text-sm text-gray-500">Erfolgreiche Projekte</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="font-serif text-3xl font-bold mb-1 text-black">100%</h4>
                <p className="text-sm text-gray-500">Termintreue</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;