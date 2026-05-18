import { getSanityAnnouncements } from "@/sanity/lib/announcementQueries";
import { FloatingAnnouncements } from "./FloatingAnnouncements";

export const revalidate = 60;

export async function FloatingAnnouncementsServer() {
  const items = await getSanityAnnouncements().catch(() => []);
  return <FloatingAnnouncements items={items} />;
}
