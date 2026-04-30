import type { Course } from "@/data/courses";
import { Clock, BookOpen, ArrowRight } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-smooth group-hover:bg-primary/20" />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="rounded-full border border-border bg-background/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            Grade {course.grade}
          </span>
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">{course.subject}</p>
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{course.description}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><BookOpen className="h-3.5 w-3.5" />{course.lessons} lessons</span>
            <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          </div>
          <ArrowRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-smooth group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </div>
    </article>
  );
}
