import React from 'react';

interface FooterProps {
  onNavigate: (view: string) => void;
}

import { useTranslation } from '../contexts/LanguageContext';

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  return (
    <footer className="bg-rom-white border-t border-rom-black/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left cursor-pointer" onClick={() => onNavigate('home')}>
            <h4 className="font-serif font-bold text-xl mb-1 uppercase tracking-tighter text-rom-black">ROMCONSTRUCTION</h4>
            <p className="text-xs text-gray-500 tracking-widest">BUILDING EXCELLENCE</p>
          </div>

          <div className="flex gap-6 text-sm text-gray-600 font-bold uppercase tracking-widest">
            <button onClick={() => onNavigate('impressum')} className="hover:text-rom-black transition-colors">{t.nav.legal.impressum}</button>
            <button onClick={() => onNavigate('datenschutz')} className="hover:text-rom-black transition-colors">{t.nav.legal.privacy}</button>
            <button onClick={() => onNavigate('agb')} className="hover:text-rom-black transition-colors">{t.nav.legal.terms}</button>
          </div>

          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Romconstruction. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;