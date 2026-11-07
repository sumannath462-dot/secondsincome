import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div><h2 className="text-2xl font-extrabold text-white">Seconds<span className="text-blue-500">Income</span></h2><p className="mt-4 max-w-xs leading-7 text-slate-400">Web Development · Microsoft Excel · Power BI · Business Intelligence</p><p className="mt-5 text-sm text-slate-500">Practical digital solutions for growing businesses.</p></div>
          <div><h3 className="mb-5 text-lg font-bold text-white">Explore</h3><ul className="space-y-3 text-slate-400"><li><a href="#home" className="hover:text-blue-400">Home</a></li><li><a href="#services" className="hover:text-blue-400">Services</a></li><li><a href="#portfolio" className="hover:text-blue-400">Projects</a></li><li><a href="#about" className="hover:text-blue-400">About</a></li><li><a href="#contact" className="hover:text-blue-400">Contact</a></li></ul></div>
          <div><h3 className="mb-5 text-lg font-bold text-white">Services</h3><ul className="space-y-3 text-slate-400"><li>Website Development</li><li>Excel Automation & MIS</li><li>Power BI Dashboards</li><li>Business Intelligence</li><li>Workflow Automation</li></ul></div>
          <div><h3 className="mb-5 text-lg font-bold text-white">Get in Touch</h3><div className="space-y-4 text-slate-400"><a href="mailto:kripamaynath@outlook.com" className="flex items-center gap-3 hover:text-white"><Mail size={18} className="text-blue-400"/>kripamaynath@outlook.com</a><div className="flex items-center gap-3"><MapPin size={18} className="text-blue-400"/>Sribhumi, Assam, India</div></div><div className="mt-6 flex gap-3"><a href="https://www.linkedin.com/in/kripamay-nath/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400"><FaLinkedinIn size={18}/></a><a href="https://github.com/sumannath462-dot" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-300 hover:border-white hover:text-white"><FaGithub size={18}/></a></div></div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-7 text-center sm:flex-row sm:text-left"><p className="text-sm text-slate-500">© {year} SecondsIncome. All rights reserved.</p><p className="text-sm text-slate-500">Build Better. Automate Smarter. Grow Faster.</p><a href="#home" aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"><ArrowUp size={19}/></a></div>
      </div>
    </footer>
  );
}
