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
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid items-center gap-8 md:grid-cols-2">

            <div className="text-left">
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
                ENGINEERING-LED INSURANCE ADVISORY
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Insurance & Risk Advisory for Businesses —
                Backed by 30 Years of Engineering Experience
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                TIA Enterprises combines engineering insight,
                insurance advisory and financial guidance to help
                businesses, professionals and MSMEs protect what
                matters most.
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

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919052300600"
                  className="rounded-2xl bg-green-600 px-7 py-3 font-semibold text-white shadow transition duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
                >
                  Chat on WhatsApp
                </a>

                <a
                  href="/services"
                  className="rounded-2xl border border-blue-700 px-7 py-3 font-semibold text-blue-700 transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg"
                >
                  Explore Services
                </a>
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

      {/* TESTIMONIALS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-blue-700">
              CLIENT FEEDBACK
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Trusted Across Businesses & Industries
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Chetan Sachdeva
              </h3>

              <p className="mt-1 text-sm text-blue-700">
                Ace Instruments
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “TIA Enterprises approached our insurance requirements
                from a business continuity perspective, not just as policy
                sales. The guidance on group health coverage and factory
                risk protection was practical, structured and professionally handled.”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Srivatsa Shivananda
              </h3>

              <p className="mt-1 text-sm text-blue-700">
                Pioneer Instruments
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “From MSME protection to fire safety and machinery
                coverage, TIA Enterprises helped us understand gaps we
                had overlooked for years. The advisory approach was
                detailed, transparent and technically sound.”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Nishanth Akula
              </h3>

              <p className="mt-1 text-sm text-blue-700">
                Finecraftz Interiors & Furniture
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “The guidance on surety bonds and contract-related
                financial requirements was extremely valuable for our
                business operations. TIA Enterprises handled the process
                with professionalism and clarity.”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Sai Podila
              </h3>

              <p className="mt-1 text-sm text-blue-700">
                Automobiles Sector
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “From personal insurance to commercial vehicle
                protection, the support was prompt, practical and
                trustworthy. The process was smooth and clearly
                explained throughout.”
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900">
                Sunil Hangay
              </h3>

              <p className="mt-1 text-sm text-blue-700">
                Business Client
              </p>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                “TIA Enterprises provided structured guidance on
                Keyman Insurance, Group Health and Personal Accident
                coverage for our business requirements. The advisory
                was honest, practical and business-focused.”
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY TIA */}
      <section className="bg-white">
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