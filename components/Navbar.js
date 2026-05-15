"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#F3E6CF] py-2">
                <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
                    <div className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/images/icon 1.png"
                            width={84}
                            height={82}
                            alt="icon"
                            className="h-auto w-8 md:w-12"
                        />
                        <h1 className="font-jost font-medium text-lg md:text-[23.69px] leading-none tracking-tight">
                            MONTOYA ROE
                        </h1>
                    </div>
                    <div className="hidden md:flex items-center gap-4">

                        {pathname === "/" ? (
                            <>
                                <button className="w-34.5 h-12 px-4 py-3 gap-2 bg-[#400505] text-[#F3E6CF] font-jost text-[14px] font-normal uppercase flex items-center justify-center hover:bg-[#F3E6CF] hover:text-[#400505] transition-all">
                                    Apply now
                                </button>
                                <Link
                                    href="/Finance"
                                    className="w-34.5 h-12 px-4 py-3 gap-2 bg-[#400505] text-[#F3E6CF] font-jost text-[14px] font-normal uppercase flex items-center justify-center hover:bg-[#F3E6CF] hover:text-[#400505] transition-all"
                                >
                                    Finance
                                </Link>
                            </>
                        ) : (
                            <>
                                <button
                                    className={`font-jost text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
        ${pathname === "/Finance" ? "underline" : "hover:underline"}`}
                                >
                                    Finance
                                </button>

                                <button
                                    className={`font-jost text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
        ${pathname === "/development" ? "underline" : "hover:underline"}`}
                                >
                                    Development
                                </button>

                                <button
                                    className={`font-jost text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
                                        ${pathname === "/international" ? "underline" : "hover:underline"}`}
                                >
                                    International
                                </button>
                            </>
                        )}
                        <button className="font-jost uppercase text-[14px] leading-none font-normal px-6 py-4 text-[#3B0D0D] hover:bg-[#400505] hover:text-[#F3E6CF] transition-all">
                            Login
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-3 text-2xl text-[#400505] md:ml-2 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="absolute right-4 mt-3 w-48 bg-white shadow-lg border border-gray-200 flex flex-col z-50">
                        {pathname === "/" ? (
                            <button className="font-jost uppercase text-[14px] text-left px-4 py-3 bg-[#400505] text-white">
                                Apply Now
                            </button>
                        ) : (
                            <>
                                <button className="px-4 py-3 text-left">Finance</button>
                                <button className="px-4 py-3 text-left">Development</button>
                                <button className="px-4 py-3 text-left">International</button>
                            </>
                        )}

                        <button
                            className="font-jost uppercase text-[14px] text-left px-4 py-3 text-[#400505] hover:bg-[#400505] hover:text-white transition-all"
                        >
                            Login
                        </button>
                    </div>
                )}
            </nav >
        </>
    )
}