import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export function Pricing() {
  const whatsappMsg = encodeURIComponent("Olá! Vi no site o plano de R$ 130 e quero fazer minha matrícula.");
  const whatsappUrl = `https://wa.me/5521997572052?text=${whatsappMsg}`;

  const benefits = [
    "Acesso livre a toda a estrutura premium",
    "Treinamento personalizado com professores",
    "Ambiente 100% climatizado",
    "Sem taxa de matrícula ou adesão escondida",
    "Atendimento humano e próximo"
  ];

  return (
    <section id="planos" className="py-16 md:py-32 px-6 bg-brand-pure relative overflow-hidden border-t border-white/5">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-black to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tight text-white mb-4">
            Investimento <span className="text-shimmer-red">transparente</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">
            Sem letras miúdas. Você paga um valor justo para treinar na melhor estrutura da região.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="glass-dark rounded-[3rem] p-8 md:p-12 glow-border relative overflow-hidden max-w-2xl mx-auto border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-brand-red/20 transition-colors duration-700"></div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-between border-b border-white/10 pb-8 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full border border-teal-500/30 bg-teal-500/10 text-xs font-medium text-teal-400 uppercase tracking-widest">
                Plano Único
              </div>
              <h3 className="text-3xl font-outfit font-bold text-white">Mensalidade</h3>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-start justify-center md:justify-end text-white font-outfit">
                <span className="text-2xl font-medium mt-2 mr-1">R$</span>
                <span className="text-7xl font-black tracking-tighter">130</span>
                <span className="text-xl text-gray-400 font-light mt-auto mb-2 ml-1">/mês</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 text-gray-300">
                <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-brand-red" />
                </div>
                <span className="text-lg font-light">{benefit}</span>
              </div>
            ))}
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
            <Button size="lg" variant="glowing" className="w-full py-6 text-xl" icon={ArrowRight}>
              Garantir Minha Vaga
            </Button>
          </a>
          
          <p className="text-center text-sm text-gray-500 font-light mt-6">
            Pagamento via Pix, Cartão ou Dinheiro diretamente na recepção.
          </p>

        </div>

      </div>
    </section>
  );
}
