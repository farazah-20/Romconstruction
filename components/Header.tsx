import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../translations';

const Header: React.FC = () => {
  const { lang, setLang, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages: Language[] = ['DE', 'EN'];

  const navLinks = [
    { name: t.nav.about, hash: '#about' },
    { name: t.nav.services, hash: '#services' },
    { name: t.nav.location, hash: '#location' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-elevated py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-serif font-black text-2xl tracking-tighter text-rom-black uppercase">
          ROM<span className="text-rom-accent italic font-light">CONSTRUCTION</span>
        </Link>

        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-rom-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              aria-label={t.nav.menu.language}
              aria-expanded={langOpen}
              className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-rom-black/5 hover:shadow-floating transition-all duration-300 group"
            >
              <Globe size={14} className="text-gray-500 group-hover:text-rom-accent transition-colors" />
              <span className="text-[11px] font-bold text-rom-black">{lang}</span>
              <ChevronDown size={12} className={`text-gray-500 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-3 w-40 bg-white rounded-2xl shadow-floating border border-rom-black/5 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="grid grid-cols-1">
                  {languages.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className={`px-5 py-2 text-left text-[11px] font-bold transition-colors ${lang === l ? 'bg-rom-accent/10 text-rom-accent' : 'text-gray-500 hover:bg-gray-50 hover:text-rom-black'}`}
                    >
                      {l === 'DE' && 'Deutsch'}
                      {l === 'EN' && 'English'}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to={{ pathname: '/', hash: '#contact' }}
            className="bg-rom-accent text-white px-8 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-deep hover:shadow-floating hover:-translate-y-1"
          >
            {t.nav.project}
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-rom-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? t.nav.menu.close : t.nav.menu.open}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden absolute top-full left-0 w-full bg-rom-white border-b border-rom-ghost shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.hash}
              to={{ pathname: '/', hash: link.hash }}
              className="text-sm font-bold uppercase tracking-widest text-rom-black hover:text-rom-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Language Switcher (mobil) */}
          <div className="flex items-center gap-2" role="group" aria-label={t.nav.menu.language}>
            <Globe size={14} className="text-gray-500" />
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                aria-pressed={lang === l}
                className={`px-4 py-2 rounded-xl text-[11px] font-bold transition-colors ${lang === l ? 'bg-rom-accent/10 text-rom-accent' : 'text-gray-500 hover:bg-gray-50 hover:text-rom-black'}`}
              >
                {l === 'DE' && 'Deutsch'}
                {l === 'EN' && 'English'}
              </button>
            ))}
          </div>

          <Link
            to={{ pathname: '/', hash: '#contact' }}
            onClick={() => setMobileMenuOpen(false)}
            className="bg-rom-accent text-rom-black px-5 py-4 rounded-xl text-center font-bold uppercase tracking-widest text-sm shadow-md"
          >
            {t.nav.project}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;