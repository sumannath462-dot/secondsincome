import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import heroImage from "../assets/hero-secondsincome.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24 pb-20"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles size={16} />
              AI • Automation • Websites • SEO
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              Build Your{" "}
              <span className="text-blue-600">
                Second Income
              </span>{" "}
              with AI
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Learn AI, automation, freelancing, website development,
              and digital growth strategies to create multiple income
              streams and grow your business faster.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="ml-2" size={18} />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Explore Services
              </a>

            </div>

            {/* Features */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700 sm:text-base">
                  AI Automation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700 sm:text-base">
                  Modern Websites
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700 sm:text-base">
                  SEO Growth
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-600" size={20} />
                <span className="text-sm text-gray-700 sm:text-base">
                  Freelancing Guidance
                </span>
              </div>

            </div>

          </div>

          {/* Right Content */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Hero Image */}
            <img
              src={heroImage}
              alt="SecondsIncome Hero"
              className="w-full max-w-[620px] rounded-[24px] object-cover shadow-2xl transition-all duration-500 hover:scale-[1.02] md:rounded-[32px]"
            />

            {/* Top Card */}
            <div className="absolute top-3 right-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 sm:top-6 sm:right-6 sm:rounded-2xl sm:px-6 sm:py-5">

              <h3 className="text-2xl font-bold sm:text-3xl">
                24/7
              </h3>

              <p className="mt-1 text-sm text-blue-100">
                Support Available
              </p>

            </div>

            {/* Bottom Card */}
            <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-2 sm:bottom-8 sm:right-8 sm:rounded-2xl sm:px-6 sm:py-5 sm:shadow-2xl">

              <h3 className="text-3xl font-bold text-blue-600 sm:text-4xl">
                100+
              </h3>

              <p className="mt-1 text-sm text-gray-600 sm:text-base">
                Projects Completed
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}