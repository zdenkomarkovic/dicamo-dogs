import Link from "next/link";
import { CONTACT, NAV_LINKS, OWNER, SITE_NAME } from "@/lib/constants";

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
            <p className="text-sm text-text/60 leading-relaxed">
              International FCI Doberman Kennel dedicated to breeding healthy,
              noble, and strong Dobermans.
            </p>
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
                    className="text-sm text-text/50 hover:text-gold transition-colors duration-200 tracking-wide"
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
            <ul className="space-y-3 text-sm text-text/50">
              <li>
                <span className="block text-text/30 text-xs tracking-wider uppercase mb-0.5">
                  Owner
                </span>
                {OWNER.name} — {OWNER.title}
              </li>
              <li>
                <span className="block text-text/30 text-xs tracking-wider uppercase mb-0.5">
                  Location
                </span>
                {CONTACT.zip} {CONTACT.address}
              </li>
              <li>
                <span className="block text-text/30 text-xs tracking-wider uppercase mb-0.5">
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
                <span className="block text-text/30 text-xs tracking-wider uppercase mb-0.5">
                  Phone
                </span>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                  className="hover:text-gold transition-colors duration-200"
                >
                  {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted tracking-wider">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-muted tracking-wider">
            Futog, Serbia · FCI Member
          </p>
        </div>
      </div>
    </footer>
  );
}
