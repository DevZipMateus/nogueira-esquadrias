
import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NogueiraLocation = () => {
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

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-primary" />,
      title: 'Endereço',
      details: 'AV DA SERRARIA, 1151 - ESPÍRITO SANTO',
      subtitle: 'Porto Alegre - RS',
      action: 'https://maps.app.goo.gl/hLdibTTKfMA6TpZB9',
      actionText: 'Ver no Google Maps'
    },
    {
      icon: <Phone className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-primary" />,
      title: 'Telefones',
      details: '(51) 98550-0738',
      subtitle: '(51) 3022-5280',
      action: 'tel:+5551985500738',
      actionText: 'Ligar Agora'
    },
    {
      icon: <Mail className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-primary" />,
      title: 'Email',
      details: 'nogueiraesquadriasdealuminio@gmail.com',
      subtitle: 'Resposta rápida garantida',
      action: 'mailto:nogueiraesquadriasdealuminio@gmail.com',
      actionText: 'Enviar Email'
    },
    {
      icon: <Clock className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6 text-primary" />,
      title: 'Atendimento',
      details: 'Segunda à Sexta: 8h às 18h',
      subtitle: 'Sábados: 8h às 12h',
      action: null,
      actionText: null
    }
  ];

  return (
    <section ref={sectionRef} id="localizacao" className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto mb-8 xs:mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Localização e Contato
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 text-foreground font-display leading-tight">
            Onde nos <span className="text-primary">Encontrar</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl leading-relaxed mx-auto px-2">
            Estamos localizados em Porto Alegre - RS, atendendo toda a região Sul com qualidade e agilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 xs:gap-8 sm:gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <div className="space-y-3 xs:space-y-4 sm:space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover border-border/50">
                  <CardContent className="p-3 xs:p-4 sm:p-6">
                    <div className="flex items-start">
                      <div className="mr-2 xs:mr-3 sm:mr-4 flex h-8 w-8 xs:h-10 xs:w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm xs:text-base sm:text-lg font-semibold text-foreground mb-1 leading-tight">
                          {item.title}
                        </h4>
                        <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-0.5 xs:mb-1 break-words leading-tight">
                          {item.details}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-2 xs:mb-3 leading-tight">
                          {item.subtitle}
                        </p>
                        {item.action && item.actionText && (
                          <a 
                            href={item.action}
                            target={item.action.startsWith('http') ? '_blank' : undefined}
                            rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-block text-xs xs:text-sm font-medium text-primary hover:text-primary/80 hover:underline transition-colors"
                          >
                            {item.actionText}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-4 xs:mt-6 sm:mt-8 p-3 xs:p-4 sm:p-6 bg-primary/5 rounded-xl border border-primary/20">
              <h4 className="font-semibold text-foreground mb-1 xs:mb-2 text-xs xs:text-sm sm:text-base leading-tight">Área de Atendimento</h4>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Atendemos todo o <strong className="text-foreground">Rio Grande do Sul</strong> e{' '}
                <strong className="text-foreground">Santa Catarina</strong>. 
                Entre em contato para verificar disponibilidade em sua região.
              </p>
            </div>
          </div>

          {/* Map */}
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-elevation border border-border/50">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.123!2d-51.191!3d-30.087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAV%20DA%20SERRARIA%2C%201151%20-%20ESP%C3%8DRITO%20SANTO%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1704720000000!5m2!1spt-BR!2sbr"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Nogueira Esquadrias - AV DA SERRARIA, 1151 - ESPÍRITO SANTO - PORTO ALEGRE - RS"
                  aria-label="Mapa mostrando a localização da Nogueira Esquadrias em Porto Alegre"
                ></iframe>
              </div>
              
              {/* Map overlay with company info */}
              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 left-2 xs:left-3 sm:left-4 right-2 xs:right-3 sm:right-4 bg-white/95 backdrop-blur-sm p-2 xs:p-3 sm:p-4 rounded-xl shadow-lg border border-border/50">
                <h5 className="font-semibold text-foreground text-xs xs:text-sm mb-0.5 xs:mb-1 leading-tight">
                  Nogueira Esquadrias
                </h5>
                <p className="text-xs text-muted-foreground leading-tight">
                  AV DA SERRARIA, 1151 - ESPÍRITO SANTO<br/>
                  Porto Alegre - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraLocation;
