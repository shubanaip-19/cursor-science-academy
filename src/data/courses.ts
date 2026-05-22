import { Atom, Beaker, Dna, Globe2, Leaf, Magnet, Microscope, Rocket, Sparkles, Telescope, TreePine, Waves, Wind, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Language =
  | "English"
  | "Spanish"
  | "French"
  | "Arabic"
  | "Mandarin"
  | "Hindi"
  | "Italian"
  | "Romanian"
  | "German"
  | "Portuguese"
  | "Russian"
  | "Japanese"
  | "Korean"
  | "Turkish"
  | "Dutch"
  | "Polish"
  | "Vietnamese"
  | "Indonesian"
  | "Bengali"
  | "Greek"
  | "Hebrew"
  | "Ukrainian"
  | "Swahili"
  | "Thai"
  | "Urdu";

export const languages: Language[] = [
  "English",
  "Spanish",
  "French",
  "Arabic",
  "Mandarin",
  "Hindi",
  "Italian",
  "Romanian",
  "German",
  "Portuguese",
  "Russian",
  "Japanese",
  "Korean",
  "Turkish",
  "Dutch",
  "Polish",
  "Vietnamese",
  "Indonesian",
  "Bengali",
  "Greek",
  "Hebrew",
  "Ukrainian",
  "Swahili",
  "Thai",
  "Urdu",
];

export type Course = {
  id: string;
  title: string;
  grade: 5 | 6 | 7 | 8 | 9;
  subject: "Biology" | "Chemistry" | "Physics" | "Earth & Space";
  lessons: number;
  duration: string;
  description: string;
  icon: LucideIcon;
  provider: string;
  url: string;
  language?: Language;
};

export const courses: Course[] = [
  // Grade 5 — foundations (NGSS 5th grade)
  {
    id: "g5-ecosystems",
    title: "Ecosystems & Living Things",
    grade: 5,
    subject: "Biology",
    lessons: 14,
    duration: "6 weeks",
    description: "Plants, animals, and how energy flows through food webs.",
    icon: Leaf,
    provider: "CK-12",
    url: "https://flexbooks.ck12.org/cbook/ck-12-elementary-life-science/",
  },
  {
    id: "g5-matter",
    title: "Matter & Its Interactions",
    grade: 5,
    subject: "Chemistry",
    lessons: 10,
    duration: "5 weeks",
    description: "Solids, liquids, gases — and the magic of changing between them.",
    icon: Beaker,
    provider: "PhET Interactive",
    url: "https://phet.colorado.edu/en/simulations/states-of-matter-basics",
  },
  {
    id: "g5-earth-systems",
    title: "Earth's Spheres",
    grade: 5,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 weeks",
    description: "Geosphere, hydrosphere, atmosphere, biosphere — Earth's big systems.",
    icon: Globe2,
    provider: "NASA Climate Kids",
    url: "https://climatekids.nasa.gov/menu/earth/",
  },

  // Grade 6
  {
    id: "g6-cells",
    title: "Cells & Organisms",
    grade: 6,
    subject: "Biology",
    lessons: 18,
    duration: "8 weeks",
    description: "Discover the tiny building blocks that make up every living thing.",
    icon: Microscope,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:cells-and-organisms",
  },
  {
    id: "g6-energy",
    title: "Forces & Energy",
    grade: 6,
    subject: "Physics",
    lessons: 16,
    duration: "7 weeks",
    description: "Light, heat, sound, and motion — energy in everyday life.",
    icon: Zap,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-physics",
  },
  {
    id: "g6-weather",
    title: "Weather & Climate",
    grade: 6,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 weeks",
    description: "Why it rains, how storms form, and what shapes our climate.",
    icon: Wind,
    provider: "National Geographic Kids",
    url: "https://kids.nationalgeographic.com/science/article/weather",
  },

  // Grade 7
  {
    id: "g7-atoms",
    title: "Atoms, Isotopes & Ions",
    grade: 7,
    subject: "Chemistry",
    lessons: 14,
    duration: "7 weeks",
    description: "Meet the smallest pieces of matter and how they combine.",
    icon: Atom,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-physics/x1baa2b5e02b663b4:chemical-reactions-and-the-atom",
  },
  {
    id: "g7-earth",
    title: "Earth's Systems",
    grade: 7,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 weeks",
    description: "Rocks, plate tectonics, oceans, and the dynamic systems of our planet.",
    icon: Waves,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-earth-and-space-science",
  },
  {
    id: "g7-ecology",
    title: "Ecology & Human Impact",
    grade: 7,
    subject: "Biology",
    lessons: 12,
    duration: "6 weeks",
    description: "How humans shape ecosystems — and how we can protect them.",
    icon: TreePine,
    provider: "CK-12",
    url: "https://flexbooks.ck12.org/cbook/ck-12-middle-school-life-science-2.0/section/9.1/primary/lesson/ecology-ms-ls/",
  },

  // Grade 8
  {
    id: "g8-forces",
    title: "Forces & Motion",
    grade: 8,
    subject: "Physics",
    lessons: 14,
    duration: "7 weeks",
    description: "Newton's laws, gravity, and the physics of how things move.",
    icon: Magnet,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-physics/x1baa2b5e02b663b4:forces-and-newton-s-laws-of-motion",
  },
  {
    id: "g8-genetics",
    title: "Genetics & Heredity",
    grade: 8,
    subject: "Biology",
    lessons: 12,
    duration: "6 weeks",
    description: "DNA, traits, and how life passes information across generations.",
    icon: Dna,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/ms-biology/x0c5bb03129646fd6:inheritance-and-variation",
  },
  {
    id: "g8-space",
    title: "The Solar System",
    grade: 8,
    subject: "Earth & Space",
    lessons: 14,
    duration: "7 weeks",
    description: "Planets, moons, and our place in the neighborhood of the Sun.",
    icon: Telescope,
    provider: "NASA Space Place",
    url: "https://spaceplace.nasa.gov/menu/solar-system/",
  },

  // Grade 9
  {
    id: "g9-reactions",
    title: "Chemical Reactions",
    grade: 9,
    subject: "Chemistry",
    lessons: 18,
    duration: "9 weeks",
    description: "Balance equations, explore acids and bases, and witness change.",
    icon: Sparkles,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/hs-chemistry/x2613d8165d88df5e:chemical-reactions",
  },
  {
    id: "g9-biology",
    title: "High School Biology",
    grade: 9,
    subject: "Biology",
    lessons: 22,
    duration: "11 weeks",
    description: "Cells, evolution, and ecology — biology for budding scientists.",
    icon: Microscope,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/hs-biology",
  },
  {
    id: "g9-astronomy",
    title: "Astronomy & Cosmology",
    grade: 9,
    subject: "Earth & Space",
    lessons: 14,
    duration: "7 weeks",
    description: "Stars, galaxies, and the science of our place in the universe.",
    icon: Rocket,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/cosmology-and-astronomy",
  },

  // Spanish
  {
    id: "es-g6-cells",
    title: "Células y Organismos",
    grade: 6,
    subject: "Biology",
    lessons: 16,
    duration: "7 semanas",
    description: "Descubre las pequeñas unidades que componen los seres vivos.",
    icon: Microscope,
    provider: "Khan Academy en Español",
    url: "https://es.khanacademy.org/science/biology",
    language: "Spanish",
  },
  {
    id: "es-g8-space",
    title: "El Sistema Solar",
    grade: 8,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 semanas",
    description: "Planetas, lunas y nuestro lugar en el vecindario del Sol.",
    icon: Telescope,
    provider: "NASA Ciencia",
    url: "https://ciencia.nasa.gov/sistema-solar/",
    language: "Spanish",
  },

  // French
  {
    id: "fr-g7-atoms",
    title: "Atomes et Molécules",
    grade: 7,
    subject: "Chemistry",
    lessons: 14,
    duration: "7 semaines",
    description: "Rencontre les plus petites pièces de la matière.",
    icon: Atom,
    provider: "Khan Academy (Français)",
    url: "https://fr.khanacademy.org/science",
    language: "French",
  },
  {
    id: "fr-g9-bio",
    title: "Biologie au Lycée",
    grade: 9,
    subject: "Biology",
    lessons: 20,
    duration: "10 semaines",
    description: "Cellules, évolution et écologie pour jeunes scientifiques.",
    icon: Microscope,
    provider: "Khan Academy (Français)",
    url: "https://fr.khanacademy.org/science/high-school-biology",
    language: "French",
  },

  // Arabic
  {
    id: "ar-g6-energy",
    title: "القوى والطاقة",
    grade: 6,
    subject: "Physics",
    lessons: 14,
    duration: "7 أسابيع",
    description: "الضوء والحرارة والصوت والحركة في حياتنا اليومية.",
    icon: Zap,
    provider: "أكاديمية خان",
    url: "https://ar.khanacademy.org/science",
    language: "Arabic",
  },

  // Mandarin
  {
    id: "zh-g8-forces",
    title: "力与运动",
    grade: 8,
    subject: "Physics",
    lessons: 14,
    duration: "7 周",
    description: "牛顿定律、重力以及物体如何运动的物理学。",
    icon: Magnet,
    provider: "可汗学院 (中文)",
    url: "https://zh.khanacademy.org/science",
    language: "Mandarin",
  },

  // Hindi
  {
    id: "hi-g7-atoms",
    title: "परमाणु और अणु",
    grade: 7,
    subject: "Chemistry",
    lessons: 12,
    duration: "6 सप्ताह",
    description: "पदार्थ के सबसे छोटे टुकड़ों से मिलें।",
    icon: Atom,
    provider: "खान अकादमी",
    url: "https://hi.khanacademy.org/science",
    language: "Hindi",
  },
  {
    id: "hi-g9-bio",
    title: "जीव विज्ञान",
    grade: 9,
    subject: "Biology",
    lessons: 18,
    duration: "9 सप्ताह",
    description: "कोशिकाएँ, आनुवंशिकी और जीवन की विविधता।",
    icon: Microscope,
    provider: "खान अकादमी",
    url: "https://hi.khanacademy.org/science/in-in-class-9th-physics-india",
    language: "Hindi",
  },

  // Italian
  {
    id: "it-g6-cells",
    title: "Cellule e Organismi",
    grade: 6,
    subject: "Biology",
    lessons: 14,
    duration: "7 settimane",
    description: "Scopri i piccoli mattoni che compongono ogni essere vivente.",
    icon: Microscope,
    provider: "OilProject / Schooltoon",
    url: "https://library.weschool.com/materia/scienze.html",
    language: "Italian",
  },
  {
    id: "it-g8-space",
    title: "Il Sistema Solare",
    grade: 8,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 settimane",
    description: "Pianeti, lune e il nostro posto nel vicinato del Sole.",
    icon: Telescope,
    provider: "INAF Play",
    url: "https://play.inaf.it/",
    language: "Italian",
  },

  // Romanian
  {
    id: "ro-g6-energy",
    title: "Forțe și Energie",
    grade: 6,
    subject: "Physics",
    lessons: 12,
    duration: "6 săptămâni",
    description: "Lumină, căldură, sunet și mișcare — energia în viața de zi cu zi.",
    icon: Zap,
    provider: "Manuale Digitale",
    url: "https://www.manuale.edu.ro/",
    language: "Romanian",
  },

  // German
  {
    id: "de-g7-atoms",
    title: "Atome und Moleküle",
    grade: 7,
    subject: "Chemistry",
    lessons: 14,
    duration: "7 Wochen",
    description: "Lerne die kleinsten Bausteine der Materie kennen.",
    icon: Atom,
    provider: "Khan Academy (Deutsch)",
    url: "https://de.khanacademy.org/science",
    language: "German",
  },
  {
    id: "de-g9-bio",
    title: "Biologie Oberstufe",
    grade: 9,
    subject: "Biology",
    lessons: 20,
    duration: "10 Wochen",
    description: "Zellen, Genetik und Evolution für junge Wissenschaftler.",
    icon: Microscope,
    provider: "Serlo",
    url: "https://de.serlo.org/biologie",
    language: "German",
  },

  // Portuguese
  {
    id: "pt-g6-cells",
    title: "Células e Organismos",
    grade: 6,
    subject: "Biology",
    lessons: 16,
    duration: "7 semanas",
    description: "Descubra os pequenos blocos que formam todos os seres vivos.",
    icon: Microscope,
    provider: "Khan Academy (Português)",
    url: "https://pt.khanacademy.org/science",
    language: "Portuguese",
  },

  // Russian
  {
    id: "ru-g8-forces",
    title: "Силы и Движение",
    grade: 8,
    subject: "Physics",
    lessons: 14,
    duration: "7 недель",
    description: "Законы Ньютона, гравитация и физика движения.",
    icon: Magnet,
    provider: "Академия Хана",
    url: "https://ru.khanacademy.org/science",
    language: "Russian",
  },

  // Japanese
  {
    id: "ja-g7-atoms",
    title: "原子と分子",
    grade: 7,
    subject: "Chemistry",
    lessons: 12,
    duration: "6週間",
    description: "物質の最小単位とその結合を学ぼう。",
    icon: Atom,
    provider: "NHK for School",
    url: "https://www.nhk.or.jp/school/rika/",
    language: "Japanese",
  },

  // Korean
  {
    id: "ko-g8-space",
    title: "태양계",
    grade: 8,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6주",
    description: "행성, 위성, 그리고 태양 주변에서 우리의 위치.",
    icon: Telescope,
    provider: "EBS 사이언스",
    url: "https://www.ebs.co.kr/lecture/middle",
    language: "Korean",
  },

  // Turkish
  {
    id: "tr-g6-energy",
    title: "Kuvvet ve Enerji",
    grade: 6,
    subject: "Physics",
    lessons: 14,
    duration: "7 hafta",
    description: "Işık, ısı, ses ve hareket — günlük hayatta enerji.",
    icon: Zap,
    provider: "Khan Academy (Türkçe)",
    url: "https://tr.khanacademy.org/science",
    language: "Turkish",
  },

  // Dutch
  {
    id: "nl-g7-earth",
    title: "Aarde en Ruimte",
    grade: 7,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 weken",
    description: "Gesteenten, platentektoniek en de dynamische systemen van onze planeet.",
    icon: Waves,
    provider: "Schooltv",
    url: "https://schooltv.nl/onderwerp/natuur-techniek/",
    language: "Dutch",
  },

  // Polish
  {
    id: "pl-g9-bio",
    title: "Biologia w Liceum",
    grade: 9,
    subject: "Biology",
    lessons: 20,
    duration: "10 tygodni",
    description: "Komórki, ewolucja i ekologia dla młodych naukowców.",
    icon: Microscope,
    provider: "Khan Academy (Polski)",
    url: "https://pl.khanacademy.org/science",
    language: "Polish",
  },

  // Vietnamese
  {
    id: "vi-g6-cells",
    title: "Tế bào và Sinh vật",
    grade: 6,
    subject: "Biology",
    lessons: 14,
    duration: "7 tuần",
    description: "Khám phá những đơn vị nhỏ bé tạo nên mọi sinh vật sống.",
    icon: Microscope,
    provider: "VietJack",
    url: "https://vietjack.com/khoa-hoc-tu-nhien-6/index.jsp",
    language: "Vietnamese",
  },

  // Indonesian
  {
    id: "id-g8-forces",
    title: "Gaya dan Gerak",
    grade: 8,
    subject: "Physics",
    lessons: 14,
    duration: "7 minggu",
    description: "Hukum Newton, gravitasi, dan fisika gerak benda.",
    icon: Magnet,
    provider: "Khan Academy (Bahasa Indonesia)",
    url: "https://id.khanacademy.org/science",
    language: "Indonesian",
  },

  // Bengali
  {
    id: "bn-g7-atoms",
    title: "পরমাণু ও অণু",
    grade: 7,
    subject: "Chemistry",
    lessons: 12,
    duration: "৬ সপ্তাহ",
    description: "পদার্থের ক্ষুদ্রতম একক এবং তাদের সংমিশ্রণ।",
    icon: Atom,
    provider: "খান একাডেমি",
    url: "https://bn.khanacademy.org/science",
    language: "Bengali",
  },

  // Greek
  {
    id: "el-g6-weather",
    title: "Καιρός και Κλίμα",
    grade: 6,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 εβδομάδες",
    description: "Πώς σχηματίζονται οι καταιγίδες και τι διαμορφώνει το κλίμα μας.",
    icon: Wind,
    provider: "Φωτόδεντρο",
    url: "http://photodentro.edu.gr/lor/",
    language: "Greek",
  },

  // Hebrew
  {
    id: "he-g8-genetics",
    title: "גנטיקה ותורשה",
    grade: 8,
    subject: "Biology",
    lessons: 12,
    duration: "6 שבועות",
    description: "DNA, תכונות, וכיצד החיים מעבירים מידע בין דורות.",
    icon: Dna,
    provider: "מטח",
    url: "https://lo.cet.ac.il/player/?document=64fb74b0-b3f8-4f3d-bf5e-3f5b9a4a1c2c",
    language: "Hebrew",
  },

  // Ukrainian
  {
    id: "uk-g9-astronomy",
    title: "Астрономія",
    grade: 9,
    subject: "Earth & Space",
    lessons: 14,
    duration: "7 тижнів",
    description: "Зорі, галактики і наше місце у Всесвіті.",
    icon: Rocket,
    provider: "Прометеус",
    url: "https://prometheus.org.ua/courses-catalog/",
    language: "Ukrainian",
  },

  // Swahili
  {
    id: "sw-g6-energy",
    title: "Nguvu na Nishati",
    grade: 6,
    subject: "Physics",
    lessons: 12,
    duration: "wiki 6",
    description: "Mwanga, joto, sauti, na mwendo — nishati katika maisha ya kila siku.",
    icon: Zap,
    provider: "Shule Direct",
    url: "https://shuledirect.co.tz/",
    language: "Swahili",
  },

  // Thai
  {
    id: "th-g7-earth",
    title: "ระบบของโลก",
    grade: 7,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 สัปดาห์",
    description: "หิน การเคลื่อนที่ของแผ่นเปลือกโลก และระบบที่เปลี่ยนแปลงของโลกเรา",
    icon: Waves,
    provider: "DLTV",
    url: "https://www.dltv.ac.th/",
    language: "Thai",
  },

  // Urdu
  {
    id: "ur-g8-space",
    title: "نظامِ شمسی",
    grade: 8,
    subject: "Earth & Space",
    lessons: 12,
    duration: "6 ہفتے",
    description: "سیارے، چاند، اور سورج کے اردگرد ہمارا مقام۔",
    icon: Telescope,
    provider: "Taleemabad",
    url: "https://taleemabad.com/",
    language: "Urdu",
  },
];

export const grades = [5, 6, 7, 8, 9] as const;

export const providers = [
  { name: "Khan Academy", url: "https://www.khanacademy.org/science", description: "Free world-class lessons and practice." },
  { name: "CK-12", url: "https://www.ck12.org/student/", description: "Interactive flexbooks aligned to standards." },
  { name: "PhET Interactive", url: "https://phet.colorado.edu/", description: "Award-winning science simulations from CU Boulder." },
  { name: "NASA Space Place", url: "https://spaceplace.nasa.gov/", description: "Space and Earth science for young explorers." },
  { name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/science", description: "Real-world science stories and discoveries." },
];
