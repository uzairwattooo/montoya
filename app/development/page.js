import SmalFooter from "@/components/SmalFooter";
import { Check, Play } from "lucide-react";
import Link from "next/link";

const items = [
    { id: 1, name: "Joint Ventures" },
    { id: 2, name: "Partnership Capital" },
    { id: 3, name: "Project Finance" },
];

export default function Development() {
    const inputClasses = "w-full bg-[#FFF4E0] border-none mt-2.5 p-4 rounded-lg font-jost text-[14px] font-normal leading-[100%] tracking-[0] text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3D1A1A]/20 outline-none transition-all";
    const labelClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] uppercase text-[#977F7F] mb-2";
    const sectionTitleClasses = "font-cormorant text-[24px] font-[500] leading-[100%] tracking-[0] text-[#3B0D0D] mb-8";
    const sectionHeaderClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] text-[#8C7B6B] uppercase mb-2";
    return (
        <>
            <hr className="text-[#E8D5B0]" />
            <section className="bg-[#F3E6CF] py-12 md:py-20">
                <div className="max-w-310 mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-10">
                    <div className="flex flex-col w-full lg:w-[60%] gap-6">

                        <div className="flex items-center gap-3 flex-wrap">
                            <span className="font-jost text-[14px] font-light text-[#8C7B6B] cursor-pointer">
                                <span className="hover-accent">Montoya Roe</span>
                                <span className="hover-accent"> › </span>
                                <span className="hover-accent">Development Partnership.</span>
                            </span>
                        </div>

                        <h1 className="font-cormorant text-[40px] md:text-[56px] lg:text-[68px] font-medium leading-17.5 tracking-[-0.02em] text-[#3B0D0D]">
                            Development <br /> P<span className="italic">artnership.</span>
                        </h1>
                        <p className="font-jost font-normal text-[16px] md:text-[16px] max-w-100 text-[#0A0A0A]">
                            We don't just fund projects — we partner in them. If you're a developer with vision and a site ready to move, we're the capital partner built to move with you.
                        </p>

                    </div>
                    <div className="w-full lg:w-100 text-[#8C7B6B]">

                        <ul className="space-y-6 lg:space-y-2">
                            {items.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex gap-3 md:gap-4 group hover-accent items-center cursor-pointer">
                                    <span className="w-2 h-2 rounded-full bg-[#E9D6B2] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#3B0D0D]"></span>
                                    <span className="font-cormorant text-[#3B0D0D] text-[24px] font-normal leading-13 tracking-normal uppercase transition-colors duration-300 group-hover:text-[#8D6E63]">
                                        {item.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-cormorant italic text-[32px] font-medium leading-10 mt-4 tracking-[-0.02em] text-[#3B0D0D]">
                            "Creating legacy through precision, partnership, and long-term vision."
                        </p>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 bg-[#F3E6CF] gap-8 lg:grid-cols-2 max-w-8xl">
                <div className="relative aspect-square lg:h-170 lg:aspect-auto bg-[#3B0D0D] flex flex-col items-center justify-center group cursor-pointer">
                    <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Play fill="white" className="ml-1" size={24} />
                    </div>
                    <p className="font-jost text-[16px] font-normal leading-[100%] tracking-normal text-center text-[#93776B] uppercase mt-3">
                        WATCH EXPLAINER VIDEO
                    </p>
                </div>
                <div className="p-8 md:p-16 flex flex-col justify-center space-y-10">
                    <section className="items-center">
                        <p className="font-jost text-[14px] font-light leading-[100%] tracking-normal uppercase text-[#8C7B6B]">
                            HOW IT WORKS
                        </p>
                        <h1 className="font-cormorant py-5 text-[32px] md:text-[40px] lg:text-[48px] font-medium leading-10 md:leading-12 lg:leading-13.5 tracking-[-0.02em] text-[#3B0D0D] max-w-89.75 mb-5">
                            Capital that works alongside you
                        </h1>
                        <p className="w-full max-w-134.25 h-auto md:h-19 font-jost text-[16px] font-normal leading-6 my-5 tracking-normal text-[#7B5850]">
                            Montoya Roe's Development Partnership program is designed for property developers who need a strategic financial partner — not just a lender. We assess your project, align on outcomes, and co-invest in delivering results.
                        </p>
                        <ul className="space-y-5 mt-8">
                            {[
                                "Suitable for subdivision, construction, or combined developments",
                                "Structured around your site, timeline, and expected returns",
                                "Fast assessment — submit your details and hear back in 48hrs",
                                "Full confidentiality — your project data is encrypted and protected",
                                "Access your application status any time via the client portal"
                            ].map((text, idx) => (
                                <li key={idx} className="font-jost text-[16px] font-normal leading-[100%] tracking-normal flex gap-2 text-[#7B5850] ">
                                    <Check size={18} className="mt-0.5 opacity-70 " />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <section className="bg-[#F3E6CF] py-18 px-8 md:px-24 lg:px-18 ">
                <div className="max-w-299.5 mx-auto">
                    <p className="font-jost text-[14px] mb-3 font-light leading-[100%] tracking-normal uppercase">
                        Ready to partner?
                    </p>
                    <h2 className="font-cormorant text-[24px] font-normal leading-[100%] tracking-normal uppercase">
                        Submit your partnership application
                    </h2>
                </div>

            </section>

            <div className="bg-[#F2E8D5] min-h-screen px-4 md:px-0">
                <div className="max-w-299.5 mx-auto">
                    <header className="bg-[#2D0A0A] text-white py-6 md:py-8 px-4 sm:px-6 w-full">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

                            <h2 className="font-cormorant italic text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-tight md:leading-17.5 text-[#F3E6CF]">
                                Development Partnership Application
                            </h2>

                            <p className="font-jost text-[14px] sm:text-[16px] md:text-[20px] font-light leading-normal md:leading-7.5 tracking-normal uppercase text-[#93776B]">
                                Secure · Encrypted · GDPR Compliant
                            </p>

                        </div>
                    </header>
                </div>

                <main className="bg-white mb-10 shadow-sm p-8 md:p-16 lg:p-16 text-[#3D1A1A] w-full max-w-299.5 mx-auto">
                    <form className="space-y-16">
                        <section>
                            <p className={sectionHeaderClasses}>Section 01</p>
                            <h2 className={sectionTitleClasses}>Applicant Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Full Name *</label>
                                    <input type="password" placeholder="e.g. James Anderson" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Email Address *</label>
                                    <input type="email" placeholder="james@example.com" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Phone Number *</label>
                                    <input type="tel" placeholder="+61 400 000 000" className={inputClasses} />
                                </div>

                            </div>
                        </section>

                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 02</p>
                            <h2 className={sectionTitleClasses}>Site & Development Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Site Address *</label>
                                    <input type="text" placeholder="Full address of the development site" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Development Type *</label>
                                    <select className={`${inputClasses} text-black/80`}>
                                        <option>Select status</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Zoning</label>
                                    <input type="text" placeholder="e.g. R20, R60, R80 " className={inputClasses} />
                                </div>
                            </div>
                        </section>

                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 03</p>
                            <h2 className={sectionTitleClasses}>Financial Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Purchase Price / Current Value (AUD) *
                                    </label>
                                    <input type="number" placeholder="e.g. 1200000" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Current Debt on Property (AUD)
                                    </label>
                                    <input type="number" placeholder="e.g. 400000" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Expected Construction Costs (AUD) *</label>
                                    <input type="number" placeholder="e.g. 850000" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Expected Total Sales Price (AUD) *</label>
                                    <input type="number" placeholder="e.g. 2800000" className={inputClasses} />
                                </div>

                            </div>
                        </section>
                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 04</p>
                            <h2 className={sectionTitleClasses}>Supporting Documents</h2>

                            <label className="block border border-dashed border-[#3D1A1A]/10 bg-[#FAF6EF] p-12 text-center cursor-pointer">
                                <input type="file" className="hidden" multiple />
                                <svg
                                    className="mx-auto mb-4 opacity-30"
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#3D1A1A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 16V4" />
                                    <path d="M8 8l4-4 4 4" />
                                </svg>
                                <p className="font-jost text-[14px] font-normal text-[#8C7B6B] uppercase mb-3">
                                    Upload Documents
                                </p>
                                <p className="font-jost text-[14px] font-light text-[#8C7B6B] uppercase">
                                    Proof of Income · ID · Bank Statements — PDF, JPG, <br /> PNG accepted · Max 20MB each
                                </p>
                            </label>
                        </section>
                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 05</p>
                            <h2 className={sectionTitleClasses}>Additional Information</h2>
                            <div className="space-y-6">
                                <div>
                                    <label className={labelClasses}>Tell us about your project</label>
                                    <textarea rows={8} className={`${inputClasses} mt-3 rounded-lg`} placeholder="Describe the project in your own words - timeline, expected outcomes, any existing approvals or challenges, and what you’re looking for in a partner..."></textarea>
                                </div>
                                <label className="flex items-start gap-4 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className=" mt-1 min-w-11 h-10 appearance-none border border-[#E9D6B2] bg-[#FAF6EF] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] relative checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                                    />

                                    <span className="font-jost text-[14px] sm:text-[16px] font-light leading-6 tracking-normal uppercase text-[#B4B4B4]">
                                        I confirm that the information provided is accurate to the best of my knowledge, and I consent to Montoya Roe reviewing and assessing my application in accordance with the Australian Privacy Act and GDPR guidelines.

                                    </span>

                                </label>
                            </div>
                        </section>
                        <div className="flex flex-col md:flex-row  gap-18 pt-10">
                            <button className="w-full sm:w-auto bg-[#2D0A0A] text-white px-10 sm:px-20 md:px-32 lg:px-52 py-4 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase hover:bg-black transition-colors">
                                Submit Application
                            </button>
                            <p className="font-jost text-[14px] font-light leading-5 tracking-normal uppercase text-[#B2A79D] text-start">
                                Protected by SSL encryption. <br /> Your data is never shared with third parties.
                            </p>
                        </div>
                    </form>
                </main>
            </div>
            <section className="w-full bg-[#3B0D0D] py-10 px-6 md:px-12 lg:px-24">
                <div className="max-w-6xl flex justify-between flex-col py-18 md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
                    <h1 className="font-cormorant text-[48px] font-medium leading-13.5 tracking-[-0.02em] text-[#F3E6CF]">
                        Interested in our other <br /> <span className="italic">finance services?</span>
                    </h1>
                    <div>
                        <Link href="/finance" className="w-full sm:w-[256px] h-12 bg-[#F3E6CF] px-4 py-3 flex items-center justify-center gap-2 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase text-[#3B0D0D] hover:bg-[#e7d7bb] transition-colors">
                            View Finance Page →
                        </Link> <br />
                        <Link href="/international" className="w-full sm:w-[256px] h-12 bg-[#F3E6CF] px-4 py-3 flex items-center justify-center gap-2 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase text-[#3B0D0D] hover:bg-[#e7d7bb] transition-colors">
                            View International Page →
                        </Link>
                    </div>


                </div>
            </section>
            <SmalFooter />
        </>
    )
}
