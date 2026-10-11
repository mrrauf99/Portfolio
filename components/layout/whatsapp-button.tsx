import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Abdul Rauf on WhatsApp (opens in a new tab)"
      title="Chat on WhatsApp"
      className="fixed right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition-colors duration-150 hover:bg-[#20c15c] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-reduce:transition-none sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
    </a>
  );
}
