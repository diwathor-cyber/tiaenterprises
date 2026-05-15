export const metadata = {
  title: "Business Loans | TIA Enterprises",
  description:
    "Business loan and MSME funding solutions for growing businesses and professionals.",
};

export default function BusinessLoansPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              BUSINESS LOANS
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900">
              Funding Solutions For Business Growth
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Business loan solutions designed to support expansion,
              working capital requirements, machinery purchases and
              operational growth.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Suitable for MSMEs, professionals, traders,
              manufacturers and growing business enterprises.
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
                alt="Business Loans"
                className="w-full max-w-md rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}