export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const SITE_NAME = "Di Casa Montenegro";

export const SITE_DESCRIPTION =
  "International FCI Doberman Kennel based in Futog, Serbia. Breeding healthy, noble, and strong Dobermans with open character and big potential for work.";

export const CONTACT = {
  email: "dicasamne@gmail.com",
  phone: "+381 21 896241",
  mobile: "+381 64 1168053",
  address: "Futog, Serbia",
  zip: "21410",
  country: "Serbia",
  languages: "Serbian, English",
};

export const OWNER = {
  name: "Milan Rudović",
  title: "International FCI Judge",
};

export const SOCIAL = {
  facebook: "https://www.facebook.com/milan.rudovic?fref=ts",
  youtube: "https://www.youtube.com/channel/UCOcMPaqjlPaSlr_zcPLPx5Q",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Puppies", href: "/puppies" },
  { label: "Litters", href: "/litters" },
  { label: "My Champions", href: "/my-champions" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Video", href: "/video" },
  { label: "Friends & Partners", href: "/friends-partners" },
  {
    label: "Guestbook",
    href: "#",
    dropdown: [
      { label: "Guestbook", href: "https://www.ultraguest.com/view/1631738056", external: true },
      { label: "Old Guestbook", href: "/old-guestbook", external: false },
    ],
  },
  { label: "Contact", href: "/contact" },
];
