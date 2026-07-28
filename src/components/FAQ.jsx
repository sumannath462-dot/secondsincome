import { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide AI Automation, Website Development, SEO, Chatbots, and Digital Growth Solutions.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Most business websites are completed within 5–10 business days depending on project requirements.",
  },
  {
    question: "Do you offer AI consulting?",
    answer:
      "Yes. We help businesses identify automation opportunities and implement AI solutions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply book a free consultation and we'll discuss your goals and recommend the best solution.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Everything you need to know before working with us.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl mb-4 overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === index ? -1 : index)}
              className="w-full text-left p-5 font-semibold flex justify-between"
            >
              {faq.question}
              <span>{open === index ? "−" : "+"}</span>
            </button>

            {open === index && (
              <div className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;