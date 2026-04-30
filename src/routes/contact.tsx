import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cursor" },
      { name: "description", content: "Get in touch with the Cursor team about science courses for grades 5–9." },
      { property: "og:title", content: "Contact Cursor" },
      { property: "og:description", content: "Get in touch with the Cursor team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <span className="text-sm font-medium uppercase tracking-wider text-primary">Get in touch</span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Let's <span className="text-gradient">talk science</span></h1>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Questions about a course, school partnerships, or just want to say hi?
            We answer every message within a school day.
          </p>
          <div className="mt-10 space-y-5">
            {[
              { icon: Mail, label: "Email", value: "shuban.patnaik@misv.se" },
              { icon: MessageCircle, label: "Live chat", value: "Mon–Fri, 9am–5pm" },
              { icon: MapPin, label: "Lab", value: "Online, with friends worldwide" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}
          className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card-soft space-y-5"
        >
          <div>
            <label className="text-sm font-medium">Name</label>
            <input required className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-smooth" placeholder="Ada Lovelace" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input required type="email" className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-smooth" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea required rows={5} className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm focus:border-primary outline-none transition-smooth resize-none" placeholder="What would you like to learn about?" />
          </div>
          <button type="submit" className="w-full rounded-lg bg-gradient-primary py-3 font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
