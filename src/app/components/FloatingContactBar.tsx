import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingContactBar() {
  const contacts = [
    {
      icon: Phone,
      label: 'โทร',
      href: 'tel:+66812345678',
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      icon: MessageCircle,
      label: 'LINE',
      href: 'https://line.me/ti/p/~ntpelectric',
      color: 'bg-[#00B900] hover:bg-[#00A000]',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com/ntpelectric',
      color: 'bg-[#1877F2] hover:bg-[#0C63D4]',
    },
    {
      icon: Mail,
      label: 'อีเมล',
      href: 'mailto:info@ntpelectric.com',
      color: 'bg-[#dc2626] hover:bg-[#b91c1c]',
    },
  ];

  return (
    <>
      {/* Desktop Floating Bar - Right Side */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-2"
      >
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${contact.color} text-white p-4 transition-all duration-300 group flex items-center shadow-lg`}
              title={contact.label}
            >
              <Icon size={24} />
              <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 whitespace-nowrap">
                {contact.label}
              </span>
            </a>
          );
        })}
      </motion.div>

      {/* Mobile Floating Bar - Bottom */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="lg:hidden fixed bottom-6 left-4 right-4 z-40 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      >
        <div className="grid grid-cols-4 gap-0">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col items-center justify-center py-4 px-2 hover:bg-gray-50 transition-colors gap-1 border-r last:border-r-0 border-gray-100"
              >
                <div className={`p-2 rounded-full ${contact.color} text-white`}>
                  <Icon size={20} />
                </div>
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-tight">{contact.label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
