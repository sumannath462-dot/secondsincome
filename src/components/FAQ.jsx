import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {question:"What services does SecondsIncome provide?",answer:"SecondsIncome focuses on modern website development, Microsoft Excel trackers and automation, Power BI dashboards, business intelligence, and practical workflow automation."},
  {question:"Can you create a website for my local business?",answer:"Yes. We can discuss a mobile-friendly business website or landing page that explains your services and makes it easy for customers to enquire."},
  {question:"What kind of Excel work can you do?",answer:"Examples include customized sales and expense trackers, inventory sheets, taxi and driver trackers, formulas, data cleanup, MIS reports, and automated summaries."},
  {question:"Can you build a Power BI dashboard using my data?",answer:"Yes. We can review your available data, understand the questions you want answered, and define a suitable dashboard scope."},
  {question:"How much will my project cost?",answer:"Pricing depends on the requirements, features, data, and delivery scope. Share your needs and we’ll discuss a clear, customized quotation before work begins."},
  {question:"How do I get started?",answer:"Use the contact form or WhatsApp button to describe your project. We’ll review your requirements and discuss the next step."},
];

export default function FAQ() {
  const [open,setOpen] = useState(0);
  return (
    <section id="faq" className="bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <div className="mb-12 text-center"><p className="font-semibold uppercase tracking-[0.2em] text-blue-400">FAQ</p><h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Questions, Answered</h2><p className="mt-4 text-slate-400">A few useful details before we discuss your project.</p></div>
        <div className="space-y-4">
          {faqs.map((faq,index)=><div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"><button type="button" aria-expanded={open===index} onClick={()=>setOpen(open===index?-1:index)} className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"><span className="font-semibold text-white">{faq.question}</span><ChevronDown className={`shrink-0 text-blue-400 transition-transform ${open===index?"rotate-180":""}`}/></button>{open===index&&<p className="px-6 pb-6 leading-7 text-slate-400">{faq.answer}</p>}</div>)}
        </div>
      </div>
    </section>
  );
}
