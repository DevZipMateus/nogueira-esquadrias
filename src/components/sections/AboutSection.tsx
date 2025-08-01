
import { Scale, Users, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  const values = [
    {
      icon: Scale,
      title: 'Justiça',
      description: 'Comprometidos com a busca incansável pela justiça e equidade em todos os casos.'
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Cada cliente recebe atenção dedicada e soluções jurídicas sob medida.'
    },
    {
      icon: Trophy,
      title: 'Excelência',
      description: 'Padrão de excelência reconhecido em todas as áreas de atuação jurídica.'
    },
    {
      icon: Target,
      title: 'Resultados Eficazes',
      description: 'Foco em estratégias que garantem os melhores resultados para nossos clientes.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Sobre Nós</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tradição e Inovação Jurídica
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Com mais de 15 anos de experiência, oferecemos soluções jurídicas completas 
            com foco na excelência e satisfação do cliente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Dr. Nogueira - Advogado Especialista
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Graduado em Direito pela Universidade de São Paulo (USP), com pós-graduação 
                em Direito Civil e Processo Civil. Membro efetivo da OAB/SP desde 2008.
              </p>
              <p>
                Especialista em diversas áreas do direito, com foco principal em Direito Civil, 
                Empresarial e Trabalhista. Reconhecido pela dedicação e pelos resultados 
                excepcionais obtidos para seus clientes.
              </p>
              <p>
                Palestrante em seminários jurídicos e autor de diversos artigos publicados 
                em revistas especializadas do setor.
              </p>
            </div>
            
            <Separator className="my-6" />
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Casos Resolvidos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-6 w-6 text-primary" />
                  Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecer serviços jurídicos de excelência, defendendo os direitos e 
                  interesses de nossos clientes com ética, transparência e dedicação integral.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
