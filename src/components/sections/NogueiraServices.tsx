
import { useEffect, useRef, useState } from 'react';
import { Home, Shield, Wrench, Phone } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';

const NogueiraServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551985500738?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20esquadrias%20de%20alumínio%20e%20vidro.', '_blank');
  };

  const services = [
    {
      icon: <Home className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-primary" />,
      title: 'Esquadrias Sob Medida',
      description: 'Fabricação personalizada de portões, portas, janelas e sacadas em alumínio, desenvolvidas especialmente para seu projeto.',
      features: ['Portões residenciais', 'Portas e janelas', 'Sacadas e varandas', 'Guarda-corpos']
    },
    {
      icon: <Shield className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-primary" />,
      title: 'Vidros Temperados',
      description: 'Instalação de vidros temperados de alta qualidade, incluindo box para banheiro e aplicações diversas.',
      features: ['Box para banheiro', 'Vidros de segurança', 'Fechamento de áreas', 'Divisórias de vidro']
    },
    {
      icon: <Wrench className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 text-primary" />,
      title: 'Manutenção Especializada',
      description: 'Serviços de manutenção e reparo em esquadrias de alumínio e box de vidro temperado, garantindo durabilidade.',
      features: ['Reparo de esquadrias', 'Manutenção preventiva', 'Troca de componentes', 'Ajustes e regulagens']
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto mb-8 xs:mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 text-foreground font-display leading-tight">
            Soluções Completas em <span className="text-primary">Alumínio e Vidro</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl leading-relaxed mx-auto px-2">
            Oferecemos uma ampla gama de serviços especializados em esquadrias de alumínio e vidro temperado, 
            sempre com foco na qualidade e satisfação do cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mb-8 xs:mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className={`card-hover border-border/50 h-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-4 xs:p-6 sm:p-8 h-full flex flex-col">
                <div className="mb-4 xs:mb-6 flex-1">
                  <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 xs:mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-foreground mb-2 xs:mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-1.5 xs:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs xs:text-sm">
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-primary rounded-full mr-2 xs:mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Services */}
        <div className={`bg-gradient-subtle rounded-2xl p-4 xs:p-6 sm:p-8 lg:p-12 text-center ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 xs:mb-3 sm:mb-4 leading-tight">
            Produtos de Alta Qualidade
          </h3>
          <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-4 xs:mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Todos os nossos produtos são desenvolvidos com materiais de primeira qualidade, 
            seguindo rigorosos padrões de segurança e durabilidade.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 mb-4 xs:mb-6 sm:mb-8 max-w-4xl mx-auto">
            {[
              'Alumínio Premium',
              'Vidro Temperado',
              'Ferragens de Qualidade',
              'Acabamento Perfeito'
            ].map((item, index) => (
              <div key={index} className="bg-white p-2 xs:p-3 sm:p-4 rounded-lg shadow-subtle">
                <span className="text-xs xs:text-sm font-medium text-foreground leading-tight">{item}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-xs xs:text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-elevation hover:shadow-lg transition-all duration-300 group min-h-[44px]"
            aria-label="Solicitar orçamento personalizado via WhatsApp"
          >
            <Phone className="mr-1 xs:mr-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            <span className="xs:hidden">Orçamento</span>
            <span className="hidden xs:inline sm:hidden">Solicitar Orçamento</span>
            <span className="hidden sm:inline">Solicite seu Orçamento Personalizado</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NogueiraServices;
