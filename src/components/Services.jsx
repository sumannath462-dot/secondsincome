import {
  Bot,
  Globe,
  Search,
  ArrowRight,
  MessageSquareMore,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Automate repetitive tasks and improve productivity using AI-powered workflows.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive business websites built with React and Tailwind CSS.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your Google visibility and attract more organic visitors.",
  },
  {
    icon: MessageSquareMore,
    title: "AI Chatbots",
    description:
      "Deploy intelligent chatbots to improve customer support and lead generation.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Connect your apps and automate business processes to save time.",
  },
  {
    icon: Bot,
    title: "AI Consulting",
    description:
      "Get expert guidance on integrating AI into your business strategy.",
  },
];

function Services() {
  return (
    <section
  id="services"
  className="bg-slate-950 py-24"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Our Services
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Practical AI solutions and modern web technologies to help your
            business grow faster.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <Icon size={42} className="text-blue-400 mb-6" />

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Services;