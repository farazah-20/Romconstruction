import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-rom-white border-t border-rom-black/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="block text-center md:text-left cursor-pointer">
            <h4 className="font-serif font-bold text-xl mb-1 uppercase tracking-tighter text-rom-black">ROMCONSTRUCTION</h4>
            <p className="text-xs text-gray-500 tracking-widest">BUILDING EXCELLENCE</p>
          </Link>

          <div className="flex gap-6 text-sm text-gray-600 font-bold uppercase tracking-widest">
            <Link to="/impressum" className="normal-case hover:text-rom-black transition-colors">{t.nav.legal.impressum}</Link>
            <Link to="/datenschutz" className="normal-case hover:text-rom-black transition-colors">{t.nav.legal.privacy}</Link>
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