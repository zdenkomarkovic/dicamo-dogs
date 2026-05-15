import { buildMetadata } from "@/lib/metadata";
import { News } from "@/components/home/News";

export const metadata = buildMetadata({
  title: "News — Di Casa Montenegro",
  description: "Latest news from Di Casa Montenegro Doberman Kennel.",
});

export default function NewsPage() {
  return (
    <main className="pt-24">
      <News />
    </main>
  );
}
