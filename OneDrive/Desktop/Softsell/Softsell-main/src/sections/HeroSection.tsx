import { ArrowRight } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Turn Unused Software
              <span className="text-teal-600 block">Into Cash</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 mb-8 max-w-xl">
              SoftSell helps businesses recover value from unused software licenses with our secure, 
              transparent, and industry-leading resale platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToContact} size="lg" className="group">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={scrollToContact} variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Software license management" 
                className="relative rounded-xl shadow-xl w-full object-cover z-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;