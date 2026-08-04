import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  ShieldCheck,
  Users,
  Bath,
} from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Train with the latest premium strength and cardio machines for maximum performance.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    desc: "Dedicated cardio area with treadmills, bikes and elliptical trainers.",
  },
  {
    icon: Activity,
    title: "Functional Training",
    desc: "Improve mobility, endurance and athletic performance with functional workouts.",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    desc: "Experienced fitness professionals to guide every step of your transformation.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Hygienic",
    desc: "A clean, sanitized and secure environment for a comfortable workout experience.",
  },
  {
    icon: Bath,
    title: "Locker & Shower",
    desc: "Modern locker rooms and shower facilities to refresh after every session.",
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Our Facilities
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white leading-tight">
            Everything You Need
            <br />
            <span className="text-yellow-400">
              To Become Stronger
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Experience premium equipment, expert coaching and world-class
            facilities designed to help you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.15)]"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-400 text-black transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} strokeWidth={2.2} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}