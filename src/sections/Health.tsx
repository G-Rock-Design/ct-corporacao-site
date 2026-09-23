
import { HeartPulse } from 'lucide-react';

export function Health() {
  return (
    <section className="py-16 md:py-32 px-6 bg-brand-black relative overflow-hidden">
      
      {/* Ethereal Mesh Background */}
      <div className="absolute inset-0 bg-animated-mesh opacity-80 z-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
        
        <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mx-auto mb-6 shadow-[0_0_50px_rgba(20,184,166,0.3)] animate-float">
          <HeartPulse className="w-10 h-10 text-teal-400" />
        </div>
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-outfit font-black tracking-tight text-white leading-[1.1]">
          Sua saúde em <br className="md:hidden"/><span className="text-transparent-outline-thick italic pr-2 text-teal-400">movimento</span>.
        </h2>
        
        <div className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <p>
            O treino transcende a estética. É sobre forjar disciplina, curar o corpo e fortalecer a mente contra as adversidades do dia a dia.
          </p>
          <p>
            No CT Corporação, nós acolhemos quem quer dar o <strong className="text-white font-medium">primeiro passo</strong> com a mesma seriedade com que tratamos os nossos atletas. Sem pressão desnecessária, sem comparações: apenas você sendo melhor do que ontem.
          </p>
        </div>
        
      </div>
      
    </section>
  );
}
