import { type MouseEvent } from 'react';
import { MapPin, Clock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#050505] text-gray-400 py-16 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Brand */}
        <div className="md:col-span-2">
          <a href="#inicio" className="inline-block mb-4" onClick={(e) => handleNavClick(e, 'inicio')}>
            <img src="/fotos/logo-transparent.png" alt="CT Corporação" className="h-20 w-auto mix-blend-screen opacity-90 hover:opacity-100 transition-opacity" />
          </a>
          <p className="font-light leading-relaxed max-w-sm mt-4">
            Mais do que uma academia. Um espaço dedicado à sua evolução diária, construído por quem entende do esporte.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold font-outfit text-lg mb-6">Acesso Rápido</h4>
          <ul className="space-y-4">
            <li><a href="#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#historia" onClick={(e) => handleNavClick(e, 'historia')} className="hover:text-white transition-colors">Nossa História</a></li>
            <li><a href="#estrutura" onClick={(e) => handleNavClick(e, 'estrutura')} className="hover:text-white transition-colors">A Estrutura</a></li>
            <li><a href="#equipe" onClick={(e) => handleNavClick(e, 'equipe')} className="hover:text-white transition-colors">Nossa Equipe</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold font-outfit text-lg mb-6">Contato</h4>
          <ul className="space-y-4 font-light">
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-brand-red" /> Duque de Caxias, RJ
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-brand-blue" /> Seg-Sex: 06h - 23h
            </li>
            <li className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/ctcorporacao/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                @ctcorporacao
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm font-light">
        <p>&copy; {currentYear} Centro de Treinamento Corporação. Todos os direitos reservados.</p>
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="https://www.instagram.com/ctcorporacao/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/30 hover:text-teal-400 transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
