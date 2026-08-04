import { motion } from "framer-motion";
import hero from "../../assets/olympia/hero.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <img
        src={hero}
        alt="Olympia Gym"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] text-yellow-400 font-semibold"
        >
          Olympia Gym & Health Centre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-5xl md:text-7xl font-black text-white leading-tight"
        >
          Transform Your
          <br />
          <span className="text-yellow-400">
            Body & Life
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-2xl mx-auto text-gray-300 text-lg"
        >
          Join Olympia Gym and experience world-class fitness,
          personal training, modern equipment and a motivating
          environment that helps you achieve your goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-5"
        >
          <button className="bg-yellow-500 hover:bg-yellow-400 px-8 py-4 rounded-full text-black font-bold transition">
            Join Today
          </button>

          <button className="border border-white hover:border-yellow-400 hover:text-yellow-400 px-8 py-4 rounded-full text-white transition">
            View Membership
          </button>
        </motion.div>

      </div>
    </section>
  );
}