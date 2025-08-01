
import { useEffect, useRef, useState } from 'react';
import { Shield, Award, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const NogueiraAbout = () => {
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

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Qualidade Garantida',
      description: 'Produtos fabricados com materiais premium e acabamento impecável, seguindo os mais altos padrões de qualidade.'
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: 'Pontualidade',
      description: 'Cumprimos prazos rigorosamente, respeitando o cronograma acordado com cada cliente.'
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Atendimento Personalizado',
      description: 'Cada projeto é único. Oferecemos soluções sob medida para atender suas necessidades específicas.'
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: 'Foco no Cliente',
      description: 'Sua satisfação é nossa prioridade. Trabalhamos para superar suas expectativas a cada projeto.'
    }
  ];

  const achievements = [
    { number: '30+', label: 'Anos de Experiência' },
    { number: '1000+', label: 'Projetos Concluídos' },
    { number: '100%', label: 'Clientes Satisfeitos' },
    { number: '2', label: 'Estados Atendidos' }
  ];

  const differentials = [
    'Fabricação 100% sob medida',
    'Materiais de primeira qualidade',
    'Equipe especializada e experiente',
    'Atendimento em RS e SC',
    'Orçamento gratuito e sem compromisso',
    'Garantia em todos os produtos',
    'Manutenção e pós-venda',
    'Visita técnica quando necessário'
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="section-container">
        <div className={`text-center max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Sobre Nós
          </div>
          <h2 className="section-title">
            30 Anos de <span className="text-primary">Tradição e Qualidade</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Profissional com 30 anos de experiência, atuando no mercado de esquadrias de alumínio e vidro temperado 
            no Rio Grande do Sul e Santa Catarina, sempre buscando a satisfação dos clientes a cada serviço entregue.
          </p>
        </div>

        {/* Story Section */}
        <div className={`mb-20 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                Nossa História de Sucesso
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Há três décadas, a Nogueira Esquadrias iniciou sua trajetória no mercado de esquadrias de alumínio 
                  e vidro temperado, sempre com o compromisso de oferecer produtos de alta qualidade e um atendimento 
                  diferenciado aos nossos clientes.
                </p>
                <p>
                  Ao longo desses anos, nos consolidamos como referência no mercado, expandindo nosso atendimento 
                  para todo o Rio Grande do Sul e Santa Catarina. Nossa experiência nos permite entregar soluções 
                  personalizadas, sempre priorizando a qualidade, responsabilidade e segurança.
                </p>
                <p>
                  Cada projeto é desenvolvido sob medida, utilizando materiais de primeira linha e técnicas 
                  especializadas para garantir durabilidade e beleza aos seus ambientes.
                </p>
              </div>
              
              <blockquote className="mt-8 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <p className="text-lg font-medium text-foreground italic">
                  "Sua casa merece o melhor em alumínio e vidro."
                </p>
                <cite className="block mt-2 text-sm text-muted-foreground">
                  - Filosofia da Nogueira Esquadrias
                </cite>
              </blockquote>
            </div>
            
            <div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center">
                    <Award className="h-24 w-24 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-foreground mb-2">30 Anos</h4>
                    <p className="text-muted-foreground">de Excelência no Mercado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className={`mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className={`mb-20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os pilares que sustentam nossa excelência e nos diferenciam no mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`card-hover text-center p-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className={`${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
          <div className="bg-gradient-subtle rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Por que Escolher a Nogueira Esquadrias?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Conheça os diferenciais que fazem da Nogueira Esquadrias a escolha certa para seu projeto
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {differentials.map((differential, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-subtle"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{differential}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NogueiraAbout;
