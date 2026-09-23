import { Target, Activity, CheckCircle } from 'lucide-react';

export function Personal() {
  return (
    <section id="personal" className="py-16 md:py-32 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_center,rgba(237,28,36,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-sm font-medium text-brand-red shadow-[0_0_15px_rgba(237,28,36,0.2)]">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
            Diferencial CT Corporação
          </div>
          <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tight text-white">
            Treinamento <span className="text-transparent-outline-white italic pr-2">Personalizado</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Não somos uma academia onde você é apenas um número. Aqui, você tem acompanhamento real para garantir sua evolução contínua.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          
          <div className="glass-dark p-8 md:p-10 rounded-[2rem] glow-border group flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(237,28,36,0.1)] group-hover:shadow-[0_0_30px_rgba(237,28,36,0.3)]">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-outfit mb-3">Foco no Objetivo</h3>
            <p className="text-gray-400 font-light text-lg">
              Seu treino é montado e acompanhado de perto. Seja emagrecimento ou hipertrofia, a estratégia é traçada para o seu corpo.
            </p>
          </div>

          <div className="glass-dark p-8 md:p-10 rounded-[2rem] glow-border group flex flex-col items-center text-center" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]">
              <Activity className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-outfit mb-3">Biomecânica Certa</h3>
            <p className="text-gray-400 font-light text-lg">
              Chega de executar exercícios errado. Nossos personais corrigem sua postura em tempo real para maximizar o ganho e evitar lesões.
            </p>
          </div>

          <div className="glass-dark p-8 md:p-10 rounded-[2rem] glow-border group flex flex-col items-center text-center" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(117,206,229,0.1)] group-hover:shadow-[0_0_30px_rgba(117,206,229,0.3)]">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-outfit mb-3">Resultados Reais</h3>
            <p className="text-gray-400 font-light text-lg">
              Sem enrolação. Nosso compromisso é com a sua evolução diária. Você não vai treinar sozinho; nós seremos seus parceiros.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
