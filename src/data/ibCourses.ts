import { Atom, Beaker, Dna, FlaskConical, Globe2, Leaf, Microscope, Rocket, Sparkles, Telescope, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type IBProgramme = "MYP" | "DP";
export type IBLevel = "Core" | "SL" | "HL" | "MYP";

export type IBCourse = {
  id: string;
  title: string;
  programme: IBProgramme;
  level: IBLevel;
  subject: "Biology" | "Chemistry" | "Physics" | "Environmental Systems" | "Sciences (Integrated)" | "Computer Science";
  lessons: number;
  duration: string;
  description: string;
  icon: LucideIcon;
  provider: string;
  url: string;
};

export const ibCourses: IBCourse[] = [
  // MYP Sciences (roughly grades 6–10)
  {
    id: "myp-integrated",
    title: "MYP Integrated Sciences",
    programme: "MYP",
    level: "MYP",
    subject: "Sciences (Integrated)",
    lessons: 24,
    duration: "Year-long",
    description: "Inquiry-based science across biology, chemistry, and physics for MYP years 1–3.",
    icon: FlaskConical,
    provider: "Kognity",
    url: "https://www.kognity.com/",
  },
  {
    id: "myp-biology",
    title: "MYP Biology Foundations",
    programme: "MYP",
    level: "MYP",
    subject: "Biology",
    lessons: 18,
    duration: "10 weeks",
    description: "Cells, ecosystems, and human biology with MYP-style criterion tasks.",
    icon: Leaf,
    provider: "Save My Exams",
    url: "https://www.savemyexams.com/ib/",
  },
  {
    id: "myp-chemistry",
    title: "MYP Chemistry Foundations",
    programme: "MYP",
    level: "MYP",
    subject: "Chemistry",
    lessons: 16,
    duration: "9 weeks",
    description: "Atoms, bonding, and reactions — building the language of chemistry.",
    icon: Beaker,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
  },
  {
    id: "myp-physics",
    title: "MYP Physics Foundations",
    programme: "MYP",
    level: "MYP",
    subject: "Physics",
    lessons: 16,
    duration: "9 weeks",
    description: "Forces, energy, waves, and electricity at the MYP inquiry level.",
    icon: Zap,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/physics",
  },

  // DP Biology
  {
    id: "dp-bio-sl",
    title: "Biology SL",
    programme: "DP",
    level: "SL",
    subject: "Biology",
    lessons: 28,
    duration: "Two years",
    description: "Cells, molecular biology, genetics, ecology, and physiology — the SL syllabus.",
    icon: Microscope,
    provider: "Bioknowledgy",
    url: "https://bioknowledgy.weebly.com/",
  },
  {
    id: "dp-bio-hl",
    title: "Biology HL",
    programme: "DP",
    level: "HL",
    subject: "Biology",
    lessons: 36,
    duration: "Two years",
    description: "All SL topics plus nucleic acids, animal physiology, and plant biology in depth.",
    icon: Dna,
    provider: "Save My Exams",
    url: "https://www.savemyexams.com/dp/biology/",
  },

  // DP Chemistry
  {
    id: "dp-chem-sl",
    title: "Chemistry SL",
    programme: "DP",
    level: "SL",
    subject: "Chemistry",
    lessons: 26,
    duration: "Two years",
    description: "Stoichiometry, bonding, energetics, kinetics, and organic chemistry essentials.",
    icon: FlaskConical,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
  },
  {
    id: "dp-chem-hl",
    title: "Chemistry HL",
    programme: "DP",
    level: "HL",
    subject: "Chemistry",
    lessons: 34,
    duration: "Two years",
    description: "Advanced bonding, equilibrium, redox, and organic mechanisms for HL students.",
    icon: Sparkles,
    provider: "Save My Exams",
    url: "https://www.savemyexams.com/dp/chemistry/",
  },

  // DP Physics
  {
    id: "dp-phys-sl",
    title: "Physics SL",
    programme: "DP",
    level: "SL",
    subject: "Physics",
    lessons: 26,
    duration: "Two years",
    description: "Mechanics, thermal physics, waves, electricity, and atomic physics — SL.",
    icon: Atom,
    provider: "Khan Academy",
    url: "https://www.khanacademy.org/science/physics",
  },
  {
    id: "dp-phys-hl",
    title: "Physics HL",
    programme: "DP",
    level: "HL",
    subject: "Physics",
    lessons: 36,
    duration: "Two years",
    description: "All SL topics plus rigid body mechanics, fields, and quantum physics.",
    icon: Rocket,
    provider: "IB Physics (ibphysics.org)",
    url: "https://ibphysics.org/",
  },

  // DP ESS + CS
  {
    id: "dp-ess",
    title: "Environmental Systems & Societies",
    programme: "DP",
    level: "SL",
    subject: "Environmental Systems",
    lessons: 22,
    duration: "Two years",
    description: "Ecosystems, biodiversity, climate, and sustainability — interdisciplinary DP science.",
    icon: Globe2,
    provider: "Save My Exams",
    url: "https://www.savemyexams.com/dp/environmental-systems-and-societies/",
  },
  {
    id: "dp-cs",
    title: "Computer Science SL/HL",
    programme: "DP",
    level: "HL",
    subject: "Computer Science",
    lessons: 24,
    duration: "Two years",
    description: "System fundamentals, networks, OOP, and computational thinking for the DP.",
    icon: Telescope,
    provider: "Save My Exams",
    url: "https://www.savemyexams.com/dp/computer-science/",
  },
];

export const ibProgrammes = ["MYP", "DP"] as const;

export const ibProviders = [
  { name: "Kognity", url: "https://www.kognity.com/", description: "Interactive IB MYP and DP textbooks used by IB schools worldwide." },
  { name: "Save My Exams", url: "https://www.savemyexams.com/ib/", description: "Topic notes, revision questions, and past papers for IB DP." },
  { name: "Bioknowledgy", url: "https://bioknowledgy.weebly.com/", description: "Free IB Biology slides, notes, and assessments by Chris Paine." },
  { name: "IB Physics", url: "https://ibphysics.org/", description: "Free IB Physics notes, videos, and past paper walkthroughs." },
  { name: "Khan Academy", url: "https://www.khanacademy.org/science", description: "Free aligned content for chemistry, physics, and biology fundamentals." },
];
