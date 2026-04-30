import { Atom, Beaker, Dna, Globe2, Leaf, Magnet, Microscope, Rocket, Sparkles, Telescope, TreePine, Waves, Wind, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

  // Grade 6 — Khan Academy middle school + complements
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

  // Grade 9 — early high school
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
];

export const grades = [5, 6, 7, 8, 9] as const;

export const providers = [
  { name: "Khan Academy", url: "https://www.khanacademy.org/science", description: "Free world-class lessons and practice." },
  { name: "CK-12", url: "https://www.ck12.org/student/", description: "Interactive flexbooks aligned to standards." },
  { name: "PhET Interactive", url: "https://phet.colorado.edu/", description: "Award-winning science simulations from CU Boulder." },
  { name: "NASA Space Place", url: "https://spaceplace.nasa.gov/", description: "Space and Earth science for young explorers." },
  { name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/science", description: "Real-world science stories and discoveries." },
];
