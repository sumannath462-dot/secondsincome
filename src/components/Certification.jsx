import { Award, ExternalLink, BadgeCheck } from "lucide-react";

export default function Certification() {
  return (
    <section
      id="certification"
      className="py-20 bg-slate-50"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 mb-4">
            <Award className="w-5 h-5" />
            <span className="font-semibold text-slate-700">
              Professional Certification
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Certified AI Data & Automation Consultant
          </h2>

          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            ICM Quantum™ Professional Certification awarded by Ira Skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-3xl shadow-lg border border-slate-200 p-6 md:p-10">
          
          <div>
            <img
              src="/certificates/cadac-certificate.png"
              alt="Certified AI Data & Automation Consultant Certificate"
              className="w-full rounded-2xl border border-slate-200 shadow-md"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <BadgeCheck className="w-7 h-7" />
              <h3 className="text-2xl font-bold text-slate-900">
                Certified AI Data & Automation Consultant (CADAC™)
              </h3>
            </div>

            <p className="text-slate-600 leading-7 mb-6">
              This professional certification recognizes proficiency in
              Artificial Intelligence, AI Automation, Data Analytics,
              Business Intelligence, Enterprise AI Solutions, Cloud
              Applications, and Digital Transformation.
            </p>

            <div className="space-y-3 mb-7 text-slate-700">
              <p>
                <span className="font-semibold">Issued by:</span> Ira Skills
              </p>

              <p>
                <span className="font-semibold">Issue Date:</span> September 2026
              </p>

              <p>
                <span className="font-semibold">Credential ID:</span>{" "}
                A78NAQAGJBJM
              </p>
            </div>

            <a
              href="https://iraskill.s3.ap-south-1.amazonaws.com/2026-09-06_sumannath462@gmail.com.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              View Certificate
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}