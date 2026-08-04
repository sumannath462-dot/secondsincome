import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  ShieldCheck,
  Users,
  ShowerHead,
} from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    desc: "Latest strength and fitness machines for effective workouts.",
  },
  {
    icon: HeartPulse,
    title: "Cardio Zone",
    desc: "Treadmills, cycles and cardio equipment for endurance training.",
  },
  {
    icon: Activity,
    title: "Functional Training",
    desc: "Improve mobility, balance and overall athletic performance.",
  },
  {
    icon: Users,
    title: "Certified Trainers",
    desc: "Professional guidance to help you achieve your fitness goals.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    desc: "Clean, hygienic and comfortable workout space for everyone.",
  },
  {
    icon: ShowerHead,
    title: "Locker & Shower",
    desc: "Freshen up after every workout with modern facilities.",
  },
];

export default function Facilities() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Our Facilities
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Everything You Need
            <br />
            <span className="text-yellow-400">
              To Become Stronger
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Train with premium equipment, expert trainers and a motivating
            atmosphere designed to help you achieve your fitness goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-yellow-500 text-black">
                  <Icon size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-yellow-400 transition">
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