"use client";

import Link from "next/link";
import React from "react";
import { ShieldCheck, FileText, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1221] text-white border-t border-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 text-center lg:text-left">
          
          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-3">
            <h4 className="font-cinzel text-lg sm:text-xl font-semibold text-[#C29C7D] tracking-wide">
              NOC NOC Cafe &amp; Restaurant
            </h4>

            {/* ADDRESS ROW */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <MapPin size={16} className="text-[#C29C7D] shrink-0 hidden sm:block" />
              <p className="text-sm text-gray-400 leading-snug text-center lg:text-left">
                Noc Noc, Jebel Ali Recreational Club, Near IBN Batuta Mal, Jebel Ali, Dubai
              </p>
            </div>

            {/* PHONE ROW */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Phone size={16} className="text-[#C29C7D] shrink-0" />
              <a
                href="tel:+971506947797"
                className="text-sm text-gray-400 hover:text-[#C29C7D] transition-colors duration-300"
              >
                +971562717681
              </a>
            </div>
          </div>

          {/* MIDDLE LINKS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm">
            <Link
              href="/privacy"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C29C7D] transition-all duration-300 hover:underline underline-offset-4"
            >
              <ShieldCheck size={15} /> Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="flex items-center gap-2 text-gray-400 hover:text-[#C29C7D] transition-all duration-300 hover:underline underline-offset-4"
            >
              <FileText size={15} /> Terms &amp; Conditions
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 space-y-2 text-gray-400 text-sm">
            <p className="text-center lg:text-right leading-snug">
              Copyright © 2025{" "}
              <span className="text-[#C29C7D] font-medium">
                NOC NOC Cafe &amp; Restaurant
              </span>
            </p>
            <p className="text-center lg:text-right">All rights reserved.</p>
          </div>
        </div>

        {/* Divider and tagline */}
        <div className="mt-10 flex flex-col items-center">
          <div className="h-px w-2/3 sm:w-40 bg-gradient-to-r from-transparent via-[#C29C7D] to-transparent mb-3 animate-pulse" />
          <p className="text-[11px] sm:text-xs text-gray-500 tracking-wide text-center">
            Crafted with <span className="text-[#C29C7D] font-medium">passion</span> in Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
