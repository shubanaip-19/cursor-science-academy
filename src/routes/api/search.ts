import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/search")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.FIRECRAWL_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "FIRECRAWL_API_KEY is not configured" }, { status: 500 });
        }

        let body: { query?: string };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const query = (body.query ?? "").trim();
        if (!query) {
          return Response.json({ error: "Query is required" }, { status: 400 });
        }

        const res = await fetch("https://api.firecrawl.dev/v2/search", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: `${query} free online course`, limit: 10 }),
        });

        const data = await res.json().catch(() => null);
        if (!res.ok) {
          return Response.json(
            { error: `Search failed [${res.status}]`, details: data },
            { status: res.status },
          );
        }

        // Normalize: SDK v2 may return { web: [...] } or { data: [...] }
        const raw = (data?.data?.web ?? data?.web ?? data?.data ?? []) as Array<{
          url?: string;
          title?: string;
          description?: string;
        }>;
        const results = raw
          .filter((r) => r.url)
          .map((r) => ({
            url: r.url!,
            title: r.title || r.url!,
            description: r.description || "",
          }));

        return Response.json({ results });
      },
    },
  },
});
