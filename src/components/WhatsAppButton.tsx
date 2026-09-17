import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "201205216828";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact me on WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg shadow-green-500/30 transition duration-200 hover:-translate-y-1 hover:bg-green-400"
    >
      <FaWhatsapp />
    </a>
  );
}
