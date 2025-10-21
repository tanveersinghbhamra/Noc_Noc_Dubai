"use client"
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import React ,{ useState } from 'react';

export default function ContactUsSection() {
    const [interests, setInterests] = useState([]);
    const [phone, setPhone] = useState("");

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
        setInterests([...interests, value]);
        } else {
        setInterests(interests.filter(i => i !== value));
        }
    }

    const handleSubmit = () => {
        // Here you can send form data to API
        console.log("Selected interests:", interests);
        console.log("Phone:", phone);
        alert("Form submitted! Check console for values.");
    }
    return(
        <section className="py-20  bg-gray-900">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x text-white">
                <div className="py-6 md:py-0 md:px-6">
                    <h1 className="text-4xl font-bold">Get in touch</h1>
                    <p className="pt-2 pb-4 font-medium text-lg">Subscribe by filling the form for future updates right at your inbox</p>
                    <div className="space-y-4">
                        <p className="flex items-center">
                            <svg className="text-white w-5 h-5 mr-2 sm:mr-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"/>
                            </svg>

                            <span>Timings 11:00 am - 1:30 am</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Recreation Club - Mena Jabal Ali - Dubai - United Arab Emirates</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>0569610965</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>marketing.nocnoc@gmail.com</span>
                        </p>
                    </div>
                </div>
                <form noValidate="" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="block">
                        <span className="font-bold">Full name</span>
                        <input type="text" placeholder="Leroy Jenkins" className="block w-full py-3 px-2 mt-2 rounded-sm shadow-sm border border-gray-300  focus:outline-none" />
                    </label>
                    <label className="block">
                        <span className="mb-1 font-bold">Email address</span>
                        <input type="email" placeholder="leroy@jenkins.com" className="block w-full py-3 px-2 mt-2 rounded-sm shadow-sm border border-gray-300  focus:outline-non " />
                    </label>
                    <label className="block text-black">
                        <div className="mb-1 font-bold text-white">Phone Number</div>
                        <PhoneInput
                            country={'ae'}  // default: UAE (use 'in' for India)
                            inputClass="!w-full !rounded-lg !shadow-sm !bg-gray-100 !py-6 !rounded-md !shadow-md !text-black"
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: false,
                            }}
                        />
                    </label>
                    
                    {/* <label className="block">
                        <span className="mb-1 font-bold">Message for us</span>
                        <textarea rows="3" className="block w-full px-2 py-1 rounded-sm shadow-sm border border-gray-300 focus:outline-none"></textarea>
                    </label> */}

                    <div>
                        <p className="mb-2 font-bold text-white">Select your interests</p>
                        <div className='block w-full px-3 py-2 rounded-sm shadow-sm border border-gray-300 focus:outline-none'>
                        {["Live Performance", "Bollywood DJ", "Karaoke", "Quiz Nights", "Live Sports, International Cricket & IPL", "And many more"].map(option => (
                        <label key={option} className="flex items-center space-x-3 text-white font-medium py-2">
                            <input
                            type="checkbox"
                            value={option}
                            checked={interests.includes(option)}
                            onChange={handleCheckboxChange}
                            className="w-5 h-5 rounded"
                            />
                            <span className="">{option}</span>
                        </label>
                        ))}
                        </div>
                    </div>

                    <button type="button" className="w-full self-center px-8 py-3 text-lg font-bold text-black rounded focus:ring hover:ring focus:ring-opacity-75 bg-[#C29C7D] focus:ring-[#C29C7D] hover:ring-[#C29C7D]">Subscribe For Updates</button>
                </form>
            </div>
        </section>
    )
}