import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Business Automation",
    category: "AI Automation",
    description:
      "Automated repetitive business tasks using AI workflows to save time and increase productivity.",
  },
  {
    title: "Modern Business Website",
    category: "Website Development",
    description:
      "Responsive React & Tailwind website designed for business growth and lead generation.",
  },
  {
    title: "SEO Growth Campaign",
    category: "SEO",
    description:
      "Improved Google rankings and increased organic traffic with modern SEO strategies.",
  },
  {
    title: "AI Customer Chatbot",
    category: "AI Chatbot",
    description:
      "Smart chatbot that answers customer questions and captures qualified leads 24/7.",
  },
  {
    title: "Workflow Automation",
    category: "Automation",
    description:
      "Connected business tools to automate daily operations and reduce manual work.",
  },
  {
    title: "Digital Marketing Strategy",
    category: "Marketing",
    description:
      "Complete digital growth strategy using AI, SEO, and social media marketing.",
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-400 uppercase tracking-widest font-semibold">
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Recent Projects
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            A selection of AI, automation, website development and SEO projects
            built to help businesses grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-52 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {project.category}
                </span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                <button className="mt-8 flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300">
                  View Project
                  <ExternalLink size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Portfolio;