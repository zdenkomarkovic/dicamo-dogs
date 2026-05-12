"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [guestbookOpen, setGuestbookOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-dark/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 leading-none"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo.jpeg"
            alt="Di Casa Montenegro logo"
            width={100}
            height={86}
            className="object-cover"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) =>
            link.dropdown ? (
              <li key={link.label} className="relative group">
                <button className="text-xs tracking-wider uppercase transition-colors duration-200 text-text/85 hover:text-gold flex items-center gap-1">
                  {link.label}
                  <svg className="w-3 h-3 mt-0.5 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[160px] border border-border bg-dark shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {link.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link
                        href={sub.href}
                        {...(sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="block px-4 py-3 text-xs tracking-wider uppercase text-text/85 hover:text-gold hover:bg-white/5 transition-colors duration-200 whitespace-nowrap"
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href!}
                  className={`text-xs tracking-wider uppercase transition-colors duration-200 ${
                    pathname === link.href ? "text-gold" : "text-text/85 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-text transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-dark md:hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li key={link.label}>
                  <button
                    onClick={() => setGuestbookOpen(!guestbookOpen)}
                    className="flex items-center gap-1 text-sm tracking-widest uppercase text-text/85 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                    <svg
                      className={`w-3 h-3 mt-0.5 transition-transform duration-200 ${guestbookOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {guestbookOpen && (
                    <ul className="mt-2 ml-4 flex flex-col gap-3">
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setOpen(false)}
                            {...(sub.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="block text-sm tracking-widest uppercase text-text/85 hover:text-gold transition-colors duration-200"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href!}
                    onClick={() => setOpen(false)}
                    className={`block text-sm tracking-widest uppercase transition-colors duration-200 ${
                      pathname === link.href ? "text-gold" : "text-text/85 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
