import React from 'react';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-rom-gray-light relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-4xl font-bold mb-2 text-rom-black">Hier finden Sie uns</h2>
            <p className="text-gray-500">Auf dem Halmburger 16, Marburg</p>
          </div>
          
          {/* Mock Google Reviews Badge */}
          <div className="bg-white p-5 rounded-2xl shadow-3d flex items-center gap-4 border border-gray-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8 grayscale opacity-80" />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-lg">4.9</span>
                <div className="flex text-gray-400">
                  <Star size={16} fill="currentColor" className="text-black" />
                  <Star size={16} fill="currentColor" className="text-black" />
                  <Star size={16} fill="currentColor" className="text-black" />
                  <Star size={16} fill="currentColor" className="text-black" />
                  <Star size={16} fill="currentColor" className="text-black" />
                </div>
              </div>
              <p className="text-xs text-gray-400">Basierend auf 42 Rezensionen</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-4">
             {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black border border-gray-100 shadow-sm">
                <MapPin size={22} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Adresse</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Auf dem Halmburger 16<br/>
                D-35043 MARBURG
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black border border-gray-100 shadow-sm">
                <Mail size={22} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Email & Web</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:service@romtax.de" className="hover:text-black transition-colors">service@romtax.de</a>
              </p>
              <p className="text-gray-400 text-xs mt-2">www.molner.holdings</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-black border border-gray-100 shadow-sm">
                <Phone size={22} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-1">Telefon</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+4964213508081" className="hover:text-black transition-colors">+49 6421 3508081</a>
              </p>
            </div>
          </div>

          {/* Map Integration */}
          <div className="lg:col-span-2 h-[500px] bg-white rounded-3xl overflow-hidden shadow-3d border border-gray-200 relative">
            <iframe 
              title="Rom Tax Int Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Auf%20dem%20Halmburger%2016%2C%2035043%20Marburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-all duration-700"
            ></iframe>
            
            {/* Overlay for aesthetics */}
            <div className="absolute top-6 right-6 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block border border-gray-100">
               <p className="font-serif font-bold text-sm mb-2 border-b border-gray-100 pb-2">Öffnungszeiten</p>
               <ul className="text-xs text-gray-600 space-y-2">
                 <li className="flex justify-between"><span>Mo - Fr</span> <span className="font-medium">09:00 - 17:00</span></li>
                 <li className="flex justify-between"><span className="text-gray-400">Sa - So</span> <span className="text-gray-400">Geschlossen</span></li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;