import { Code2, FileSpreadsheet, BarChart3, Workflow } from "lucide-react";

const items = [
  {icon: Code2, title: "Website Development", detail: "Modern & responsive"},
  {icon: FileSpreadsheet, title: "Excel Solutions", detail: "Trackers & automation"},
  {icon: BarChart3, title: "Power BI", detail: "Interactive dashboards"},
  {icon: Workflow, title: "Business Workflows", detail: "Practical automation"},
];

export default function Stats() {
  return (
    <section className="border-b border-slate-100 bg-white py-12" data-aos="fade-up">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 sm:px-6 lg:grid-cols-4">
        {items.map(({icon: Icon,title,detail}) => <div key={title} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 sm:p-5"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700"><Icon size={22}/></span><span><span className="block text-sm font-bold text-slate-900 sm:text-base">{title}</span><span className="mt-1 block text-xs text-slate-500 sm:text-sm">{detail}</span></span></div>)}
      </div>
    </section>
  );
}
