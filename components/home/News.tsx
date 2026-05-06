import Image from "next/image";
import Link from "next/link";
import { news } from "@/lib/news";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function News() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <SectionTitle eyebrow="Latest" title="News" />
        </div>

        {news.length === 0 ? (
          <p className="text-text/85 text-sm">No news yet. Check back soon.</p>
        ) : (
          <div className="space-y-0 divide-y divide-border">
            {[...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((item) => (
              <article key={item.date + item.title} className="py-10 grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6">
                <div className="shrink-0 flex flex-col gap-4">
                  <time className="text-xs tracking-widest uppercase text-gold pt-1">
                    {new Date(item.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt=""
                      width={100}
                      height={100}
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-text mb-3">
                    {item.title}
                  </h3>
                  <div className="text-sm text-text/85 leading-relaxed space-y-3 mb-8">
                    {item.text.split("\n\n").map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                    {item.link && (
                      <p>
                        {item.link.prefix}
                        <Link href={item.link.href} className="text-gold hover:text-gold-light transition-colors duration-200">
                          {item.link.label}
                        </Link>
                        ".
                      </p>
                    )}
                  </div>
                  {item.images && item.images.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {item.images.map((img) =>
                        img.portrait ? (
                          <div key={img.src} className="shrink-0 w-44 overflow-hidden">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={400}
                              height={600}
                              className="w-full h-auto hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ) : (
                          <div key={img.src} className="relative w-64 h-52 overflow-hidden shrink-0">
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
