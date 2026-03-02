import { motion } from 'motion/react';
import { SectionWrapper } from './SectionWrapper';
import { ImageWithFallback } from './figma/ImageWithFallback';

import cpLogo from "../../assets/88bf3f31bd74a9fd9d845b4646521b19ff16b93f.png";
import mayekawaLogo from "../../assets/8af1f773480944f7a152dc7efbcd619a82544e28.png";
import logoGroup from "../../assets/89024a7aee91ed8cdbbd8868525e872ca8dcfa44.png";

export function OurCustomers() {
  const mainLogos = [
    { name: 'CP Group', src: cpLogo },
    { name: 'Mayekawa', src: mayekawaLogo },
  ];

  return (
    <SectionWrapper id="customers" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl text-[#1a3a6b] mb-4 font-bold"
          >
            ลูกค้าของเรา (Our Customers)
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            ความไว้วางใจจากบริษัทชั้นนำระดับประเทศ เป็นเครื่องยืนยันถึงคุณภาพ 
            และความเชี่ยวชาญในงานวิศวกรรมไฟฟ้าที่เราส่งมอบให้แก่ลูกค้าเสมอมา
          </motion.p>
        </div>

        <div className="flex flex-col items-center gap-16">
          {/* Main Customers (CP & Mayekawa) - Styled like the second image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full max-w-5xl">
            {mainLogos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.1 * index 
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-50 flex items-center justify-center h-64 transition-all duration-300 cursor-default"
              >
                <ImageWithFallback
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain p-4"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


