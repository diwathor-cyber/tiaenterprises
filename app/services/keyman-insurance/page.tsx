export const metadata = {
  title: "Keyman Insurance | TIA Enterprises",
  description:
    "Keyman Insurance solutions for businesses, directors, partners and MSMEs.",
};

export default function KeymanInsurancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              KEYMAN INSURANCE
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900">
              Protecting Businesses From Financial Loss
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Keyman Insurance helps businesses protect themselves
              against financial losses arising from the death or
              disability of important individuals within the company.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Suitable for business owners, directors, partners and
              key employees, these policies help ensure business
              continuity and financial stability.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919052300600"
                className="rounded-2xl bg-green-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-green-700"
              >
                Enquire on WhatsApp
              </a>

              <a
                href="/contact"
                className="rounded-2xl border border-blue-700 px-7 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[32px] bg-gradient-to-br from-blue-200 to-blue-50 p-2 shadow-2xl">
              <img
                src="/founder/diwakar-hero.webp"
                alt="Keyman Insurance"
                className="w-full max-w-md rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}