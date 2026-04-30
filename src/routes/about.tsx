import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, Heart, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cursor" },
      { name: "description", content: "Cursor's mission is to make science feel like an adventure for every student in grades 5–9." },
      { property: "og:title", content: "About Cursor" },
      { property: "og:description", content: "Our mission to make science feel like an adventure." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-3xl">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">About Cursor</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
          We believe every child is a <span className="text-gradient">scientist</span> waiting to be sparked.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
          Cursor is built by teachers, scientists, and parents who think middle-school
          science should be something kids look forward to. We pair clear explanations
          with hands-on experiments so curiosity becomes confidence.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { icon: Lightbulb, title: "Curiosity-first", text: "Every lesson starts with a question worth chasing." },
          { icon: Heart, title: "Made for kids 10–15", text: "Tone, pacing, and projects designed for grades 5–9." },
          { icon: Target, title: "Standards-aligned", text: "Real curriculum, real outcomes — no fluff." },
        ].map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-gradient-card p-7 shadow-card-soft">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <v.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
