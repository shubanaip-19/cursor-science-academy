import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ExternalLink, ShieldCheck, Search } from "lucide-react";
import { courses, grades, providers } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const searchSchema = z.object({
  grade: z.coerce.number().int().min(5).max(9).optional(),
});

export const Route = createFileRoute("/courses")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Courses — Cursor Science for Grades 5–9" },
      { name: "description", content: "Curated science courses from Khan Academy, CK-12, NASA, PhET, and more — organized by grade 5 through 9." },
      { property: "og:title", content: "Courses — Cursor" },
      { property: "og:description", content: "Curated free science courses from trusted partners, organized by grade." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const { grade } = Route.useSearch();
  const filtered = grade ? courses.filter((c) => c.grade === grade) : courses;
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    const url = `https://duckduckgo.com/?q=${encodeURIComponent(q + " free online course")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const chip = "px-4 py-2 rounded-full text-sm font-medium border transition-smooth";
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <ShieldCheck className="h-3.5 w-3.5" /> Curated from trusted educators
        </span>
        <h1 className="mt-5 text-4xl md:text-5xl font-bold">
          All <span className="text-gradient">Science</span> Courses
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Hand-picked free courses from Khan Academy, CK-12, NASA, PhET, and National Geographic Kids — organized by grade.
        </p>
      </div>

      <form onSubmit={handleSearch} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the web for more courses…"
            className="pl-9 h-11"
            aria-label="Search the web for more courses"
          />
        </div>
        <Button type="submit" className="h-11 bg-gradient-primary text-primary-foreground shadow-glow">
          Search
        </Button>
      </form>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/courses"
          className={`${chip} ${!grade ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/40 hover:border-primary/50"}`}
        >
          All Grades
        </Link>
        {grades.map((g) => (
          <Link
            key={g}
            to="/courses"
            search={{ grade: g }}
            className={`${chip} ${grade === g ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/40 hover:border-primary/50"}`}
          >
            Grade {g}
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Showing {filtered.length} {filtered.length === 1 ? "course" : "courses"}
        {grade ? ` for Grade ${grade}` : ""}
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>

      {/* Trusted partners */}
      <section className="mt-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Our learning partners</h2>
          <p className="mt-3 text-muted-foreground">
            Cursor curates the best free science resources on the web. Every course links to its
            original home so credit — and learners — go to the educators making it possible.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {providers.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-gradient-card p-5 transition-smooth hover:border-primary/50 hover:shadow-elegant"
            >
              <div>
                <p className="font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-smooth shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
