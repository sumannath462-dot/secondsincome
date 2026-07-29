import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    description: "Perfect for individuals, freelancers, and startups.",
    features: [
      "1 Landing Page",
      "Mobile Responsive",
      "Contact Form",
      "Basic SEO Setup",
      "7 Days Support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "₹14,999",
    description: "Ideal for growing businesses and brands.",
    features: [
      "Up to 5 Pages Website",
      "AI Chatbot Integration",
      "Advanced SEO",
      "Speed Optimization",
      "30 Days Support",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "Custom Quote",
    description: "Tailored AI and business solutions for your needs.",
    features: [
      "Custom Website",
      "AI Automation",
      "CRM Integration",
      "Business Workflow",
      "Priority Support",
    ],
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold uppercase tracking-wider">
            Pricing
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Choose Your Plan
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Transparent pricing designed for startups, entrepreneurs, and growing businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-blue-500 bg-slate-900 shadow-[0_20px_50px_rgba(59,130,246,0.25)]"
                  : "border-slate-800 bg-slate-900/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm font-semibold">
                  <Star size={16} />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="text-gray-400 mt-2">
                {plan.description}
              </p>

              <h2 className="text-5xl font-extrabold text-blue-400 mt-8">
                {plan.price}
              </h2>

              <ul className="space-y-4 mt-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <Check size={18} className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full mt-10 bg-blue-600 hover:bg-blue-700 transition py-4 rounded-2xl text-white font-semibold">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;