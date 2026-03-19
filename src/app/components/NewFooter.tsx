import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/9d68ce4323e20f2687da32ca763fe4e87c181bcf.png";

export function NewFooter() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      navigate(`/#${sectionId}`);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'หน้าแรก' },
    { id: 'about', label: 'เกี่ยวกับเรา' },
    { path: '/about', label: 'ประวัติความเป็นมา' },
    { id: 'services', label: 'บริการ' },
    { id: 'projects', label: 'โครงการ' },
    { id: 'certifications', label: 'ใบรับรอง' },
    { id: 'customers', label: 'ลูกค้า' },
  ];

  const services = [
    'ติดตั้งระบบไฟฟ้า',
    'ระบบอัตโนมัติอุตสาหกรรม',
    'ตู้ควบคุมไฟฟ้า',
    'บำรุงรักษาและซ่อมแซม',
    'ตรวจสอบความปลอดภัย',
  ];

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
              <div className="mb-4 bg-white p-2 inline-block rounded-lg shadow-sm">
                <img src={logo} alt="NTP Electric and Engineering" className="h-16 w-auto" />
              </div>
              <p className="text-white/80 mb-4 leading-relaxed">
                ผู้เชี่ยวชาญด้านการ ออกแบบ ติดตั้งงานระบบไฟฟ้าโรงงาน 
                <br />
                และงานระบบไฟฟ้าห้องเย็น
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+66812345678"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+66 (0) 81-234-5678</span>
                </a>
                <a
                  href="mailto:info@ntpelectric.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@ntpelectric.com</span>
                </a>
                <a
                  href="https://line.me/ti/p/~ntpelectric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <MessageCircle size={18} className="flex-shrink-0" />
                  <span>@ntpelectric</span>
                </a>
                <div className="flex items-start gap-3 text-white/80">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span>123/45 ถนนอุตสาหกรรม แขวงบางนา เขตบางนา กรุงเทพฯ 10260</span>
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
            <h4 className="text-xl mb-4 font-semibold">เมนูหลัก</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id!)}
                      className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path!}
                      className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                >
                  ติดต่อเรา
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl mb-4 font-semibold">บริการของเรา</h4>
            <ul className="space-y-3 text-white/80">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; 2026 NTP Electric and Engineering Co., Ltd. สงวนลิขสิทธิ์
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <button className="hover:text-white transition-colors">
                นโยบายความเป็นส่วนตัว
              </button>
              <button className="hover:text-white transition-colors">
                เงื่อนไขการใช้งาน
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
