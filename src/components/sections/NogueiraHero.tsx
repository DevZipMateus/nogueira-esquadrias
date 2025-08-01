
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

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Main Heading */}
            <div className="mb-8 lg:mb-12">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                Nogueira
                <span className="block text-blue-400 drop-shadow-lg">Esquadrias</span>
              </h1>
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 text-white drop-shadow-md">
                em Alumínio & Vidros
              </p>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 font-display italic drop-shadow-md max-w-4xl mx-auto">
                "Sua casa merece o melhor em alumínio e vidro."
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-6 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3 text-blue-400" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm sm:text-base">30 Anos</h3>
                <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">de Experiência</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-6 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3 text-blue-400" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm sm:text-base">Qualidade</h3>
                <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">Garantida</p>
              </div>
              <div className="flex flex-col items-center text-center p-3 sm:p-4 lg:p-6 bg-black/50 border border-white/30 rounded-xl backdrop-blur-sm">
                <Clock className="h-6 w-6 sm:h-8 sm:w-8 mb-2 sm:mb-3 text-blue-400" aria-hidden="true" />
                <h3 className="font-semibold mb-1 text-white drop-shadow-md text-sm sm:text-base">Atendimento</h3>
                <p className="text-xs sm:text-sm text-gray-200 drop-shadow-sm">RS e SC</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8 sm:mb-12">
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md px-4 sm:px-0">
                Especialistas em <strong className="text-blue-400">esquadrias de alumínio</strong> e <strong className="text-blue-400">vidro temperado</strong>. 
                Fabricamos sob medida: portões, janelas, box para banheiro e muito mais, 
                sempre com <strong className="text-blue-400">qualidade, responsabilidade e segurança</strong>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-16 px-4 sm:px-0">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-lg transition-all duration-300 group border-2 border-green-500"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Solicite seu Orçamento
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={scrollToServices}
                variant="outline"
                className="w-full sm:w-auto border-2 border-white bg-black/30 text-white hover:bg-white hover:text-black px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 shadow-xl"
                aria-label="Ver nossos serviços"
              >
                Nossos Serviços
              </Button>
            </div>

            {/* Contact Info */}
            <div className="pt-6 sm:pt-8 border-t border-white/40">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-8 text-white text-sm sm:text-base">
                <a 
                  href="tel:+5551985500738"
                  className="hover:text-blue-400 transition-colors drop-shadow-md font-medium"
                  aria-label="Ligar para (51) 98550-0738"
                >
                  📞 (51) 98550-0738
                </a>
                <span className="hidden sm:inline text-white/60">|</span>
                <a 
                  href="tel:+55513022528"
                  className="hover:text-blue-400 transition-colors drop-shadow-md font-medium"
                  aria-label="Ligar para (51) 3022-5280"
                >
                  📞 (51) 3022-5280
                </a>
                <span className="hidden sm:inline text-white/60">|</span>
                <span className="drop-shadow-md font-medium">📍 Porto Alegre - RS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraHero;
