import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Your Success Story",
    company: "Could Be Next",
    review:
      "We're currently accepting new projects and would love to help your business grow with AI, websites, automation, and digital marketing.",
  },
  {
    name: "Let's Build Together",
    company: "Start Your Journey",
    review:
      "Every successful business starts with a single step. Let's build your online presence and grow your business together.",
  },
  {
    name: "Quality You Can Trust",
    company: "Professional Services",
    review:
      "We focus on delivering modern websites, AI solutions, and long-term business growth with transparent communication and quality work.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-wider">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            What Clients Say
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            We focus on delivering quality work, long-term relationships, and
            measurable business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300"
            >
              <Quote className="text-blue-400 mb-6" size={40} />

              <p className="text-gray-300 leading-7 mb-8">
                "{item.review}"
              </p>

              <div>
                <h4 className="text-white font-bold text-lg">
                  {item.name}
                </h4>

                <p className="text-blue-400">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;