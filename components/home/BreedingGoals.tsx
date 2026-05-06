import { SectionTitle } from "@/components/ui/SectionTitle";

const pillars = [
  {
    title: "Character",
    description:
      "The word 'character' is often used carelessly today. We have made it our mission to breed a Doberman that can meet the societal demands of modern times — a dog whose strength of character can be relied upon at all times.",
  },
  {
    title: "Health",
    description:
      "We place great importance on the health of our dogs. Regular checkups for hereditary heart and eye diseases, as well as hip dysplasia screening, are essential for every breeding decision we make.",
  },
  {
    title: "Working Potential",
    description:
      "The Doberman is originally a working dog, and this potential must be challenged and nurtured. Given the intelligence of this breed, it requires appropriate activities and mental stimulation — not just obedience.",
  },
];

export function BreedingGoals() {
  return (
    <section className="py-24 px-6 bg-surface">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-4 max-w-2xl">
          <SectionTitle
            eyebrow="Our Mission"
            title="Breeding Goal"
          />
        </div>
        <p className="font-serif text-xl md:text-2xl text-gold italic mb-16 max-w-2xl">
          &ldquo;Best character, performance and beauty combined.&rdquo;
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bg-surface p-10 group hover:bg-surface-2 transition-colors duration-300"
            >
              <p className="font-serif text-5xl font-bold text-gold/15 group-hover:text-gold/30 transition-colors duration-300 mb-6 select-none">
                0{i + 1}
              </p>
              <h3 className="font-serif text-2xl font-bold text-text mb-4">
                {pillar.title}
              </h3>
              <p className="text-sm text-text/85 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 border-t border-border pt-12 max-w-3xl">
          <p className="text-text/85 leading-relaxed text-sm">
            A well-behaved dog is important to us, but it should not be our
            only goal. When a dog embodies all breed-specific characteristics —
            stable character, robust health, and working drive — we can say with
            complete conviction that we have bred a good dog.
          </p>
        </div>
      </div>
    </section>
  );
}
