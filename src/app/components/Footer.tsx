import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from 'figma:asset/9d68ce4323e20f2687da32ca763fe4e87c181bcf.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-[#1a3a6b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={logo} alt="NTP Electric and Engineering" className="h-16 w-auto mb-4" />
              <p className="text-white/80 mb-4 leading-relaxed">
                Professional electrical and engineering solutions for industrial and commercial applications. Committed to excellence, safety, and innovation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-white/80">
                  <Phone size={18} />
                  <span>+66 (0) 2-123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Mail size={18} />
                  <span>info@ntpelectric.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin size={18} />
                  <span>123/45 Industrial Road, Bangkok 10150</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'projects', label: 'Projects' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl mb-4">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>Electrical Installation</li>
              <li>Industrial Automation</li>
              <li>Maintenance & Support</li>
              <li>Energy Consulting</li>
              <li>Safety Inspections</li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; 2026 NTP Electric and Engineering Co., Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
