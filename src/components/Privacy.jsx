"use client";

import Link from "next/link";
import React from "react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-gray-900 text-white py-16 pt-40 sm:pt-45">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Last updated: <strong>8th November 2025</strong>
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl prose prose-lg">
          <p>
            At <strong>NOC NOC Cafe &amp; Restaurant</strong> ("we", "us", "our"),
            we respect your privacy and are committed to protecting personal
            information. This Privacy Policy explains how we collect, use,
            disclose, and secure information when you use our website{" "}
            <a className="text-[#C29C7D] hover:underline" href="/">
              nocnocdubai.ae
            </a>{" "}
            (the "Site") or interact with our services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            <strong>Personal information:</strong> When you make a reservation,
            contact us, sign up for promotions, or otherwise interact with the
            Site, we may collect name, email, phone number, booking details,
            and any information you provide voluntarily.
          </p>
          <p>
            <strong>Automatically collected data:</strong> We may collect IP
            address, device and browser data, pages visited, referral source,
            timestamps, and other analytics data via cookies or similar
            technologies.
          </p>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process and manage reservations and bookings.</li>
            <li>To communicate booking confirmations, updates, and marketing if you consent.</li>
            <li>To improve and maintain the Site and our services.</li>
            <li>To detect, prevent, and address fraud or security issues.</li>
            <li>To comply with legal obligations when required.</li>
          </ul>

          <h2>3. Cookies &amp; Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to provide basic
            site functionality and analytics. You can control cookie settings
            through your browser, but disabling essential cookies may impair
            site functionality.
          </p>

          <h2>4. Sharing Your Information</h2>
          <p>
            We will not sell your personal data. We may share data with service
            providers acting on our behalf (e.g., reservation systems, email
            providers) and when required by law or to protect rights and safety.
            In the event of a business sale or reorganisation, personal data may
            be transferred with notice.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary for the
            purposes outlined or as required by law. When no longer needed,
            information is deleted or anonymised.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            Depending on applicable law, you may have rights to access, correct,
            delete or restrict processing of your personal data. To exercise
            these rights, contact us using the details below.
          </p>

          <h2>7. Security</h2>
          <p>
            We implement reasonable technical and organisational measures to
            protect personal data. No method of transmission or storage is 100%
            secure — we cannot guarantee absolute security.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our Site may link to third-party websites which have their own
            privacy practices. We are not responsible for their content or
            policies. Please review third-party privacy notices before sharing
            information.
          </p>

          <h2>9. Changes to this Policy</h2>
          <p>
            We may update this Policy occasionally. The "Last updated" date at
            the top will reflect changes. Continued use after changes means
            you accept the updated policy.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions or requests regarding privacy, contact us at:
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
