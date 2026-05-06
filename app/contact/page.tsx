import { buildMetadata } from "@/lib/metadata";
import { CONTACT, OWNER, SOCIAL } from "@/lib/constants";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Di Casa Montenegro Doberman kennel. Milan Rudović, International FCI Judge, Futog, Serbia.",
});

const contactItems = [
  {
    label: "Address",
    lines: [`${CONTACT.zip} Futog`, "Serbia"],
  },
  {
    label: "Telephone",
    lines: [CONTACT.phone],
    href: `tel:${CONTACT.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Mobile",
    lines: [CONTACT.mobile],
    href: `tel:${CONTACT.mobile.replace(/\s/g, "")}`,
  },
  {
    label: "Email",
    lines: [CONTACT.email],
    href: `mailto:${CONTACT.email}`,
  },
  {
    label: "Viber",
    lines: [CONTACT.mobile],
    href: `viber://chat?number=${CONTACT.mobile.replace(/[\s+]/g, "")}`,
  },
  {
    label: "WhatsApp",
    lines: [CONTACT.mobile],
    href: `https://wa.me/${CONTACT.mobile.replace(/[\s+]/g, "")}`,
  },
  {
    label: "Facebook",
    lines: ["Milan Rudović"],
    href: SOCIAL.facebook,
  },
  {
    label: "YouTube",
    lines: ["Di Casa Montenegro"],
    href: SOCIAL.youtube,
  },
  {
    label: "Languages",
    lines: [CONTACT.languages],
  },
];

export default function ContactPage() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Reach Out
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6">
            Contact Us
          </h1>
          <p className="text-text/85 leading-relaxed max-w-lg">
            We are happy to answer questions about our Dobermans, upcoming
            litters, or the breed in general. We speak Serbian and English.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact info */}
          <div>
            <h2 className="font-serif text-2xl font-bold text-text mb-8">
              {OWNER.name}
            </h2>
            <p className="text-sm text-muted tracking-widest uppercase mb-10">
              {OWNER.title} · FCI Kennel No. 4033
            </p>

            <dl className="space-y-8">
              {contactItems.map(({ label, lines, href }) => (
                <div key={label} className="flex gap-8 items-start">
                  <dt className="w-28 shrink-0 text-xs tracking-widest uppercase text-muted pt-0.5">
                    {label}
                  </dt>
                  <dd>
                    {href ? (
                      <a
                        href={href}
                        className="text-text/85 hover:text-gold transition-colors duration-200 text-sm leading-relaxed"
                      >
                        {lines.join(", ")}
                      </a>
                    ) : (
                      <span className="text-text/85 text-sm leading-relaxed">
                        {lines.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA links */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-block bg-gold text-dark text-sm font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300 text-center"
              >
                Send Email
              </a>
              <a
                href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}
                className="inline-block border border-gold/50 text-gold text-sm font-bold tracking-widest uppercase px-8 py-3.5 hover:border-gold hover:bg-gold/10 transition-all duration-300 text-center"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-surface border border-border p-10">
            <h3 className="font-serif text-xl font-bold text-text mb-6">
              About the Kennel
            </h3>
            <div className="space-y-5 text-sm text-text/85 leading-relaxed">
              <p>
                Di Casa Montenegro is an FCI registered Doberman kennel (No.
                4033) based in Futog, a town on the Danube River near Novi Sad,
                Serbia.
              </p>
              <p>
                The kennel is run by{" "}
                <span className="text-text/80">{OWNER.name}</span>, an
                International FCI judge with over three decades of experience
                with the breed.
              </p>
              <p>
                Our dogs have been placed with owners worldwide, and we maintain
                long friendships with many of our puppy families. We are always
                happy to discuss the breed, our breeding programme, or availability.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-muted mb-3">
                Response time
              </p>
              <p className="text-sm text-text/85">
                We aim to respond to all enquiries within 24–48 hours. For
                urgent matters, please call directly.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-2">
                  Languages
                </p>
                <p className="text-sm text-text/85">Serbian · English</p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-gold mb-2">
                  FCI Judge
                </p>
                <p className="text-sm text-text/85">International</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
