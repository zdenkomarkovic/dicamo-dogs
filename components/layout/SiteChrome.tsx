"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}
      {children}
      {!isStudio && <Footer />}
      {!isStudio && <FloatingContact />}
    </>
  );
}
