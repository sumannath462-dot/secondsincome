import {
  ShieldCheck,
  Zap,
  Bot,
  TrendingUp,
  Clock,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Leverage the latest AI tools to automate work and grow your business faster.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "We deliver high-quality websites and AI solutions quickly without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Increase your online visibility with SEO and digital growth strategies.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description:
      "Professional development with clean code, security, and long-term reliability.",
  },
  {
    icon: Clock,
    title: "Time Saving",
    description:
      "Automate repetitive tasks and focus on growing your business.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "We're here to help you with updates, improvements, and technical support.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Why Choose SecondsIncome?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg">
            We combine AI, automation, web development, and digital marketing
            to help businesses grow faster with modern technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all">
                  <Icon size={34} className="text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;