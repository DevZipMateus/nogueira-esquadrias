import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Phone, Eye } from 'lucide-react';

const NogueiraGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [api, setApi] = useState<CarouselApi>();
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

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5551985500738?text=Olá!%20Vi%20os%20projetos%20na%20galeria%20e%20gostaria%20de%20um%20orçamento%20personalizado.', '_blank');
  };

  const galleryImages = [
    { src: '/lovable-uploads/galeria/midia_1.jpg', alt: 'Projeto de esquadria em alumínio 1' },
    { src: '/lovable-uploads/galeria/midia_2.jpg', alt: 'Projeto de esquadria em alumínio 2' },
    { src: '/lovable-uploads/galeria/midia_3.jpg', alt: 'Projeto de esquadria em alumínio 3' },
    { src: '/lovable-uploads/galeria/midia_4.jpg', alt: 'Projeto de esquadria em alumínio 4' },
    { src: '/lovable-uploads/galeria/midia_5.jpg', alt: 'Projeto de esquadria em alumínio 5' },
    { src: '/lovable-uploads/galeria/midia_6.jpg', alt: 'Projeto de esquadria em alumínio 6' },
    { src: '/lovable-uploads/galeria/midia_7.jpg', alt: 'Projeto de esquadria em alumínio 7' },
    { src: '/lovable-uploads/galeria/midia_8.jpg', alt: 'Projeto de esquadria em alumínio 8' },
    { src: '/lovable-uploads/galeria/midia_9.jpg', alt: 'Projeto de esquadria em alumínio 9' },
    { src: '/lovable-uploads/galeria/midia_10.jpg', alt: 'Projeto de esquadria em alumínio 10' },
    { src: '/lovable-uploads/galeria/midia_11.jpg', alt: 'Projeto de esquadria em alumínio 11' },
    { src: '/lovable-uploads/galeria/midia_12.jpg', alt: 'Projeto de esquadria em alumínio 12' },
    { src: '/lovable-uploads/galeria/midia_13.jpg', alt: 'Projeto de esquadria em alumínio 13' },
    { src: '/lovable-uploads/galeria/midia_14.jpg', alt: 'Projeto de esquadria em alumínio 14' },
    { src: '/lovable-uploads/galeria/midia_15.jpg', alt: 'Projeto de esquadria em alumínio 15' },
    { src: '/lovable-uploads/galeria/midia_16.jpg', alt: 'Projeto de esquadria em alumínio 16' },
    { src: '/lovable-uploads/galeria/midia_17.jpg', alt: 'Projeto de esquadria em alumínio 17' },
    { src: '/lovable-uploads/galeria/midia_18.jpg', alt: 'Projeto de esquadria em alumínio 18' },
    { src: '/lovable-uploads/galeria/midia_19.jpg', alt: 'Projeto de esquadria em alumínio 19' },
    { src: '/lovable-uploads/galeria/midia_20.jpg', alt: 'Projeto de esquadria em alumínio 20' },
    { src: '/lovable-uploads/galeria/midia_21.jpg', alt: 'Projeto de esquadria em alumínio 21' },
    { src: '/lovable-uploads/galeria/midia_22.jpg', alt: 'Projeto de esquadria em alumínio 22' },
    { src: '/lovable-uploads/galeria/midia_23.jpg', alt: 'Projeto de esquadria em alumínio 23' },
    { src: '/lovable-uploads/galeria/midia_24.jpg', alt: 'Projeto de esquadria em alumínio 24' }
  ];

  return (
    <section ref={sectionRef} id="projetos" className="py-8 xs:py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-4xl mx-auto mb-8 xs:mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm font-medium text-primary bg-primary/10 rounded-full">
            Nossos Projetos
          </div>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6 text-foreground font-display leading-tight">
            Um Pouco dos Nossos <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl leading-relaxed mx-auto px-2">
            Veja alguns dos trabalhos que já realizamos em esquadrias de alumínio, 
            box para banheiro e soluções personalizadas para nossos clientes.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 xs:mb-12 sm:mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0 relative">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <Carousel 
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto mb-8"
              setApi={setApi}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-0">
                        <div className="aspect-square overflow-hidden rounded-lg">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>

        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="bg-gradient-subtle rounded-2xl p-4 xs:p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 xs:mb-3 sm:mb-4 leading-tight">
              Gostou do que viu?
            </h3>
            <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-4 xs:mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Cada projeto é único e desenvolvido especialmente para atender às necessidades dos nossos clientes. 
              Entre em contato e vamos criar algo especial para você também!
            </p>
            
            <Button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-4 sm:py-6 text-xs xs:text-sm sm:text-base lg:text-lg font-semibold rounded-xl shadow-elevation hover:shadow-lg transition-all duration-300 group min-h-[44px]"
              aria-label="Solicitar orçamento para projeto personalizado via WhatsApp"
            >
              <Phone className="mr-1 xs:mr-2 h-3 w-3 xs:h-4 xs:w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="xs:hidden">Meu Projeto</span>
              <span className="hidden xs:inline sm:hidden">Quero Meu Projeto</span>
              <span className="hidden sm:inline">Quero Meu Projeto Personalizado</span>
            </Button>
          </div>
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Projeto ampliado"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
                aria-label="Fechar imagem ampliada"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NogueiraGallery;
