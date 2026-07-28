import heroImage from "../assets/hero-dashboard.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center bg-blue-500/20 border border-blue-400 text-blue-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
              🚀 AI • Automation • Websites • SEO
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Build Your{" "}
              <span className="text-blue-400">Second Income</span>
              <br />
              with AI
            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-8">
              Learn AI, Automation, Freelancing and Digital Business
              strategies to build multiple income streams and grow
              your business faster.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#services"
                className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
              >
                🚀 Get Started
              </a>

              <a
                href="#contact"
                className="inline-block border border-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition"
              >
                📅 Book Free Call
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">

              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  100+
                </h2>
                <p className="text-gray-300">
                  Projects
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  24/7
                </h2>
                <p className="text-gray-300">
                  Support
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-blue-400">
                  AI
                </h2>
                <p className="text-gray-300">
                  Solutions
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            <img
              src={heroImage}
              alt="AI Dashboard"
              className="w-full max-w-xl rounded-3xl shadow-2xl"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-6 bg-white text-slate-900 rounded-2xl shadow-2xl p-6 w-72">

              <h3 className="text-xl font-bold mb-4">
                Why SecondsIncome?
              </h3>

              <ul className="space-y-3">
                <li>🤖 AI Automation</li>
                <li>💻 Website Development</li>
                <li>📈 SEO Growth</li>
                <li>💬 AI Chatbots</li>
                <li>⚙️ Business Automation</li>
                <li>🧠 AI Consulting</li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;