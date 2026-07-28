function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            SecondsIncome
          </h2>

          <p className="mt-4 text-gray-400">
            Helping individuals and businesses grow with AI,
            automation, websites, and digital marketing.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Services</h3>

          <ul className="space-y-2 text-gray-400">
            <li>AI Automation</li>
            <li>Website Development</li>
            <li>SEO</li>
            <li>AI Consulting</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Contact</h3>

          <p className="text-gray-400">
            hello@secondsincome.club
          </p>

          <p className="text-gray-400 mt-2">
            India
          </p>
        </div>

      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-gray-500">
        © 2026 SecondsIncome. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;