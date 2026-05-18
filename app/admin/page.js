'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function AdminAccess() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="w-full flex flex-col items-center">
            <header className="w-full bg-[#3B0D0D] text-[#F3E6CF] py-5 px-4 text-center flex flex-col items-center justify-center">
                <Link href="/" className="flex items-center gap-2 md:gap-3 p-6">
                    <Image
                        src="/images/icon-2.png"
                        width={84}
                        height={82}
                        alt="icon"
                        className="h-auto w-8 md:w-12"
                    />
                    <h1 className="font-jost font-medium text-[23.69px] md:text-[23.69px] text-[#F3E6CF] leading-none tracking-tight">
                        MONTOYA ROE
                    </h1>
                </Link>
                <h1 className="font-cormorant text-[64px] font-medium text-[#F3E6CF] leading-16 tracking-[-0.02em] mb-4">
                    Admin Access
                </h1>
                <p className="font-jost text-[18px] font-normal tracking-wider leading-[100%] text-[#93776B] mb-6">
                    Restricted — Authorised Personnel Only
                </p>
            </header>
            <main className="w-full max-w-130 px-6 mt-16 mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="block font-jost text-[14px] font-light uppercase leading-[100%] text-[#977F7F] tracking-wide">
                            Admin Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@montoyaroe.com"
                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-md font-jost text-[14px] font-normal text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block font-jost text-[14px] font-light uppercase leading-[100%] text-[#977F7F] tracking-wide">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••••••"
                            className="w-full bg-[#FFF4E0] border-none p-4 rounded-md font-jost text-[14px] text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3B0D0D]/20 outline-none transition-all"
                            required
                        />
                    </div>
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-[#3B0D0D] text-[#F3E6CF] font-jost text-[14px] uppercase font-normal py-4 px-8 rounded-none hover:bg-black transition-all duration-300 tracking-wider cursor-pointer text-center"
                        >
                            Sign In to Admin
                        </button>
                    </div>

                </form>
            </main>
            <footer className="w-full text-center py-6 px-4 mt-auto mb-10">
                <p className="font-jost text-[16px] font-normal text-[#977F7F] tracking-wide">
                    Protected by SSL · Admin access only
                </p>
                <Link href="/admin/admindashboard" className='font-jost text-[16px] font-normal text-[#977F7F] tracking-wide hover:text-blue-300'>Admin dashboard has been added temporarily for checking purposes
                </Link>
            </footer>

        </div>
    );
}