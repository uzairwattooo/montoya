'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import AdminOne from '@/components/AdminOne';
import AdminAll from '@/components/AdminAll';
import AdminFinance from '@/components/AdminFinance';
import Link from 'next/link';
import DashboardIcon from "@/public/icons/material-symbols-light_dashboard-outline.svg";
import SettingIcon from "@/public/icons/settings.svg";
import FileIcon from "@/public/icons/ph_files-light.svg";
import SignoutIcon from "@/public/icons/signout.svg";

export default function AdminDashboardMean() {
    const [activePage, setActivePage] = useState("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FAF6EF] overflow-hidden">
            {sidebarOpen && (
                <div
                    onClick={() => setSidebarOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            <aside
                className={`
        fixed md:static top-0 left-0 z-50
        w-72 md:w-70 lg:w-85
        h-screen bg-[#3B0D0D]
        lg:flex flex-col justify-between
        border-r border-[#E9D6B2]/20
        transform transition-transform duration-300

        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
    `}
            >
                <div className="flex justify-end p-4 md:hidden">
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-[#F3E6CF] text-3xl"
                    >
                        ✕
                    </button>
                </div>
                <div>
                    <div className="p-4 border-b border-[#441E1E]/50">
                        <Link href="/" className="flex items-center gap-2 md:gap-3 p-3">
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
                        <p className="font-jost font-normal text-[16px] leading-none uppercase text-[#74514A] pl-5">
                            Admin Dashboard
                        </p>
                    </div>
                    <nav className="py-4 space-y-2 mt-4">
                        <div>
                            <p className="font-jost  text-[16px] uppercase font-normal text-[#593C3C] leading-[100%] tracking-normal px-4 mb-2">
                                Overview
                            </p>
                            <button
                                onClick={() => setActivePage("dashboard")}
                                className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
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
                        </div>

                        <div className="pt-1">
                            <p className="font-jost  text-[16px] uppercase font-normal text-[#593C3C] leading-[100%] tracking-normal  px-4 mb-2">
                                Applications
                            </p>
                            <button
                                onClick={() => setActivePage("allaplications")}
                                className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "allaplications"
                                        ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                        : "text-[#977F7F] hover:text-[#F3E6CF]"
                                    }`}
                            >
                                <span><SettingIcon /></span>

                                <span className="font-jost font-normal text-[18px] leading-none tracking-normal align-middle">
                                    All Applications
                                </span>
                            </button>



                            <button
                                onClick={() => setActivePage("Finance")}
                                className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "Finance"
                                        ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                        : "text-[#977F7F] hover:text-[#F3E6CF]"
                                    }`}
                            >
                                <span><FileIcon /></span>

                                <span className="font-jost text-[16px] font-normal tracking-wide">
                                    Finance
                                </span>
                            </button>

                            <button
                                onClick={() => setActivePage("development")}
                                className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "development"
                                        ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                        : "text-[#977F7F] hover:text-[#F3E6CF]"
                                    }`}
                            >
                                <span><FileIcon /></span>

                                <span className="font-jost text-[16px] font-normal tracking-wide">
                                    Development
                                </span>
                            </button>
                            <button
                                onClick={() => setActivePage("international")}
                                className={`w-full flex items-center gap-4 px-6 md:px-8 py-4 transition-all
                            ${activePage === "international"
                                        ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                        : "text-[#977F7F] hover:text-[#F3E6CF]"
                                    }`}
                            >
                                <span><FileIcon /></span>

                                <span className="font-jost text-[16px] font-normal tracking-wide">
                                    International
                                </span>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="p-6 md:p-8 lg:ml-7  text-center">
                    <button className="flex items-center text-end gap-3 px-4 py-3 border border-[#E9D6B2]/30  bg-transparent text-[#7C5E5C] hover:text-[#F3E6CF] hover:border-[#F3E6CF]/40 transition-all duration-200 group">

                        <span><SignoutIcon /></span>

                        <span className="font-jost text-[14px] font-medium uppercase tracking-widest">
                            Sign Out
                        </span>
                    </button>
                </div>
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
                <header className="bg-white border-b border-[#E9D6B2]/30 px-6 lg:px-12 py-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="md:hidden text-3xl text-[#400505]"
                        >
                            ☰
                        </button>

                        <span className="font-jost text-[24px] font-normal text-[#400505]">
                            My {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-jost text-[14px] font-light uppercase text-[#93776B] tracking-wider hidden sm:block">
                            Wednesday 29 April 2026
                        </span>
                        <div className="w-8 h-8 rounded-full bg-[#3B0D0D] text-[#F3E6CF] flex items-center justify-center font-jost text-[12px] font-medium uppercase tracking-tighter">
                            JA
                        </div>
                    </div>
                </header>
                {activePage === "dashboard" && <AdminOne />}
                {activePage === "allaplications" && <AdminAll />}
                {activePage === "Finance" && <AdminFinance />}
            </div>
        </div>
    );
}