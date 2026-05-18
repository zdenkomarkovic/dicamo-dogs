import { buildMetadata } from "@/lib/metadata";
import { News } from "@/components/home/News";
import { news as staticNews } from "@/lib/news";
import { getSanityNews } from "@/sanity/lib/newsQueries";

export const metadata = buildMetadata({
  title: "News — Di Casa Montenegro",
  description: "Latest news from Di Casa Montenegro Doberman Kennel.",
});

export const revalidate = 60;

export default async function NewsPage() {
  const sanityNews = await getSanityNews().catch(() => []);
  const allNews = [...sanityNews, ...staticNews];

  return (
    <main className="pt-24">
      <News items={allNews} />
    </main>
  );
}
