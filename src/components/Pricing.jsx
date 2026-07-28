const plans = [
  {
    title: "Starter",
    price: "$99",
    features: [
      "1 Business Website",
      "Responsive Design",
      "Basic SEO",
      "7 Days Support",
    ],
  },
  {
    title: "Professional",
    price: "$299",
    features: [
      "Premium Website",
      "AI Chatbot",
      "SEO Optimization",
      "30 Days Support",
    ],
  },
  {
    title: "Business",
    price: "$599",
    features: [
      "AI Automation",
      "Custom Dashboard",
      "Advanced SEO",
      "Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Pricing Plans
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Choose the perfect plan for your business.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
  key={index}
  className={`rounded-3xl p-8 shadow-lg transition hover:shadow-2xl ${
    index === 1
      ? "bg-blue-600 text-white scale-105"
      : "bg-white border"
  }`}
>
    {index === 1 && (
  <span className="inline-block bg-white text-blue-600 text-sm font-bold px-4 py-1 rounded-full mb-4">
    ⭐ Most Popular
  </span>
)}
              <h3 className="text-2xl font-bold">
                {plan.title}
              </h3>

             <p
  className={`text-5xl font-bold my-6 ${
    index === 1 ? "text-white" : "text-blue-600"
  }`}
>
  {plan.price}
</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((item, i) => (
                  <li key={i}>✅ {item}</li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
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