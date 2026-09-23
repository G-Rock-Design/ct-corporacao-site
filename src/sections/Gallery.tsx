
export function Gallery() {
  return (
    <section className="py-16 md:py-32 px-6 bg-brand-pure relative border-t border-white/5">
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-brand-red/10 mix-blend-screen filter blur-[120px] animate-blob"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-outfit font-black tracking-tight text-white mb-4 md:mb-6">
            O seu <span className="text-shimmer-red">campo de batalha</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light">Um vislumbre da nossa estrutura. O resto, você descobre suando.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <div className="rounded-[2rem] overflow-hidden glass-dark glow-border group relative aspect-[4/3] bg-brand-black shadow-2xl">
            <img 
              src="/fotos/WhatsApp Image 2026-09-21 at 15.04.34.jpeg" 
              alt="Estrutura do CT Corporação" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <h4 className="text-3xl font-outfit font-bold text-white mb-2">Estrutura Ampla</h4>
              <p className="text-brand-red font-medium tracking-wide uppercase text-sm">Pronto para o treino</p>
            </div>
          </div>
          
          <div className="rounded-[2rem] overflow-hidden glass-dark glow-border group relative aspect-[4/3] bg-brand-black shadow-2xl" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/fotos/408778262_1592366098180153_6296518003851320317_n.jpg" 
              alt="Equipamentos do CT Corporação" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <h4 className="text-3xl font-outfit font-bold text-white mb-2">Linha de Máquinas</h4>
              <p className="text-teal-400 font-medium tracking-wide uppercase text-sm">Alta Performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
