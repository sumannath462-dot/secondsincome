import { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhy7c2h",
        "template_6zq7ees",
        form.current,
        "NZQoX5hxGRbp2CLYM"
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-12">
          Tell us about your project.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-10 rounded-3xl shadow-xl space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full border rounded-xl p-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full border rounded-xl p-4"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            required
            className="w-full border rounded-xl p-4"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;