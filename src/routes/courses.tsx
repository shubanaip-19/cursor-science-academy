import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { courses, grades } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

const searchSchema = z.object({
  grade: z.coerce.number().int().min(5).max(9).optional(),
});

export const Route = createFileRoute("/courses")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Courses — Cursor Science for Grades 5–9" },
      { name: "description", content: "Browse all Cursor science courses by grade — biology, chemistry, physics, earth and space." },
      { property: "og:title", content: "Courses — Cursor" },
      { property: "og:description", content: "Browse all science courses for grades 5–9." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const { grade } = Route.useSearch();
  const filtered = grade ? courses.filter((c) => c.grade === grade) : courses;

  const chip = "px-4 py-2 rounded-full text-sm font-medium border transition-smooth";
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold">All <span className="text-gradient">Science</span> Courses</h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Filter by grade to find the perfect starting point.
        </p>
      </div>

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
    </div>
  );
}
