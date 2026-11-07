import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Code2,
  FileSpreadsheet,
  Globe2,
  Workflow,
} from "lucide-react";
import heroImage from "../assets/hero-secondsincome.png";

const highlights = [
  { icon: Globe2, title: "Modern Websites", detail: "Responsive business websites" },
  { icon: FileSpreadsheet, title: "Excel Automation", detail: "Trackers, MIS & reports" },
  { icon: BarChart3, title: "Power BI Dashboards", detail: "Clear, actionable insights" },
  { icon: Workflow, title: "Business Automation", detail: "Smarter everyday workflows" },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pb-16 pt-16 sm:pt-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold tracking-wide text-blue-700 shadow-sm sm:text-sm">
            <Code2 size={16} /> WEB DEVELOPMENT · EXCEL · POWER BI
          </div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
            Build Better Websites.
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Automate Your Work.</span>
            Understand Your Data.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I help businesses create modern websites, simplify everyday work with Microsoft Excel, and turn business data into clear Power BI insights.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
              Discuss Your Project <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:border-blue-500 hover:text-blue-700">
              Explore Services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> Practical solutions</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> Mobile-friendly design</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-blue-600" /> Clear communication</span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[650px]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-200/70 via-white to-cyan-200/70 blur-xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white bg-white p-2 shadow-[0_28px_80px_rgba(30,64,175,0.18)] sm:p-3">
            <img src={heroImage} alt="SecondsIncome digital solutions and analytics dashboard" className="aspect-[4/3] w-full rounded-2xl object-cover" />
            <div className="grid grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3">
              {highlights.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex min-w-0 items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-3 sm:gap-3 sm:p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700"><Icon size={19} /></span>
                  <span className="min-w-0"><span className="block text-xs font-bold text-slate-900 sm:text-sm">{title}</span><span className="mt-0.5 block text-[10px] leading-4 text-slate-500 sm:text-xs">{detail}</span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-2 -top-4 hidden rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 shadow-xl sm:block">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Bot size={18} className="text-blue-600" /> Smart digital solutions</div>
            <p className="mt-1 text-xs text-slate-500">Designed around your business</p>
          </div>
        </div>
      </div>
    </section>
  );
}
