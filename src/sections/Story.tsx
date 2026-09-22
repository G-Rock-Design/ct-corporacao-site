
export function Story() {
  return (
    <section id="historia" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
      
      {/* Immersive Deep Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle_at_center,rgba(237,28,36,0.08)_0%,transparent_60%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex-1 space-y-10 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-red/30 bg-brand-red/10 text-sm font-medium text-brand-red shadow-[0_0_15px_rgba(237,28,36,0.2)]">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
              Nossa Trajetória
            </div>
            
            <h2 className="text-5xl md:text-6xl font-outfit font-black tracking-tight text-white leading-[1.1]">
              A força forjada <br/> na <span className="text-shimmer-red">constância</span>.
            </h2>
            
            <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
              <p>
                O CT Corporação não nasceu como um império. Ele foi <strong className="text-white font-medium">construído do absoluto zero</strong>. Não somos apenas um negócio, somos o resultado tangível da paixão pelo fisiculturismo e pela musculação.
              </p>
              <p>
                Nossos fundadores vivem e respiram o esporte diariamente. Cada barra de ferro, cada máquina, cada detalhe desta academia reflete anos de suor, de crescimento e da compreensão profunda de que <strong className="text-white font-medium">resultados exigem dedicação inabalável</strong>.
              </p>
              
              <div className="relative pl-8 py-4 mt-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-red via-brand-red/50 to-transparent rounded-full"></div>
                <p className="font-outfit font-medium text-white text-2xl tracking-wide">
                  Sabemos o que é dar o primeiro passo.<br/> Sabemos o que é preciso para não parar.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Element - Image Block */}
          <div className="flex-1 w-full relative z-10">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden glass-dark glow-border group bg-brand-pure">
              <img 
                src="/fotos/historia.png" 
                alt="História do CT Corporação" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t border-white/10 pt-6 pointer-events-none z-10">
                <div className="text-white font-outfit font-bold text-3xl drop-shadow-lg">Desde o dia zero.</div>
                <div className="w-16 h-1.5 bg-brand-red rounded-full group-hover:w-24 transition-all duration-500 shadow-[0_0_10px_rgba(237,28,36,0.5)]"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
