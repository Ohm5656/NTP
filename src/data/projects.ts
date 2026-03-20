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
    id: 17,
    title: "Renovation of Refrigeration System for Betagro Manufacturing Lopburi",
    titleTh: "ปรับปรุงระบบเครื่องทำความเย็น บริษัท เบทาโกร แมนูแฟคเจอริ่ง จำกัด สาขาลพบุรี",
    category: "Maintenance & Improvement",
    categoryTh: "ปรับปรุงและบำรุงรักษา",
    coverImage: projectGallerySets.dataCenter[0],
    images: [...projectGallerySets.dataCenter],
    description:
      "Renovation and improvement of refrigeration system for Betagro Manufacturing Lopburi.",
    descriptionTh:
      "ปรับปรุงและพัฒนาระบบเครื่องทำความเย็นของบริษัท เบทาโกร แมนูแฟคเจอริ่ง จำกัด สาขาลพบุรี",
    location: "Lopburi, Thailand",
    locationTh: "ลพบุรี",
  },
  {
    id: 16,
    title: "Cold Storage Room at -25°C Plant 3 for Piti Foods Wang Noi",
    titleTh: "ห้องเก็บสินค้าอุณหภูมิ -25°C Plant 3 บริษัท ปิติ ฟู้ดส์ วังน้อย",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.solarIntegration[0],
    images: [...projectGallerySets.solarIntegration],
    description:
      "Electrical and refrigeration system works for -25°C cold storage room at Plant 3 of Piti Foods Wang Noi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้องเก็บสินค้าอุณหภูมิ -25°C Plant 3 ของบริษัท ปิติ ฟู้ดส์ วังน้อย",
    location: "Wang Noi, Ayutthaya, Thailand",
    locationTh: "วังน้อย พระนครศรีอยุธยา",
  },
  {
    id: 15,
    title: "Cold Storage Room at -25°C Plant 2 for Global Fish Co., Ltd.",
    titleTh: "คลังเก็บสินค้าอุณหภูมิ -25°C Plant 2 บริษัท โกลบอล ฟิส จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.controlPanels[0],
    images: [...projectGallerySets.controlPanels],
    description:
      "Electrical and refrigeration system works for -25°C cold storage room at Plant 2 of Global Fish Co., Ltd.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับคลังเก็บสินค้าอุณหภูมิ -25°C Plant 2 ของบริษัท โกลบอล ฟิส จำกัด",
    location: "Thailand",
    locationTh: "ประเทศไทย",
  },
  {
    id: 14,
    title: "Chill Room for Itoham Betagro Lopburi",
    titleTh: "ห้อง Chill บริษัท อิโตแฮม เบทาโกร ลพบุรี",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.smartBuilding[0],
    images: [...projectGallerySets.smartBuilding],
    description:
      "Electrical and refrigeration system works for chill room at Itoham Betagro Lopburi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้อง Chill ของบริษัท อิโตแฮม เบทาโกร ลพบุรี",
    location: "Lopburi, Thailand",
    locationTh: "ลพบุรี",
  },
  {
    id: 13,
    title: "Control Panel for Tunnel Freezer and Hardening Freezer at Golden Seafood International",
    titleTh: "ตู้คอนโทรลสำหรับ Tunnel Freezer และ Hardening Freezer บริษัท โกลเด้น ซีฟู้ด อินเตอร์เนชั่นแนล",
    category: "Control Panel",
    categoryTh: "ตู้คอนโทรล",
    coverImage: projectGallerySets.industrialMaintenance[0],
    images: [...projectGallerySets.industrialMaintenance],
    description:
      "Design and installation of control panel for tunnel freezer and hardening freezer systems.",
    descriptionTh:
      "ออกแบบและติดตั้งตู้คอนโทรลสำหรับระบบ Tunnel Freezer และ Hardening Freezer",
    location: "Thailand",
    locationTh: "ประเทศไทย",
  },
  {
    id: 12,
    title: "Airblast Freezer Room for Surapon Nichirei Thepharak",
    titleTh: "ห้อง Airblast Freezer บริษัท สุรพล นิชิเร สาขาเทพารักษ์",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.powerSystems[0],
    images: [...projectGallerySets.powerSystems],
    description:
      "Electrical and refrigeration system works for airblast freezer room at Surapon Nichirei Thepharak.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบเครื่องทำความเย็นสำหรับห้อง Airblast Freezer ของบริษัท สุรพล นิชิเร สาขาเทพารักษ์",
    location: "Thepharak, Samut Prakan, Thailand",
    locationTh: "เทพารักษ์ สมุทรปราการ",
  },
  {
    id: 11,
    title: "Renovation of Refrigeration Control Panel for CPF Minburi Plant 1",
    titleTh: "ปรับปรุงตู้คอนโทรลระบบเครื่องทำความเย็น โรงงาน CPF มีนบุรี 1",
    category: "Control Panel",
    categoryTh: "ตู้คอนโทรล",
    coverImage: projectGallerySets.manufacturingAutomation[0],
    images: [...projectGallerySets.manufacturingAutomation],
    description:
      "Renovation and upgrade of refrigeration control panel system for CPF Minburi Plant 1.",
    descriptionTh:
      "ปรับปรุงและอัปเกรดตู้คอนโทรลสำหรับระบบเครื่องทำความเย็นของโรงงาน CPF มีนบุรี 1",
    location: "Minburi, Bangkok, Thailand",
    locationTh: "มีนบุรี กรุงเทพมหานคร",
  },
  {
    id: 10,
    title: "PO4 Air Conditioning System for Chotiwat Manufacturing, Hat Yai",
    titleTh: "ระบบปรับอากาศ PO4 บริษัท โชติวัฒน์อุตสาหกรรม อำเภอหาดใหญ่ จังหวัดสงขลา",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.commercialComplex[0],
    images: [...projectGallerySets.commercialComplex],
    description:
      "Electrical installation and control works for PO4 air conditioning system at Chotiwat Manufacturing in Hat Yai, Songkhla.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบปรับอากาศ PO4 ของบริษัท โชติวัฒน์อุตสาหกรรม อำเภอหาดใหญ่ จังหวัดสงขลา",
    location: "Hat Yai, Songkhla, Thailand",
    locationTh: "หาดใหญ่ สงขลา",
  },
  {
    id: 9,
    title: "Refrigeration System for Rieckermann at Siam Flour Trading Co., Ltd.",
    titleTh: "ระบบเครื่องทำความเย็น Rieckermann บริษัท สยาม ค้าแป้ง จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.healthcarePower[0],
    images: [...projectGallerySets.healthcarePower],
    description:
      "Electrical and control works for industrial refrigeration system by Rieckermann at Siam Flour Trading Co., Ltd.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นของ Rieckermann ณ บริษัท สยาม ค้าแป้ง จำกัด",
    location: "Thailand",
    locationTh: "ประเทศไทย",
  },
  {
    id: 8,
    title: "Screw Compressor Improvement for CPF Saraburi",
    titleTh: "งานปรับปรุงระบบ Screw Compressor โรงงาน CPF สระบุรี",
    category: "Maintenance & Improvement",
    categoryTh: "ปรับปรุงและบำรุงรักษา",
    coverImage: projectGallerySets.dataCenter[0],
    images: [...projectGallerySets.dataCenter],
    description:
      "Improvement and upgrade of electrical and control systems for screw compressor equipment at CPF Saraburi.",
    descriptionTh:
      "ปรับปรุงและอัปเกรดระบบไฟฟ้าและระบบควบคุมของเครื่อง Screw Compressor สำหรับโรงงาน CPF สระบุรี",
    location: "Saraburi, Thailand",
    locationTh: "สระบุรี",
  },
  {
    id: 7,
    title: "AHU System for CPF Minburi Plant 1",
    titleTh: "ระบบ AHU โรงงาน CPF มีนบุรี 1",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.solarIntegration[0],
    images: [...projectGallerySets.solarIntegration],
    description:
      "Electrical installation and control system works for AHU system at CPF Minburi Plant 1.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบ AHU ของโรงงาน CPF มีนบุรี 1",
    location: "Minburi, Bangkok, Thailand",
    locationTh: "มีนบุรี กรุงเทพมหานคร",
  },
  {
    id: 6,
    title: "Chill Room and Air Conditioning System for Laemthong Protein Foods Omnoi",
    titleTh: "ห้อง Chill และระบบปรับอากาศ บริษัท แหลมทองโปรตีนฟู้ดส์ สาขาอ้อมน้อย",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.controlPanels[0],
    images: [...projectGallerySets.controlPanels],
    description:
      "Electrical and control works for chill room and air conditioning systems at Laemthong Protein Foods Omnoi.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับห้อง Chill และระบบปรับอากาศของบริษัท แหลมทองโปรตีนฟู้ดส์ สาขาอ้อมน้อย",
    location: "Omnoi, Samut Sakhon, Thailand",
    locationTh: "อ้อมน้อย สมุทรสาคร",
  },
  {
    id: 5,
    title: "Crush Freezer Refrigeration System for Laemthong Poultry Korat",
    titleTh: "ระบบเครื่องทำความเย็น Crush Freezer บริษัท แหลมทองโพลทรี สาขาโคราช",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.smartBuilding[0],
    images: [...projectGallerySets.smartBuilding],
    description:
      "Installation of refrigeration system for crush freezer application at Laemthong Poultry Korat.",
    descriptionTh:
      "ติดตั้งระบบเครื่องทำความเย็นสำหรับงาน Crush Freezer ของบริษัท แหลมทองโพลทรี สาขาโคราช",
    location: "Nakhon Ratchasima, Thailand",
    locationTh: "นครราชสีมา",
  },
  {
    id: 4,
    title: "Chill Room and AHU System for CPRAM Khon Kaen Plant",
    titleTh: "ระบบห้อง Chill และ AHU โรงงานซีพีแรม ขอนแก่น",
    category: "AHU & HVAC",
    categoryTh: "AHU และปรับอากาศ",
    coverImage: projectGallerySets.industrialMaintenance[0],
    images: [...projectGallerySets.industrialMaintenance],
    description:
      "Electrical installation and control works for chill room and AHU systems at CPRAM Khon Kaen plant.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับห้อง Chill และระบบ AHU ของโรงงานซีพีแรม ขอนแก่น",
    location: "Khon Kaen, Thailand",
    locationTh: "ขอนแก่น",
  },
  {
    id: 3,
    title: "Refrigeration System for Art of Baking Co., Ltd.",
    titleTh: "ระบบเครื่องทำความเย็น บริษัท อาร์ทออฟเบคกิ้ง จำกัด",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.powerSystems[0],
    images: [...projectGallerySets.powerSystems],
    description:
      "Installation of refrigeration electrical and control systems for food manufacturing operations.",
    descriptionTh:
      "ติดตั้งระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นในกระบวนการผลิตอาหาร",
    location: "Thailand",
    locationTh: "ประเทศไทย",
  },
  {
    id: 2,
    title: "Refrigeration System for Cuisine Solutions Asia",
    titleTh: "ระบบเครื่องทำความเย็น บริษัท ควิซีน โซลูชั่น เอเชีย",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.manufacturingAutomation[0],
    images: [...projectGallerySets.manufacturingAutomation],
    description:
      "Electrical and control system works for industrial refrigeration system at Cuisine Solutions Asia.",
    descriptionTh:
      "งานระบบไฟฟ้าและระบบควบคุมสำหรับระบบเครื่องทำความเย็นอุตสาหกรรมของบริษัท ควิซีน โซลูชั่น เอเชีย",
    location: "Thailand",
    locationTh: "ประเทศไทย",
  },
  {
    id: 1,
    title: "Refrigeration System for CPRAM Surat Thani Plant",
    titleTh: "ระบบเครื่องทำความเย็น โรงงานซีพีแรม สาขาสุราษฎร์ธานี",
    category: "Refrigeration System",
    categoryTh: "ระบบทำความเย็น",
    coverImage: projectGallerySets.commercialComplex[0],
    images: [...projectGallerySets.commercialComplex],
    description:
      "Design and installation of industrial refrigeration system for CPRAM Surat Thani plant.",
    descriptionTh:
      "ออกแบบและติดตั้งระบบเครื่องทำความเย็นสำหรับโรงงานซีพีแรม สาขาสุราษฎร์ธานี",
    location: "Surat Thani, Thailand",
    locationTh: "สุราษฎร์ธานี",
  },
];

export const projectCategories = [
  "All",
  "Refrigeration System",
  "AHU & HVAC",
  "Control Panel",
  "Maintenance & Improvement",
];

export const projectCategoriesTh = [
  "ทั้งหมด",
  "ระบบทำความเย็น",
  "AHU และปรับอากาศ",
  "ตู้คอนโทรล",
  "ปรับปรุงและบำรุงรักษา",
];