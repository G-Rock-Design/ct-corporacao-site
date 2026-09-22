import { ShieldCheck, Award, Users } from 'lucide-react';

export function Team() {
  return (
    <section id="equipe" className="py-32 px-6 bg-brand-black relative overflow-hidden border-t border-white/5">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-red/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Frame */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden glass-dark glow-border shadow-[0_0_50px_rgba(0,0,0,0.5)] group bg-brand-pure">
              <img 
                src="/fotos/Captura%20de%20tela%202026-09-21%20145854.png" 
                alt="Equipe de Profissionais do CT Corporação"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100 object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              
              <div className="absolute bottom-8 left-8 right-8 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-sm font-medium text-teal-400 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  <ShieldCheck className="w-4 h-4" />
                  Profissionais Credenciados
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-brand-red/30 bg-brand-red/10 text-sm font-medium text-brand-red shadow-[0_0_15px_rgba(237,28,36,0.2)]">
                <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                Nosso Time
              </div>
              <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight text-white leading-[1.1] mb-6">
                Quem constrói <br/><span className="text-shimmer-red">o seu resultado.</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                Um equipamento de ponta só entrega o seu máximo nas mãos de quem entende de verdade. No CT Corporação, nossa equipe é formada por <strong className="text-white font-medium">profissionais credenciados</strong>.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-red/10 group-hover:border-brand-red/30 transition-colors duration-300">
                  <Award className="w-6 h-6 text-brand-red group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl mb-2 text-white">Fiscalização e Ética</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    Trabalhamos em conformidade absoluta com o CREF1, garantindo que a sua saúde esteja sempre sendo guiada por profissionais validados por lei.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 transition-colors duration-300">
                  <Users className="w-6 h-6 text-brand-blue group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-xl mb-2 text-white">Acompanhamento Real</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    Não somos instrutores de enfeite. Nossa equipe corrige, incentiva e acompanha a sua biomecânica em cada repetição para maximizar seus ganhos.
                  </p>
                </div>
              </div>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
