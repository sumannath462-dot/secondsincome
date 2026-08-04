import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 py-24 px-6"
    >
      {/* Background Circles */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-black/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-black px-8 py-16 md:px-16"
        >

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}

            <div>

              <p className="uppercase tracking-[6px] text-yellow-400 font-bold">
                Join Olympia Today
              </p>

              <h2 className="mt-5 text-5xl font-black leading-tight text-white">
                Start Your
                <br />
                <span className="text-yellow-400">
                  Fitness Journey
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-300">
                Become stronger, healthier and more confident with expert
                trainers, premium equipment and personalized guidance.
                Your transformation starts today.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <button className="flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition hover:scale-105 hover:bg-yellow-400">
                  Join Now
                  <ArrowRight size={18} />
                </button>

                <button className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400">
                  View Membership
                </button>

              </div>

            </div>

            {/* Right */}

            <div className="rounded-3xl border border-yellow-500/30 bg-white/5 p-8 backdrop-blur">

              <h3 className="text-3xl font-bold text-white">
                Visit Olympia Gym
              </h3>

              <p className="mt-3 text-gray-400">
                We'd love to welcome you for a free gym tour and fitness
                consultation.
              </p>

              <div className="mt-10 space-y-8">

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-yellow-500 p-3">
                    <Phone className="text-black" />
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Call Us
                    </p>

                    <h4 className="text-xl font-bold text-white">
                      +91 98765 43210
                    </h4>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-yellow-500 p-3">
                    <MapPin className="text-black" />
                  </div>

                  <div>
                    <p className="text-gray-400">
                      Address
                    </p>

                    <h4 className="text-xl font-bold text-white">
                      Agartala, Tripura
                    </h4>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}