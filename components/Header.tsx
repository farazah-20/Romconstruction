import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

import { useTranslation } from '../contexts/LanguageContext';
import { Language } from '../translations';

interface HeaderProps {
  onNavigate?: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
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
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.location, href: '#location' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed w-full top-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-elevated py-4' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" onClick={handleLogoClick} className="font-serif font-black text-2xl tracking-tighter text-rom-black uppercase">
          ROM<span className="text-rom-accent italic font-light">CONSTRUCTION</span>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => onNavigate && onNavigate('home')}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-rom-accent transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
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

          <a
            href="#contact"
            onClick={() => onNavigate && onNavigate('home')}
            className="bg-rom-accent text-white px-8 py-3.5 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-opacity-90 transition-all shadow-deep hover:shadow-floating hover:-translate-y-1"
          >
            {t.nav.project}
          </a>
        </nav>

        <button className="md:hidden p-2 text-rom-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-rom-white border-b border-rom-ghost shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-rom-black hover:text-rom-accent transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigate) onNavigate('home');
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => {
              setMobileMenuOpen(false);
              if (onNavigate) onNavigate('home');
            }}
            className="bg-rom-accent text-rom-black px-5 py-4 rounded-xl text-center font-bold uppercase tracking-widest text-sm shadow-md"
          >
            {t.nav.project}
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;