import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { LoveDoberman } from "@/components/home/LoveDoberman";
import { BreedingGoals } from "@/components/home/BreedingGoals";
import { Poem } from "@/components/home/Poem";
import { News } from "@/components/home/News";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata = buildMetadata({
  title: "Di Casa Montenegro — Doberman Kennel",
  description:
    "International FCI Doberman Kennel in Futog, Serbia. Breeding healthy, noble, and strong Dobermans with open character and big potential for work.",
});

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <LoveDoberman />
      <BreedingGoals />
      <Poem />
      <News />
      <CallToAction />
    </main>
  );
}
