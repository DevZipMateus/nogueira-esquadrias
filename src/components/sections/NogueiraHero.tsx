
import { ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NogueiraHero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551985500738?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20esquadrias%20de%20alumínio%20e%20vidro.', '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/be4a3387-6222-41e0-8219-0bd514da91c1.png')`,
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 w-full safe-area-inset">
        <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center text-white pt-16 xs:pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 md:pb-16">
            {/* Main Heading */}
            <div className="mb-6 xs:mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-3 xs:mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                Nogueira
                <span className="block text-blue-400 drop-shadow-lg">Esquadrias</span>
              </h1>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-2 xs:mb-3 sm:mb-4 text-white drop-shadow-md">
                em Alumínio & Vidros
              </p>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 xs:mb-6 sm:mb-8 text-gray-200 font-display italic drop-shadow-md max-w-4xl mx-auto leading-relaxed px-2">
                "Sua casa merece o melhor em alumínio e vidro."
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 mb-6 xs:mb-8 sm:mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center p-3 xs:p-4 sm:p-6 lg:p-8 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm transition-transform hover:scale-105">
                <Award className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm xs:text-base sm:text-lg">30 Anos</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-200 drop-shadow-sm leading-tight">de Experiência</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 xs:p-4 sm:p-6 lg:p-8 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm transition-transform hover:scale-105">
                <Shield className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm xs:text-base sm:text-lg">Qualidade</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-200 drop-shadow-sm leading-tight">Garantida</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 xs:p-4 sm:p-6 lg:p-8 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm transition-transform hover:scale-105">
                <Clock className="h-6 w-6 xs:h-8 xs:w-8 sm:h-10 sm:w-10 mb-2 sm:mb-3 text-blue-400 flex-shrink-0" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm xs:text-base sm:text-lg">Atendimento</h3>
                <p className="text-xs xs:text-sm sm:text-base text-gray-200 drop-shadow-sm leading-tight">RS e SC</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6 xs:mb-8 sm:mb-12">
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md px-2 xs:px-4 sm:px-0">
                Especialistas em <strong className="text-blue-400">esquadrias de alumínio</strong> e <strong className="text-blue-400">vidro temperado</strong>. 
                Fabricamos sob medida: portões, janelas, box para banheiro e muito mais, 
                sempre com <strong className="text-blue-400">qualidade, responsabilidade e segurança</strong>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 xs:gap-4 sm:gap-6 justify-center items-center mb-6 xs:mb-8 sm:mb-16 px-2 xs:px-4 sm:px-0">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 xs:px-8 sm:px-10 py-4 xs:py-5 sm:py-6 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold rounded-xl shadow-2xl hover:shadow-lg transition-all duration-300 group border-2 border-green-500 min-h-[48px] sm:min-h-[56px] touch-manipulation"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                <span className="xs:hidden">Orçamento</span>
                <span className="hidden xs:inline sm:hidden">Solicitar Orçamento</span>
                <span className="hidden sm:inline">Solicite seu Orçamento</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-2 border-white bg-black/30 text-white hover:bg-white hover:text-black active:bg-gray-100 px-6 xs:px-8 sm:px-10 py-4 xs:py-5 sm:py-6 text-sm xs:text-base sm:text-lg lg:text-xl font-semibold rounded-xl transition-all duration-300 shadow-xl min-h-[48px] sm:min-h-[56px] touch-manipulation"
                aria-label="Ver nossos serviços"
              >
                <span className="xs:hidden">Serviços</span>
                <span className="hidden xs:inline">Nossos Serviços</span>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-4 xs:pt-6 sm:pt-8 border-t border-white/40">
              <div className="flex flex-col xs:flex-row justify-center items-center gap-2 xs:gap-4 sm:gap-6 lg:gap-8 text-white text-xs xs:text-sm sm:text-base">
                <a 
                  href="tel:+5551985500738"
                  className="hover:text-blue-400 transition-colors drop-shadow-md font-medium break-all xs:break-normal py-2 px-2 rounded-md touch-manipulation min-h-[44px] flex items-center"
                  aria-label="Ligar para (51) 98550-0738"
                >
                  📞 (51) 98550-0738
                </a>
                <span className="hidden xs:inline text-white/60">|</span>
                <a 
                  href="tel:+55513022528"
                  className="hover:text-blue-400 transition-colors drop-shadow-md font-medium break-all xs:break-normal py-2 px-2 rounded-md touch-manipulation min-h-[44px] flex items-center"
                  aria-label="Ligar para (51) 3022-5280"
                >
                  📞 (51) 3022-5280
                </a>
                <span className="hidden sm:inline text-white/60">|</span>
                <span className="drop-shadow-md font-medium py-2 px-2">📍 Porto Alegre - RS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraHero;
