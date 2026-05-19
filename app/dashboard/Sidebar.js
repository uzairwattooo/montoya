"use client";

import Link from "next/link";
import Image from "next/image";
import DashboardIcon from "@/public/icons/material-symbols-light_dashboard-outline.svg";
import SettingIcon from "@/public/icons/settings.svg";
import FileIcon from "@/public/icons/ph_files-light.svg";
import SignoutIcon from "@/public/icons/signout.svg";

const Sidebar = ({
    activePage,
    setActivePage,
    sidebarOpen,
    setSidebarOpen,
}) => {
    return (
        <>
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
                        <h4 className="font-jost text-[18px] font-normal text-[#F3E6CF]">
                            James Anderson
                        </h4>
                        <span className="font-jost text-[14px] font-light uppercase tracking-wider text-[#977F7F] mt-1.5 block">
                            Client Portal
                        </span>
                    </div>
                    <nav className="mt-4 space-y-1">
                        <button
                            onClick={() => setActivePage("dashboard")}
                            className={`w-full px-6 md:px-8 py-4 flex items-center gap-2
                            ${activePage === "dashboard"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"}`}
                        >
                            <DashboardIcon />
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActivePage("applications")}
                            className={`w-full px-6 md:px-8 py-4 flex items-center gap-2
                            ${activePage === "applications"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"}`}
                        >
                            <SettingIcon />
                            My Applications
                        </button>
                        <button
                            onClick={() => setActivePage("documents")}
                            className={`w-full px-6 md:px-8 py-4 flex items-center gap-2
                            ${activePage === "documents"
                                    ? "bg-[#4A1515] text-[#F3E6CF] border-l-[3px] border-[#F3E6CF]"
                                    : "text-[#977F7F] hover:text-[#F3E6CF]"}`}
                        >
                            <FileIcon />
                            Documents
                        </button>
                    </nav>
                </div>
                <div className="p-6 md:p-8 text-center">
                    <button className="flex items-center gap-3 px-4 py-3 border border-[#E9D6B2]/30 text-[#7C5E5C] hover:text-[#F3E6CF]">
                        <SignoutIcon />
                        Sign Out
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;



