const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    text: "SecondsIncome helped us automate our workflow and increase productivity. Highly recommended!",
  },
  {
    name: "Sarah Ahmed",
    role: "Freelancer",
    text: "My new website looks amazing and helped me get more clients within weeks.",
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    text: "Professional service, fast delivery, and excellent AI solutions for our business.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Trusted by businesses, freelancers, and entrepreneurs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <div className="text-yellow-400 text-2xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 italic">
                "{item.text}"
              </p>

              <div className="mt-6">
                <h3 className="font-bold text-lg">
                  {item.name}
                </h3>

                <p className="text-blue-500">
                  {item.role}
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