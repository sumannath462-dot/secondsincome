import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/olympia/logo.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Membership", href: "#membership" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a href="#home" className="flex items-center gap-3">

            <img
              src={logo}
              alt="Olympia Gym"
              className="w-14 h-14 rounded-full object-cover"
            />

            <div className="hidden sm:block">

              <h2 className="text-red-500 text-2xl font-bold tracking-wide">
                OLYMPIA
              </h2>

              <p className="text-xs text-yellow-400">
                Gym & Health Centre
              </p>

            </div>

          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold transition">
              Join Today
            </button>

          </nav>

          {/* Mobile Button */}

          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-yellow-500/20">

          <div className="flex flex-col px-6 py-5 gap-5">

            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-yellow-500 text-black py-3 rounded-full font-semibold">
              Join Today
            </button>

          </div>

        </div>
      )}
    </header>
  );
}