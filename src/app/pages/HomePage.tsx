import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Building2,
  Factory,
  Wrench,
  Lightbulb,
  Shield,
  FileCheck,
  Award,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectGalleryGrid } from "../components/ProjectGalleryGrid";
import { CountUpAnimation } from "../components/CountUpAnimation";
import { OurCustomers } from "../components/OurCustomers";
import { projects } from "../../data/projects";
import myImage from "../../assets/picture_1.jpg";

export function HomePage() {
  const services = [
    {
      icon: Zap,
      title: "ติดตั้งระบบไฟฟ้า",
      description:
        "ออกแบบและติดตั้งระบบไฟฟ้าครบวงจรสำหรับโครงการอุตสาหกรรมและพาณิชยกรรม พร้อมการปฏิบัติตามมาตรฐานความปลอดภัย",
    },
    {
      icon: Building2,
      title: "ระบบไฟฟ้าพาณิชย์",
      description:
        "โซลูชันระบบไฟฟ้าครบวงจรสำหรับอาคารสำนักงาน ร้านค้าปลีก และสถานประกอบการพาณิชย์",
    },
    {
      icon: Factory,
      title: "ระบบอัตโนมัติอุตสาหกรรม",
      description:
        "ระบบอัตโนมัติขั้นสูง โปรแกรม PLC และออกแบบตู้ควบคุมสำหรับโรงงานผลิต",
    },
    {
      icon: Wrench,
      title: "บำรุงรักษาและซ่อมแซม",
      description:
        "บริการบำรุงรักษาตามกำหนดและสนับสนุนฉุกเฉิน 24/7 เพื่อให้ระบบไฟฟ้าของคุณทำงานได้อย่างต่อเนื่อง",
    },
    {
      icon: Lightbulb,
      title: "ที่ปรึกษาด้านพลังงาน",
      description:
        "การประเมินประสิทธิภาพพลังงานและโซลูชันเพื่อลดต้นทุนการดำเนินงานและผลกระทบต่อสิ่งแวดล้อม",
    },
    {
      icon: Shield,
      title: "ตรวจสอบความปลอดภัย",
      description:
        "การตรวจสอบความปลอดภัยระบบไฟฟ้าอย่างละเอียดและการทดสอบมาตรฐานตามข้อกำหนดอุตสาหกรรม",
    },
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      subtitle: "ระบบบริหารคุณภาพ",
      description:
        "รับรองระบบบริหารคุณภาพเพื่อให้มั่นใจในการส่งมอบผลิตภัณฑ์และบริการที่สอดคล้องกับความต้องการของลูกค้าและข้อกำหนด",
      year: "2020",
    },
    {
      title: "ISO 14001:2015",
      subtitle: "การจัดการสิ่งแวดล้อม",
      description:
        "รับรองระบบการจัดการสิ่งแวดล้อม แสดงให้เห็นถึงความมุ่งมั่นในการดำเนินงานที่ยั่งยืนและรับผิดชอบต่อสิ่งแวดล้อม",
      year: "2021",
    },
    {
      title: "ISO 45001:2018",
      subtitle: "อาชีวอนามัยและความปลอดภัย",
      description:
        "รับรองระบบการจัดการอาชีวอนามัยและความปลอดภัย เพื่อสภาพการทำงานที่ปลอดภัยสำหรับพนักงานทุกคน",
      year: "2021",
    },
    {
      title: "ใบอนุญาตวิศวกรไฟฟ้า",
      subtitle: "สภาวิศวกร",
      description:
        "บริษัทวิศวกรรมไฟฟ้าที่ได้รับใบอนุญาตให้ออกแบบและดำเนินโครงการวิศวกรรมไฟฟ้า ครอบคลุมถึงระบบแรงสูง",
      year: "1998",
    },
  ];

  const accreditations = [
    "สมาชิกสถาบันวิศวกรรมแห่งประเทศไทย",
    "จดทะเบียนกับกรมโยธาธิการและผังเมือง",
    "ได้รับการรับรองจากสถาบันมาตรฐานอุตสาหกรรมไทย",
    "สมาชิกสมาคมผู้รับเหมาไฟฟ้า",
  ];

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "โครงการที่ดำเนินการสำเร็จ",
    },
    { number: 99, suffix: "%", label: "ความไว้วางใจจากลูกค้า" },
    { number: 10, suffix: "+", label: "ประสบการณ์มากกว่า" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0 overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1769778674824-e69f58d7c55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwNDg0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Electrical Engineering Facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a6b]/90 to-[#1a3a6b]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight font-bold"
            >
              ความเป็นเลิศด้านวิศวกรรมไฟฟ้า
              <br />
              ในทุกโครงการ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-xl md:text-2xl text-white/90 mb-8"
            >
              ออกแบบ ติดตั้ง งานระบบไฟฟ้าโรงงาน และ งานระบบไฟฟ้าห้องเย็น 
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {
                  const element =
                    document.getElementById("services");
                  if (element) {
                    const navHeight = 80;
                    const elementPosition =
                      element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition +
                      window.pageYOffset -
                      navHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
                className="bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors flex items-center justify-center gap-2 group"
              >
                บริการของเรา
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-[#1a3a6b] px-8 py-4 rounded-md transition-colors text-center"
              >
                ติดต่อเรา
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* About Section */}
<SectionWrapper id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="mb-2">
                <p className="text-[#dc2626] text-1xl uppercase tracking-wide mb-1 font-semibold">
                  เกี่ยวกับเรา
                </p>
              </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#1a3a6b] mb-6 font-bold leading-tight">
          บริษัท เอ็นทีพี อิเล็คทริค
          <br className="hidden sm:block" />
          แอนด์ เอ็นจิเนียริ่ง จำกัด
        </h2>

        <p className="thai-text thai-balance text-gray-700 text-base md:text-lg mb-5 leading-8 md:leading-9">
          บริษัทได้ดำเนินกิจการเกี่ยวกับการออกแบบ ติดตั้งงานระบบไฟฟ้าโรงงาน
          และงานระบบไฟฟ้าห้องเย็น โดยจดทะเบียนการค้าเมื่อวันที่ 7 กรกฎาคม
          พ.ศ. 2555 ในนาม ห้างหุ้นส่วนจำกัด เอ็นทีพี อิเล็คทริคแอนด์เอ็นจิเนียริ่ง
          และต่อมาได้ดำเนินการแปรสภาพกิจการจากห้างหุ้นส่วนจำกัด
          เป็นบริษัทจำกัดในชื่อ บริษัท เอ็นทีพี อิเล็คทริคแอนด์ เอ็นจิเนียริ่ง จำกัด
          เมื่อวันที่ 29 ธันวาคม พ.ศ. 2559
          พร้อมดำเนินกิจการอย่างต่อเนื่องมาจนถึงปัจจุบัน
        </p>

        <p className="thai-text thai-balance text-gray-700 text-base md:text-lg mb-8 leading-8 md:leading-9">
          ด้วยประสบการณ์ในการทำงานด้านวิศวกรรมไฟฟ้ามากกว่า 10 ปี
          เรามุ่งมั่นส่งมอบงานที่มีคุณภาพ
          พร้อมมาตรฐานความปลอดภัยสูงสุดให้แก่ลูกค้าของเรา
        </p>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-all duration-300 group font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        >
          อ่านเพิ่มเติม
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={18}
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <ImageWithFallback
          src={myImage}
          alt="Modern Engineering"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_48%,rgba(0,0,0,0.55)_100%)]" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="text-white text-lg md:text-1xl text-center font-bold italic leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.6)]">
            “ความพึงพอใจของลูกค้า คือหัวใจหลักของงานเรา”
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</SectionWrapper>

      {/* Stats Section */}
      <section className="py-20 bg-[#1a3a6b]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="text-center py-6 md:py-0"
              >
                <div className="text-4xl md:text-5xl text-[#dc2626] mb-4 font-bold tracking-tight">
                  <CountUpAnimation
                    end={stat.number}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white text-base md:text-xl font-medium leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
            >
              บริการของเรา
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              โซลูชันด้านระบบไฟฟ้าและวิศวกรรมครบวงจรที่ปรับให้ตรงกับความต้องการเฉพาะของคุณ
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-white border-2 border-gray-300 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-[#1a3a6b] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#dc2626] transition-colors">
                    <Icon className="text-white" size={32} />
                  </div>

                  <h3 className="text-2xl text-[#1a3a6b] mb-4 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Preview Section */}
      <SectionWrapper id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
            >
              โครงการของเรา
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              ตัวอย่างโครงการวิศวกรรมไฟฟ้าที่ประสบความสำเร็จในอุตสาหกรรมต่าง
              ๆ
            </motion.p>
          </div>

          <ProjectGalleryGrid
            projects={projects.slice(0, 6)}
            className="mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-[#b91c1c] text-white px-8 py-4 rounded-md transition-colors group text-lg font-medium"
            >
              ดูโครงการทั้งหมด
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Link>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Certifications Section */}
      <SectionWrapper
        id="certifications"
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl text-[#1a3a6b] mb-4 font-bold"
            >
              ใบรับรองและการรับรอง
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              ความมุ่งมั่นของเราในความเป็นเลิศได้รับการสนับสนุนด้วยใบรับรองและการรับรองระดับอุตสาหกรรม
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#dc2626] transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-gray-300 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award size={60} />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#1a3a6b] rounded-lg flex items-center justify-center group-hover:bg-[#dc2626] transition-colors flex-shrink-0">
                      <FileCheck
                        className="text-white"
                        size={24}
                      />
                    </div>

                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-lg text-[#1a3a6b] mb-2 font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-[#dc2626] mb-3">
                    {cert.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Accreditations */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Shield
                className="text-[#1a3a6b] mx-auto mb-4"
                size={48}
              />
              <h3 className="text-3xl text-[#1a3a6b] mb-4 font-semibold">
                การรับรองระดับมืออาชีพ
              </h3>
              <p className="text-lg text-gray-600">
                ได้รับการยอมรับจากองค์กรชั้นนำในอุตสาหกรรม
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              {accreditations.map((accreditation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-4 bg-gray-50 p-6 rounded-lg"
                >
                  <CheckCircle
                    className="text-[#dc2626] flex-shrink-0"
                    size={24}
                  />
                  <p className="text-gray-700">
                    {accreditation}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Customers Section */}
      <OurCustomers />
    </div>
  );
}
