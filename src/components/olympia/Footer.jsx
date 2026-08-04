import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Facilities", href: "#facilities" },
  { name: "Membership", href: "#membership" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: <FaFacebookF size={18} />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "#",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Olympia
              <span className="text-yellow-500"> Gym</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Premium fitness experience with world-class equipment,
              expert trainers, and a motivating environment designed
              to transform your body and lifestyle.
            </p>

            <div className="flex gap-4 mt-8">
              {socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{
                    scale: 1.12,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={item.href}
                  aria-label={item.label}
                  className="w-11 h-11 rounded-full border border-yellow-500/30 bg-yellow-500/10 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition"
                  >
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="text-yellow-500 mt-1"
                />
                <p className="text-gray-400">
                  123 Fitness Street
                  <br />
                  Your City, Country
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={20}
                  className="text-yellow-500"
                />
                <span>+00 0000 000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={20}
                  className="text-yellow-500"
                />
                <span>info@olympiagym.com</span>
              </div>

            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">
              Opening Hours
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Clock
                  size={20}
                  className="text-yellow-500"
                />
                <div>
                  <p className="font-medium text-white">
                    Monday - Friday
                  </p>
                  <p className="text-gray-400">
                    5:00 AM – 11:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock
                  size={20}
                  className="text-yellow-500"
                />
                <div>
                  <p className="font-medium text-white">
                    Saturday
                  </p>
                  <p className="text-gray-400">
                    6:00 AM – 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock
                  size={20}
                  className="text-yellow-500"
                />
                <div>
                  <p className="font-medium text-white">
                    Sunday
                  </p>
                  <p className="text-gray-400">
                    7:00 AM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <div className="mt-14 pt-8 border-t border-yellow-500/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} Olympia Gym. All rights
            reserved.
          </p>

          <p>
            Designed with{" "}
            <span className="text-yellow-500">
              React + Tailwind CSS
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}