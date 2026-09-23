import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: any, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#inicio" className="flex items-center" onClick={(e) => handleNavClick(e, 'inicio')}>
          <img src="/fotos/logo-transparent.png" alt="CT Corporação" className="h-14 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#historia" onClick={(e) => handleNavClick(e, 'historia')} className="text-sm text-gray-300 hover:text-white transition-colors">História</a>
          <a href="#estrutura" onClick={(e) => handleNavClick(e, 'estrutura')} className="text-sm text-gray-300 hover:text-white transition-colors">Estrutura</a>
          <a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')} className="text-sm text-gray-300 hover:text-white transition-colors">Equipe</a>
          <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-sm text-white hover:text-brand-red transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-brand-red/50 bg-white/5">Contato</a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white hover:text-brand-red transition-colors p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-dark border-b border-white/5 shadow-2xl py-4 px-5 flex flex-col gap-4 animate-fade-up z-40">
          <a href="#historia" onClick={(e) => handleNavClick(e, 'historia')} className="text-base font-medium text-gray-300 hover:text-white">História</a>
          <a href="#estrutura" onClick={(e) => handleNavClick(e, 'estrutura')} className="text-base font-medium text-gray-300 hover:text-white">Estrutura</a>
          <a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')} className="text-base font-medium text-gray-300 hover:text-white">Equipe</a>
          <a href="#contato" onClick={(e) => handleNavClick(e, 'contato')} className="text-base font-medium text-brand-red hover:text-red-400">Contato</a>
        </div>
      )}
    </nav>
  );
}
