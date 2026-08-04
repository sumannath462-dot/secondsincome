import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    duration: "/month",
    featured: false,
    features: [
      "Gym Access",
      "Cardio Area",
      "Locker Facility",
      "Free Fitness Assessment",
    ],
  },
  {
    name: "Premium",
    price: "₹1,999",
    duration: "/month",
    featured: true,
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Consultation",
      "Unlimited Group Classes",
      "Priority Support",
    ],
  },
  {
    name: "Elite",
    price: "₹2,999",
    duration: "/month",
    featured: false,
    features: [
      "Everything in Premium",
      "VIP Locker",
      "Steam Bath",
      "Body Composition Analysis",
      "Premium Support",
    ],
  },
];

export default function Membership() {
  return (
    <section
      id="membership"
      className="bg-gradient-to-b from-black via-zinc-950 to-black py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Membership Plans
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Choose Your
            <span className="text-yellow-400"> Perfect Plan</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            Flexible membership plans designed for beginners,
            fitness enthusiasts and professional athletes.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl border p-10 transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-yellow-400 bg-yellow-500/10 shadow-[0_0_35px_rgba(250,204,21,.25)]"
                  : "border-white/10 bg-white/5"
              }`}
            >

              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-5 py-2 text-sm font-bold text-black">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-6">
                <span className="text-5xl font-black text-yellow-400">
                  {plan.price}
                </span>

                <span className="text-gray-400">
                  {plan.duration}
                </span>
              </div>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature) => (

                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-yellow-400"
                    />

                    <span className="text-gray-300">
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button
                className={`mt-10 w-full rounded-full py-4 font-bold transition ${
                  plan.featured
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                }`}
              >
                Join Now
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}