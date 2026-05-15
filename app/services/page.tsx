export const metadata = {
  title: "Services | TIA Enterprises",
  description:
    "Explore insurance, financial, engineering and business advisory services offered by TIA Enterprises.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Keyman Insurance",
      description:
        "Financial protection for businesses against the loss of key individuals.",
      link: "/services/keyman-insurance",
    },
    {
      title: "MSME Insurance",
      description:
        "Business protection solutions for MSMEs, assets and operations.",
      link: "/services/msme-insurance",
    },
    {
      title: "Shop Insurance",
      description:
        "Coverage for retail stores against fire, theft and operational risks.",
      link: "/services/shop-insurance",
    },
    {
      title: "Factory Insurance",
      description:
        "Industrial risk protection for machinery, inventory and facilities.",
      link: "/services/factory-insurance",
    },
    {
      title: "Group Mediclaim",
      description:
        "Employee healthcare protection solutions for organizations and businesses.",
      link: "/services/group-mediclaim",
    },
    {
      title: "Surety Bonds",
      description:
        "Financial guarantee solutions for contractors and infrastructure projects.",
      link: "/services/surety-bonds",
    },
    {
      title: "Business Loans",
      description:
        "Funding solutions for MSMEs, professionals and growing enterprises.",
      link: "/services/business-loans",
    },
    {
      title: "Engineering Consultancy",
      description:
        "Practical project and engineering advisory solutions for businesses.",
      link: "/services/engineering-consultancy",
    },
    {
      title: "Claims Support",
      description:
        "Reliable assistance and guidance during insurance claim processes.",
      link: "/services/claims-support",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid items-start gap-10 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              OUR SERVICES
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
              Protection Solutions For Modern Businesses
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600">
              TIA Enterprises provides insurance, financial and
              advisory solutions tailored for professionals,
              businesses, MSMEs and industries.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our solutions are designed to help businesses,
              institutions and professionals manage operational,
              financial and risk-related challenges effectively.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              INDUSTRIES WE SERVE
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
              Solutions Across Multiple Business Sectors
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                MSMEs
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Shops & Retail Stores
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Factories
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Warehouses
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Schools & Institutions
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Contractors
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Professionals
              </div>

              <div className="rounded-2xl bg-blue-50 px-5 py-4 font-medium text-blue-900">
                Commercial Establishments
              </div>

            </div>

            <p className="mt-8 text-base leading-8 text-slate-600">
              TIA Enterprises provides practical protection,
              advisory and financial solutions tailored for
              diverse industries and growing businesses.
            </p>
          </div>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <h2 className="text-2xl font-bold text-blue-900">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <a
                href={service.link}
                className="mt-5 inline-block rounded-2xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}