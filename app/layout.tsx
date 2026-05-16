import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "TIA Enterprises",
  description:
    "Insurance, finance, engineering and risk advisory solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Navbar />

        {children}

        <footer className="border-t border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

            {/* BRAND */}
            <div>
              <h3 className="text-2xl font-bold tracking-wide text-blue-900">
                TIA Enterprises
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Insurance, financial, engineering and risk advisory
                solutions for businesses, professionals and families.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-base font-bold tracking-wide text-slate-900">
                Quick Links
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a href="/" className="transition hover:text-blue-700">
                  Home
                </a>

                <a href="/about" className="transition hover:text-blue-700">
                  About
                </a>

                <a href="/services" className="transition hover:text-blue-700">
                  Services
                </a>

                <a href="/contact" className="transition hover:text-blue-700">
                  Contact
                </a>
              </div>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-base font-bold tracking-wide text-slate-900">
                Core Services
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                <a
                  href="/services/keyman-insurance"
                  className="transition hover:text-blue-700"
                >
                  Keyman Insurance
                </a>

                <a
                  href="/services/msme-insurance"
                  className="transition hover:text-blue-700"
                >
                  MSME Insurance
                </a>

                <a
                  href="/services/shop-insurance"
                  className="transition hover:text-blue-700"
                >
                  Shop Insurance
                </a>

                <a
                  href="/services/factory-insurance"
                  className="transition hover:text-blue-700"
                >
                  Factory Insurance
                </a>

                <a
                  href="/services/business-loans"
                  className="transition hover:text-blue-700"
                >
                  Business Loans
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-base font-bold tracking-wide text-slate-900">
                Contact
              </h4>

              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>+91 90523 00600</p>

                <p>info@tiaenterprises.com</p>

                <p>
                  HIG 104, Block 7, Phase 5,
                  <br />
                  KPHB Colony,
                  <br />
                  Hyderabad, Telangana, India - 500085
                </p>
              </div>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="mx-auto mt-10 max-w-7xl border-t border-slate-200 px-6 pt-6 text-center">

            <div className="flex flex-wrap justify-center gap-5 text-sm font-medium text-slate-600">
              <a
                href="/privacy-policy"
                className="transition hover:text-blue-700"
              >
                Privacy Policy
              </a>

              <a
                href="/disclaimer"
                className="transition hover:text-blue-700"
              >
                Disclaimer
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Insurance is the subject matter of solicitation.
            </p>

            <p className="mt-2 text-sm text-slate-500">
              GSTIN: 36ACTPC9446P1ZO
            </p>

            <p className="mt-4 text-xs tracking-wide text-slate-400">
              © 2026 TIA Enterprises. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}