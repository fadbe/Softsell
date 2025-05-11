import { useState } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

type FormState = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormState]?: string;
};

const ContactSection = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseTypes = [
    'Adobe Creative Cloud',
    'Microsoft Office',
    'AutoCAD',
    'Autodesk Maya',
    'Windows Server',
    'SQL Server',
    'Oracle Database',
    'SAP',
    'Salesforce',
    'Other Enterprise Software'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formState.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formState.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formState);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after successful submission
        setFormState({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Get a Free Quote" 
            subtitle="Fill out the form below to get a valuation for your unused software licenses. Our team will get back to you within 24 hours."
          />
          
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-green-700 mb-3">Thank You!</h3>
              <p className="text-green-600 mb-4">
                Your message has been received. Our team will review your information and get back to you within 24 hours with a valuation.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="secondary"
              >
                Submit Another Request
              </Button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-white shadow-xl rounded-xl p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="company" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.company ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                    placeholder="Acme Inc."
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="licenseType" 
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    License Type*
                  </label>
                  <select
                    id="licenseType"
                    name="licenseType"
                    value={formState.licenseType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.licenseType ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white`}
                  >
                    <option value="">Select License Type</option>
                    {licenseTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.licenseType && (
                    <p className="mt-1 text-sm text-red-600">{errors.licenseType}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-slate-300'} focus:outline-none focus:ring-2 focus:ring-teal-500`}
                  placeholder="Please provide details about your software licenses (quantity, version, purchase date, etc.)"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Your Free Quote'}
              </Button>
              
              <p className="mt-4 text-sm text-slate-500 text-center">
                By submitting this form, you agree to our <a href="#" className="text-teal-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-teal-600 hover:underline">Terms of Service</a>.
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;