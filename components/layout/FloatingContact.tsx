import { FaViber, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { CONTACT } from "@/lib/constants";

const number = CONTACT.mobile.replace(/[\s+]/g, "");

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-row gap-3">
      <a
        href={`viber://chat?number=${number}`}
        aria-label="Contact us on Viber"
        className="flex items-center justify-center rounded-full shadow-lg bg-[#7360f2] hover:bg-[#5d4bd4] transition-colors duration-200"
        style={{ width: 52, height: 52 }}
      >
        <FaViber size={30} color="white" />
      </a>
      <a
        href={`https://wa.me/${number}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="flex items-center justify-center rounded-full shadow-lg bg-[#25d366] hover:bg-[#1ebe5d] transition-colors duration-200"
        style={{ width: 52, height: 52 }}
      >
        <FaWhatsapp size={30} color="white" />
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        aria-label="Send us an email"
        className="flex items-center justify-center rounded-full shadow-lg bg-[#c0392b] hover:bg-[#a93226] transition-colors duration-200"
        style={{ width: 52, height: 52 }}
      >
        <FaEnvelope size={26} color="white" />
      </a>
    </div>
  );
}
