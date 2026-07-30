import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              Seconds<span className="text-blue-500">Income</span>
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Helping startups, entrepreneurs and businesses grow with
              modern websites, AI automation, SEO and digital solutions.
            </p>

            <div className="mt-6 p-5 rounded-2xl bg-slate-900 border border-slate-800">
              <h4 className="text-white font-semibold">
                Founder
              </h4>

              <p className="text-blue-400 mt-2">
                Kripamay Nath
              </p>

              <p className="text-gray-500 text-sm mt-2">
                Banking Professional (2013–2025)
              </p>

              <p className="text-gray-500 text-sm">
                AI • Websites • Automation
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-blue-400 transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#pricing" className="text-gray-400 hover:text-blue-400 transition">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>Landing Page Design</li>
              <li>AI Automation</li>
              <li>SEO Optimization</li>
              <li>Excel Dashboard</li>
              <li>Power BI Dashboard</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" size={18} />

                <a
                  href="mailto:kripamaynath@outlook.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  kripamaynath@outlook.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" size={18} />

                <span className="text-gray-400">
                  India
                </span>
              </div>
            </div>

            {/* Social Links */}
                        <div className="flex gap-4 mt-8">

              <a
                href="https://www.linkedin.com/in/kripamay-nath/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-gray-300 hover:text-blue-400 hover:border-blue-500 transition-all duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://github.com/sumannath462-dot"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-700 text-gray-300 hover:text-white hover:border-white transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-center md:text-left">
            © {year} SecondsIncome. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Helping Businesses Grow with AI, Automation & Modern Websites.
          </p>

          <a
            href="#home"
            aria-label="Back to Top"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition"
          >
            <ArrowUp size={20} className="text-white" />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;