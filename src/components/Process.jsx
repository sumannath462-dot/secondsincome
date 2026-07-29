import {
  PhoneCall,
  ClipboardCheck,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    title: "Free Discovery Call",
    description:
      "We understand your business goals, challenges, and requirements before starting the project.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Strategy & Planning",
    description:
      "We create a clear roadmap, choose the right technology, and define the best growth strategy.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Development",
    description:
      "We build your website, AI automation, chatbot, or digital solution using modern technologies.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description:
      "After testing everything carefully, we launch your project and provide ongoing support.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-blue-400 font-semibold uppercase tracking-[4px]">
            Process
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
            How We Work
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Our proven process ensures every project is delivered with quality,
            speed, and measurable business results.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-slate-800 bg-slate-950/70 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
              >
                <div className="absolute top-6 right-6 text-5xl font-black text-slate-800 group-hover:text-slate-700">
                  {step.number}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all duration-300">
                  <Icon size={34} className="text-blue-400" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Process;