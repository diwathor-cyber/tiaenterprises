export const metadata = {
  title: "Group Mediclaim | TIA Enterprises",
  description:
    "Group Mediclaim and employee health insurance solutions for businesses and organizations.",
};

export default function GroupMediclaimPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              GROUP MEDICLAIM
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900">
              Employee Health Protection Solutions
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Group Mediclaim policies help organizations provide
              medical protection and healthcare benefits to employees
              and their families.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Suitable for companies, schools, industries, offices
              and institutions looking to strengthen employee welfare
              and retention.
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
                alt="Group Mediclaim"
                className="w-full max-w-md rounded-[28px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}