import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useTranslation } from '../contexts/LanguageContext';

const Appointment: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-rom-white relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold mb-6 text-rom-black">{t.appointment.title}</h2>
            <p className="text-gray-500 text-lg">{t.appointment.subtitle}</p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="bg-white/60 backdrop-blur-md rounded-[40px] p-10 md:p-14 shadow-floating border border-rom-black/5 relative overflow-hidden">
            {isSubmitted ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80 backdrop-blur-md animate-in fade-in zoom-in duration-500">
                <div className="text-center p-10">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-rom-black mb-2">Vielen Dank!</h3>
                  <p className="text-gray-600">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-rom-black ml-4">{t.appointment.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white border border-rom-black/5 rounded-2xl px-6 py-4 outline-none focus:border-rom-accent focus:ring-1 focus:ring-rom-accent transition-all text-rom-black placeholder-gray-400"
                    placeholder="Max Mustermann"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-rom-black ml-4">{t.appointment.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white border border-rom-black/5 rounded-2xl px-6 py-4 outline-none focus:border-rom-accent focus:ring-1 focus:ring-rom-accent transition-all text-rom-black placeholder-gray-400"
                    placeholder="max@beispiel.de"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold uppercase tracking-widest text-rom-black ml-4">{t.appointment.form.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-white border border-rom-black/5 rounded-2xl px-6 py-4 outline-none focus:border-rom-accent focus:ring-1 focus:ring-rom-accent transition-all text-rom-black placeholder-gray-400"
                  placeholder="+49 123 456789"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-rom-black ml-4">{t.appointment.form.message}</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-white border border-rom-black/5 rounded-2xl px-6 py-4 outline-none focus:border-rom-accent focus:ring-1 focus:ring-rom-accent transition-all text-rom-black placeholder-gray-400 resize-none"
                  placeholder="Wie können wir Ihnen helfen?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="group bg-rom-black text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-rom-accent hover:text-rom-black transition-all duration-300 shadow-elevated hover:shadow-floating hover:-translate-y-1 flex items-center gap-3"
                >
                  {t.appointment.form.send}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Appointment;