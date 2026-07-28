import { Briefcase, Users, Bot, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    number: "100+",
    title: "Projects",
  },
  {
    icon: Users,
    number: "50+",
    title: "Happy Clients",
  },
  {
    icon: Bot,
    number: "20+",
    title: "AI Automations",
  },
  {
    icon: TrendingUp,
    number: "98%",
    title: "Client Satisfaction",
  },
];

function Stats() {
  return (
   <section
  className="bg-white py-20"
  data-aos="fade-up"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
  key={index}
  data-aos="zoom-in"
  data-aos-delay={index * 150}
  className="text-center bg-gray-50 rounded-2xl p-8 shadow hover:shadow-2xl hover:-translate-y-2 duration-300"
>
                <Icon
                  className="mx-auto text-blue-600 mb-4"
                  size={42}
                />

                <h2 className="text-4xl font-bold">
                  {item.number}
                </h2>

                <p className="text-gray-600 mt-2">
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