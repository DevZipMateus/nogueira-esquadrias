
import { Calendar, MapPin, Award, Users2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const ExperienceSection = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Expansão Digital',
      description: 'Implementação de atendimento digital e consultoria online para melhor acessibilidade.'
    },
    {
      year: '2020',
      title: 'Reconhecimento Regional',
      description: 'Eleito como um dos melhores advogados da região pela Associação dos Advogados.'
    },
    {
      year: '2015',
      title: 'Abertura do Escritório',
      description: 'Inauguração do escritório próprio com foco em atendimento personalizado.'
    },
    {
      year: '2010',
      title: 'Especialização',
      description: 'Conclusão da pós-graduação em Direito Civil e Processo Civil pela PUC-SP.'
    },
    {
      year: '2008',
      title: 'Início da Carreira',
      description: 'Registro na OAB/SP e início da atuação profissional em escritório renomado.'
    }
  ];

  const achievements = [
    { label: 'Casos de Sucesso', value: 95 },
    { label: 'Satisfação do Cliente', value: 98 },
    { label: 'Processos Ganhos', value: 87 },
    { label: 'Recomendações', value: 92 }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Experiência</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trajetória Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de uma década dedicada ao direito, construindo uma carreira sólida 
            baseada na confiança e nos resultados excepcionais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Histórico Profissional
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-muted-foreground/20 last:border-l-0">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-2" />
                  <div className="pb-6">
                    <Badge variant="secondary" className="mb-2">{item.year}</Badge>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Indicadores de Sucesso
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">{achievement.label}</span>
                    <span className="text-sm text-muted-foreground">{achievement.value}%</span>
                  </div>
                  <Progress value={achievement.value} className="h-3" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Users2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">5</div>
              <div className="text-muted-foreground">Estados de Atuação</div>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
