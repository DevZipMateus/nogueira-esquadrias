
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
    { label: 'Projetos', href: 'projetos' },
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
        background: 'linear-gradient(to right, white 0%, white 10%, #00adef 20%, #00adef 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity touch-manipulation p-1"
              aria-label="Nogueira Esquadrias - Página inicial"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/lovable-uploads/36048940-5c6b-4c17-9ff7-1586aa348f74.png" 
                  alt="Nogueira Esquadrias - Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm lg:text-base whitespace-nowrap px-2 py-2 rounded-md touch-manipulation min-h-[44px] flex items-center"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Contact Info - Progressive disclosure */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-white">
              <a 
                href="tel:+5551985500738"
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors px-2 py-2 rounded-md touch-manipulation min-h-[44px]"
                aria-label="Ligar para (51) 98550-0738"
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="hidden lg:inline text-sm">(51) 98550-0738</span>
                <span className="lg:hidden text-xs">Ligar</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-blue-200 hover:bg-white/10 min-h-[44px] min-w-[44px] p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? 
                <X className="h-5 w-5" /> : 
                <Menu className="h-5 w-5" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 safe-area-inset-bottom" style={{ backgroundColor: 'rgba(0, 173, 239, 0.95)', backdropFilter: 'blur(12px)' }}>
            <nav className="py-2 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-white hover:bg-white/10 hover:text-blue-100 transition-colors font-medium rounded-md text-base touch-manipulation min-h-[48px]"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 px-4 space-y-2">
                <a 
                  href="tel:+5551985500738"
                  className="flex items-center space-x-3 py-3 text-white hover:text-blue-100 hover:bg-white/10 transition-colors text-sm rounded-md px-2 touch-manipulation min-h-[48px]"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(51) 98550-0738</span>
                </a>
                <a 
                  href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                  className="flex items-center space-x-3 py-3 text-white hover:text-blue-100 hover:bg-white/10 transition-colors text-sm rounded-md px-2 touch-manipulation min-h-[48px]"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm">Enviar Email</span>
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
