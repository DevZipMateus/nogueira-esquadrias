
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
        background: 'linear-gradient(to right, white 0%, white 10%, #00adef 20%, #00adef 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 xs:h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 min-w-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
              aria-label="Nogueira Esquadrias - Página inicial"
            >
              <div className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/lovable-uploads/36048940-5c6b-4c17-9ff7-1586aa348f74.png" 
                  alt="Nogueira Esquadrias - Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm xl:text-base 2xl:text-lg whitespace-nowrap px-2 py-1"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Contact Info - Progressive disclosure */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-3 text-xs lg:text-sm xl:text-base text-white">
              <a 
                href="tel:+5551985500738"
                className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-200 transition-colors px-1 py-1 rounded"
                aria-label="Ligar para (51) 98550-0738"
              >
                <Phone className="h-3 w-3 lg:h-4 lg:w-4 xl:h-5 xl:w-5 flex-shrink-0" />
                <span className="hidden lg:inline whitespace-nowrap text-xs xl:text-sm">(51) 98550-0738</span>
                <span className="lg:hidden text-xs">Ligar</span>
              </a>
              <span className="w-px h-3 lg:h-4 bg-white/30 hidden xl:inline"></span>
              <a 
                href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                className="hidden xl:flex items-center space-x-1 hover:text-blue-200 transition-colors px-1 py-1 rounded"
                aria-label="Enviar email"
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs whitespace-nowrap">Email</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-blue-200 p-1 xs:p-1.5 sm:p-2 min-w-0 h-8 w-8 xs:h-9 xs:w-9 sm:h-10 sm:w-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? 
                <X className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" /> : 
                <Menu className="h-4 w-4 xs:h-5 xs:w-5 sm:h-6 sm:w-6" />
              }
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20" style={{ backgroundColor: 'rgba(0, 173, 239, 0.95)', backdropFilter: 'blur(12px)' }}>
            <nav className="py-2 xs:py-3 sm:py-4 space-y-0.5 xs:space-y-1 sm:space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 xs:px-4 py-2 xs:py-2.5 sm:py-3 text-white hover:bg-white/10 hover:text-blue-100 transition-colors font-medium rounded-md text-sm xs:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-2 xs:pt-3 sm:pt-4 px-3 xs:px-4 space-y-1 xs:space-y-2">
                <a 
                  href="tel:+5551985500738"
                  className="flex items-center space-x-2 xs:space-x-3 py-2 text-white hover:text-blue-100 transition-colors text-sm xs:text-base"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">(51) 98550-0738</span>
                </a>
                <a 
                  href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                  className="flex items-center space-x-2 xs:space-x-3 py-2 text-white hover:text-blue-100 transition-colors text-sm xs:text-base break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs xs:text-sm">Enviar Email</span>
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
