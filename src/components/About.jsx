import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Briefcase,
} from "lucide-react";

const features = [
  "AI & Automation Solutions",
  "Modern Website Development",
  "SEO & Digital Growth",
  "Freelancing & Online Income Guidance",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 font-semibold text-blue-600">
              <Sparkles size={18} />
              About SecondsIncome
            </div>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Build Your Future with{" "}
              <span className="text-blue-600">
                AI & Digital Skills
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              SecondsIncome empowers individuals, freelancers,
              startups, and businesses with AI, automation,
              websites, and digital marketing strategies that
              generate sustainable income and accelerate business
              growth.
            </p>

            <div className="mt-12 space-y-5">

              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="rounded-full bg-blue-100 p-2">
                    <CheckCircle2
                      size={18}
                      className="text-blue-600"
                    />
                  </div>

                  <span className="text-lg text-gray-700">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                🚀 Book Free Call
                <ArrowRight className="ml-2" size={18} />
              </a>

              <a
                href="#services"
                className="rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                View Services
              </a>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="SecondsIncome Team"
              className="w-full rounded-[32px] object-cover shadow-2xl"
            />

            {/* Bottom Left Card */}
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-6 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="rounded-full bg-blue-100 p-3">
                  <Briefcase
                    className="text-blue-600"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-3xl font-bold text-blue-600">
                    100+
                  </h3>

                  <p className="text-gray-600">
                    Projects Completed
                  </p>

                </div>

              </div>

            </div>

            {/* Top Right Card */}
            <div className="absolute top-6 right-6 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white shadow-xl">

              <div className="flex items-center gap-3">

                <Headphones size={26} />

                <div>

                  <h3 className="text-2xl font-bold">
                    24/7
                  </h3>

                  <p className="text-sm">
                    Support Available
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}