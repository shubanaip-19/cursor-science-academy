import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cursor" },
      { name: "description", content: "Send feedback to help improve Cursor science courses for grades 5–9." },
      { property: "og:title", content: "Contact Cursor" },
      { property: "og:description", content: "Email us your feedback to help improve Cursor." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const email = "shuban.patnaik@misv.se";
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">Get in touch</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-bold">
          Help us <span className="text-gradient">improve Cursor</span>
        </h1>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
          Email this address with your feedback to help improve Cursor.
        </p>

        <a
          href={`mailto:${email}`}
          className="group mt-12 inline-flex items-center gap-4 rounded-2xl border border-border bg-gradient-card px-6 py-5 shadow-card-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-elegant"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
            <Mail className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="text-left">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="text-lg font-semibold">{email}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
