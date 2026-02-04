import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle } from 'lucide-react';

const Appointment: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: 'Neubau'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-rom-black text-white relative overflow-hidden">
      {/* Abstract Background for Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full -mr-64 -mt-64 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full -ml-80 -mb-80 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          <div className="lg:w-1/2 pt-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Legen wir den <br />
              <span className="text-gray-400">Grundstein.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed border-l border-white/20 pl-6">
              Egal ob Einfamilienhaus oder Gewerbeobjekt – wir beraten Sie kompetent und unverbindlich zu Ihrem Bauvorhaben.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-[1px] bg-gray-600 group-hover:bg-white transition-colors"></div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide uppercase">Detaillierte Kostenplanung</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-[1px] bg-gray-600 group-hover:bg-white transition-colors"></div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide uppercase">Materialberatung vor Ort</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-[1px] bg-gray-600 group-hover:bg-white transition-colors"></div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors tracking-wide uppercase">Netzwerk aus Fachplanern</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative">
               <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <CheckCircle className="w-16 h-16 text-white mb-6" />
                  <h3 className="text-2xl font-serif font-bold mb-2">Anfrage erhalten!</h3>
                  <p className="text-gray-400">Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm underline text-gray-400 hover:text-white"
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        id="name"
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all shadow-inner"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Telefon</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all shadow-inner"
                        placeholder="Für Rückfragen"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all shadow-inner"
                      placeholder="email@beispiel.de"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Bauvorhaben</label>
                    <div className="relative">
                      <select
                        name="serviceType"
                        id="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] appearance-none [&>option]:bg-[#111] cursor-pointer shadow-inner"
                      >
                        <option value="Neubau">Neubau</option>
                        <option value="Sanierung">Sanierung</option>
                        <option value="Projektleitung">Projektleitung</option>
                        <option value="Sonstiges">Sonstiges</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Details</label>
                    <textarea 
                      name="message" 
                      id="message"
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.05] transition-all resize-none shadow-inner"
                      placeholder="Beschreiben Sie kurz Ihr Projekt..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>Unverbindlich anfragen</span>
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;