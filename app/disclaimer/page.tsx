export const metadata = {
  title: "Disclaimer | TIA Enterprises",
  description:
    "Read the disclaimer and important information regarding insurance and advisory services offered by TIA Enterprises.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold tracking-[0.2em] text-blue-700">
            DISCLAIMER
          </p>

          <h1 className="mt-5 text-5xl font-black text-slate-900">
            Disclaimer
          </h1>

          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-600">
            <p>
              The information provided on this website is for general
              informational purposes only and should not be considered
              legal, financial or professional advice.
            </p>

            <p>
              Insurance products, financial services and advisory
              solutions are subject to the terms, conditions and
              approvals of respective insurers, financial institutions
              and regulatory authorities.
            </p>

            <p>
              Insurance is the subject matter of solicitation.
              Policy issuance, approvals, underwriting and claims are
              solely subject to the insurer’s terms and conditions.
            </p>

            <p>
              TIA Enterprises and TIA Agency make reasonable efforts
              to keep information accurate and updated, however no
              warranties or guarantees are made regarding completeness,
              reliability or accuracy.
            </p>

            <p>
              Visitors are advised to independently verify policy
              features, benefits, exclusions, financial terms and
              conditions before making decisions.
            </p>

            <p>
              TIA Enterprises shall not be held liable for any direct,
              indirect or consequential losses arising from the use of
              this website or reliance upon its content.
            </p>

            <p>
              External links provided on this website are for
              convenience only. TIA Enterprises is not responsible for
              the content or practices of third-party websites.
            </p>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="font-semibold text-slate-900">
                TIA Enterprises (A Unit of TIA Agency)
              </p>

              <p className="mt-3">
                GSTIN: 36ACTPC9446P1ZO
              </p>

              <p className="mt-3">
                HIG 104, Block 7, Phase 5,
                <br />
                KPHB Colony,
                <br />
                Hyderabad, Telangana, India - 500085
              </p>

              <p className="mt-3">
                support@tiaenterprises.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}