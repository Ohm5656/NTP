export interface Project {
  id: number;
  title: string;
  titleTh: string;
  category: string;
  categoryTh: string;
  coverImage: string;
  images: string[];
  description: string;
  descriptionTh: string;
  location?: string;
  locationTh?: string;
  year?: string;
}

const projectGallerySets = {
  commercialComplex: [
    "https://images.unsplash.com/photo-1765124540474-af431bb5c281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
  ],
  manufacturingAutomation: [
    "https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  ],
  powerSystems: [
    "https://images.unsplash.com/photo-1707387066870-d270231f819f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
  ],
  industrialMaintenance: [
    "https://images.unsplash.com/photo-1759434775823-40d8b9577a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=1200&q=80",
  ],
  smartBuilding: [
    "https://images.unsplash.com/photo-1769778674824-e69f58d7c55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1200&q=80",
  ],
  controlPanels: [
    "https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?auto=format&fit=crop&w=1200&q=80",
  ],
  solarIntegration: [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
  ],
  dataCenter: [
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  ],
  healthcarePower: [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
  ],
} as const;

export const projects: Project[] = [
  {
    id: 1,
    title: "Commercial Complex Electrical System",
    titleTh: "ระบบไฟฟ้าอาคารพาณิชย์ขนาดใหญ่",
    category: "Commercial",
    categoryTh: "พาณิชย์",
    coverImage: projectGallerySets.commercialComplex[0],
    images: [...projectGallerySets.commercialComplex],
    description:
      "Complete electrical infrastructure for a 20-story commercial building including backup power systems.",
    descriptionTh:
      "โครงสร้างพื้นฐานระบบไฟฟ้าสำหรับอาคารพาณิชย์ 20 ชั้น รวมถึงระบบไฟฟ้าสำรอง",
    location: "Bangkok, Thailand",
    locationTh: "กรุงเทพมหานคร",
    year: "2024",
  },
  {
    id: 2,
    title: "Manufacturing Plant Automation",
    titleTh: "ระบบอัตโนมัติโรงงานผลิต",
    category: "Industrial Automation",
    categoryTh: "ระบบอัตโนมัติอุตสาหกรรม",
    coverImage: projectGallerySets.manufacturingAutomation[0],
    images: [...projectGallerySets.manufacturingAutomation],
    description:
      "Advanced PLC-based automation system for automotive parts manufacturing facility.",
    descriptionTh: "ระบบอัตโนมัติ PLC ขั้นสูงสำหรับโรงงานผลิตชิ้นส่วนยานยนต์",
    location: "Rayong, Thailand",
    locationTh: "ระยอง",
    year: "2023",
  },
  {
    id: 3,
    title: "Power Distribution Substation",
    titleTh: "สถานีจ่ายไฟฟ้าแรงสูง",
    category: "Power Systems",
    categoryTh: "ระบบจำหน่ายไฟฟ้า",
    coverImage: projectGallerySets.powerSystems[0],
    images: [...projectGallerySets.powerSystems],
    description:
      "Design and installation of 115kV/22kV power distribution substation for industrial park.",
    descriptionTh:
      "ออกแบบและติดตั้งสถานีจ่ายไฟฟ้า 115kV/22kV สำหรับนิคมอุตสาหกรรม",
    location: "Chonburi, Thailand",
    locationTh: "ชลบุรี",
    year: "2022",
  },
  {
    id: 4,
    title: "Industrial Facility Maintenance",
    titleTh: "การบำรุงรักษาโรงงานอุตสาหกรรม",
    category: "Maintenance",
    categoryTh: "บำรุงรักษา",
    coverImage: projectGallerySets.industrialMaintenance[0],
    images: [...projectGallerySets.industrialMaintenance],
    description:
      "Ongoing maintenance and upgrade of electrical systems for petrochemical processing plant.",
    descriptionTh: "บำรุงรักษาและปรับปรุงระบบไฟฟ้าสำหรับโรงงานปิโตรเคมี",
    location: "Map Ta Phut, Thailand",
    locationTh: "มาบตาพุด",
    year: "2024",
  },
  {
    id: 5,
    title: "Smart Building Integration",
    titleTh: "ระบบอัจฉริยะสำหรับอาคาร",
    category: "Commercial",
    categoryTh: "พาณิชย์",
    coverImage: projectGallerySets.smartBuilding[0],
    images: [...projectGallerySets.smartBuilding],
    description:
      "Integration of smart building management systems for energy optimization and monitoring.",
    descriptionTh: "บูรณาการระบบจัดการอาคารอัจฉริยะเพื่อการประหยัดพลังงาน",
    location: "Bangkok, Thailand",
    locationTh: "กรุงเทพมหานคร",
    year: "2025",
  },
  {
    id: 6,
    title: "Control Panel Installation",
    titleTh: "ติดตั้งตู้ควบคุมไฟฟ้า",
    category: "Control Panel",
    categoryTh: "ตู้ควบคุม",
    coverImage: projectGallerySets.controlPanels[0],
    images: [...projectGallerySets.controlPanels],
    description:
      "Custom-designed electrical distribution panels for textile manufacturing facility.",
    descriptionTh: "ออกแบบตู้จำหน่ายไฟฟ้าพิเศษสำหรับโรงงานสิ่งทอ",
    location: "Samut Prakan, Thailand",
    locationTh: "สมุทรปราการ",
    year: "2023",
  },
  {
    id: 7,
    title: "Solar Power Integration",
    titleTh: "ติดตั้งระบบพลังงานแสงอาทิตย์",
    category: "Renewable Energy",
    categoryTh: "พลังงานทดแทน",
    coverImage: projectGallerySets.solarIntegration[0],
    images: [...projectGallerySets.solarIntegration],
    description:
      "Installation of 500kW solar power system for manufacturing facility with grid integration.",
    descriptionTh:
      "ติดตั้งระบบโซล่าเซลล์ 500kW สำหรับโรงงานผลิตพร้อมเชื่อมต่อกับระบบไฟฟ้า",
    location: "Ayutthaya, Thailand",
    locationTh: "พระนครศรีอยุธยา",
    year: "2024",
  },
  {
    id: 8,
    title: "Data Center Infrastructure",
    titleTh: "โครงสร้างพื้นฐานศูนย์ข้อมูล",
    category: "Commercial",
    categoryTh: "พาณิชย์",
    coverImage: projectGallerySets.dataCenter[0],
    images: [...projectGallerySets.dataCenter],
    description:
      "Complete electrical infrastructure for Tier III data center with redundant power systems.",
    descriptionTh:
      "โครงสร้างพื้นฐานไฟฟ้าสำหรับศูนย์ข้อมูล Tier III พร้อมระบบไฟฟ้าสำรอง",
    location: "Nonthaburi, Thailand",
    locationTh: "นนทบุรี",
    year: "2022",
  },
  {
    id: 9,
    title: "Hospital Emergency Power",
    titleTh: "ระบบไฟฟ้าฉุกเฉินโรงพยาบาล",
    category: "Healthcare",
    categoryTh: "สาธารณสุข",
    coverImage: projectGallerySets.healthcarePower[0],
    images: [...projectGallerySets.healthcarePower],
    description:
      "Installation of critical power distribution and emergency backup systems for regional hospital.",
    descriptionTh:
      "ติดตั้งระบบจำหน่ายไฟฟ้าสำคัญและระบบสำรองฉุกเฉินสำหรับโรงพยาบาล",
    location: "Khon Kaen, Thailand",
    locationTh: "ขอนแก่น",
    year: "2021",
  },
];

export const projectCategories = [
  "All",
  "Commercial",
  "Industrial Automation",
  "Power Systems",
  "Control Panel",
  "Maintenance",
  "Renewable Energy",
  "Healthcare",
];

export const projectCategoriesTh = [
  "ทั้งหมด",
  "พาณิชย์",
  "ระบบอัตโนมัติอุตสาหกรรม",
  "ระบบจำหน่ายไฟฟ้า",
  "ตู้ควบคุม",
  "บำรุงรักษา",
  "พลังงานทดแทน",
  "สาธารณสุข",
];
