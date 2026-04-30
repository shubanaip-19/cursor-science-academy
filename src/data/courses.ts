import { Atom, Beaker, Dna, Leaf, Magnet, Microscope, Rocket, Sparkles, Waves, Zap } from "lucide-react";
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
};

export const courses: Course[] = [
  { id: "g5-living", title: "The World of Living Things", grade: 5, subject: "Biology", lessons: 12, duration: "6 weeks",
    description: "Plants, animals, and ecosystems — explore life all around us.", icon: Leaf },
  { id: "g5-matter", title: "States of Matter", grade: 5, subject: "Chemistry", lessons: 10, duration: "5 weeks",
    description: "Solids, liquids, gases — and the magic of changing between them.", icon: Beaker },
  { id: "g6-cells", title: "Introduction to Cells", grade: 6, subject: "Biology", lessons: 14, duration: "7 weeks",
    description: "Discover the tiny building blocks that make up every living thing.", icon: Microscope },
  { id: "g6-energy", title: "Forms of Energy", grade: 6, subject: "Physics", lessons: 12, duration: "6 weeks",
    description: "Light, heat, sound, and motion — energy in everyday life.", icon: Zap },
  { id: "g7-chemistry", title: "Atoms & Molecules", grade: 7, subject: "Chemistry", lessons: 16, duration: "8 weeks",
    description: "Meet the smallest pieces of matter and how they combine.", icon: Atom },
  { id: "g7-earth", title: "Earth Systems", grade: 7, subject: "Earth & Space", lessons: 12, duration: "6 weeks",
    description: "Rocks, weather, oceans, and the dynamic systems of our planet.", icon: Waves },
  { id: "g8-forces", title: "Forces & Motion", grade: 8, subject: "Physics", lessons: 14, duration: "7 weeks",
    description: "Newton's laws, gravity, and the physics of how things move.", icon: Magnet },
  { id: "g8-genetics", title: "Genetics & Heredity", grade: 8, subject: "Biology", lessons: 12, duration: "6 weeks",
    description: "DNA, traits, and how life passes information across generations.", icon: Dna },
  { id: "g9-reactions", title: "Chemical Reactions", grade: 9, subject: "Chemistry", lessons: 18, duration: "9 weeks",
    description: "Balance equations, explore acids and bases, and witness change.", icon: Sparkles },
  { id: "g9-space", title: "Astronomy & Space", grade: 9, subject: "Earth & Space", lessons: 14, duration: "7 weeks",
    description: "Stars, galaxies, and the science of our place in the universe.", icon: Rocket },
];

export const grades = [5, 6, 7, 8, 9] as const;
