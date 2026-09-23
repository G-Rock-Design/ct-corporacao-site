
import { Button } from '../components/Button';
import { ArrowRight, MapPin } from 'lucide-react';

export function Hero() {
  const whatsappMsg = encodeURIComponent("Olá! Conheci o CT Corporação pelo site e gostaria de saber mais sobre a academia.");
  const whatsappUrl = `https://wa.me/5521997572052?text=${whatsappMsg}`;

  return (
    <section id="inicio" className="relative z-10 min-h-[100vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 overflow-hidden bg-brand-black">
      
      {/* Immersive Background Effects & Video */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden md:static md:overflow-visible">
          {/* Video Background (Desktop Only) */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-lighten"
          >
            <source src="/fotos/Gym_logo_promotional_video_1080p_20260922173728.mp4" type="video/mp4" />
          </video>

          {/* Video Background (Mobile Only - Fixed for Parallax Effect) */}
          <div className="md:hidden fixed top-0 left-0 w-[100vw] h-[100vh] -z-10 pointer-events-none">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              preload="auto" 
              className="w-full h-full object-cover opacity-20 mix-blend-lighten"
            >
              <source src="/fotos/Gym_logo_promotional_video_1080p_20260922175540.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Glow Orbs */}
          <div className="absolute top-[10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-red/10 mix-blend-screen filter blur-[120px] animate-blob"></div>
          <div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-500/10 mix-blend-screen filter blur-[120px] animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-brand-blue/5 mix-blend-screen filter blur-[150px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Animated Spotlight Overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_50%)] animate-spotlight pointer-events-none"></div>

      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0"></div>

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 mt-12 flex flex-col items-center">
        
        {/* Floating Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 mb-8 sm:mb-10 animate-fade-up shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md animate-float-complex">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red animate-pulse" />
            <span className="tracking-wide">Duque de Caxias, RJ</span>
            <div className="w-[1px] h-3 sm:h-4 bg-white/20 mx-1 sm:mx-2"></div>
            <span className="text-teal-400 font-semibold">Matrículas Abertas</span>
        </div>

        {/* Aggressive Typography */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-outfit font-black tracking-tighter leading-[1] md:leading-[0.9] text-white mb-6 md:mb-8 animate-fade-up flex flex-col items-center" style={{ animationDelay: '0.1s' }}>
            <span className="text-shimmer-gradient">Onde o ferro</span>
            <span className="flex items-center gap-4 mt-2">
              <span>encontra o</span>
              <span className="text-transparent-outline-thick relative inline-block italic pr-4">
                  foco.
                  <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/30 to-transparent blur-3xl -z-10 rounded-full"></div>
              </span>
            </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Construído literalmente <strong className="text-white font-medium">do zero</strong>. Uma estrutura premium projetada para quem não aceita menos que a própria <strong className="text-brand-red font-medium">evolução</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up w-full max-w-md mx-auto sm:max-w-none" style={{ animationDelay: '0.3s' }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="glowing" size="lg" className="w-full" icon={ArrowRight}>
                Quero conhecer o CT
              </Button>
            </a>
            <a href="#historia" className="w-full sm:w-auto">
              <Button variant="glass" size="lg" className="w-full">
                Descubra o Legado
              </Button>
            </a>
        </div>
      </div>
    </section>
  );
}
