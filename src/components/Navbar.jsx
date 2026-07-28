import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          SecondsIncome
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-blue-600">
            Home
          </a>

          <a href="#services" className="hover:text-blue-600">
            Services
          </a>

          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

       <a
  href="#contact"
  className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
>
  Book Free Call
</a>

        <button
  className="md:hidden"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>
      </div>
      {isOpen && (
  <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
    <nav className="flex flex-col p-6 space-y-4 font-medium">

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
  className="bg-blue-600 text-white py-3 rounded-xl text-center hover:bg-blue-700 transition"
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