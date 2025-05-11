import { Mail, Phone, MapPin, Monitor } from 'lucide-react';
import Container from '../components/Container';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Monitor className="h-6 w-6 text-teal-400 mr-2" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-slate-400 mb-4">
              Turn unused software licenses into cash. Fast, secure, and trusted by businesses worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">License Types</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Adobe Creative Cloud</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Microsoft Office</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">AutoCAD</a></li>
              <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">Enterprise Software</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-slate-400">contact@softsell.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-2 mt-0.5" />
                <span className="text-slate-400">123 Tech Plaza, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-slate-500 text-sm">
          <p>&copy; {year} SoftSell. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;