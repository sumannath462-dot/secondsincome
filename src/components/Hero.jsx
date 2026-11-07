import { ArrowRight, BarChart3, Bot, CheckCircle2, Code2, FileSpreadsheet, Globe2, Workflow } from "lucide-react";

const highlights = [
  { icon: Globe2, title: "Modern Websites", detail: "Responsive business websites" },
  { icon: FileSpreadsheet, title: "Excel Automation", detail: "Trackers, MIS & reports" },
  { icon: BarChart3, title: "Power BI Dashboards", detail: "Clear, actionable insights" },
  { icon: Workflow, title: "Business Automation", detail: "Smarter everyday workflows" },
];

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[650px]">
      <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-indigo-500/30 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-blue-200/20 bg-slate-950 p-3 shadow-[0_28px_90px_rgba(2,6,23,0.45)] sm:p-4">
        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
          <span className="text-xs font-semibold tracking-wide text-slate-300">SECONDSINCOME · BUSINESS OVERVIEW</span>
          <span className="rounded-md bg-blue-500/15 px-2 py-1 text-[10px] font-semibold text-blue-300">LIVE UI CONCEPT</span>
        </div>
        <div className="grid gap-3 pt-4 sm:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <div className="rounded-xl border border-blue-400/20 bg-gradient-to-br from-blue-600/25 to-slate-900 p-4"><p className="text-xs text-slate-400">Digital solutions</p><p className="mt-2 text-xl font-bold text-white">Work smarter.</p><p className="text-sm font-semibold text-cyan-300">Grow with clarity.</p><div className="mt-4 flex items-center gap-2 text-xs text-slate-300"><CheckCircle2 size={14} className="text-cyan-400"/> Built around your workflow</div></div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><Code2 className="text-cyan-300" size={20}/><p className="mt-2 text-xs font-semibold text-white">Websites</p><p className="text-[10px] text-slate-400">React & responsive</p></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><FileSpreadsheet className="text-emerald-300" size={20}/><p className="mt-2 text-xs font-semibold text-white">Excel</p><p className="text-[10px] text-slate-400">Trackers & MIS</p></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><BarChart3 className="text-amber-300" size={20}/><p className="mt-2 text-xs font-semibold text-white">Power BI</p><p className="text-[10px] text-slate-400">Reports & insights</p></div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3"><Bot className="text-violet-300" size={20}/><p className="mt-2 text-xs font-semibold text-white">Automation</p><p className="text-[10px] text-slate-400">Smarter workflows</p></div>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-900 p-3 sm:p-4">
            <div className="flex items-center justify-between"><div><p className="text-xs text-slate-400">Performance snapshot</p><p className="mt-1 text-sm font-bold text-white">Business Dashboard</p></div><BarChart3 className="text-blue-300" size={22}/></div>
            <div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-lg bg-white/5 p-3"><p className="text-[10px] text-slate-400">Projects</p><p className="mt-1 text-xl font-bold text-white">Web</p></div><div className="rounded-lg bg-white/5 p-3"><p className="text-[10px] text-slate-400">Insights</p><p className="mt-1 text-xl font-bold text-white">Data</p></div></div>
            <div className="mt-3 rounded-lg bg-white/[0.04] p-3"><div className="mb-3 flex items-center justify-between"><span className="text-xs font-semibold text-slate-300">Reporting overview</span><span className="text-[10px] text-cyan-300">Illustrative</span></div><div className="flex h-32 items-end gap-2">{[35,52,43,70,58,82,66,94,75,100,84,92].map((height,index)=><div key={index} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-700 to-cyan-300" style={{height:`${height}%`}}/>)}</div><div className="mt-3 flex justify-between text-[10px] text-slate-500"><span>Organize</span><span>Analyze</span><span>Improve</span></div></div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-cyan-400/15 bg-cyan-400/5 p-3 text-xs text-cyan-100"><CheckCircle2 size={15}/> Clear information for better decisions</div>
          </div>
        </div>
      </div>
      <div className="absolute -right-2 -top-4 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-xl sm:block"><div className="flex items-center gap-2 text-sm font-bold text-slate-900"><Bot size={18} className="text-blue-600"/> Smart digital solutions</div><p className="mt-1 text-xs text-slate-500">Designed around your business</p></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 pb-16 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"/>
      <div className="pointer-events-none absolute -bottom-24 right-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl"/>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-wide text-cyan-200 sm:text-sm"><Code2 size={16}/> WEB DEVELOPMENT · EXCEL · POWER BI</div>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.55rem]">Build Better Websites.<span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Automate Your Work.</span>Understand Your Data.</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">I help businesses create modern websites, simplify everyday work with Microsoft Excel, and turn business data into clear Power BI insights.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-500">Discuss Your Project <ArrowRight className="ml-2" size={18}/></a><a href="#portfolio" className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-200">View Projects</a></div>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-slate-300"><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-300"/> Practical solutions</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-300"/> Custom-built tools</span><span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-cyan-300"/> Clear communication</span></div>
        </div>
        <DashboardPreview/>
      </div>
    </section>
  );
}
