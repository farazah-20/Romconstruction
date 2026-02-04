import React from 'react';
import { MapPin, Phone, Mail, Star } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="location" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-rom-black">Hier finden Sie uns</h2>
            <p className="text-gray-400 text-lg">Auf dem Halmburger 16, Marburg</p>
          </div>
          
          {/* Mock Google Reviews Badge - Heavily elevated */}
          <div className="bg-white p-6 rounded-3xl shadow-3d-heavy flex items-center gap-6 border border-gray-50 hover:scale-105 transition-transform duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-10 h-10 grayscale opacity-60" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-2xl">4.9</span>
                <div className="flex text-black">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">42 Google Rezensionen</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Cards with deep shadow */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-10 rounded-3xl shadow-3d-soft border border-gray-100 hover:shadow-3d-heavy transition-all duration-500 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                <MapPin size={28} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Zentrale Marburg</h3>
              <p className="text-gray-500 leading-relaxed">
                Auf dem Halmburger 16<br/>
                D-35043 MARBURG
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-3d-soft border border-gray-100 hover:shadow-3d-heavy transition-all duration-500 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Projektanfragen</h3>
              <p className="text-gray-500">
                <a href="mailto:service@romconstruction.de" className="hover:text-black transition-colors">service@romconstruction.de</a>
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-3d-soft border border-gray-100 hover:shadow-3d-heavy transition-all duration-500 group">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-black border border-gray-100 shadow-inner group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2">Telefon</h3>
              <p className="text-gray-500">
                <a href="tel:+4964213508081" className="hover:text-black transition-colors font-bold text-lg">+49 6421 3508081</a>
              </p>
            </div>
          </div>

          {/* Map Integration with 3D Frame */}
          <div className="lg:col-span-2 h-[600px] bg-white rounded-[2rem] overflow-hidden shadow-3d-floating border-8 border-white relative">
            <iframe 
              title="Romconstruction Location"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              marginHeight={0} 
              marginWidth={0} 
              src="https://maps.google.com/maps?q=Auf%20dem%20Halmburger%2016%2C%2035043%20Marburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="filter grayscale contrast-125 opacity-80 hover:opacity-100 transition-all duration-1000"
            ></iframe>
            
            <div className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-3d-heavy max-w-xs hidden md:block border border-white">
               <p className="font-serif font-bold text-lg mb-4 border-b border-gray-100 pb-2 uppercase tracking-tighter">Bürozeiten</p>
               <ul className="text-sm text-gray-500 space-y-3">
                 <li className="flex justify-between font-medium"><span>Mo - Fr</span> <span className="text-black">08:00 - 18:00</span></li>
                 <li className="flex justify-between opacity-50"><span>Sa</span> <span>Nach Vereinbarung</span></li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;