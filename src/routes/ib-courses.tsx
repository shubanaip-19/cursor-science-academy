import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { BookOpen, Clock, ExternalLink, GraduationCap, ShieldCheck } from "lucide-react";
import { ibCourses, ibProgrammes, ibProviders, type IBCourse } from "@/data/ibCourses";

const searchSchema = z.object({
  programme: z.enum(["MYP", "DP"]).optional(),
});

export const Route = createFileRoute("/ib-courses")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "IB Courses — Cursor Science for MYP & DP" },
      { name: "description", content: "Curated IB Middle Years and Diploma Programme science resources from Kognity, Save My Exams, InThinking, Khan Academy, and more." },
      { property: "og:title", content: "IB Courses — Cursor" },
      { property: "og:description", content: "Hand-picked IB MYP and DP science resources, organized by programme and subject." },
    ],
  }),
  component: IBCoursesPage,
});

function IBCourseCard({ course }: { course: IBCourse }) {
  const Icon = course.icon;
  return (
    <a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-smooth group-hover:bg-primary/20" />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            IB {course.programme}{course.level !== "MYP" ? ` · ${course.level}` : ""}
          </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">{course.subject}</p>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{course.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" />{course.lessons} lessons</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">
            via <span className="font-medium text-foreground">{course.provider}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-smooth">
            Open resource <ExternalLink className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function IBCoursesPage() {
  const { programme } = Route.useSearch();
  const filtered = programme ? ibCourses.filter((c) => c.programme === programme) : ibCourses;

  const chip = "px-4 py-2 rounded-full text-sm font-medium border transition-smooth";
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <GraduationCap className="h-3.5 w-3.5" /> International Baccalaureate
        </span>
        <h1 className="mt-5 text-4xl md:text-5xl font-bold">
          IB <span text-gradient="true" className="text-gradient">Science</span> Courses
        </h1>
        <p className="mt-4 text-muted-foreground text-lg">
          Curated resources for IB Middle Years (MYP) and Diploma Programme (DP) sciences — pulled from
          Kognity, Save My Exams, InThinking, Bioknowledgy, and more.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5" /> Suggestions only. Cursor is not affiliated with the IB Organization.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          to="/ib-courses"
          className={`${chip} ${!programme ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/40 hover:border-primary/50"}`}
        >
          All Programmes
        </Link>
        {ibProgrammes.map((p) => (
          <Link
            key={p}
            to="/ib-courses"
            search={{ programme: p }}
            className={`${chip} ${programme === p ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow" : "border-border bg-background/40 hover:border-primary/50"}`}
          >
            IB {p}
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Showing {filtered.length} {filtered.length === 1 ? "resource" : "resources"}
        {programme ? ` for IB ${programme}` : ""}
      </p>

      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((c) => <IBCourseCard key={c.id} course={c} />)}
      </div>

      <section className="mt-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">Trusted IB resource providers</h2>
          <p className="mt-3 text-muted-foreground">
            Each link goes straight to the original creator. Some resources are free; others
            require a school or personal subscription.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ibProviders.map((p) => (
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
