import { Phone, Mail, MessageCircle, Facebook } from 'lucide-react';

export function ContactSidebar() {
  const contactItems = [
    {
      icon: Phone,
      label: 'Phone',
      href: 'tel:+66123456789',
      color: '#1a3a6b',
    },
    {
      icon: MessageCircle,
      label: 'LINE',
      href: 'https://line.me',
      color: '#00B900',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://facebook.com',
      color: '#1877F2',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@ntpelectric.com',
      color: '#dc2626',
    },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div
                className="w-14 h-14 flex items-center justify-center text-white transition-all duration-300 hover:w-16"
                style={{ backgroundColor: item.color }}
              >
                <Icon size={24} />
              </div>
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-lg">
        <div className="flex justify-around items-center py-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center text-white rounded-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs text-gray-600">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}