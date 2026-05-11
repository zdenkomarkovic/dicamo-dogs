import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Video",
  description: "Watch Di Casa Montenegro Dobermans in action — shows, training, and kennel life.",
});

const videos = [
  { id: "vDfa--w1PtQ" },
  { id: "FjcHtz46pD4" },
  { id: "5nFm7ewlArQ" },
  { id: "alwrz2IWLeY" },
  { id: "43jZF4Lv54I" },
];

export default function VideoPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Video
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            Watch our Dobermans in action — shows, training, and moments from the kennel.
          </p>
        </div>
      </section>

      {/* Videos */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="border border-border bg-surface">
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title="Di Casa Montenegro video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
