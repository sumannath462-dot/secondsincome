import { CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";

const promises = [
  {icon:CheckCircle2,title:"Clear Scope",body:"We discuss your requirements, deliverables, and timeline before work begins."},
  {icon:MessageCircle,title:"Direct Communication",body:"You can ask questions, share feedback, and stay informed during the project."},
  {icon:ShieldCheck,title:"Practical Delivery",body:"The goal is a solution you can actually use in your website, spreadsheet, dashboard, or workflow."},
];

export default function Testimonials() {
  return (
    <section id="working-together" className="bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center"><p className="font-semibold uppercase tracking-wider text-blue-400">Working Together</p><h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">A Straightforward Project Experience</h2><p className="mt-4 leading-7 text-slate-400">No made-up testimonials or one-size-fits-all promises. Here is what you can expect when we work together.</p></div>
        <div className="grid gap-6 md:grid-cols-3">{promises.map(({icon:Icon,title,body})=><article key={title} className="rounded-2xl border border-slate-800 bg-slate-950 p-7"><span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Icon size={24}/></span><h3 className="text-xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{body}</p></article>)}</div>
      </div>
    </section>
  );
}
