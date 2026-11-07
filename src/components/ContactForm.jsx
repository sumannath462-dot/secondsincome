import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, MessageCircle, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const form = useRef(null);
  const [status,setStatus] = useState("idle");
  const [feedback,setFeedback] = useState("");
  const field = "mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/15";
  const sendEmail = async (event) => {
    event.preventDefault();
    if (!form.current || status === "sending") return;
    setStatus("sending"); setFeedback("");
    try {
      await emailjs.sendForm("service_mhy7c2h","template_6zq7ees",form.current,"NZQoX5hxGRbp2CLYM");
      setStatus("success"); setFeedback("Thanks! Your message has been sent. I’ll get back to you soon."); form.current.reset();
    } catch (error) {
      console.error("EmailJS submission failed:",error);
      setStatus("error"); setFeedback("Your message could not be sent right now. Please try WhatsApp or email instead.");
    }
  };
  return <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
    <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"/><div className="pointer-events-none absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl"/>
    <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
      <div className="mx-auto mb-12 max-w-3xl text-center"><span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">Get in Touch</span><h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Let’s Discuss Your Project</h2><p className="mt-4 text-base leading-8 text-slate-400 sm:text-lg">Share what you need. I’ll review your requirements and get back to you.</p></div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div className="space-y-4">
          <a href="https://wa.me/917005938514?text=Hi%20Kripamay%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 transition hover:border-emerald-400/50"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400"><MessageCircle size={23}/></span><span><span className="block font-semibold text-white">WhatsApp</span><span className="mt-1 block text-sm text-slate-400">+91 70059 38514 · Quick project discussion</span></span></a>
          <a href="mailto:kripamaynath@outlook.com" className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400"><Mail size={23}/></span><span><span className="block font-semibold text-white">Email</span><span className="mt-1 block break-all text-sm text-slate-400">kripamaynath@outlook.com</span></span></a>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300"><MapPin size={23}/></span><span><span className="block font-semibold text-white">Location</span><span className="mt-1 block text-sm text-slate-400">Sribhumi, Assam, India · Working remotely</span></span></div>
          <p className="px-1 pt-2 text-sm leading-6 text-slate-500">Prefer a quick conversation? WhatsApp is the fastest way to discuss your requirements.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-5 rounded-3xl border border-slate-800 bg-slate-900/90 p-5 shadow-2xl shadow-black/20 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-medium text-slate-300">Your Name<input name="name" type="text" placeholder="Enter your name" required autoComplete="name" className={field}/></label><label className="block text-sm font-medium text-slate-300">Email Address<input name="email" type="email" placeholder="you@example.com" required autoComplete="email" className={field}/></label></div>
          <label className="block text-sm font-medium text-slate-300">Phone Number <span className="text-slate-500">(optional)</span><input name="phone" type="tel" placeholder="+91" autoComplete="tel" className={field}/></label>
          <label className="block text-sm font-medium text-slate-300">Project Details<textarea name="message" rows="5" placeholder="Tell me about your website, Excel, Power BI, or automation requirements..." required className={field}/></label>
          {feedback && <p role="status" aria-live="polite" className={`flex items-start gap-2 rounded-xl p-4 text-sm ${status==="success"?"bg-emerald-500/10 text-emerald-300":"bg-rose-500/10 text-rose-300"}`}>{status==="success"?<CheckCircle2 size={18}/>:<AlertCircle size={18}/>} {feedback}</p>}
          <button type="submit" disabled={status==="sending"} className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60">{status==="sending"?"Sending...":<>Send Project Enquiry <Send className="ml-2" size={18}/></>}</button>
          <p className="text-center text-xs leading-5 text-slate-500">Your details will only be used to respond to your enquiry.</p>
        </form>
      </div>
    </div>
  </section>;
}
