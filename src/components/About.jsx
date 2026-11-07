import founderImage from "../assets/kripamay-nath.jpg";
import { Globe, FileSpreadsheet, BarChart3, Workflow, BrainCircuit, ArrowRight } from "lucide-react";

const skills = [
  {icon:<Globe className="h-6 w-6 text-blue-400"/>,title:"Website Development"},
  {icon:<FileSpreadsheet className="h-6 w-6 text-blue-400"/>,title:"Microsoft Excel Automation"},
  {icon:<BarChart3 className="h-6 w-6 text-blue-400"/>,title:"Power BI Dashboards"},
  {icon:<Workflow className="h-6 w-6 text-blue-400"/>,title:"Business Intelligence & MIS"},
  {icon:<BrainCircuit className="h-6 w-6 text-blue-400"/>,title:"Practical AI & Workflow Tools"},
];

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-slate-950 to-slate-900 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-14 text-center"><span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-blue-300">About the Founder</span><h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Technology That Solves Real Business Problems</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-400">A practical, hands-on approach to websites, spreadsheets, dashboards, and smarter business workflows.</p></div>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-lg"><img src={founderImage} alt="Kripamay Nath, founder of SecondsIncome" className="w-full rounded-3xl border border-slate-700 object-cover shadow-2xl"/><div className="absolute bottom-5 left-5 rounded-2xl border border-slate-700 bg-slate-900/95 px-5 py-4 shadow-xl"><h3 className="text-lg font-bold text-white">Kripamay Nath</h3><p className="text-sm text-blue-400">Founder · SecondsIncome</p></div></div>
          <div><h3 className="text-2xl font-bold text-white sm:text-3xl">Hi, I’m Kripamay.</h3><p className="mt-5 leading-8 text-slate-300">I work with modern web technologies and business data tools to help individuals, startups, and businesses improve the way they present, manage, and understand their work.</p><p className="mt-5 leading-8 text-slate-300">My focus is on building responsive websites, creating useful Microsoft Excel solutions, and developing Power BI dashboards that turn data into clear information. I also explore practical automation where it can reduce repetitive work.</p><p className="mt-5 leading-8 text-slate-300">Through SecondsIncome, I aim to make technology approachable, useful, and aligned with each client’s actual requirements — with clear communication from discussion to delivery.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{skills.map(({icon,title})=><div key={title} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/70 p-4"><span className="shrink-0">{icon}</span><span className="text-sm font-medium text-white">{title}</span></div>)}</div>
            <a href="#contact" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">Let’s Discuss Your Project <ArrowRight size={18}/></a>
          </div>
        </div>
      </div>
    </section>
  );
}
