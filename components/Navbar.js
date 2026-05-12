"use client"

import Image from "next/image"
import { Jost } from "next/font/google";
import { useState } from "react";

const jost = Jost({
    subsets: ["latin"],
    weight: ["500", "400"],
});

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="bg-[#F3E6CF]">
                <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
                    <div className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/images/icon 1.png"
                            width={40}
                            height={40}
                            alt="icon"
                            className="h-auto w-8 md:w-12"
                        />
                        <h1 className={`${jost.className} font-medium text-lg md:text-[23.69px] leading-none tracking-tight`}>
                            MONTOYA ROE
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                className={`${jost.className} uppercase text-[14px] leading-none font-normal px-6 py-3 bg-[#400505] text-white hover:bg-opacity-90 transition-all`}
                            >
                                Apply Now
                            </button>
                            <button
                                className={`${jost.className} uppercase text-[14px] leading-none font-normal px-6 py-3 text-[#400505] hover:bg-[#400505] hover:text-white transition-all`}
                            >
                                Login
                            </button>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-2 text-2xl text-[#400505] md:ml-2 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="absolute right-4 mt-3 w-48 bg-white shadow-lg border border-gray-200 flex flex-col md:hidden z-50">
                        <button
                            className={`${jost.className} uppercase text-[14px] text-left px-4 py-3 bg-[#400505] text-white`}
                        >
                            Apply Now
                        </button>

                        <button
                            className={`${jost.className} uppercase text-[14px] text-left px-4 py-3 text-[#400505] hover:bg-[#400505] hover:text-white transition-all`}
                        >
                            Login
                        </button>
                    </div>
                )}
            </nav>
            <hr className="border-[#400505] opacity-10" />
        </>
    )
}