import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOVABLE_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "LOVABLE_API_KEY is not configured" }, { status: 500 });
        }

        let body: { messages?: Array<{ role: string; content: string }> };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const messages = body.messages ?? [];
        if (!Array.isArray(messages) || messages.length === 0) {
          return Response.json({ error: "messages required" }, { status: 400 });
        }

        const systemPrompt = {
          role: "system",
          content:
            "You are Cursor's friendly study assistant for students in grades 5–12, including IB MYP and DP. Help students choose which Cursor courses fit their goals — for example preparing for a test, exploring a science topic, or working toward a future career (doctor, engineer, astronaut, data scientist, etc.). Recommend specific courses when relevant (Biology, Chemistry, Physics, Space, Environmental Systems, Computer Science, IB MYP/DP variants). Be encouraging, clear, and concise. You can answer general academic questions too.",
        };

        const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [systemPrompt, ...messages],
          }),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          if (res.status === 429) {
            return Response.json({ error: "Rate limit reached. Please try again shortly." }, { status: 429 });
          }
          if (res.status === 402) {
            return Response.json({ error: "AI credits exhausted. Please add credits in Lovable Cloud." }, { status: 402 });
          }
          return Response.json({ error: `AI request failed [${res.status}]`, details: text }, { status: res.status });
        }

        const data = await res.json();
        const reply = data?.choices?.[0]?.message?.content ?? "";
        return Response.json({ reply });
      },
    },
  },
});
