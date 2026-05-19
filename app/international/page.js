import SmalFooter from "@/components/SmalFooter";
import { Check, Play } from "lucide-react";
import Link from "next/link";

export default function International() {
    const regions = [
        { id: 1, name: 'ASIA PACIFIC' },
        { id: 2, name: 'SOUTHEAST ASIA' },
        { id: 3, name: 'MIDDLE EAST' },
        { id: 4, name: 'AFRICA' },
        { id: 5, name: 'EUROPE' },
    ];
    const inputClasses = "w-full bg-[#FFF4E0] border-none p-4 mt-2.5 rounded-lg font-jost text-[14px] font-normal leading-[100%] tracking-[0] text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3D1A1A]/20 outline-none transition-all";
    const labelClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] uppercase text-[#977F7F] mb-2";
    const sectionTitleClasses = "font-cormorant text-[24px] font-[500] leading-[100%] tracking-[0] text-[#3B0D0D] mb-8";
    const sectionHeaderClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] text-[#8C7B6B] uppercase mb-2";
    return (
        <>
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
                            International <br /> <span className="italic">Development.</span>
                        </h1>
                        <p className="font-jost font-normal text-[16px] md:text-[16px] max-w-100 text-[#0A0A0A]">
                            We don't just fund projects — we partner in them. If you're a developer with vision and a site ready to move, we're the capital partner built to move with you.
                        </p>
                    </div>
                    <div className="w-full lg:w-100 text-[#8C7B6B]">

                        <div className="w-full max-w-md bg-[#F3E6CF] px-15">
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="w-8 h-px bg-[#8C7B6B]" />
                                <span className="font-jost text-[12px] font-light text-[#8C7B6B] uppercase cursor-pointer">REGIONS WE SERVE
                                </span>
                            </div>
                            <div className="flex flex-col">
                                {regions.map((region) => (
                                    <div
                                        key={region.id}
                                        className="group flex items-center justify-between py-3.5 border-b border-[#E6D5B8]/60 last:border-b-0 cursor-pointer transition-all duration-300"
                                    >
                                        <span className="text-[#3B0D0D] font-cormorant text-[20px] font-normal leading-[100%] tracking-normal uppercase transition-colors duration-300 group-hover:text-[#8D6E63]">
                                            {region.name}
                                        </span>
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#E9D6B2] transition-transform duration-300 group-hover:scale-125 group-hover:bg-[#3B0D0D]" />
                                    </div>
                                ))}
                            </div>
                        </div>
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
                            Finance without borders
                        </h1>
                        <p className="w-full max-w-134.25 h-auto md:h-19 font-jost text-[16px] font-normal leading-6 my-5 tracking-normal text-[#7B5850]">
                            Montoya Roe's International Development service is built for projects that cross borders. Whether you're a developer expanding into new markets or an international entity seeking Australian capital partnerships, we provide the structure, expertise, and funding to move forward with confidence.

                        </p>
                        <ul className="space-y-5 mt-14">
                            {[
                                "Cross-border project financing across multiple regions",
                                "Support for international partners and joint ventures",
                                "Strategic advisory alongside capital placement",
                                "Compliant with international and Australian privacy standards",
                                "Applications reviewed within 48 business hours"
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
                        Ready to go global?
                    </p>
                    <h2 className="font-cormorant text-[24px] font-normal leading-[100%] tracking-normal uppercase">
                        Submit your international development application
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
                                <div>
                                    <label className={labelClasses}>Organisation / Company Name</label>
                                    <input type="text" placeholder="Your company or entity" className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Your Role / Position</label>
                                    <input type="text" placeholder="e.g. Project Manager " className={inputClasses} />
                                </div>

                            </div>
                        </section>

                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 02</p>
                            <h2 className={sectionTitleClasses}>Project Location & Scale</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Primary Country of Project *</label>
                                    <select className={`${inputClasses} text-black/80`}>
                                        <option className="text-black">Select Country</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Additional Countries Involved</label>
                                    <input type="text" placeholder="e.g. Singapore, Malaysia " className={inputClasses} />
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Project Location / Site Address</label>
                                    <input type="text" placeholder="City, region or specific address of the project site " className={inputClasses} />
                                </div>
                                <div>
                                    <label className={labelClasses}>Project Scale *</label>
                                    <select className={`${inputClasses} text-black/80`}>
                                        <option >Select Scale</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Estimated Project Value (AUD)</label>
                                    <input type="number" placeholder="e.g. 2500000" className={inputClasses} />
                                </div>
                            </div>
                        </section>

                        <hr className="border-[#3D1A1A]/10" />
                        <section>
                            <p className={sectionHeaderClasses}>Section 03</p>
                            <h2 className={sectionTitleClasses}>Project Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className={labelClasses}>Project Type *</label>
                                    <select className={`${inputClasses} text-black/80`}>
                                        <option className="text-black">Select Type</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClasses}>Estimated Project Timeline</label>
                                    <select className={`${inputClasses} text-black/80`}>
                                        <option className="text-black">Select Timeline</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Project Location / Site Address</label>
                                    <input type="text" placeholder="Names of key international partners, co-investors or stakeholders  " className={inputClasses} />
                                </div>
                                <div className="md:col-span-2">
                                    <label className={labelClasses}>Project Description *</label>

                                    <textarea
                                        rows={8}
                                        placeholder="Describe the project in your own words - timeline, expected outcomes, any existing approvals or challenges, and what you’re looking for in a partner..."
                                        className={`${inputClasses} resize-none `}
                                    />
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
                        <Link href="/firstpage" className="w-full sm:w-[256px] h-12 bg-[#F3E6CF] px-4 py-3 flex items-center justify-center gap-2 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase text-[#3B0D0D] hover:bg-[#e7d7bb] transition-colors">
                            View Finance Page →
                        </Link> <br />
                        <Link href="/development" className="w-full sm:w-[256px] h-12 bg-[#F3E6CF] px-4 py-3 flex items-center justify-center gap-2 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase text-[#3B0D0D] hover:bg-[#e7d7bb] transition-colors">
                            View Development Page →
                        </Link>
                    </div>


                </div>
            </section>
            <SmalFooter />
        </>
    )
}
