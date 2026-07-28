const projects = [
  {
    title: "AI Automation",
    description: "Automated business workflows using AI tools.",
  },
  {
    title: "Business Website",
    description: "Modern responsive website for growing businesses.",
  },
  {
    title: "SEO Growth",
    description: "Improved Google rankings and organic traffic.",
  },
];

function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Recent Projects
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          A few examples of solutions we can build.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition"
            >
              <div className="h-48 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 mb-6"></div>

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;