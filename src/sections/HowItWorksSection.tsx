import { Upload, DollarSign, CreditCard } from 'lucide-react';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import { cn } from '../utils/cn';

type StepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
};

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Upload Licenses",
      description: "Provide details about your unused software licenses through our secure portal."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Get Valuation",
      description: "Receive a competitive valuation based on current market demand within 24 hours."
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 3 business days."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <Container>
        <SectionHeading 
          title="How It Works" 
          subtitle="Our streamlined process makes selling your unused software licenses quick and hassle-free."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {steps.map((step, index) => (
            <Step 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={index + 1}
            />
          ))}
          
          {/* Connection line between steps (visible on desktop only) */}
          <div className="absolute top-8 left-[25%] right-[25%] hidden md:block">
            <div className="h-0.5 bg-teal-200"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;