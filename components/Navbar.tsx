import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-300 bg-brand-offwhite sticky top-0 z-50">
      <div className="max-w-full mx-auto px-6 h-20 flex items-center justify-between relative bg-brand-offwhite z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-black text-white flex items-center justify-center transition-transform group-hover:rotate-12">
              <Sparkles size={16} />
            </div>
            <span className="text-xl font-bold tracking-tight text-brand-black">SkillForge</span>
          </a>
        </div>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link.name}>
              <a href={link.href} className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-orange after:transition-all hover:after:w-full">
                {link.name}
              </a>
              {index < NAV_LINKS.length - 1 && (
                <span className="h-4 w-[1px] bg-gray-300"></span>
              )}
            </React.Fragment>
          ))}
          <button className="bg-brand-black text-white px-5 py-2 text-sm font-medium hover:bg-brand-orange transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-brand-black p-2 hover:bg-gray-200 transition-colors rounded-sm"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 bg-brand-offwhite z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 px-6 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6 text-lg font-medium">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-black border-b border-gray-200 pb-4"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-black text-white px-5 py-4 text-center mt-4 font-medium">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;