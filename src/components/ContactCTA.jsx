function ContactCTA() {
  return (
    <section className="bg-blue-600 text-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold">
          Ready to Build Your Second Income?
        </h2>

        <p className="mt-6 text-xl text-blue-100">
          Let's discuss your business goals and discover how AI,
          automation, and modern websites can help you grow faster.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">

          <a
            href="#contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Book Free Consultation
          </a>

          <a
            href="#contact"
            className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
          >
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;