import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  Building2,
  ExternalLink,
  Globe,
  LineChart,
} from "lucide-react";

const projects = [
  {
    title: "Banking Analytics Platform",
    category: "Banking & Data Analytics",
    description:
      "Enterprise-grade banking analytics solution built from 12+ years of banking domain experience. Interactive KPIs, customer insights, operational performance, and executive reporting.",
    icon: Building2,
    badge: "12+ Years Experience",
    gradient: "from-blue-600 to-cyan-500",
    features: [
      "Executive KPI Dashboard",
      "Customer Analytics",
      "Risk & Performance",
    ],
  },
  {
    title: "AI Business Automation",
    category: "Artificial Intelligence",
    description:
      "Automated business workflows using AI, reducing repetitive tasks and improving productivity with intelligent automation.",
    icon: Bot,
    badge: "AI Automation",
    gradient: "from-violet-600 to-fuchsia-500",
    features: [
      "Workflow Automation",
      "AI Chatbots",
      "Process Optimization",
    ],
  },
  {
    title: "Modern Business Website",
    category: "Website Development",
    description:
      "Fast, responsive, SEO-optimized business website developed with modern technologies for maximum performance and conversions.",
    icon: Globe,
    badge: "Responsive",
    gradient: "from-emerald-600 to-teal-500",
    features: [
      "Responsive Design",
      "Fast Performance",
      "SEO Optimized",
    ],
  },
  {
    title: "Advanced Excel Dashboard",
    category: "Excel Analytics",
    description:
      "Professional Excel dashboard featuring automated reporting, interactive charts, financial analysis, and business intelligence.",
    icon: BarChart3,
    badge: "Excel Expert",
    gradient: "from-green-600 to-lime-500",
    features: [
      "Interactive Reports",
      "Dynamic Charts",
      "Automated Analysis",
    ],
  },
  {
    title: "Power BI Executive Dashboard",
    category: "Business Intelligence",
    description:
      "Interactive Power BI dashboards delivering real-time insights, executive reporting, and data-driven decision support.",
    icon: LineChart,
    badge: "Power BI",
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Executive Reports",
      "Data Visualization",
      "Live Insights",
    ],
  },
  {
    title: "AI Growth & Digital Strategy",
    category: "Business Growth",
    description:
      "Strategic AI consulting, digital transformation, automation roadmap, and scalable growth planning for modern businesses.",
    icon: BrainCircuit,
    badge: "Strategy",
    gradient: "from-pink-600 to-rose-500",
    features: [
      "Growth Planning",
      "Digital Strategy",
      "AI Consulting",
    ],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-slate-950 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            Our Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Real Projects.
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Real Results.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Explore some of our work across AI automation, website development,
            banking analytics, dashboards, business intelligence, and digital
            transformation solutions designed to help businesses grow faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">
                  {project.badge}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {project.category}
                </p>

                <p className="mt-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-6 space-y-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <div className="h-2 w-2 rounded-full bg-cyan-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                  type="button"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>

                <div
                  className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${project.gradient} scale-x-0 transition-transform duration-500 group-hover:scale-x-100`}
                />
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-24 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-600/10 via-slate-900 to-blue-600/10 p-10 backdrop-blur-xl lg:p-14">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold text-white">
                Ready to Build Your Next Digital Success Story?
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                Whether you need AI automation, a modern website, dashboards,
                banking analytics, or digital growth solutions, SecondsIncome
                can help transform your ideas into measurable business results.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-950 shadow-lg transition duration-300 hover:bg-cyan-400"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}