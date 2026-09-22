
import { MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
  const whatsappMsg = encodeURIComponent("Olá! Conheci o CT Corporação pelo site e gostaria de saber mais sobre a academia.");
  const whatsappUrl = `https://wa.me/5521997572052?text=${whatsappMsg}`;

  return (
    <section id="contato" className="py-32 px-6 bg-brand-black relative text-white border-t border-white/5 overflow-hidden">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(237,28,36,0.15)_0%,transparent_60%)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Info */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                Matrículas Abertas
              </div>
              <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight mb-6 text-white">
                Hora de dar <br/><span className="text-brand-red">o primeiro passo.</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Nossa equipe está pronta para te ajudar a começar. Venha conhecer a nossa estrutura pessoalmente e descubra o que o CT Corporação pode fazer por você.
              </p>
            </div>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl mb-2">Localização</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    Av. Visconde de Itaúna<br/>
                    Duque de Caxias — RJ
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl mb-2">Horário de Funcionamento</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    <strong className="text-white">Seg - Sex:</strong> 06h às 23h<br/>
                    <strong className="text-white">Sábado:</strong> 08h às 14h
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-teal-500/10 group-hover:border-teal-500/30 transition-colors duration-300">
                  <svg className="w-6 h-6 text-teal-400 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl mb-2">Redes Sociais</h4>
                  <a href="https://www.instagram.com/ctcorporacao/" target="_blank" rel="noopener noreferrer" className="text-gray-400 font-light hover:text-white transition-colors text-lg inline-block hover:translate-x-1">
                    @ctcorporacao
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Action Card */}
          <div className="glass-dark p-12 md:p-16 rounded-[2rem] glow-border relative overflow-hidden text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-white/10 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-teal-500/20 transition-colors duration-700"></div>
            
            <div className="w-24 h-24 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(37,211,102,0.2)] animate-pulse">
              <MessageCircle className="w-12 h-12 text-[#25D366]" />
            </div>
            
            <h3 className="text-4xl font-outfit font-black mb-4">Fale com a equipe</h3>
            <p className="text-gray-400 font-light mb-10 max-w-sm mx-auto text-lg">
              Toque no botão abaixo para nos chamar no WhatsApp. Resposta rápida garantida!
            </p>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
              <Button size="lg" className="w-full bg-[#25D366] text-white hover:bg-[#20bd5a] hover:scale-[1.03] shadow-[0_0_30px_rgba(37,211,102,0.4)] border-none font-bold text-lg py-5">
                Chamar no WhatsApp
              </Button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
