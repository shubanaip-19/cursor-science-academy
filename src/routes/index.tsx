import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, GraduationCap, Star, Users } from "lucide-react";
import { courses, grades } from "@/data/courses";
import { CourseCard } from "@/components/CourseCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cursor — Science Courses for Grades 5–9" },
      { name: "description", content: "Spark curiosity with hands-on science courses for grades 5–9 — biology, chemistry, physics, and space." },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = courses.slice(0, 6);
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-40 mix-blend-screen"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" aria-hidden />
        <div className="relative container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Science made wonderful
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
              Where young minds <span className="text-gradient">discover the universe</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Cursor brings hands-on science to students in grades 5–9. From cells to galaxies,
              learn through interactive lessons crafted by passionate teachers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth"
              >
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center rounded-lg border border-border bg-background/40 backdrop-blur px-6 py-3 font-medium hover:border-primary/50 transition-smooth"
              >
                How it works
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 text-sm">
              {[
                { n: "10+", l: "Courses" },
                { n: "5–9", l: "Grade levels" },
                { n: "130+", l: "Lessons" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl font-bold text-gradient font-display">{s.n}</div>
                  <div className="text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: FlaskConical, title: "Hands-on Labs", text: "Real experiments students can run at home with simple materials." },
            { icon: GraduationCap, title: "Grade-aligned", text: "Curriculum aligned to grades 5–9 standards, paced for understanding." },
            { icon: Users, title: "Live Mentors", text: "Weekly office hours with science teachers who love what they teach." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-gradient-card p-7 shadow-card-soft">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Grade strip */}
      <section className="container mx-auto px-6 py-12">
        <div className="rounded-3xl border border-border bg-gradient-card p-10 shadow-card-soft">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">Pick your grade level</h2>
              <p className="mt-2 text-muted-foreground">Each grade unlocks a new chapter of science.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {grades.map((g) => (
                <Link
                  key={g}
                  to="/courses"
                  search={{ grade: g }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background/40 font-display text-xl font-bold hover:border-primary hover:text-primary hover:shadow-glow transition-smooth"
                >
                  {g}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured courses */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Featured courses</h2>
            <p className="mt-2 text-muted-foreground">A taste of what's waiting in the lab.</p>
          </div>
          <Link to="/courses" className="hidden sm:inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-smooth">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </section>
    </>
  );
}
