import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member - 2 Years",
    review:
      "Olympia Gym completely transformed my fitness journey. The trainers are supportive and the equipment is world-class.",
  },
  {
    name: "Ankit Verma",
    role: "Fitness Enthusiast",
    review:
      "The atmosphere is motivating, clean and energetic. I achieved my transformation faster than I expected.",
  },
  {
    name: "Priya Das",
    role: "Premium Member",
    review:
      "Excellent trainers, modern machines and personalized guidance. Highly recommended for anyone serious about fitness.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black py-28 px-6"
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
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            What Our
            <span className="text-yellow-400"> Members Say</span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            Real stories from members who transformed their lifestyle with Olympia Gym.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(250,204,21,.20)] transition-all duration-300"
            >

              <div className="flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="mt-6 text-gray-300 leading-8 italic">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-yellow-400 text-sm">
                  {item.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}