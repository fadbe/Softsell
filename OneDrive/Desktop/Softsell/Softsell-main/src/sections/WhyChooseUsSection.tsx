import { Shield, Clock, Banknote, Award } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

type FeatureProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center text-teal-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Transactions",
      description: "Bank-level encryption and secure transfer protocols protect your data and transactions at every step."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Process",
      description: "Get valuations within 24 hours and payment within 3 business days after accepting our offer."
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      title: "Best Market Value",
      description: "Our extensive network of buyers ensures you get the highest possible value for your licenses."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Trusted by 1,000+ Clients",
      description: "Join over a thousand satisfied businesses that have successfully recovered value through SoftSell."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-slate-50">
      <Container>
        <SectionHeading 
          title="Why Choose Us" 
          subtitle="SoftSell offers unmatched benefits that make us the industry leader in software license resale."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUsSection;