import { Globe2, FileSpreadsheet, BarChart3 } from "lucide-react";

const items = [
  { icon: Globe2, title: "Professional Online Presence", body: "Give customers a clear, trustworthy place to discover your business, explore your services, and contact you." },
  { icon: FileSpreadsheet, title: "Less Manual Work", body: "Replace repetitive spreadsheet tasks with organized Excel trackers, formulas, and useful reports." },
  { icon: BarChart3, title: "Clearer Business Decisions", body: "Turn scattered data into meaningful Power BI dashboards and management insights." },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">Technology with a purpose</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">Make Everyday Business Work Simpler</h2>
          <p className="mt-4 leading-7 text-slate-600">Useful digital tools should solve real problems. The focus is on clear communication, practical delivery, and solutions that fit your workflow.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(({icon: Icon,title,body}) => <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Icon size={25}/></span><h3 className="text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}
        </div>
      </div>
    </section>
  );
}
