"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { authClient } from "../../lib/auth-client";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";


export default function Signup() {
    const [step, setStep] = useState(1);
    const [emailError, setEmailError] = useState("");
    const [emailTouched, setEmailTouched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
        agreePrivacy: false,
    });
    const router = useRouter()
    const showMessage = (text, type = "error") => {
        setMessage(text);
        setMessageType(type);
    };
    const validateStep1 = async () => {
        if (!form.firstName) {
            alert("First name is required");
            return false;
        }

        if (!form.lastName) {
            alert("Last name is required");
            return false;
        }

        if (!form.email) {
            alert("Email is required");
            return false;
        }

        if (!form.phone) {
            alert("Phone is required");
            return false;
        }

        if (!form.country) {
            alert("Country is required");
            return false;
        }

        return true;
    };
    const validateStep2 = () => {
        if (!form.password) {
            alert("Password is required");
            return false;
        }
        if (form.password.length < 8) {
            alert("Password must be at least 8 characters");
            return false;
        }
        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
        return true;
    };
    const handleSignup = async (e) => {
        if (loading) return;
        setLoading(true);
        e.preventDefault();
        setEmailError("");
        if (!form.agreeTerms) {
            alert("Please accept Terms & Conditions");
            return;
        }
        if (!form.agreePrivacy) {
            alert("Please accept Privacy Policy");
            return;
        }
        const res = await authClient.signUp.email({
            email: form.email,
            password: form.password,
            name: form.firstName + " " + form.lastName,
        });
        if (res.error) {
            const errorMessage = res.error.message?.toLowerCase() || "";

            if (
                errorMessage.includes("already") ||
                errorMessage.includes("duplicate") ||
                errorMessage.includes("failed to create user")
            ) {
                setStep(1);
                setEmailError("This email is already registered");
                showMessage("This email is already registered");
            } else {
                showMessage(res.error.message);
            }

            return;
        }
        const userId = res.data?.user?.id;
        if (!userId) return;
        await supabase.from("profile").insert({
            user_id: userId,
            first_name: form.firstName,
            last_name: form.lastName,
            phone: form.phone,
            country: form.country,
            agree_terms: form.agreeTerms,
            agree_privacy: form.agreePrivacy,
            role: "client",
        });
        showMessage("Account created successfully", "success");
        router.push("/login")
    };
    return (
        <>

            <div className="min-h-screen md:h-screen grid grid-cols-1 md:grid-cols-2 bg-[#FAF6EF]">
                <div className="bg-[#3B0D0D] text-[#F3E6CF] p-8 md:p-16 lg:p-14 flex-col h-full justify-between">
                    <Link href="/" className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/images/icon-2.png"
                            width={84}
                            height={82}
                            alt="icon"
                            className="h-auto w-8 md:w-12 "
                        />
                        <h1 className="font-jost font-medium text-lg md:text-[23.69px] text-[#F3E6CF] leading-none tracking-tight">
                            MONTOYA ROE
                        </h1>
                    </Link>
                    <div className="max-w-93.25 space-y-6 md:space-y-8">
                        <h1 className="font-cormorant text-[48px] md:text-[64px] lg:py-5 font-medium leading-13.5 md:leading-16 tracking-[-0.02em] mb-6">
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
                        <div className="flex items-center justify-center gap-6 mb-6 pb-6">
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
                        {message && (
                            <div
                                className={`mb-5 border px-4 py-3 font-jost text-[14px] rounded-sm ${messageType === "success"
                                    ? "bg-[#E7F6EC] text-[#2E7D4F] border-[#B7DFC5]"
                                    : "bg-[#FFF4E0] text-[#8A3A2A] border-[#E9D6B2]"
                                    }`}
                            >
                                {message}
                            </div>
                        )}
                        <form onSubmit={handleSignup} className="space-y-6">
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={form.firstName}
                                                onChange={(e) =>
                                                    setForm({ ...form, firstName: e.target.value })
                                                }
                                                placeholder="James"
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                                Last Name *
                                            </label>
                                            <input required
                                                type="text"
                                                value={form.lastName}
                                                onChange={(e) =>
                                                    setForm({ ...form, lastName: e.target.value })
                                                }
                                                placeholder="Anderson"
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Email Address *
                                        </label>
                                        <input required
                                            type="email"
                                            value={form.email}
                                            onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                            }
                                            onBlur={() => setEmailTouched(true)}
                                            placeholder="your@example.com"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                        {emailError && (
                                            <p className="text-red-500 text-[12px] font-jost mt-1">
                                                {emailError}
                                            </p>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Phone Number *
                                        </label>
                                        <input required
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) =>
                                                setForm({ ...form, phone: e.target.value })
                                            }
                                            placeholder="+61 400 000 000"
                                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-jost text-[14px] font-light uppercase leading-[100%] text-[#93776B]">
                                            Country of Residence *
                                        </label>
                                        <div className="relative">
                                            <select value={form.country}
                                                onChange={(e) =>
                                                    setForm({ ...form, country: e.target.value })
                                                }
                                                className="w-full bg-[#FFF4E0] border-none p-4 rounded-lg font-jost text-[14px] text-[#3B0D0D] focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all appearance-none cursor-pointer"

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
                                        <input required
                                            type="password"
                                            value={form.password}
                                            onChange={(e) =>
                                                setForm({ ...form, password: e.target.value })
                                            }
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
                                        <input required
                                            type="password"

                                            value={form.confirmPassword}
                                            onChange={(e) =>
                                                setForm({ ...form, confirmPassword: e.target.value })
                                            }
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
                                            <input required
                                                id="terms"
                                                type="checkbox"
                                                checked={form.agreeTerms}
                                                onChange={(e) =>
                                                    setForm({ ...form, agreeTerms: e.target.checked })
                                                }
                                                className="peer w-5 h-5 cursor-pointer rounded transition-all appearance-none bg-[#FAF6EF] border border-[#E9D6B2] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none"
                                            />
                                            <svg
                                                className="absolute w-3 h-3 text-[#F3E6CF] pointer-events-none left-1 top-1 hidden peer-checked:block"
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
                                            <input required
                                                id="consent"
                                                type="checkbox"

                                                checked={form.agreePrivacy}
                                                onChange={(e) =>
                                                    setForm({ ...form, agreePrivacy: e.target.checked })
                                                }
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
                                        onClick={async () => {
                                            const isValid = await validateStep1();
                                            if (isValid) {
                                                setStep(2);
                                            }

                                        }}
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        Continue
                                    </button>
                                )}

                                {step === 2 && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (validateStep2()) {
                                                setStep(3);
                                            }
                                        }}
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        Continue
                                    </button>
                                )}

                                {step === 3 && (
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-3 hover:bg-black transition text-center"
                                    >
                                        {loading ? "Creating Account..." : "create account"}

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
