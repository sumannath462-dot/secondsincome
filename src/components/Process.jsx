import { Search, ClipboardCheck, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "1. Free Consultation",
    description: "We understand your business goals and challenges.",
  },
  {
    icon: ClipboardCheck,
    title: "2. Strategy",
    description: "We create the right AI and digital growth plan for you.",
  },
  {
    icon: Code2,
    title: "3. Build",
    description: "We develop your website, automation, or AI solution.",
  },
  {
    icon: Rocket,
    title: "4. Launch & Grow",
    description: "We launch your project and help you improve over time.",
  },
];

function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          How We Work
        </h2>

        <p className="text-center text-gray-600 mb-14">
          A simple process designed to deliver results.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 transition"
              >
                <Icon size={50} className="mx-auto text-blue-500 mb-5" />

                <h3 className="text-xl font-bold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Process;