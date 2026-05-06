import Link from "next/link";
import { CONTACT, NAV_LINKS, OWNER, SITE_NAME, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold tracking-widest text-gold uppercase mb-1">
              Di Casa Montenegro
            </h3>
            <p className="text-xs tracking-widest text-muted uppercase mb-4">
              FCI Registered Kennel · No. 4033
            </p>
            <p className="text-sm text-text/85 leading-relaxed">
              International FCI Doberman Kennel dedicated to breeding healthy,
              noble, and strong Dobermans.
            </p>
            <div className="flex gap-5 mt-5">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted tracking-wider uppercase hover:text-gold transition-colors duration-200"
              >
                Facebook
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted tracking-wider uppercase hover:text-gold transition-colors duration-200"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase mb-6 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text/85 hover:text-gold transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-widest text-gold uppercase mb-6 font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text/85">
              <li>
                <span className="block text-text/85 text-xs tracking-wider uppercase mb-0.5">
                  Owner
                </span>
                {OWNER.name} — {OWNER.title}
              </li>
              <li>
                <span className="block text-text/85 text-xs tracking-wider uppercase mb-0.5">
                  Location
                </span>
                {CONTACT.zip} {CONTACT.address}
              </li>
              <li>
                <span className="block text-text/85 text-xs tracking-wider uppercase mb-0.5">
                  Email
                </span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <span className="block text-text/85 text-xs tracking-wider uppercase mb-0.5">
                  Phone
                </span>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <span className="block text-text/85 text-xs tracking-wider uppercase mb-0.5">
                  Mobile · Viber · WhatsApp
                </span>
                <a
                  href={`tel:${CONTACT.mobile.replace(/\s/g, "")}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {CONTACT.mobile}
                </a>
                <span className="flex gap-3 mt-1.5">
                  <a
                    href={`viber://chat?number=${CONTACT.mobile.replace(/[\s+]/g, "")}`}
                    className="text-xs tracking-wider uppercase hover:text-gold transition-colors duration-200"
                  >
                    Viber
                  </a>
                  <span className="text-text/20">·</span>
                  <a
                    href={`https://wa.me/${CONTACT.mobile.replace(/[\s+]/g, "")}`}
                    className="text-xs tracking-wider uppercase hover:text-gold transition-colors duration-200"
                  >
                    WhatsApp
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <p className="text-xs text-muted tracking-wider">
                &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              </p>
              <p className="text-xs text-muted tracking-wider">
                Izrada sajta:{" "}
                <a
                  href="https://manikamwebsolutions.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/85 hover:text-gold transition-colors duration-200"
                >
                  Manikam Web Solutions
                </a>
              </p>
            </div>
            <p className="text-xs text-muted tracking-wider">
              Futog, Serbia · FCI Member
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
