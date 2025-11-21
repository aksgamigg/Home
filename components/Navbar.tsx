import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '01. About', href: '#about' },
    { name: '02. Journey', href: '#journey' },
    { name: '03. Projects', href: '#projects' },
    { name: '04. Terminal', href: '#terminal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold text-white flex items-center gap-2 group">
          <span className="text-primary group-hover:text-accent transition-colors">&lt;</span>
          Akshaj_Goel
          <span className="text-primary group-hover:text-accent transition-colors">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 font-mono text-sm text-gray-400">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -left-4 opacity-0 group-hover:opacity-100 group-hover:-left-3 text-accent transition-all duration-300">&gt;</span>
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="interactive px-5 py-2 bg-primary/20 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-all duration-300 font-mono text-sm">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-panel border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
           {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-gray-400 hover:text-white font-mono"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-accent font-mono">Contact Me</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;