"use client"

import Applications from "@/components/Applications";
import Dashboard from "@/components/Dashboard";
import Documents from "@/components/Documents";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DashboardIcon from "@/public/icons/material-symbols-light_dashboard-outline.svg";
import SettingIcon from "@/public/icons/settings.svg";
import FileIcon from "@/public/icons/ph_files-light.svg";
import SignoutIcon from "@/public/icons/signout.svg";

const ClientDashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");

    return (
        <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FAF6EF]">
            <aside className="w-full lg:w-85 md:w-70 md:h-screen bg-[#3B0D0D]  flex flex-col justify-between shrink-0 border-b md:border-b-0 md:border-r border-[#E9D6B2]/20">
                <div>
                    <Link href="/" className="flex items-center gap-2 md:gap-3 p-6">
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
                    </Link>
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
                            className={`w-full px-6 md:px-8 py-4 group flex items-center gap-2 text-[#977F7F] hover:text-[#F3E6CF] transition-colors
                            ${activePage === "dashboard"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <span><DashboardIcon /></span>
                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                Dashboard
                            </span>
                        </button>
                        <button
                            onClick={() => setActivePage("applications")}
                            className={`w-full px-6 md:px-8 py-4 group flex items-center gap-2 text-[#977F7F] hover:text-[#F3E6CF] transition-colors
                            ${activePage === "applications"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <span><SettingIcon/></span>
                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                My Applications
                            </span>
                        </button>
                        <button
                            onClick={() => setActivePage("documents")}
                            className={`w-full px-6 md:px-8 py-4 group flex items-center gap-2 text-[#977F7F] hover:text-[#F3E6CF] transition-colors
                            ${activePage === "documents"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"
                                }`}
                        >
                            <span><FileIcon/></span>

                            <span className="font-jost text-[16px] font-normal tracking-wide">
                                Documents
                            </span>
                        </button>

                    </nav>
                </div>
                <div className="p-6 md:p-8 lg:ml-7  text-center">
                    <button className="flex items-center text-end gap-3 px-4 py-3 border border-[#E9D6B2]/30  bg-transparent text-[#7C5E5C] hover:text-[#F3E6CF] hover:border-[#F3E6CF]/40 transition-all duration-200 group">
                        <span><SignoutIcon/></span>
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