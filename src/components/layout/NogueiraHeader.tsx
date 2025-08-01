
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NogueiraHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: 'Início', href: 'hero' },
    { label: 'Sobre', href: 'sobre' },
    { label: 'Serviços', href: 'servicos' },
    { label: 'Localização', href: 'localizacao' },
    { label: 'Contato', href: 'contato' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'backdrop-blur-md shadow-elevation border-b border-border' 
          : ''
      )}
      style={{
        background: 'linear-gradient(to right, white 0%, white 10%, #0070F0 20%, #0070F0 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              aria-label="Nogueira Esquadrias - Página inicial"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/b7ba1a08-6e0c-4679-af14-a56a37947624.png" 
                  alt="Nogueira Esquadrias"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden xl:flex items-center space-x-4 text-sm text-white">
              <a 
                href="tel:+5551985500738"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                aria-label="Ligar para (51) 98550-0738"
              >
                <Phone className="h-4 w-4" />
                <span>(51) 98550-0738</span>
              </a>
              <span className="w-px h-4 bg-white/30"></span>
              <a 
                href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                aria-label="Enviar email"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden 2xl:inline text-white">Email</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-blue-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-blue-600/95 backdrop-blur-md">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 hover:text-blue-100 transition-colors font-medium rounded-md"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-4 px-4 space-y-2">
                <a 
                  href="tel:+5551985500738"
                  className="flex items-center space-x-3 py-2 text-white hover:text-blue-100 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>(51) 98550-0738</span>
                </a>
                <a 
                  href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                  className="flex items-center space-x-3 py-2 text-white hover:text-blue-100 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Enviar Email</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NogueiraHeader;
