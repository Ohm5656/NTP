import { motion } from 'motion/react';
import { Target, Eye, Award, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import myImage from "../../assets/picture_2.jpg";
export function AboutPage() {
  const navigate = useNavigate();
  const values = [
    {
      icon: Target,
      title: 'พันธกิจของเรา',
      description: 'ส่งมอบโซลูชั่นด้านระบบไฟฟ้าและวิศวกรรมที่ล้ำสมัยซึ่งเกินความคาดหมายของลูกค้า ในขณะที่ยังคงรักษามาตรฐานสูงสุดด้านความปลอดภัยและคุณภาพ',
    },
    {
      icon: Eye,
      title: 'วิสัยทัศน์ของเรา',
      description: 'ก้าวสู่การเป็นบริษัทวิศวกรรมไฟฟ้าชั้นนำในภูมิภาค ที่ได้รับการยอมรับในด้านความเป็นเลิศทางเทคนิคและการดำเนินงานที่ยั่งยืน',
    },
    {
      icon: Award,
      title: 'ความมุ่งมั่นด้านคุณภาพ',
      description: 'เรามุ่งมั่นที่จะส่งมอบโครงการให้ตรงเวลา ภายใต้งบประมาณ และตามมาตรฐานคุณภาพสูงสุดด้วยความพึงพอใจของลูกค้าอย่างสมบูรณ์',
    },
    {
      icon: Users,
      title: 'ทีมงานของเรา',
      description: 'ทีมงานของเราประกอบด้วยวิศวกร ช่างเทคนิค และผู้จัดการโครงการที่มีคุณสมบัติสูงและมีประสบการณ์ ซึ่งอุทิศตนเพื่อความเป็นเลิศ',
    },
  ];

  const milestones = [
    { year: '1998', title: 'ก่อตั้งบริษัท', description: 'เริ่มดำเนินธุรกิจในฐานะผู้รับเหมาไฟฟ้าขนาดเล็ก' },
    { year: '2005', title: 'ขยายบริการทางวิศวกรรม', description: 'เริ่มให้บริการออกแบบและที่ปรึกษาด้านวิศวกรรมไฟฟ้า' },
    { year: '2012', title: 'ได้รับการรับรอง ISO ครั้งแรก', description: 'ได้รับมาตรฐาน ISO 9001:2008 สำหรับระบบการจัดการคุณภาพ' },
    { year: '2018', title: 'ก้าวสู่ระดับสากล', description: 'เริ่มดำเนินโครงการขนาดใหญ่ในภูมิภาคเอเชียตะวันออกเฉียงใต้' },
    { year: '2021', title: 'ผู้นำด้านเทคโนโลยีอัจฉริยะ', description: 'นำเทคโนโลยี IoT และ Automation มาใช้ในงานวิศวกรรมอย่างเต็มรูปแบบ' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="bg-[#1a3a6b] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-white mb-6 font-bold"
          >
            เกี่ยวกับ NTP Electric and Engineering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            สร้างอนาคตของวิศวกรรมไฟฟ้าด้วยความเชี่ยวชาญและนวัตกรรมมานานกว่า 25 ปี
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl text-[#1a3a6b] mb-8 font-bold flex items-center gap-3">
                <span className="w-12 h-1 bg-[#dc2626]"></span>
                ประวัติความเป็นมา
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  ก่อตั้งขึ้นเมื่อกว่า 25 ปีที่แล้ว บริษัท เอ็นทีพี อิเล็คทริค แอนด์ เอ็นจิเนียริ่ง จำกัด ได้เติบโตจากผู้รับเหมาไฟฟ้าขนาดเล็กจนกลายเป็นหนึ่งในบริษัทวิศวกรรมไฟฟ้าชั้นนำของประเทศไทย
                </p>
                <p>
                  การเดินทางของเราโดดเด่นด้วยนวัตกรรมที่ต่อเนื่อง ความมุ่งมั่นในคุณภาพที่ไม่เปลี่ยนแปลง และการอุทิศตนเพื่อความพึงพอใจของลูกค้า ซึ่งทำให้เราได้รับความไว้วางใจจากลูกค้ารายใหญ่ทั้งในภาคอุตสาหกรรมและพาณิชยกรรม
                </p>
                <p>
                  ปัจจุบัน เรามีทีมว���ศวกรและช่างเทคนิคที่ผ่านการรับรองกว่า 100 ท่าน บริหารจัดการโครงการในหลากหลายภาคส่วน และยังคงกำหนดมาตรฐานอุตสาหกรรมเพื่อความเป็นเลิศด้านวิศวกรรมไฟฟ้า
                </p>
              </div>
            </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
        >
          <ImageWithFallback
            src={myImage}
            alt="Modern Engineering"
            className="w-full h-full object-cover"
          />

          {/* 🔥 ทำให้มืดทั้งภาพ */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          {/* ข้อความ */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-white text-lg text-center md:text-xl font-bold italic leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
              "ความพึงพอใจของลูกค้า คือหัวใจหลักของงานเรา"
            </p>
          </div>
        </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#1a3a6b] mb-4 font-bold">เส้นทางแห่งความสำเร็จ</h2>
            <p className="text-xl text-gray-600">ก้าวที่สำคัญของ NTP Electric ตลอดหลายทศวรรษ</p>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#1a3a6b]/10 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="bg-white w-16 h-16 rounded-full border-4 border-[#1a3a6b] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-[#1a3a6b] font-bold">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a3a6b] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl text-[#1a3a6b] mb-4 font-bold">ค่านิยมของเรา</h2>
            <p className="text-xl text-gray-600">หลักการที่ชี้นำทุกสิ่งที่เราทำ</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-[#1a3a6b] hover:text-white transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#1a3a6b] group-hover:bg-[#dc2626] rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/80 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#dc2626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">
            พร้อมที่จะเริ่มโครงการของคุณกับเราหรือยัง?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#dc2626] px-10 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            onClick={() => navigate('/contact')}
          >
            ติดต่อเราวันนี้
          </motion.button>
        </div>
      </section>
    </div>
  );
}
