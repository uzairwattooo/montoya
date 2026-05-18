"use client"

import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggle = () => {
        setTimeout(() => {
            setMenuOpen((prev) => !prev)
        }, 1500)
    }
    const allowedRoutes = ["/", "/firstpage", "/development", "/international"]
    const showNavbar = allowedRoutes.some(route =>
        pathname === route || pathname.startsWith(route + "/")
    )
    if (!showNavbar) return null
    return (
        <>
            <nav className="bg-[#F3E6CF] py-2">
                <div className="container mx-auto flex items-center justify-between p-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2 md:gap-3">
                        <Image
                            src="/images/icon-1.png"
                            width={84}
                            height={82}
                            alt="icon"
                            className="h-auto w-8 md:w-12"
                        />
                        <h1 className="font-jost font-medium text-lg md:text-[23.69px] leading-none tracking-tight">
                            MONTOYA ROE
                        </h1>
                    </Link>
                    <div className="flex items-center gap-4">

                        {pathname === "/" ? (
                            <>
                                <Link href="/signup" className=" w-34.5 h-12 px-4 py-3 gap-2 bg-[#400505] text-[#F3E6CF] font-jost text-[14px] font-normal uppercase hidden md:block lg:flex items-center justify-center hover:bg-[#F3E6CF] hover:text-[#400505] transition-all">
                                    Apply now
                                </Link>
                                <Link href="/admin" className=" w-34.5 h-12 px-4 py-3 gap-2 bg-[#400505] text-[#F3E6CF] font-jost text-[14px] font-normal uppercase hidden md:block lg:flex items-center justify-center hover:bg-[#F3E6CF] hover:text-[#400505] transition-all">
                                    Admin login
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/firstpage"
                                    className={`font-jost hidden md:block lg:flex text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
        ${pathname === "/firstpage" ? "underline" : "hover:underline"}`}
                                >
                                    Finance
                                </Link>

                                <Link href="/development"
                                    className={`font-jost hidden md:block lg:flex text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
        ${pathname === "/development" ? "underline" : "hover:underline"}`}
                                >
                                    Development
                                </Link>

                                <Link href="/international"
                                    className={`font-jost hidden md:block lg:flex text-[14px] font-normal leading-[100%] uppercase text-center text-[#3B0D0D] transition-all underline-offset-4
                                        ${pathname === "/international" ? "underline" : "hover:underline"}`}
                                >
                                    International
                                </Link>
                            </>
                        )}
                        <Link href="/login" className="font-jost hidden md:block lg:flex uppercase text-[14px] leading-none font-normal px-6 py-4 text-[#3B0D0D] hover:bg-[#400505] hover:text-[#F3E6CF] transition-all">
                            Login
                        </Link>
                        <button
                            onClick={() => { setMenuOpen(!menuOpen), handleToggle() }}
                            className="p-3 text-2xl text-[#400505] md:ml-2 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="absolute right-4 mt-3 w-48 bg-[#F3E6CF] shadow-lg border border-[#400505] flex flex-col z-50">
                        {pathname === "/" ? (
                            <>
                                <Link href="/firstpage" className="px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all">Finance</Link>
                                <Link href="/development" className="px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all">Development</Link>
                                <Link href="/international" className="px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all">International</Link>
                            </>

                        ) : (
                            <>
                                <Link
                                    href="/firstpage"
                                    className="block md:hidden px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all"
                                >
                                    Finance
                                </Link>

                                <Link
                                    href="/development"
                                    className="block md:hidden px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all"
                                >
                                    Development
                                </Link>

                                <Link
                                    href="/international"
                                    className="block md:hidden px-4 py-3 text-left font-jost text-[#400505] hover:bg-[#400505] hover:text-white transition-all"
                                >
                                    International
                                </Link>
                                <Link href="/login"
                                    className="font-jost uppercase text-[14px] text-left px-4 py-3 text-[#400505] hover:bg-[#400505] hover:text-white transition-all"
                                >
                                    Login
                                </Link>
                            </>
                        )}

                    </div>
                )}
            </nav >
        </>
    )
}