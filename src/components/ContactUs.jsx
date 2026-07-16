"use client";

import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ContactUsSection() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [interests, setInterests] = useState([]);

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setInterests((prev) =>
            checked ? [...prev, value] : prev.filter((i) => i !== value),
        );
    };

    const handleSubmit = () => {
        if (!fullName.trim()) {
            toast.error("Please enter your full name.");
            return;
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            toast.error("Please enter a valid email address.");
            return;
        }
        if (!phone || phone.length < 7) {
            toast.error("Please enter a valid phone number.");
            return;
        }
        if (interests.length === 0) {
            toast.error("Please select at least one interest.");
            return;
        }

        console.log("Full name:", fullName);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Interests:", interests);

        toast.success("Welcome aboard! You are subscribed for updates.", {
            duration: 3000,
            style: {
                background: "#333",
                color: "#fff",
                fontWeight: "600",
                borderRadius: "8px",
            },
        });

        setFullName("");
        setEmail("");
        setPhone("");
        setInterests([]);
    };

    // Small reusable row so every contact item shares the same look
    const InfoRow = ({ icon, children }) => (
        <div className="flex items-center gap-4 group">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C29C7D]/20 transition-colors duration-300">
                {icon}
            </div>
            <div className="text-sm sm:text-base text-white">{children}</div>
        </div>
    );

    return (
        <section className="py-20 bg-gray-900" id="ContactSection">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:gap-12 md:divide-x md:divide-white/10 text-white">
                {/* Left side */}
                <div className="py-6 md:py-0 md:pr-6">
                    <h1 className="font-alice text-4xl font-bold">
                        Get in touch
                    </h1>
                    <p className="pt-2 pb-8 text-lg text-white/70">
                        Subscribe by filling the form for future updates right
                        at your inbox
                    </p>

                    <div className="space-y-5">
                        {/* Hours */}
                        <InfoRow
                            icon={
                                <svg
                                    className="w-5 h-5 text-[#C29C7D]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" />
                                </svg>
                            }
                        >
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider text-white/50 font-medium">
                                    Sunday – Thursday
                                </span>
                                <span className="font-semibold">
                                    2:00 PM – 1:00 AM
                                </span>
                            </div>
                        </InfoRow>

                        <InfoRow
                            icon={
                                <svg
                                    className="w-5 h-5 text-[#C29C7D]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" />
                                </svg>
                            }
                        >
                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-wider text-white/50 font-medium">
                                    Friday – Saturday
                                </span>
                                <span className="font-semibold">
                                    2:00 PM – 2:00 AM
                                </span>
                            </div>
                        </InfoRow>

                        {/* Address */}
                        <InfoRow
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    className="w-5 h-5 text-[#C29C7D]"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                        >
                            Noc Noc, Recreation Club, Near Ibn Battuta Mall,
                            Mena Jabal Ali, Dubai, United Arab Emirates
                        </InfoRow>

                        {/* Phone */}
                        <InfoRow
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5 h-5 text-[#C29C7D]"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            }
                        >
                            +971 54 706 3640
                        </InfoRow>

                        {/* Email */}
                        <InfoRow
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    className="w-5 h-5 text-[#C29C7D]"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            }
                        >
                            restaurantnocnoc@gmail.com
                        </InfoRow>

                        {/* Instagram */}
                        <Link
                            href="https://www.instagram.com/nocnocdubai/"
                            className="block"
                        >
                            <InfoRow
                                icon={
                                    <svg
                                        className="w-5 h-5 text-[#C29C7D]"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="currentColor"
                                            d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                        />
                                    </svg>
                                }
                            >
                                nocnocdubai
                            </InfoRow>
                        </Link>
                    </div>

                    <div className="mt-8 w-full h-64 md:h-80 lg:h-96 relative overflow-hidden rounded-xl border border-white/10">
                        <Link
                            href="https://www.google.com/maps/dir//Recreation+Club+-+Mena+Jabal+Ali+-+Dubai+-+United+Arab+Emirates/@25.0760224,55.2274879,10z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f1391e42a4db1:0x416b5f5147db2087!2m2!1d55.1182004!2d25.0340502?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 text-white text-sm font-semibold md:hidden"
                        >
                            Tap to open map
                        </Link>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.001389858079!2d55.118149900000006!3d25.034026900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f1391e42a4db1%3A0x416b5f5147db2087!2sNoc%20Noc!5e0!3m2!1sen!2sin!4v1761067922409!5m2!1sen!2sin"
                            className="w-full h-full border-0 pointer-events-none md:pointer-events-auto"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>

                {/* Right side form */}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}
                    className="flex flex-col py-6 space-y-6 md:py-0 md:pl-6"
                >
                    <label className="block">
                        <span className="font-semibold text-white/90">
                            Full name
                        </span>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Leroy Jenkins"
                            className="block w-full py-3 px-3 mt-2 rounded-md bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#C29C7D] focus:ring-1 focus:ring-[#C29C7D] transition-colors"
                        />
                    </label>

                    <label className="block">
                        <span className="font-semibold text-white/90">
                            Email address
                        </span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="leroy@jenkins.com"
                            className="block w-full py-3 px-3 mt-2 rounded-md bg-white/5 border border-white/15 text-white placeholder-white/30 focus:outline-none focus:border-[#C29C7D] focus:ring-1 focus:ring-[#C29C7D] transition-colors"
                        />
                    </label>

                    <label className="block">
                        <div className="mb-2 font-semibold text-white/90">
                            Phone Number
                        </div>
                        <PhoneInput
                            country={"ae"}
                            value={phone}
                            onChange={setPhone}
                            inputClass="!w-full !rounded-md !bg-gray-100 !py-6 !text-black"
                            inputProps={{
                                name: "phone",
                                required: true,
                                autoFocus: false,
                            }}
                        />
                    </label>

                    <div>
                        <p className="mb-3 font-semibold text-white/90">
                            Select your interests
                        </p>
                        <div className="w-full px-4 py-3 rounded-md bg-white/5 border border-white/15">
                            {[
                                "Live Performance",
                                "Bollywood DJ",
                                "Karaoke",
                                "Quiz Nights",
                                "Live Sports, International Cricket & IPL",
                                "And many more",
                            ].map((option) => (
                                <label
                                    key={option}
                                    className="flex items-center space-x-3 text-white/90 font-medium py-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        value={option}
                                        checked={interests.includes(option)}
                                        onChange={handleCheckboxChange}
                                        className="w-5 h-5 rounded accent-[#C29C7D]"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="font-cinzel w-full self-center px-8 py-3 text-lg font-bold text-center text-black rounded transition-transform duration-200 hover:scale-[1.02] bg-[#C29C7D] focus:ring focus:ring-opacity-75 focus:ring-[#C29C7D]"
                    >
                        Subscribe For Updates
                    </button>
                </form>
            </div>
        </section>
    );
}
