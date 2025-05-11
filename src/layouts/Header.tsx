import { useState, useEffect } from 'react';
import { Menu, X, Monitor } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Monitor className="h-8 w-8 text-teal-600 mr-2" />
            <span className="text-xl font-bold text-slate-900">SoftSell</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-slate-700 hover:text-teal-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('why-choose-us')}
              className="text-slate-700 hover:text-teal-600 transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-slate-700 hover:text-teal-600 transition-colors"
            >
              Testimonials
            </button>
            <Button onClick={() => scrollToSection('contact')} size="sm">
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-lg absolute left-4 right-4">
            <div className="flex flex-col space-y-3 p-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-slate-700 hover:text-teal-600 transition-colors py-2"
              >
                Testimonials
              </button>
              <Button onClick={() => scrollToSection('contact')} className="w-full">
                Get a Quote
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;