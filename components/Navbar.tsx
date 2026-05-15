export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <img
            src="/logos/tia-main-logo.png"
            alt="TIA Enterprises"
            className="h-16 w-auto"
          />

          <div className="text-left">
            <h1 className="text-3xl font-black tracking-wide text-blue-900">
              TIA ENTERPRISES
            </h1>

            <p className="mt-1 text-xs font-medium tracking-[0.2em] text-slate-500">
              INSURANCE | LOANS | ENGINEERING | RISK ADVISORY
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Home
          </a>

          <a
            href="/about"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            About
          </a>

          <a
            href="/services"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Services
          </a>

          <a
            href="/contact"
            className="font-medium text-slate-700 transition hover:text-blue-700"
          >
            Contact
          </a>
        </div>

        <a
          href="https://wa.me/919052300600"
          className="rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-800"
        >
          WhatsApp Us
        </a>
      </div>
    </header>
  );
}