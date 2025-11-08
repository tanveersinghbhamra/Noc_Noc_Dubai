"use client";

import Link from "next/link";
import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 ">
      <section className="bg-gray-900 text-white py-16 pt-40 sm:pt-45">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Last updated: <strong>8th November 2025</strong>
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl prose prose-lg">
          <p>
            These Terms &amp; Conditions ("Terms") govern your access to and use
            of the website <strong>nocnocdubai.ae</strong> (the "Site") and the
            services provided by NOC NOC Cafe &amp; Restaurant ("we", "us",
            "our", "Venue"). By using the Site or making a reservation or
            booking you agree to these Terms.
          </p>

          <h2>1. Use of the Site</h2>
          <p>
            You must be at least 18 years old (or the legal minimum age in your
            jurisdiction) to use the Site, make bookings or orders. You agree to
            provide accurate information when requested and to use the Site in
            compliance with applicable laws.
          </p>

          <h2>2. Reservations &amp; Bookings</h2>
          <ul>
            <li>Reservations are subject to availability and confirmation by us.</li>
            <li>Some bookings may require a deposit, prepayment or minimum spend.</li>
            <li>Special events, VIP bookings or private hire may have additional terms.</li>
            <li>We may refuse or cancel bookings in our discretion, including for breach of venue rules.</li>
          </ul>

          <h2>3. Payment &amp; Cancellation</h2>
          <p>
            Payment terms will be communicated at the time of booking. Cancellation
            policies (including cut-off times and any fees) are set per booking
            and must be followed to avoid charges. We are not liable for missed
            bookings due to force majeure or technical issues.
          </p>

          <h2>4. Venue Rules</h2>
          <p>
            Guests must follow any venue policies (dress code, age restrictions,
            behaviour standards). Management reserves the right to refuse entry
            or remove guests who do not comply.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All Site content (text, images, logos, video) is owned or licensed to
            us. You may view and print pages for personal use, but you may not
            reproduce, distribute, or create derivative works without permission.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we exclude liability for any
            indirect, incidental, or consequential losses arising from use of the
            Site or Venue services. Our total liability for direct losses is
            limited to the amount you paid (if any) for the booking or service.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United Arab Emirates,
            and disputes are subject to the jurisdiction of the courts in Dubai.
          </p>

          <h2>8. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Updated Terms will be
            posted on this page with a revised "Last updated" date. Continued use
            after changes constitutes acceptance.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms should be directed to:
          </p>
          <address className="not-italic">
            <strong>NOC NOC Cafe &amp; Restaurant</strong>
            <br />
            Dubai, Dubai, Dubai, Dubai, United Arab Emirates, 186463
            <br />
            Email: <a href="mailto:restaurantnocnoc@gmail.com" className="text-[#C29C7D]">restaurantnocnoc@gmail.com</a>
            <br />
            Phone: <a href="tel:+971506947797" className="text-[#C29C7D]">+971506947797</a>
          </address>

          <div className="mt-8">
            <Link href="/" className="inline-block rounded bg-gray-900 px-4 py-2 text-sm text-white border border-gray-800">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
