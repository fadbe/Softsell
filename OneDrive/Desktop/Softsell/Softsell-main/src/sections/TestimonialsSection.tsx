import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
};

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, image }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
      <div className="flex items-center gap-1 text-yellow-400 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="currentColor" />
        ))}
      </div>
      <p className="text-slate-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-bold text-slate-900">{name}</p>
          <p className="text-slate-600 text-sm">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SoftSell helped us recover over $75,000 from unused software licenses. The process was incredibly smooth and their team was professional throughout.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechStream Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "As a growing startup, managing software costs is crucial. SoftSell's platform allowed us to recoup significant value from licenses we no longer needed.",
      name: "Michael Chen",
      role: "Operations Director",
      company: "Quantum Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "I was skeptical at first, but SoftSell delivered on their promises. We received fair market value for our licenses and payment arrived promptly.",
      name: "Olivia Martinez",
      role: "Finance Manager",
      company: "Global Enterprises",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "The valuation SoftSell provided was significantly higher than competitors. Their market knowledge and buyer network is clearly superior.",
      name: "David Wilson",
      role: "IT Director",
      company: "Innovate Media",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialPairs = [];
  
  // Group testimonials into pairs for the slider
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialPairs.push(testimonials.slice(i, i + 2));
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialPairs.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonialPairs.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="What Our Clients Say" 
          subtitle="Don't just take our word for it. Hear from businesses that have successfully recovered value through SoftSell."
        />
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialPairs.map((pair, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pair.map((testimonial, i) => (
                      <Testimonial 
                        key={i}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        role={testimonial.role}
                        company={testimonial.company}
                        image={testimonial.image}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md text-slate-700 hover:text-teal-600 hidden md:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md text-slate-700 hover:text-teal-600 hidden md:block"
            aria-label="Next testimonials"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots for mobile navigation */}
          <div className="flex justify-center mt-8 md:hidden">
            {testimonialPairs.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? 'bg-teal-600' : 'bg-slate-300'}`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;