import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, BookOpen, Briefcase, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/study-buddy")({
  head: () => ({
    meta: [
      { title: "Study Buddy — AI Course Assistant | Cursor" },
      {
        name: "description",
        content:
          "Chat with Cursor's AI study buddy. Get course recommendations for tests, exam prep, and future careers.",
      },
      { property: "og:title", content: "Study Buddy — AI Course Assistant | Cursor" },
      {
        property: "og:description",
        content:
          "Ask anything — find the right Cursor course for your test or your dream career.",
      },
    ],
  }),
  component: StudyBuddyPage,
});

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  {
    icon: BookOpen,
    text: "I have a biology test next week — which course should I use?",
  },
  {
    icon: Briefcase,
    text: "I want to become a doctor — what should I study?",
  },
  {
    icon: GraduationCap,
    text: "I'm starting IB DP Physics HL — where do I begin?",
  },
];

function StudyBuddyPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error ?? "Something went wrong");
      } else {
        setMessages([...next, { role: "assistant", content: data.reply ?? "" }]);
      }
    } catch (e) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* Intro */}
      <section className="text-center mb-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow mb-4">
          <Sparkles className="h-6 w-6 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Meet your Study Buddy
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          A friendly AI assistant built to support students. Ask which Cursor course is best for an
          upcoming test, what to study to become a doctor, engineer, or astronaut, or anything else
          on your mind — your study buddy is here to help.
        </p>
      </section>

      {/* Suggestions */}
      {messages.length === 0 && (
        <div className="grid sm:grid-cols-3 gap-3 mb-6">
          {suggestions.map((s) => (
            <button
              key={s.text}
              onClick={() => send(s.text)}
              className="text-left rounded-lg border border-border bg-card p-4 hover:bg-accent transition-smooth"
            >
              <s.icon className="h-5 w-5 text-primary mb-2" />
              <p className="text-sm">{s.text}</p>
            </button>
          ))}
        </div>
      )}

      {/* Chat */}
      <div className="rounded-xl border border-border bg-card overflow-hidden flex flex-col h-[60vh]">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground text-center mt-12">
              Start the conversation — pick a suggestion above or type your own question.
            </p>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-4 py-2 text-sm text-muted-foreground">
                Thinking…
              </div>
            </div>
          )}
          {error && (
            <div className="text-sm text-destructive text-center">{error}</div>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="border-t border-border p-3 flex gap-2"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything — courses, careers, study tips…"
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="inline-flex items-center gap-1 rounded-md bg-gradient-primary px-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition-smooth disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
