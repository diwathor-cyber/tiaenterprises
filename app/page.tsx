export const metadata = {
  title:
    "TIA Enterprises | Insurance, Loans, Engineering & Risk Advisory",
  description:
    "TIA Enterprises provides insurance, financial, engineering and risk advisory solutions for businesses, professionals and families.",
};

const partners = [
  {
    name: "LIC India",
    image: "/partners/partner-lic.png",
  },
  {
    name: "ICICI Lombard",
    image: "/partners/partner-icici-lombard.png",
  },
  {
    name: "Niva Bupa",
    image: "/partners/partner-niva-bupa.png",
  },
  {
    name: "Digit Insurance",
    image: "/partners/partner-digit.png",
  },
  {
    name: "Aditya Birla Capital",
    image: "/partners/partner-aditya-birla.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-gradient-to-br from-white via-blue-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid items-center gap-6 md:grid-cols-2">

            <div className="text-left">
              <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                Business Protection & Financial Solutions
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Insurance, financial and engineering solutions for
                businesses, professionals and families.
              </p>

              {/* TRUST PILLS */}
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Trusted by MSMEs
                </span>

                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Practical Advisory Approach
                </span>

                <span className="rounded-full bg-white px-4 py-2 shadow-sm">
                  Business-Focused Protection
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/919052300600"
                  className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white shadow transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                >
                  Chat on WhatsApp
                </a>

                <button className="rounded-2xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg">
                  Request Callback
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[24px] bg-gradient-to-br from-blue-200 to-blue-50 p-2 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl">
                <img
                  src="/founder/diwakar-hero.webp"
                  alt="Diwakar Cherukuwada"
                  className="w-full max-w-sm rounded-[20px]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POPULAR SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg">

            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-blue-700">
                  POPULAR SERVICES
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Explore Our Core Solutions
                </h2>
              </div>

              <a
                href="/services"
                className="rounded-2xl border border-blue-700 px-4 py-2 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                View All
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/services/keyman-insurance"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Keyman Insurance
              </a>

              <a
                href="/services/msme-insurance"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                MSME Insurance
              </a>

              <a
                href="/services/shop-insurance"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Shop Insurance
              </a>

              <a
                href="/services/factory-insurance"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Factory Insurance
              </a>

              <a
                href="/services/group-mediclaim"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Group Mediclaim
              </a>

              <a
                href="/services/surety-bonds"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Surety Bonds
              </a>

              <a
                href="/services/business-loans"
                className="rounded-2xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-900 transition duration-300 hover:-translate-y-1 hover:bg-blue-100 hover:shadow-md"
              >
                Business Loans
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg">
            <div className="grid gap-6 text-center md:grid-cols-4">

              <div className="transition duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-700">
                  500+
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Happy Clients
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-700">
                  25+
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Business Sectors
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-700">
                  50+
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Insurance Solutions
                </p>
              </div>

              <div className="transition duration-300 hover:-translate-y-1">
                <div className="text-4xl font-bold text-blue-700">
                  10+
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Years Experience
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg">

            <h2 className="text-center text-2xl font-bold text-slate-900">
              Trusted Partners
            </h2>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
              {partners.map((partner) => (
                <img
                  key={partner.name}
                  src={partner.image}
                  alt={partner.name}
                  className="h-12 w-auto object-contain transition duration-300 hover:scale-110"
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* WHY TIA */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-900">
                Business Protection
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Comprehensive insurance and risk management solutions
                for businesses and professionals.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-900">
                MSME Solutions
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Specialized solutions tailored for MSMEs and growing
                enterprises.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-900">
                Financial Guidance
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Business funding and financial advisory support for
                growth.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-bold text-blue-900">
                Claims Support
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Practical assistance during insurance claims and
                emergencies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 py-14 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Need Expert Guidance?
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Speak directly with TIA Enterprises for insurance,
            engineering, finance and business advisory support.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919052300600"
              className="rounded-2xl bg-green-500 px-7 py-3 font-semibold text-white shadow transition duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-xl"
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919052300600"
              className="rounded-2xl border border-white/30 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}