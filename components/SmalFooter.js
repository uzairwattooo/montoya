import Link from 'next/link'
import React from 'react'

export default function SmalFooter() {
    return (
        <footer className="bg-[#0A0A0A] text-[#D9CDB8]/50 py-10 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="max-w-299.5 mx-auto">

                <div className="w-full h-px bg-[#1E1E1E] mb-8"></div>

                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 text-[11px] tracking-widest uppercase">

                    <div className="text-center lg:text-left">
                        <p className="font-['Arial'] text-[14px] sm:text-[16px] font-normal leading-6 tracking-normal text-[#44413B]">
                            © 2026 Montoya Roe. All rights reserved.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8">

                        <Link
                            href="#"
                            className="font-jost text-[14px] sm:text-[16px] font-light leading-[100%] tracking-normal normal-case hover:text-white/50 transition-colors"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="font-jost text-[14px] sm:text-[16px] font-light leading-[100%] tracking-normal normal-case hover:text-white/50 transition-colors"
                        >
                            Terms of Use
                        </Link>

                        <Link
                            href="#"
                            className="font-jost text-[14px] sm:text-[16px] font-light leading-[100%] tracking-normal normal-case hover:text-white/50 transition-colors"
                        >
                            GDPR Compliance
                        </Link>

                    </div>

                    <div className="text-center lg:text-right">
                        <Link
                            href="https://montoyaroe.com" target='__blank'
                            className="font-['Arial'] coursor-pointer text-[14px] sm:text-[16px] font-normal leading-6 tracking-normal uppercase text-[#44413B] hover:text-white/50"
                        >
                            MONTOYAROE.COM
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    )
}
