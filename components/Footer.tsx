import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-offwhite border-t border-gray-300 py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
           <h3 className="font-bold text-xl mb-2">CodengenX</h3>
           <p className="text-gray-500 text-sm">© 2024 CodengenX Inc.</p>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-brand-black transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-black transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-black transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand-black transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;