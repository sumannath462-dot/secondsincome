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
    title: "Keen Dashboard",
    category: "Dashboard Design",
    description:
      "A dashboard interface concept presented as a live preview. Explore the layout and user experience.",
    icon: LineChart,
    badge: "Live Preview",
    gradient: "from-blue-600 to-cyan-500",
    features: ["Dashboard Interface", "Data-focused Layout", "Web Design"],
    demoUrl: "https://preview--keen-dashboard-co.lovable.app/?__lovable_sha=83680586",
  },
  {
    title: "Pallavi Bridal Glow",
    category: "Beauty & Bridal Website",
    description:
      "A bridal and beauty-focused website preview designed to showcase services and create an elegant online presence.",
    icon: Building2,
    badge: "Live Preview",
    gradient: "from-violet-600 to-fuchsia-500",
    features: ["Bridal Showcase", "Service Presentation", "Responsive Preview"],
    demoUrl: "https://preview--pallavi-bridal-glow.lovable.app/?__lovable_sha=39111113",
  },
  {
    title: "La Belleza Showcase",
    category: "Beauty Business Website",
    description:
      "A beauty business website concept with a visual showcase and service-focused presentation.",
    icon: Globe,
    badge: "Live Preview",
    gradient: "from-emerald-600 to-teal-500",
    features: ["Business Showcase", "Service Presentation", "Web Design"],
    demoUrl: "https://preview--la-belleza-showcase.lovable.app/?__lovable_sha=6c677092",
  },
  {
    title: "Pixel Perfect Website Replica",
    category: "Website Development",
    description:
      "A website recreation preview demonstrating attention to interface layout and visual details.",
    icon: Globe,
    badge: "Live Preview",
    gradient: "from-green-600 to-lime-500",
    features: ["Interface Recreation", "Visual Layout", "Web Development"],
    demoUrl: "https://preview--pixel-perfect-replicator-927.lovable.app/?__lovable_receipt=mat_0a2ean4yff8m4teejte4ff3nfk",
  },
  {
    title: "Event Sketches",
    category: "Event Planning Website",
    description:
      "An event services website preview presenting event offerings, venues, gallery content, and enquiry options.",
    icon: BrainCircuit,
    badge: "Client Project",
    gradient: "from-amber-500 to-orange-500",
    features: ["Event Services", "Venue Showcase", "Enquiry Experience"],
    demoUrl: "https://preview--precise-plan-show.lovable.app/?__lovable_receipt=mat_7txaqxqg6897yr1ppfvrkkmxqe",
  },
  {
    title: "Royal Vibe Showcase",
    category: "Website Showcase",
    description:
      "A live website preview for exploring the visual presentation and page experience.",
    icon: Building2,
    badge: "Live Preview",
    gradient: "from-pink-600 to-rose-500",
    features: ["Visual Showcase", "Page Layout", "Web Design"],
    demoUrl: "https://preview--royal-vibe-showcase.lovable.app/?__lovable_sha=694b163b",
  },
  {
    title: "Sukanya Makeover",
    category: "Salon & Makeover Website",
    description:
      "A makeover business website preview designed to present beauty services and the brand online.",
    icon: Globe,
    badge: "Live Preview",
    gradient: "from-fuchsia-600 to-pink-500",
    features: ["Makeover Services", "Brand Presentation", "Responsive Preview"],
    demoUrl: "https://preview--sukanya-makeover-elegance.lovable.app/?__lovable_sha=00efec7d",
  },
  {
    title: "Business Website Preview",
    category: "Website Development",
    description:
      "An additional website preview. Open the demo to explore the current project.",
    icon: Bot,
    badge: "Live Preview",
    gradient: "from-indigo-600 to-blue-500",
    features: ["Website Preview", "Interface Design", "Web Experience"],
    demoUrl: "https://id-preview--be705b95-9d18-4f69-ac54-a1e2565ca00e.lovable.app/?__lovable_receipt=mat_0bhh2zcq9f8kgb7rhxnqnpeqgm",
  },
  {
    title: "Olympia Gym",
    category: "Fitness Centre Website",
    description:
      "A gym website demo showcasing a fitness business online.",
    icon: BarChart3,
    badge: "Website Demo",
    gradient: "from-cyan-600 to-teal-500",
    features: ["Gym Website", "Fitness Business Showcase", "Enquiry Experience"],
    demoUrl: "https://www.secondsincome.club/olympia",
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
            Explore selected website and dashboard previews from SecondsIncome.
            Open a project to view its demo.
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

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
                  aria-label={`View ${project.title} demo (opens in a new tab)`}
                >
                  View Live Demo
                  <ExternalLink className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>

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
                Whether you need a modern website, dashboards, business
                automation, or digital growth solutions, SecondsIncome can help
                turn your ideas into a professional online experience.
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
