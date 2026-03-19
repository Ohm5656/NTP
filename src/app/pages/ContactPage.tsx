import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Clock, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'โทรศัพท์',
      value: '+66 (0) 81-234-5678',
      href: 'tel:+66812345678',
      color: 'bg-green-600',
    },
    {
      icon: MessageCircle,
      title: 'LINE',
      value: '@ntpelectric',
      href: 'https://line.me/ti/p/~ntpelectric',
      color: 'bg-[#00B900]',
    },
    {
      icon: Facebook,
      title: 'Facebook',
      value: 'NTP Electric',
      href: 'https://facebook.com/ntpelectric',
      color: 'bg-[#1877F2]',
    },
    {
      icon: Mail,
      title: 'อีเมล',
      value: 'ntpelectric2017@gmail.com',
      href: 'mailto:ntpelectric2017@gmail.com',
      color: 'bg-[#dc2626]',
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-32 lg:pb-20">
      {/* Header Section */}
      <section className="bg-[#1a3a6b] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl text-white mb-6"
          >
            ติดต่อเรา
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            พร้อมให้คำปรึกษาและให้บริการด้านระบบไฟฟ้าและวิศวกรรมสำหรับโครงการของคุณ
          </motion.p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${method.color} text-white p-6 rounded-lg hover:opacity-90 transition-opacity group`}
                >
                  <Icon size={32} className="mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                  <p className="text-white/90">{method.value}</p>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl text-[#1a3a6b] mb-6 font-semibold">ส่งข้อความถึงเรา</h2>
              <p className="text-gray-600 mb-8">
                กรอกแบบฟอร์มด้านล่างและทีมงานของเราจะติดต่อกลับโดยเร็วที่สุด
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-colors"
                    placeholder="กรุณากรอกชื่อของคุณ"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      เบอร์โทรศัพท์ *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-colors"
                      placeholder="081-234-5678"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    บริษัท / องค์กร
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-colors"
                    placeholder="ชื่อบริษัทของคุณ (ถ้ามี)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    ข้อความ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-colors resize-none"
                    placeholder="กรุณาอธิบายความต้องการของคุณ"
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md"
                  >
                    ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็วที่สุด
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-lg"
                >
                  {isSubmitting ? (
                    'กำลังส่ง...'
                  ) : (
                    <>
                      <Send size={20} />
                      ส่งข้อความ
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Office Information */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-[#1a3a6b] mb-6 font-semibold">ข้อมูลสำนักงาน</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a3a6b] rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">ที่อยู่</h4>
                      <p className="text-gray-600 leading-relaxed">
                       333/51 หมู่ 19<br />
                        ตำบลบางพลีใหญ่ อำเภอบางพลี <br />
                        สมุทรปราการ 10540 
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1a3a6b] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">เวลาทำการ</h4>
                      <p className="text-gray-600">
                        จันทร์ - เสาร์: 08:00 - 17:00<br />
                        อาทิตย์: ปิดทำการ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#dc2626] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">สายด่วนฉุกเฉิน</h4>
                      <p className="text-gray-600">
                        24/7 Emergency Support<br />
                        <a href="tel:+66812345678" className="text-[#dc2626] hover:underline">
                          +66 (0) 81-234-5678
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl text-[#1a3a6b] mb-6 font-semibold">แผนที่</h3>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0!2d100.6!3d13.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ1JzAwLjAiTiAxMDDCsDM2JzAwLjAiRQ!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NTP Electric Location"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
