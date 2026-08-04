import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/0000000000?text=Hi%20Olympia%20Gym,%20I'm%20interested%20in%20your%20membership.";

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.8,
        type: "spring",
        stiffness: 180,
      }}
      whileHover={{
        scale: 1.12,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="fixed bottom-6 right-6 z-[999] group"
    >
      {/* Pulse Effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping" />

      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl ring-4 ring-green-500/20 transition-all duration-300 group-hover:shadow-green-500/40">
        <FaWhatsapp className="text-3xl" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black border border-yellow-500/20 px-4 py-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-xl">
        Chat with us
      </div>
    </motion.a>
  );
}