import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif font-bold text-xl mb-1 uppercase tracking-tighter">ROMCONSTRUCTION</h4>
            <p className="text-xs text-gray-500 tracking-widest">BUILDING EXCELLENCE</p>
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
            <a href="#" className="hover:text-black transition-colors">Impressum</a>
            <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-black transition-colors">AGB</a>
          </div>

          <div className="text-[10px] text-gray-300 uppercase tracking-[0.2em]">
            &copy; {new Date().getFullYear()} Romconstruction. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;