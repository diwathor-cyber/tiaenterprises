export const metadata = {
  title: "Contact | TIA Enterprises",
  description:
    "Contact TIA Enterprises for insurance, finance, engineering and business advisory solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-14">
        
        <div className="text-center">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
            CONTACT TIA ENTERPRISES
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900">
            Let’s Connect
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600">
            Speak directly with TIA Enterprises for insurance,
            finance, engineering and business advisory solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* CONTACT INFO */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">
              Contact Information
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  PHONE
                </p>

                <p className="mt-2 text-lg font-medium text-slate-900">
                  +91 90523 00600
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  EMAIL
                </p>

                <p className="mt-2 text-lg font-medium text-slate-900">
                  support@tiaenterprises.com
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-slate-500">
                  ADDRESS
                </p>

                <p className="mt-2 text-base leading-8 text-slate-900">
                  HIG 104, Block 7, Phase 5,
                  <br />
                  KPHB Colony,
                  <br />
                  Hyderabad, Telangana, India - 500085
                </p>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/919052300600"
                className="rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Chat on WhatsApp
              </a>

              <a
                href="tel:+919052300600"
                className="rounded-2xl border border-blue-700 px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-900">
              Send An Enquiry
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600">
              Share your requirements and we will get in touch with you.
            </p>

            <form className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-700"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-700"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your requirement"
                className="w-full rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-blue-700"
              ></textarea>

              <button
                type="submit"
                className="rounded-2xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Submit Enquiry
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}