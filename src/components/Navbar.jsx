import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-secondsincome.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SecondsIncome Logo"
            className="h-11 w-11 rounded-xl object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Seconds
              <span className="text-blue-600">Income</span>
            </h1>

            <p className="-mt-1 text-xs text-gray-500">
              AI • Automation • Growth
            </p>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-medium text-gray-700 md:flex">
          <a href="#home" className="transition hover:text-blue-600">
            Home
          </a>

          <a href="#services" className="transition hover:text-blue-600">
            Services
          </a>

          <a href="#pricing" className="transition hover:text-blue-600">
            Pricing
          </a>

          <a href="#about" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Book Free Call
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-5 p-6 font-medium text-gray-700">

            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="#services" onClick={() => setIsOpen(false)}>
              Services
            </a>

            <a href="#pricing" onClick={() => setIsOpen(false)}>
              Pricing
            </a>

            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Book Free Call
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;