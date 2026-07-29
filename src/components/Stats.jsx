import {
  Bot,
  Code2,
  Zap,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Bot,
    number: "AI",
    title: "AI-Powered Solutions",
  },
  {
    icon: Code2,
    number: "Modern",
    title: "Development",
  },
  {
    icon: Zap,
    number: "Fast",
    title: "Delivery",
  },
  {
    icon: ShieldCheck,
    number: "24/7",
    title: "Dedicated Support",
  },
];

function Stats() {
  return (
    <section
      className="bg-white py-20"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="rounded-2xl bg-gray-50 p-8 text-center shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Icon
                  className="mx-auto mb-5 text-blue-600"
                  size={42}
                />

                <h2 className="text-3xl font-bold text-gray-900">
                  {item.number}
                </h2>

                <p className="mt-2 text-gray-600 font-medium">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Stats;