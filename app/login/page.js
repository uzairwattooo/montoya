
import Image from "next/image";
import Link from "next/link";



const LoginPage = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
            <div className="bg-[#3B0D0D] text-[#F9F6F0] p-8 md:p-16 lg:p-24 flex flex-col justify-between min-h-[40vh] md:min-h-screen">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 md:gap-3">
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
                    </div>
                </div>
                <div className="max-w-93.25 my-auto pt-12 md:pt-0">
                    <h1 className="font-cormorant text-[64px] font-medium leading-16 tracking-[-0.02em] text-[#F3E6CF]">
                        Your <span className="italic">client</span>  <br />
                        <span className="italic">portal</span> awaits.
                    </h1>

                    <p className="font-jost text-[18px] py-6 font-normal leading-[100%] tracking-normal text-[#93776B]">
                        Track your applications, access uploaded documents, and stay updated — all in one secure place.
                    </p>
                    <ul className="list-disc pl-6  font-jost text-[18px] font-normal leading-10 tracking-normal text-[#93776B]">
                        <li>View all submitted applications</li>
                        <li>Track status by service type and date</li>
                        <li>Access your uploaded documents anytime</li>
                        <li>Secure, private, and GDPR compliant</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center justify-center p-8 md:p-16 lg:p-24 bg-white">
                <div className="w-full max-w-md flex flex-col items-center">
                    <div className="text-center mb-10">
                        <h1 className="font-cormorant text-[54px] font-semibold leading-[100%] tracking-normal text-center text-[#3B0D0D]">
                            Welcome back
                        </h1>
                        <p className="font-jost text-[16px] py-3 font-normal leading-[100%] tracking-normal text-center text-[#977F7F]">
                            Don't have an account?{" "}

                            <Link
                                href="/signup"
                                className="font-jost text-[16px] font-normal leading-[100%] tracking-normal text-center text-[#977F7F] underline underline-offset-0 hover:opacity-80 transition-opacity"
                            >
                                Sign up here
                            </Link>
                        </p>
                    </div>
                    <form className="w-full space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="font-jost text-[14px] font-light leading-[100%] tracking-normal uppercase text-[#977F7F]">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="your@example.com"
                                className="w-full font-jost text-[14px] font-normal bg-[#FFF4E0] border border-transparent rounded-md px-4 py-3.5  text-[#ACA79D] placeholder-[#ACA79D]] focus:outline-none focus:border-[#3B0D0D]/20 transition-colors"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-jost text-[14px] font-light leading-[100%] tracking-normal uppercase text-[#977F7F]">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="••••••••••••"
                                className="w-full bg-[#FFF4E0] border border-transparent rounded-sm px-4 py-3.5 text-sm text-[#ACA79D] placeholder-gray-400 focus:outline-none focus:border-[#3B0D0D]/20 transition-colors"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#3B0D0D] text-[#FFF5EB] py-4 rounded-sm text-[14px] uppercase tracking-normal font-normal font-jost hover:bg-[#421A1B] transition-colors duration-300 mt-2 shadow-sm"
                        >
                            Sign In to Portal
                        </button>
                    </form>

                    <div className="w-full flex items-center justify-center gap-4 my-12">
                        <div className="h-px bg-[#E9D6B2] flex-1" />
                        <span className="font-jost text-gray-400 font-normal lowercase">or</span>
                        <div className="h-px bg-[#E9D6B2] flex-1" />
                    </div>

                    <p className="font-jost text-[16px] font-normal leading-[100%] tracking-normal text-center text-[#977F7F]">
                        New to Montoya Roe?{" "}
                        <Link href="/signup" className="font-jost text-[16px] font-normal leading-[100%] tracking-normal text-center text-[#3B0D0D] underline hover:opacity-80 transition-opacity">
                            Create an account
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default LoginPage;