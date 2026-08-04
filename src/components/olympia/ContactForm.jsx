import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Dumbbell,
  MessageSquare,
  Send,
} from "lucide-react";

const fitnessGoals = [
  "Weight Loss",
  "Muscle Gain",
  "Strength Training",
  "General Fitness",
  "Personal Training",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for exploring Olympia Gym Demo.\n\nContact integration will be configured after project delivery."
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      goal: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >

          <p className="uppercase tracking-[4px] text-yellow-400 font-semibold">
            Contact Olympia
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
            Start Your
            <span className="text-yellow-400">
              {" "}Fitness Journey
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">
            This is a premium demonstration website.
            Contact integration will be configured
            after project delivery.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >
            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-yellow-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-yellow-400"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-yellow-400"
                />
              </div>
            </div>

            {/* Fitness Goal */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Fitness Goal
              </label>

              <div className="relative">
                <Dumbbell
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white outline-none transition-all duration-300 focus:border-yellow-400"
                >
                  <option value="">Select your goal</option>

                  {fitnessGoals.map((goal) => (
                    <option
                      key={goal}
                      value={goal}
                    >
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Message
              </label>

              <div className="relative">
                <MessageSquare
                  size={20}
                  className="absolute left-4 top-5 text-yellow-400"
                />

                <textarea
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-4 text-white placeholder:text-gray-500 outline-none transition-all duration-300 focus:border-yellow-400 resize-none"
                />
              </div>
            </div>

            {/* Demo Notice */}
            <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/10 p-5">
              <p className="text-sm leading-7 text-yellow-200">
                <span className="font-semibold">Demo Website:</span>{" "}
                This contact form is for presentation purposes only.
                Email, WhatsApp and backend integration will be configured
                after project delivery.
              </p>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-400 px-8 py-4 font-bold text-black shadow-lg transition-all duration-300 hover:shadow-yellow-500/30"
            >
              <Send size={20} />
              Join Olympia Today
            </motion.button>
          </form>

        </motion.div>
      </div>
    </section>
  );
}