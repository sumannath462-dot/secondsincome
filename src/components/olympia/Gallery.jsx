import { motion } from "framer-motion";

import gym1 from "../../assets/olympia/gym1.jpg";
import gym2 from "../../assets/olympia/gym2.jpg";
import gym3 from "../../assets/olympia/gym3.jpg";
import gym4 from "../../assets/olympia/gym4.jpg";
import gym5 from "../../assets/olympia/gym5.jpg";
import gym6 from "../../assets/olympia/gym6.jpg";

const images = [
  {
    image: gym1,
    title: "Luxury Strength Zone",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: gym2,
    title: "Elite Cardio Studio",
  },
  {
    image: gym3,
    title: "Professional Coaching",
  },
  {
    image: gym4,
    title: "Functional Performance",
  },
  {
    image: gym5,
    title: "Premium Workout Area",
    className: "md:col-span-2",
  },
  {
    image: gym6,
    title: "Modern Reception",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="font-bold uppercase tracking-[6px] text-yellow-400">
            Our Gallery
          </p>

          <h2 className="mt-5 text-5xl font-black leading-tight text-white md:text-6xl">
            Discover Our
            <br />
            <span className="text-yellow-400">
              Premium Fitness Experience
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Experience world-class equipment, expert coaching, luxury interiors,
            and an inspiring atmosphere designed to help you become stronger every day.
          </p>
        </motion.div>

        {/* Gallery */}

        <div className="grid auto-rows-[260px] gap-6 md:grid-cols-3">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-3xl border border-gray-800 ${item.className || ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover brightness-110 transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-125"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-0 bg-black/30 transition-all duration-700 group-hover:bg-black/10" />

              <div className="absolute bottom-8 left-8">

                <h3 className="text-3xl font-extrabold text-white drop-shadow-lg">
                  {item.title}
                </h3>

                <p className="mt-3 translate-y-4 text-yellow-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore This Area →
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <button className="rounded-full bg-yellow-500 px-12 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,0.55)]">
            Start Your Fitness Journey
          </button>
        </motion.div>

      </div>
    </section>
  );
}