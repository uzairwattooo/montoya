"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
    const [step, setStep] = useState(1);
    return (
        <>
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FAF6EF]">
                <div className="bg-[#3B0D0D] text-[#F3E6CF] p-8 md:p-16 lg:p-24 flex flex-col justify-between min-h-[40vh] md:min-h-screen">
                    <div className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/images/Icon 1 (1).png"
                            width={84}
                            height={82}
                            alt="icon"
                            className="h-auto w-8 md:w-12 "
                        />
                        <h1 className="font-jost font-medium text-lg md:text-[23.69px] text-[#F3E6CF] leading-none tracking-tight">
                            MONTOYA ROE
                        </h1>
                    </div>
                    <div className="max-w-93.25 my-auto pt-12 md:pt-0">
                        <h1 className="font-cormorant text-[48px] md:text-[64px] font-medium leading-13.5 md:leading-16 tracking-[-0.02em] mb-6">
                            Build your <br />
                            future <span className="italic">with us</span>.
                        </h1>
                        <p className="font-jost text-[16px] font-normal leading-[150%] text-[#977F7F] mb-10">
                            Create your secure Montoya Roe account and get access to your personal client portal — track applications, manage documents, and stay in control.
                        </p>
                        <ul className="list-disc pl-6 font-jost text-[18px] font-normal leading-10 tracking-normal text-[#93776B]">
                            <li>Submit and track Finance, Development & International applications</li>
                            <li>Access and download all uploaded documents anytime</li>
                            <li>Real-time application status — always know where things stand</li>
                            <li>Fully encrypted · GDPR & Australian Privacy Act compliant</li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
                    <div className="w-full max-w-xl flex flex-col">
                        <div className="text-center mb-8">
                            <h2 className="font-cormorant text-[48px] font-medium leading-13.5 tracking-[-0.02em] text-[#3B0D0D] mb-2">
                                Create your account
                            </h2>
                            <p className="font-jost text-[16px] font-normal text-[#93776B]">
                                Already registered?{' '}
                                <Link href="/dashboard" className="font-jost text-[16px] font-normal underline text-[#3B0D0D] transition-opacity hover:opacity-80">
                                    Sign in to your portal
                                </Link>
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-6 mb-10 border-b border-[#E9D6B2]/40 pb-6">
                            <div className="flex items-center gap-2">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-jost text-[12px] font-medium
      ${step === 1 ? "bg-[#3B0D0D] text-[#F3E6CF]" : "bg-[#93776B] text-white opacity-40"}`}
                                >
                                    1
                                </span>

                                <span
                                    className={`font-jost text-[12px] uppercase tracking-wider
      ${step === 1 ? "text-[#3B0D0D] font-medium" : "text-[#93776B] opacity-40"}`}
                                >
                                    Personal
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-jost text-[12px]
      ${step === 2 ? "bg-[#3B0D0D] text-[#F3E6CF]" : "bg-[#93776B] text-white opacity-40"}`}
                                >
                                    2
                                </span>
                                <span
                                    className={`font-jost text-[12px] uppercase tracking-wider
      ${step === 2 ? "text-[#3B0D0D] font-medium" : "text-[#93776B] opacity-40"}`}
                                >
                                    Security
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span
                                    className={`w-6 h-6 rounded-full flex items-center justify-center font-jost text-[12px]
      ${step === 3 ? "bg-[#3B0D0D] text-[#F3E6CF]" : "bg-[#93776B] text-white opacity-40"}`}
                                >
                                    3
                                </span>

                                <span
                                    className={`font-jost text-[12px] uppercase tracking-wider
      ${step === 3 ? "text-[#3B0D0D] font-medium" : "text-[#93776B] opacity-40"}`}
                                >
                                    Confirmation
                                </span>
                            </div>
                        </div>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="James"
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Anderson"
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="your@example.com"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="+61 400 000 000"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Country of Residence *
                                        </label>
                                        <div className="relative">
                                            <select
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all appearance-none cursor-pointer"
                                                defaultValue=""
                                            >
                                                <option value="" disabled hidden>Select Country</option>
                                                <option value="AU">Australia</option>
                                                <option value="PK">Pakistan</option>
                                                <option value="US">United States</option>
                                                <option value="UK">United Kingdom</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#3B0D0D]/60 text-xs">
                                                ▼
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Create Password *
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Minimum 8 characters"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                        <p className="font-jost text-[14px] font-normal text-[#93776B] mt-1 leading-[130%]">
                                            Use at least 8 characters with a mix of letters, numbers, and symbols.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 pt-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Confirm Password *
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Repeat your password"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            )}
                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 group">
                                        <div className="relative flex items-center mt-0.5">
                                            <input
                                                id="terms"
                                                type="checkbox"
                                                className="peer w-5 h-5 cursor-pointer rounded transition-all appearance-none bg-[#FAF6EF] border border-[#E9D6B2] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none"
                                            />
                                            <svg
                                                className="absolute w-3 h-3 text-[#F3E6CF] pointer-events-none left-[4px] top-[4px] hidden peer-checked:block"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <label htmlFor="terms" className="font-jost text-[14px] font-light text-[#93776B] leading-[140%] cursor-pointer select-none">
                                            I agree to the Terms of Use and Privacy Policy of Montoya Roe.
                                        </label>
                                    </div>
                                    <div className="flex items-start gap-4 group pt-2">
                                        <div className="relative flex items-center mt-0.5">
                                            <input
                                                id="consent"
                                                type="checkbox"
                                                className="peer w-5 h-5 cursor-pointer rounded transition-all appearance-none bg-[#FAF6EF] border border-[#E9D6B2] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none"
                                            />
                                            <svg
                                                className="absolute w-3 h-3 text-[#F3E6CF] pointer-events-none left-[4px] top-[4px] hidden peer-checked:block"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <label htmlFor="consent" className="font-jost text-[14px] font-light text-[#93776B] leading-[140%] cursor-pointer select-none">
                                            I consent to my data being stored and processed in accordance with the Australian Privacy Act and GDPR guidelines.
                                        </label>
                                    </div>
                                </div>
                            )}
                            <div className="flex gap-3 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className={`w-full border border-[#3B0D0D]/40 font-jost text-[14px] uppercase font-normal py-3 transition text-center
    ${step === 1 ? "hidden" : "bg-transparent text-[#3B0D0D] hover:bg-gray-50"}`}
                                >
                                    Back
                                </button>
                                {step === 1 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        Continue
                                    </button>
                                )}

                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(step + 1)}
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        Continue
                                    </button>
                                )}

                                {step === 3 && (
                                    <button
                                        type="submit"
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        create account
                                    </button>
                                )}

                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
