export const metadata = {
  title: "About | TIA Enterprises",
  description:
    "Learn about TIA Enterprises and our insurance, financial, engineering and business advisory solutions.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">

          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              ABOUT TIA ENTERPRISES
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900">
              Trusted Guidance Backed By Experience
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600">
              TIA Enterprises provides insurance, financial,
              engineering and business advisory solutions for
              professionals, MSMEs, industries and families.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              With practical industry understanding and client-first
              service, TIA Enterprises focuses on long-term trust,
              protection and business continuity.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
                BUSINESS PHILOSOPHY
              </p>

              <p className="mt-4 text-base leading-8 text-slate-700">
                A practical and advisory-driven approach focused on
                integrity, long-term relationships and responsible
                business protection solutions.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg">
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              FOUNDER PROFILE
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
              Diwakar Cherukuwada
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Diwakar Cherukuwada is a Civil Engineer with more than
              30 years of experience in structural design,
              interiors and furniture solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Over the years, he has worked across multiple
              industries and project environments throughout India,
              gaining practical exposure to construction systems,
              technology products and project execution.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              His experience combines engineering knowledge,
              business understanding and real-world problem solving
              developed through decades of hands-on work and travel
              across the country.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Known for integrity, professionalism and long-term
              client relationships, he brings a practical and
              advisory-driven approach to TIA Enterprises.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}