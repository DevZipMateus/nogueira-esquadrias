
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity"
              aria-label="Nogueira Esquadrias - Página inicial"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/36048940-5c6b-4c17-9ff7-1586aa348f74.png" 
                  alt="Nogueira Esquadrias - Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-blue-200 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Info & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Contact Info - Progressive disclosure */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4 text-xs lg:text-sm text-white">
              <a 
                href="tel:+5551985500738"
                className="flex items-center space-x-1 lg:space-x-2 hover:text-blue-200 transition-colors"
                aria-label="Ligar para (51) 98550-0738"
              >
                <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
                <span className="hidden lg:inline">(51) 98550-0738</span>
                <span className="lg:hidden">Ligar</span>
              </a>
              <span className="w-px h-3 lg:h-4 bg-white/30 hidden xl:inline"></span>
              <a 
                href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                className="hidden xl:flex items-center space-x-2 hover:text-blue-200 transition-colors"
                aria-label="Enviar email"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white hover:text-blue-200 p-1 sm:p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-blue-600/95 backdrop-blur-md">
            <nav className="py-3 sm:py-4 space-y-1 sm:space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 sm:px-4 py-2 sm:py-2.5 text-white hover:bg-white/10 hover:text-blue-100 transition-colors font-medium rounded-md text-sm sm:text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/20 pt-3 sm:pt-4 px-3 sm:px-4 space-y-2">
                <a 
                  href="tel:+5551985500738"
                  className="flex items-center space-x-3 py-2 text-white hover:text-blue-100 transition-colors text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  <span>(51) 98550-0738</span>
                </a>
                <a 
                  href="mailto:nogueiraesquadriasdealuminio@gmail.com"
                  className="flex items-center space-x-3 py-2 text-white hover:text-blue-100 transition-colors text-sm sm:text-base"
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
