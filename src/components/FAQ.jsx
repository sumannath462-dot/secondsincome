import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does SecondsIncome offer?",
    answer:
      "We provide AI automation, website development, SEO, AI chatbots, business automation, and digital growth solutions.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites are completed within 1–3 weeks depending on the project scope and requirements.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer post-launch support, maintenance, updates, and improvements to keep your website running smoothly.",
  },
  {
    question: "Can you help improve my Google ranking?",
    answer:
      "Yes. We provide SEO optimization and digital marketing strategies to increase your online visibility and organic traffic.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply contact us through the contact form or WhatsApp. We'll schedule a free consultation to discuss your project.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-slate-950 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[4px] font-semibold">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-gray-400">
            Answers to the most common questions about our services.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left"
              >
                <span className="text-white font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;