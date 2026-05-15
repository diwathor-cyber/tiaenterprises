export const metadata = {
  title:
    "TIA Enterprises | Insurance, Loans, Engineering & Risk Advisory",
  description:
    "TIA Enterprises provides insurance, financial, engineering and risk advisory solutions for businesses, professionals and families.",
};

export default function Home() {
  const services = [
    "Keyman Insurance",
    "MSME Insurance",
    "Shop Insurance",
    "Factory Insurance",
    "Business Loans",
    "Engineering Consultancy",
    "Claims Support",
    "Surety Bonds",
  ];

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

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="text-left">
              <div className="mb-6">
                <h1 className="text-4xl font-black tracking-wide text-blue-900 md:text-5xl">
                  TIA ENTERPRISES
                </h1>

                <p className="mt-2 text-xs font-medium tracking-[0.2em] leading-6 text-slate-500">
                  INSURANCE | LOANS | ENGINEERING
                  <br />
                  RISK ADVISORY
                </p>
              </div>

              <h2 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
                Business Protection & Financial Solutions
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Insurance, financial and engineering solutions for
                businesses, professionals and families.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919052300600"
                  className="rounded-2xl bg-green-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
                >
                  Chat on WhatsApp
                </a>

                <button className="rounded-2xl border border-blue-700 px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
                  Request Callback
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[32px] bg-gradient-to-br from-blue-200 to-blue-50 p-2 shadow-2xl">
                <img
                  src="/founder/diwakar-hero.webp"
                  alt="Diwakar Cherukuwada"
                  className="w-full max-w-md rounded-[28px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[36px] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-black text-blue-700">500+</div>
              <p className="mt-3 text-slate-600">Happy Clients</p>
            </div>

            <div>
              <div className="text-5xl font-black text-blue-700">25+</div>
              <p className="mt-3 text-slate-600">Business Sectors</p>
            </div>

            <div>
              <div className="text-5xl font-black text-blue-700">50+</div>
              <p className="mt-3 text-slate-600">
                Insurance Solutions
              </p>
            </div>

            <div>
              <div className="text-5xl font-black text-blue-700">10+</div>
              <p className="mt-3 text-slate-600">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-center text-4xl font-black text-slate-900">
          Trusted Partners
        </h2>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-10">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                className="h-16 w-auto object-contain transition hover:scale-105"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-5xl font-black text-slate-900">
          Solutions We Offer
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-blue-900">
                {service}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Professional solutions and advisory services tailored
                for your business and personal protection needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-black">
            Need Expert Guidance?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Speak directly with TIA Enterprises for insurance,
            engineering, finance and business advisory support.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919052300600"
              className="rounded-2xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-600"
            >
              WhatsApp Now
            </a>

            <a
              href="tel:+919052300600"
              className="rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}