export default function ServicesPage() {
  const services = [
    "Keyman Insurance",
    "MSME Insurance",
    "Shop Insurance",
    "Factory Insurance",
    "Fire & Burglary Insurance",
    "Warehouse Insurance",
    "Group Mediclaim",
    "Engineering Insurance",
    "Contractors All Risk",
    "Business Loans",
    "Risk Advisory",
    "Claims Support",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
            OUR SERVICES
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-900">
            Protection Solutions For Modern Businesses
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            TIA Enterprises provides insurance, financial and
            advisory solutions tailored for professionals,
            businesses, MSMEs and industries.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-900">
                {service}
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Professional guidance and tailored solutions
                designed to help businesses and families
                manage risks effectively.
              </p>

              <a
                href="https://wa.me/919052300600"
                className="mt-6 inline-block rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}