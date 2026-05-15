"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        
        <div className="flex items-center gap-3">
          <img
            src="/logos/tia-main-logo.png"
            alt="TIA Enterprises"
            className="h-12 w-auto md:h-16"
          />

          <div className="text-left">
            <h1 className="text-lg font-black tracking-wide text-blue-900 md:text-3xl">
              TIA ENTERPRISES
            </h1>

            <div className="mt-1 text-center">
              <p className="text-[8px] font-medium tracking-[0.15em] text-slate-500 md:text-xs">
                INSURANCE | LOANS | ENGINEERING
              </p>

              <p className="mt-1 text-[8px] font-medium tracking-[0.25em] text-slate-500 md:text-xs">
                RISK ADVISORY
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="/" className="font-medium text-slate-700 hover:text-blue-700">
            Home
          </a>

          <a href="/about" className="font-medium text-slate-700 hover:text-blue-700">
            About
          </a>

          <a href="/services" className="font-medium text-slate-700 hover:text-blue-700">
            Services
          </a>

          <a href="/contact" className="font-medium text-slate-700 hover:text-blue-700">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="h-1 w-6 rounded bg-blue-900"></span>
          <span className="h-1 w-6 rounded bg-blue-900"></span>
          <span className="h-1 w-6 rounded bg-blue-900"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="/" className="font-medium text-slate-700">
              Home
            </a>

            <a href="/about" className="font-medium text-slate-700">
              About
            </a>

            <a href="/services" className="font-medium text-slate-700">
              Services
            </a>

            <a href="/contact" className="font-medium text-slate-700">
              Contact
            </a>

            <a
              href="https://wa.me/919052300600"
              className="rounded-2xl bg-green-600 px-5 py-3 text-center font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}