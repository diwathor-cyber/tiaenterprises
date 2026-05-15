export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
              ABOUT TIA ENTERPRISES
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-slate-900">
              Trusted Guidance Backed By Experience
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              TIA Enterprises provides insurance, financial,
              engineering and business advisory solutions for
              professionals, MSMEs, industries and families.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              With practical industry understanding and client-first
              service, TIA Enterprises focuses on long-term trust,
              protection and business continuity.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/founder/diwakar-hero.webp"
              alt="Diwakar Cherukuwada"
              className="w-full max-w-md rounded-[32px] shadow-2xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}