import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 py-20 text-white">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">Have a project in mind?</p>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">Let’s Make Your Work Easier.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">Tell me what you want to build, automate, or understand. We’ll discuss the right solution for your business.</p>
        <a href="#contact" className="mt-8 inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">Discuss Your Project <ArrowRight className="ml-2" size={18}/></a>
      </div>
    </section>
  );
}
