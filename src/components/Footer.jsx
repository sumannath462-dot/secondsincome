import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-gray-300">
      {/* Background Blur */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Seconds
              <span className="text-blue-500">Income</span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              Helping individuals, freelancers, startups and businesses
              grow through AI, Automation, Website Development,
              SEO and Digital Marketing.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/kripamay-nath/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/10 p-3 transition duration-300 hover:bg-[#0A66C2]"
              >
                <FaLinkedin className="h-5 w-5 text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://chat.whatsapp.com/BodKOEmlZOC3CJkyOcbhYE?s=sh&p=a&ilr=1&amv=0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white/10 p-3 transition duration-300 hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5 text-white" />
              </a>

              {/* Email */}
              <a
                href="mailto:kripamaynath@outlook.com"
                className="rounded-xl bg-white/10 p-3 transition duration-300 hover:bg-red-500"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition">Pricing</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>AI Automation</li>
              <li>Website Development</li>
              <li>SEO Optimization</li>
              <li>Digital Marketing</li>
              <li>Freelancing Guidance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <Mail className="text-blue-500" size={18} />

                <a
                  href="mailto:kripamaynath@outlook.com"
                  className="transition hover:text-blue-400"
                >
                  kripamaynath@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-blue-500" size={18} />

                <a
                  href="https://chat.whatsapp.com/BodKOEmlZOC3CJkyOcbhYE?s=sh&p=a&ilr=1&amv=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-green-400"
                >
                  Join WhatsApp Community
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-500" size={18} />
                <span>India</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-gray-500">
            © {year} SecondsIncome. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="rounded-full bg-blue-600 p-3 transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            <ArrowUp className="text-white" size={20} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;