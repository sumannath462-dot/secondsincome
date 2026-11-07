import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo-secondsincome.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [["Home", "#home"], ["Services", "#services"], ["Projects", "#portfolio"], ["About", "#about"], ["Contact", "#contact"]];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="SecondsIncome home">
          <img src={logo} alt="SecondsIncome logo" className="h-10 w-10 rounded-xl object-cover" />
          <span><span className="block text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">Seconds<span className="text-blue-600">Income</span></span><span className="block text-[11px] font-medium tracking-wide text-slate-500">Web • Excel • Power BI</span></span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 md:flex">
          {links.map(([label, href]) => <a key={label} href={href} className="transition hover:text-blue-600">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 md:inline-flex">Start a Project</a>
        <button className="rounded-lg p-2 text-slate-800 md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={25} /> : <Menu size={25} />}</button>
      </div>
      {isOpen && <nav className="border-t border-slate-100 bg-white px-6 py-5 shadow-lg md:hidden">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setIsOpen(false)} className="block py-3 font-semibold text-slate-700 hover:text-blue-600">{label}</a>)}<a href="#contact" onClick={() => setIsOpen(false)} className="mt-3 block rounded-xl bg-blue-600 py-3 text-center font-bold text-white">Start a Project</a></nav>}
    </header>
  );
}

export default Navbar;
