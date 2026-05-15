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

        <footer className="border-t border-slate-200 bg-white py-10">
          <div className="mx-auto max-w-7xl px-6 text-center text-slate-600">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
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

              <a
                href="/contact"
                className="transition hover:text-blue-700"
              >
                Contact
              </a>
            </div>

            <p className="mt-6 text-lg font-bold text-slate-900">
              TIA Enterprises (A Unit of TIA Agency)
            </p>

            <p className="mt-3">
              GSTIN: 36ACTPC9446P1ZO
            </p>

            <p className="mt-2">
              HIG 104, Block 7, Phase 5, KPHB Colony,
              Hyderabad, Telangana, India - 500085
            </p>

            <p className="mt-2">
              support@tiaenterprises.com
            </p>

            <p className="mt-6 text-sm text-slate-500">
              Insurance is the subject matter of solicitation.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}