import founderImage from "../assets/kripamay-nath.jpg";
import {
  Briefcase,
  Bot,
  Globe,
  BarChart3,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const skills = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-400" />,
    title: "12+ Years Banking Experience",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Modern Website Development",
  },
  {
    icon: <Bot className="w-6 h-6 text-blue-400" />,
    title: "AI Automation",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    title: "Excel & Power BI",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
    title: "SEO & Business Growth",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold uppercase tracking-wider border border-blue-500/20">
            About the Founder
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            From Banking Excellence to Digital Innovation
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg">
            Helping startups, entrepreneurs and businesses grow through
            modern websites, AI automation, SEO and data-driven solutions.
          </p>

        </div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="relative">

            <img
              src={founderImage}
              alt="Kripamay Nath"
              className="rounded-3xl shadow-2xl border border-slate-700"
            />

            <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md rounded-2xl px-6 py-4 border border-slate-700">

              <h3 className="text-white font-bold text-xl">
                Kripamay Nath
              </h3>

              <p className="text-blue-400">
                Founder • SecondsIncome
              </p>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-3xl font-bold text-white mb-6">

              Hi, I'm Kripamay Nath 👋

            </h3>

            <p className="text-gray-300 leading-8 mb-6">

              I spent more than <span className="text-blue-400 font-semibold">12 years in the banking industry (2013–2025)</span>,
              building expertise in customer service, business operations,
              financial processes, relationship management and problem-solving.

            </p>

            <p className="text-gray-300 leading-8 mb-6">

              Today I combine that professional experience with modern
              technologies including <span className="text-white font-semibold">React,
              AI Automation, SEO, Excel, Power BI and Web Development</span>
              to help businesses build a stronger digital presence and
              achieve sustainable growth.

            </p>

            <p className="text-gray-300 leading-8 mb-10">

              SecondsIncome was created with one mission —
              helping businesses grow faster through practical technology,
              automation and high-converting digital experiences.

            </p>

            {/* Skills */}

            <div className="grid sm:grid-cols-2 gap-4 mb-10">

              {skills.map((skill, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-slate-800 border border-slate-700 rounded-2xl p-4 hover:border-blue-500 transition duration-300"
                >

                  {skill.icon}

                  <span className="text-white font-medium">
                    {skill.title}
                  </span>

                </div>

              ))}

            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold transition duration-300"
            >
              Book Free Consultation
              <ArrowRight size={20} />
            </a>

          </div>

        </div>

        {/* Bottom Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-20">

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-400">12+</h3>
            <p className="text-gray-400 mt-2">
              Years Professional Experience
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-400">AI</h3>
            <p className="text-gray-400 mt-2">
              Automation Solutions
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-400">Web</h3>
            <p className="text-gray-400 mt-2">
              Development
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
            <h3 className="text-4xl font-bold text-blue-400">SEO</h3>
            <p className="text-gray-400 mt-2">
              Business Growth
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;