import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Dumbbell,
  Clock3,
} from "lucide-react";

import heroImage from "../../assets/olympia/hero-gym.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[170px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-semibold tracking-wide text-yellow-400">
              Olympia Gym & Health Centre
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Transform
              <br />

              <span className="text-yellow-400">
                Your Body
              </span>

              <br />

              Build
              <span className="text-yellow-400">
                {" "}
                Confidence
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
              Experience luxury fitness with certified trainers,
              premium equipment, personalized workout programs,
              and an inspiring environment built for real results.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <button className="group inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 font-bold text-black transition hover:bg-yellow-300">
                Join Today

                <ArrowRight
                  size={20}
                  className="ml-2 transition group-hover:translate-x-1"
                />
              </button>

              <button className="rounded-full border border-yellow-500 px-8 py-4 font-semibold text-white transition hover:bg-yellow-500 hover:text-black">
                View Membership
              </button>

            </div>

            {/* Features */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-gray-300">
                  Certified Trainers
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-gray-300">
                  Premium Equipment
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-yellow-400"
                />

                <span className="text-gray-300">
                  Nutrition Support
                </span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >

            <img
              src={heroImage}
              alt="Olympia Gym"
              className="w-full rounded-[32px] border border-yellow-500/20 object-cover shadow-2xl"
            />
            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-6 top-10 rounded-2xl border border-yellow-500/20 bg-black/80 backdrop-blur-md px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Users size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white">
                    500+
                  </h3>
                  <p className="text-sm text-gray-400">
                    Active Members
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-6 top-1/2 rounded-2xl border border-yellow-500/20 bg-black/80 backdrop-blur-md px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Dumbbell size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white">
                    12+
                  </h3>
                  <p className="text-sm text-gray-400">
                    Certified Trainers
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-6 left-12 rounded-2xl border border-yellow-500/20 bg-black/80 backdrop-blur-md px-6 py-5 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-400 text-black">
                  <Clock3 size={28} />
                </div>

                <div>
                  <h3 className="text-3xl font-black text-white">
                    24/7
                  </h3>
                  <p className="text-sm text-gray-400">
                    Open Gym
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
