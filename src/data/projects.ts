export interface Project {
  id: number;
  title: string;
  titleTh: string;
  category: string;
  categoryTh: string;
  image: string;
  description: string;
  descriptionTh: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Commercial Complex Electrical System',
    titleTh: 'ระบบไฟฟ้าอาคารพาณิชย์ขนาดใหญ่',
    category: 'Commercial',
    categoryTh: 'พาณิชย์',
    image: 'https://images.unsplash.com/photo-1765124540474-af431bb5c281?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc3MDQ4NDEzMHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete electrical infrastructure for a 20-story commercial building including backup power systems.',
    descriptionTh: 'โครงสร้างพื้นฐานระบบไฟฟ้าสำหรับอาคารพาณิชย์ 20 ชั้น รวมถึงระบบไฟฟ้าสำรอง',
  },
  {
    id: 2,
    title: 'Manufacturing Plant Automation',
    titleTh: 'ระบบอัตโนมัติโรงงานผลิต',
    category: 'Industrial Automation',
    categoryTh: 'ระบบอัตโนมัติอุตสาหกรรม',
    image: 'https://images.unsplash.com/photo-1767281075989-7571356d477e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWN0b3J5JTIwYXV0b21hdGlvbiUyMG1hY2hpbmVyeXxlbnwxfHx8fDE3NzA0MDc0NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Advanced PLC-based automation system for automotive parts manufacturing facility.',
    descriptionTh: 'ระบบอัตโนมัติ PLC ขั้นสูงสำหรับโรงงานผลิตชิ้นส่วนยานยนต์',
  },
  {
    id: 3,
    title: 'Power Distribution Substation',
    titleTh: 'สถานีจ่ายไฟฟ้าแรงสูง',
    category: 'Power Systems',
    categoryTh: 'ระบบจำหน่ายไฟฟ้า',
    image: 'https://images.unsplash.com/photo-1707387066870-d270231f819f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMHBsYW50JTIwc3Vic3RhdGlvbnxlbnwxfHx8fDE3NzA0ODQxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Design and installation of 115kV/22kV power distribution substation for industrial park.',
    descriptionTh: 'ออกแบบและติดตั้งสถานีจ่ายไฟฟ้า 115kV/22kV สำหรับนิคมอุตสาหกรรม',
  },
  {
    id: 4,
    title: 'Industrial Facility Maintenance',
    titleTh: 'การบำรุงรักษาโรงงานอุตสาหกรรม',
    category: 'Maintenance',
    categoryTh: 'บำรุงรักษา',
    image: 'https://images.unsplash.com/photo-1759434775823-40d8b9577a41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwbWFpbnRlbmFuY2UlMjB0ZWNobmljaWFufGVufDF8fHx8MTc3MDQ3MDQ2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Ongoing maintenance and upgrade of electrical systems for petrochemical processing plant.',
    descriptionTh: 'บำรุงรักษาและปรับปรุงระบบไฟฟ้าสำหรับโรงงานปิโตรเคมี',
  },
  {
    id: 5,
    title: 'Smart Building Integration',
    titleTh: 'ระบบอัจฉริยะสำหรับอาคาร',
    category: 'Commercial',
    categoryTh: 'พาณิชย์',
    image: 'https://images.unsplash.com/photo-1769778674824-e69f58d7c55d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmclMjBpbmR1c3RyaWFsJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzcwNDg0MTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Integration of smart building management systems for energy optimization and monitoring.',
    descriptionTh: 'บูรณาการระบบจัดการอาคารอัจฉริยะเพื่อการประหยัดพลังงาน',
  },
  {
    id: 6,
    title: 'Control Panel Installation',
    titleTh: 'ติดตั้งตู้ควบคุมไฟฟ้า',
    category: 'Control Panel',
    categoryTh: 'ตู้ควบคุม',
    image: 'https://images.unsplash.com/photo-1759830337357-29c472b6746c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZWxlY3RyaWNhbCUyMHBhbmVsfGVufDF8fHx8MTc3MDQ4NDEwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Custom-designed electrical distribution panels for textile manufacturing facility.',
    descriptionTh: 'ออกแบบตู้จำหน่ายไฟฟ้าพิเศษสำหรับโรงงานสิ่งทอ',
  },
  {
    id: 7,
    title: 'Solar Power Integration',
    titleTh: 'ติดตั้งระบบพลังงานแสงอาทิตย์',
    category: 'Renewable Energy',
    categoryTh: 'พลังงานทดแทน',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwZmFjdG9yeXxlbnwxfHx8fDE3NzA0ODQxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Installation of 500kW solar power system for manufacturing facility with grid integration.',
    descriptionTh: 'ติดตั้งระบบโซล่าเซลล์ 500kW สำหรับโรงงานผลิตพร้อมเชื่อมต่อกับระบบไฟฟ้า',
  },
  {
    id: 8,
    title: 'Data Center Infrastructure',
    titleTh: 'โครงสร้างพื้นฐานศูนย์ข้อมูล',
    category: 'Commercial',
    categoryTh: 'พาณิชย์',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwc2VydmVyfGVufDF8fHx8MTc3MDQ4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Complete electrical infrastructure for Tier III data center with redundant power systems.',
    descriptionTh: 'โครงสร้างพื้นฐานไฟฟ้าสำหรับศูนย์ข้อมูล Tier III พร้อมระบบไฟฟ้าสำรอง',
  },
  {
    id: 9,
    title: 'Hospital Emergency Power',
    titleTh: 'ระบบไฟฟ้าฉุกเฉินโรงพยาบาล',
    category: 'Healthcare',
    categoryTh: 'สาธารณสุข',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc3MDQ4NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Installation of critical power distribution and emergency backup systems for regional hospital.',
    descriptionTh: 'ติดตั้งระบบจำหน่ายไฟฟ้าสำคัญและระบบสำรองฉุกเฉินสำหรับโรงพยาบาล',
  },
];

export const projectCategories = [
  'All',
  'Commercial',
  'Industrial Automation',
  'Power Systems',
  'Control Panel',
  'Maintenance',
  'Renewable Energy',
  'Healthcare',
];

export const projectCategoriesTh = [
  'ทั้งหมด',
  'พาณิชย์',
  'ระบบอัตโนมัติอุตสาหกรรม',
  'ระบบจำหน่ายไฟฟ้า',
  'ตู้ควบคุม',
  'บำรุงรักษา',
  'พลังงานทดแทน',
  'สาธารณสุข',
];
