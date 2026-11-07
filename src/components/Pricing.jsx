import { ArrowRight, FileSpreadsheet, Globe, BarChart3 } from "lucide-react";

const options = [
  {icon:Globe,title:"Website Development",body:"Business websites, landing pages, responsive layouts, and enquiry experiences."},
  {icon:FileSpreadsheet,title:"Excel Automation",body:"Custom trackers, formulas, reports, data organization, and workflow improvements."},
  {icon:BarChart3,title:"Power BI & Business Intelligence",body:"Interactive dashboards, KPI reporting, and business data analysis."},
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center"><p className="font-semibold uppercase tracking-wider text-blue-400">Project Pricing</p><h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">A Solution That Fits Your Requirements</h2><p className="mt-5 leading-8 text-slate-400">Every project is different. Pricing is based on the scope, features, complexity, and delivery requirements — so you receive a clear quotation for the work you actually need.</p></div>
        <div className="grid gap-6 md:grid-cols-3">{options.map(({icon:Icon,title,body})=><article key={title} className="rounded-2xl border border-slate-800 bg-slate-900 p-7"><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Icon size={25}/></span><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-4 min-h-20 leading-7 text-slate-400">{body}</p><a href="#contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300">Request a quotation <ArrowRight size={17}/></a></article>)}</div>
      </div>
    </section>
  );
}
