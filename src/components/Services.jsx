import {
  BarChart3,
  Bot,
  FileSpreadsheet,
  Globe,
  LineChart,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", description: "Modern, mobile-friendly websites and landing pages that present your business professionally and make it easy for customers to enquire." },
  { icon: FileSpreadsheet, title: "Microsoft Excel Solutions", description: "Customized trackers, automated calculations, sales and expense sheets, inventory tools, and management reports." },
  { icon: BarChart3, title: "Power BI Dashboards", description: "Interactive dashboards that bring your business data together and help you understand performance at a glance." },
  { icon: LineChart, title: "Business Intelligence & MIS", description: "Structured reporting, KPI monitoring, and practical insights to support better day-to-day business decisions." },
  { icon: Workflow, title: "Workflow Automation", description: "Simplify repetitive processes and connect the steps in your business workflow to save time and reduce manual effort." },
  { icon: Bot, title: "AI-Powered Solutions", description: "Explore practical AI tools and assistance where they genuinely improve customer communication or everyday work." },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">What I Do</span>
          <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Digital Solutions for Growing Businesses</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">From your online presence to business reporting, get practical technology solutions built around the way you work.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <article key={title} className="group rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-[0_18px_45px_rgba(37,99,235,0.15)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white"><Icon size={28} /></div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-4 leading-7 text-slate-400">{description}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">Discuss this service <ArrowUpRight size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
