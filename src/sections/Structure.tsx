
import { Wind, Dumbbell, ShieldCheck } from 'lucide-react';

export function Structure() {
  return (
    <section id="estrutura" className="py-32 px-6 bg-brand-black relative text-white">
      {/* Minimal Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-brand-blue/10 mix-blend-screen filter blur-[120px] animate-blob"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight text-white">
            Uma estrutura de <span className="text-transparent-outline-white italic pr-2">peso</span>.
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Tudo o que você precisa para extrair o máximo do seu treino. Sem desculpas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-dark p-10 rounded-3xl glow-border glass-card-hover group flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center text-brand-red mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(237,28,36,0)] group-hover:shadow-[0_0_30px_rgba(237,28,36,0.3)] group-hover:bg-brand-red group-hover:text-white">
              <Dumbbell className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold font-outfit mb-4">Alta Qualidade</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Equipamentos de excelência, selecionados por quem entende do esporte. Biomecânica perfeita para o seu músculo trabalhar de verdade.
            </p>
          </div>

          <div className="glass-dark p-10 rounded-3xl glow-border glass-card-hover group flex flex-col items-center text-center" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(117,206,229,0)] group-hover:shadow-[0_0_30px_rgba(117,206,229,0.3)] group-hover:bg-brand-blue group-hover:text-brand-black">
              <Wind className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold font-outfit mb-4">Climatização</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              O ambiente inteiro é climatizado. Seu único suor deve ser no equipamento, o seu foco não pode derreter na temperatura ambiente.
            </p>
          </div>

          <div className="glass-dark p-10 rounded-3xl glow-border glass-card-hover group flex flex-col items-center text-center" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(20,184,166,0)] group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] group-hover:bg-teal-500 group-hover:text-brand-black">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-bold font-outfit mb-4">Foco na Prática</h3>
            <p className="text-gray-400 leading-relaxed font-light text-lg">
              Aqui você treina de verdade. Espaço projetado exclusivamente para a musculação pura, sem distrações e com máximo rendimento.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
