
import { 
  Briefcase, 
  Building, 
  Users, 
  FileText, 
  Shield, 
  Home,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Direito Empresarial',
      description: 'Consultoria completa para empresas, contratos comerciais, fusões e aquisições.',
      features: ['Contratos Comerciais', 'Compliance', 'Recuperação Judicial', 'M&A']
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Defesa em processos trabalhistas e consultoria preventiva para empresas.',
      features: ['Processos Trabalhistas', 'Consultoria Preventiva', 'Compliance Trabalhista', 'Negociações']
    },
    {
      icon: FileText,
      title: 'Direito Civil',
      description: 'Soluções em contratos, responsabilidade civil e direitos do consumidor.',
      features: ['Contratos Civis', 'Responsabilidade Civil', 'Direito do Consumidor', 'Indenizações']
    },
    {
      icon: Home,
      title: 'Direito Imobiliário',
      description: 'Assessoria completa em transações imobiliárias e regularização de imóveis.',
      features: ['Compra e Venda', 'Regularização', 'Incorporações', 'Locações']
    },
    {
      icon: Shield,
      title: 'Direito Penal',
      description: 'Defesa criminal com estratégias eficazes para todos os tipos de processos.',
      features: ['Defesa Criminal', 'Habeas Corpus', 'Recursos', 'Acompanhamento Processual']
    },
    {
      icon: Building,
      title: 'Direito Tributário',
      description: 'Planejamento tributário e defesa em questões fiscais para pessoas físicas e jurídicas.',
      features: ['Planejamento Tributário', 'Defesas Fiscais', 'Recuperação de Créditos', 'Compliance Fiscal']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Serviços</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos assessoria jurídica especializada em diversas áreas do direito, 
            sempre com foco na excelência e nos melhores resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-primary text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Ajuda Jurídica?
              </h3>
              <p className="mb-6 opacity-90">
                Agende uma consulta gratuita e descubra como podemos ajudá-lo a resolver 
                suas questões jurídicas com eficiência e segurança.
              </p>
              <Button size="lg" variant="secondary">
                Agendar Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
