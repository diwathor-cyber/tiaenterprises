"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">

        {/* BRAND */}
        <div className="flex items-center gap-4">
          <img
            src="/logos/tia-main-logo.png"
            alt="TIA Enterprises"
            className="h-11 w-auto md:h-14"
          />

          <div className="text-left">
            <h1 className="text-lg font-bold tracking-wide text-blue-900 md:text-2xl">
              TIA ENTERPRISES
            </h1>

            <div className="mt-1 leading-5">
              <p className="text-[8px] font-medium tracking-[0.18em] text-slate-500 md:text-[10px]">
                INSURANCE | LOANS | ENGINEERING
              </p>

              <p className="text-[8px] font-medium tracking-[0.28em] text-slate-500 md:text-[10px]">
                RISK ADVISORY
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href
                  ? "text-blue-700"
                  : "text-slate-700 hover:text-blue-700"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-1 w-6 rounded bg-blue-900"></span>
          <span className="h-1 w-6 rounded bg-blue-900"></span>
          <span className="h-1 w-6 rounded bg-blue-900"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href
                    ? "text-blue-700"
                    : "text-slate-700"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://wa.me/919052300600"
              className="rounded-2xl bg-green-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}