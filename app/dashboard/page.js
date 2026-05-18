"use client"

import Applications from "@/components/Applications";
import Dashboard from "@/components/Dashboard";
import Documents from "@/components/Documents";
import Image from "next/image";
import { useState } from "react";

const ClientDashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FAF6EF]">
            <aside className="w-full lg:w-85 md:w-70 md:h-screen bg-[#3B0D0D]  flex flex-col justify-between shrink-0 border-b md:border-b-0 md:border-r border-[#E9D6B2]/20">
                <div>
                    <div className="flex items-center gap-2 md:gap-3 p-6">
                        <Image
                            src="/images/icon-2.png"
                            width={84}
                            height={82}
                            alt="icon"
                            className="h-auto w-8 md:w-12"
                        />
                        <h1 className="font-jost font-medium text-lg md:text-[23.69px] text-[#F3E6CF] leading-none tracking-tight">
                            MONTOYA ROE
                        </h1>
                    </div>
                    <div className="px-6 md:px-8 py-6">
                        <h4 className="font-jost text-[18px] font-normal text-[#F3E6CF] leading-[100%]">
                            James Anderson
                        </h4>
                        <span className="font-jost text-[14px] font-light uppercase tracking-wider text-[#977F7F] mt-1.5 block">
                            Client Portal
                        </span>
                    </div>
                    <nav className="mt-4 space-y-1">
                        <button
                            onClick={() => setActivePage("dashboard")}
                            className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "dashboard"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.75"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <rect x="3" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="3" width="7" height="7" rx="1" />
                                <rect x="14" y="14" width="7" height="7" rx="1" />
                                <rect x="3" y="14" width="7" height="7" rx="1" />
                            </svg>


                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                Dashboard
                            </span>
                        </button>
                        <button
                            onClick={() => setActivePage("applications")}
                            className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "applications"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <span className="text-[16px]">⚙</span>

                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                My Applications
                            </span>
                        </button>
                        <button
                            onClick={() => setActivePage("documents")}
                            className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "documents"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <span className="text-[16px]">🗎</span>

                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                Documents
                            </span>
                        </button>

                    </nav>
                </div>
                <div className="p-6 md:p-8 lg:ml-7  text-center">
                    <button className="flex items-center text-end gap-3 px-4 py-3 border border-[#E9D6B2]/30  bg-transparent text-[#7C5E5C] hover:text-[#F3E6CF] hover:border-[#F3E6CF]/40 transition-all duration-200 group">

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="none"
                            className="w-5 h-5 text-current transition-colors duration-200"
                        >
                            <path
                                d="M24 6H6V42H24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M33 33L42 24L33 15"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M16 24H42"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>

                        <span className="font-jost text-[14px] font-medium uppercase tracking-widest">
                            Sign Out
                        </span>
                    </button>

                </div>
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b border-[#E9D6B2]/30 px-6 lg:px-12 py-5 flex items-center justify-between">
                    <span className="font-jost text-[24px] font-normal leading-[100%] tracking-normal text-[#400505]">
                        My {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                    </span>
                    <div className="flex items-center gap-4">
                        <span className="font-jost text-[14px] font-light uppercase text-[#93776B] tracking-wider hidden sm:block">
                            Wednesday 29 April 2026
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#3B0D0D] text-[#F3E6CF] flex items-center justify-center font-jost text-[12px] font-medium uppercase tracking-tighter">
                            JA
                        </div>
                    </div>
                </header>
                {activePage === "dashboard" && <Dashboard />}
                {activePage === "applications" && <Applications />}
                {activePage === "documents" && <Documents />}
            </div>
        </div>
    );
};

export default ClientDashboard;