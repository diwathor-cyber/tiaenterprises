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

        <footer className="border-t border-slate-200 bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
            
            <div>
              <h3 className="text-2xl font-black text-blue-900">
                TIA Enterprises
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Insurance, financial, engineering and risk advisory
                solutions for businesses, professionals and families.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Quick Links
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-slate-600">
                <a href="/" className="hover:text-blue-700">
                  Home
                </a>

                <a href="/about" className="hover:text-blue-700">
                  About
                </a>

                <a href="/services" className="hover:text-blue-700">
                  Services
                </a>

                <a href="/contact" className="hover:text-blue-700">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Core Services
              </h4>

              <div className="mt-4 flex flex-col gap-3 text-slate-600">
                <a
                  href="/services/keyman-insurance"
                  className="hover:text-blue-700"
                >
                  Keyman Insurance
                </a>

                <a
                  href="/services/msme-insurance"
                  className="hover:text-blue-700"
                >
                  MSME Insurance
                </a>

                <a
                  href="/services/shop-insurance"
                  className="hover:text-blue-700"
                >
                  Shop Insurance
                </a>

                <a
                  href="/services/factory-insurance"
                  className="hover:text-blue-700"
                >
                  Factory Insurance
                </a>

                <a
                  href="/services/business-loans"
                  className="hover:text-blue-700"
                >
                  Business Loans
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900">
                Contact
              </h4>

              <div className="mt-4 space-y-3 text-slate-600">
                <p>+91 90523 00600</p>

                <p>support@tiaenterprises.com</p>

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

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200 px-6 pt-8 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-600">
              <a
                href="/privacy-policy"
                className="hover:text-blue-700"
              >
                Privacy Policy
              </a>

              <a
                href="/disclaimer"
                className="hover:text-blue-700"
              >
                Disclaimer
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Insurance is the subject matter of solicitation.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              GSTIN: 36ACTPC9446P1ZO
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}