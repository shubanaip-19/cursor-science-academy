import { createFileRoute } from "@tanstack/react-router";
import "@tanstack/react-start";

export const Route = createFileRoute("/api/search")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.FIRECRAWL_API_KEY;
        if (!apiKey) {
          return Response.json({ error: "FIRECRAWL_API_KEY is not configured" }, { status: 500 });
        }

        let body: { query?: string; language?: string };
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const query = (body.query ?? "").trim();
        if (!query) {
          return Response.json({ error: "Query is required" }, { status: 400 });
        }

        const langMap: Record<string, { lang: string; country: string; word: string }> = {
          English: { lang: "en", country: "us", word: "free online course" },
          Spanish: { lang: "es", country: "es", word: "curso gratis en línea" },
          French: { lang: "fr", country: "fr", word: "cours gratuit en ligne" },
          Arabic: { lang: "ar", country: "sa", word: "دورة مجانية عبر الإنترنت" },
          Mandarin: { lang: "zh", country: "cn", word: "免费在线课程" },
          Hindi: { lang: "hi", country: "in", word: "मुफ्त ऑनलाइन पाठ्यक्रम" },
          Italian: { lang: "it", country: "it", word: "corso gratuito online" },
          Romanian: { lang: "ro", country: "ro", word: "curs gratuit online" },
          German: { lang: "de", country: "de", word: "kostenloser Online-Kurs" },
          Portuguese: { lang: "pt", country: "br", word: "curso grátis online" },
          Russian: { lang: "ru", country: "ru", word: "бесплатный онлайн курс" },
          Japanese: { lang: "ja", country: "jp", word: "無料オンライン講座" },
          Korean: { lang: "ko", country: "kr", word: "무료 온라인 강좌" },
          Turkish: { lang: "tr", country: "tr", word: "ücretsiz çevrimiçi kurs" },
          Dutch: { lang: "nl", country: "nl", word: "gratis online cursus" },
          Polish: { lang: "pl", country: "pl", word: "darmowy kurs online" },
          Vietnamese: { lang: "vi", country: "vn", word: "khóa học trực tuyến miễn phí" },
          Indonesian: { lang: "id", country: "id", word: "kursus online gratis" },
          Bengali: { lang: "bn", country: "bd", word: "বিনামূল্যে অনলাইন কোর্স" },
          Greek: { lang: "el", country: "gr", word: "δωρεάν διαδικτυακό μάθημα" },
          Hebrew: { lang: "he", country: "il", word: "קורס מקוון חינם" },
          Ukrainian: { lang: "uk", country: "ua", word: "безкоштовний онлайн курс" },
          Swahili: { lang: "sw", country: "ke", word: "kozi ya bure mtandaoni" },
          Thai: { lang: "th", country: "th", word: "คอร์สออนไลน์ฟรี" },
          Urdu: { lang: "ur", country: "pk", word: "مفت آن لائن کورس" },
        };
        const loc = langMap[body.language ?? "English"] ?? langMap.English;

        const res = await fetch("https://api.firecrawl.dev/v2/search", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `${query} ${loc.word}`,
            limit: 10,
            lang: loc.lang,
            country: loc.country,
          }),
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
