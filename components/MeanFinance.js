// "use client"

// import React, { useState } from 'react'

// export default function MeanFinance() {
//     const [selected, setSelected] = useState('home');


//     const inputClasses = "w-full bg-[#FFF4E0] border-none rounded-lg mt-2.5 p-4 font-jost text-[14px] font-normal leading-[100%] tracking-[0] text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3D1A1A]/20 outline-none transition-all";
//     const labelClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] uppercase text-[#977F7F] mb-2";
//     const sectionTitleClasses = "font-cormorant text-[24px] font-[500] leading-[100%] tracking-[0] text-[#3B0D0D] mb-8";
//     const sectionHeaderClasses = "font-jost text-[14px] font-[300] leading-[100%] tracking-[0] text-[#8C7B6B] uppercase mb-2";
//     return (
//         <div>
//             <section className="bg-[#F3E6CF] py-12 px-8 md:px-24 lg:px-18">
//                 <div className="max-w-299.5 mx-auto">
//                     <h2 className="font-jost font-normal mb-5 text-[20px] leading-[100%] uppercase align-middle">
//                         Select your loan type to begin
//                     </h2>
//                     <div className="relative border border-[#E9D6B2] h-26 flex items-center p-4">
//                         <div className="grid grid-cols-2 w-full gap-4.5 items-center">
//                             <button
//                                 onClick={() => setSelected('home')}
//                                 className={`relative h-20.5 rounded-lg transition-all duration-300 flex flex-col justify-center px-8 text-left group
//                 ${selected === 'home'
//                                         ? 'bg-[#30302E] text-white shadow-lg'
//                                         : 'bg-transparent text-[#797267]/40 hover:bg-[#E8DEC9]'
//                                     }`}>
//                                 <span className={`font-normal text-[14px] mb-2 block font-jost  ${selected === 'home' ? 'opacity-50' : 'opacity-30'}`}>
//                                     01
//                                 </span>
//                                 <span className="font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase">
//                                     Home Loan
//                                 </span>
//                             </button>
//                             <button
//                                 onClick={() => setSelected('dev')}
//                                 className={`relative h-20.5 rounded-lg transition-all duration-300 flex flex-col justify-center px-8 text-left group
//                 ${selected === 'dev'
//                                         ? 'bg-[#2D2D2D] text-white shadow-lg'
//                                         : 'bg-transparent text-[#3D1A1A]/40 hover:bg-[#E8DEC9]'
//                                     }`}>
//                                 <span className={`text-[14px] font-normal mb-2 block font-jost ${selected === 'dev' ? 'opacity-50' : 'opacity-30'}`}>
//                                     02
//                                 </span>
//                                 <span className="font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase">
//                                     Development Loan
//                                 </span>
//                             </button>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {selected === "home" &&
//                 <div className="bg-[#F2E8D5] min-h-screen px-4 md:px-0">
//                     <div className="max-w-299.5 mx-auto">
//                         <header className="bg-[#2D0A0A] text-white py-6 md:py-8 px-4 sm:px-6 w-full">
//                             <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

//                                 <h2 className="font-cormorant italic text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-tight md:leading-17.5 text-[#F3E6CF]">
//                                     Home Loan Application
//                                 </h2>

//                                 <p className="font-jost text-[14px] sm:text-[16px] md:text-[20px] font-light leading-normal md:leading-7.5 tracking-normal uppercase text-[#93776B]">
//                                     Secure · Encrypted · GDPR Compliant
//                                 </p>

//                             </div>
//                         </header>
//                     </div>

//                     <main className="bg-white mb-10 shadow-sm p-8 md:p-16 lg:p-16 text-[#3D1A1A] w-full max-w-299.5 mx-auto">
//                         <form className="space-y-16">
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 01</p>
//                                 <h2 className={sectionTitleClasses}>Personal Information</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="md:col-span-2">
//                                         <label className={labelClasses}>Full Name *</label>
//                                         <input type="text" placeholder="e.g. James Anderson" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Email Address *</label>
//                                         <input type="email" placeholder="james@example.com" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Phone Number *</label>
//                                         <input type="tel" placeholder="+61 400 000 000" className={inputClasses} />
//                                     </div>
//                                     <div className="md:col-span-2">
//                                         <label className={labelClasses}>Residential Address *</label>
//                                         <input type="text" placeholder="Full street address including suburb and postcode" className={inputClasses} />
//                                     </div>
//                                 </div>
//                             </section>

//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 02</p>
//                                 <h2 className={sectionTitleClasses}>Employment & Income</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className={labelClasses}>Employment Status *</label>
//                                         <select className={`${inputClasses} text-black/80`}>
//                                             <option>Select status</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Employer Name *</label>
//                                         <input type="text" placeholder="Company or business" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Employer Contact Number</label>
//                                         <input type="tel" placeholder="+61 000 000 000" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Monthly Income (AUD) *</label>
//                                         <input type="text" placeholder="e.g. 8500" className={inputClasses} />
//                                     </div>
//                                 </div>
//                             </section>

//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 03</p>
//                                 <h2 className={sectionTitleClasses}>Loan Details</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className={labelClasses}>Requested Loan Amount (AUD) *</label>
//                                         <input type="text" placeholder="e.g. 650000" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Purpose of Loan *</label>
//                                         <select className={`${inputClasses} text-black/80`}>
//                                             <option>Select status</option>
//                                         </select>
//                                     </div>
//                                     <div className="md:col-span-2">
//                                         <label className={labelClasses}>Estimated Property Value (AUD) *</label>
//                                         <input type="text" placeholder="e.g. 900000" className={inputClasses} />
//                                     </div>
//                                 </div>
//                             </section>
//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 04</p>
//                                 <h2 className={sectionTitleClasses}>Supporting Documents</h2>

//                                 <label className="block border border-dashed border-[#3D1A1A]/10 bg-[#FAF6EF] p-12 text-center cursor-pointer">
//                                     <input type="file" className="hidden" multiple />
//                                     <svg
//                                         className="mx-auto mb-4 opacity-30"
//                                         width="28"
//                                         height="28"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="#3D1A1A"
//                                         strokeWidth="1.5"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M12 16V4" />
//                                         <path d="M8 8l4-4 4 4" />
//                                     </svg>
//                                     <p className="font-jost text-[14px] font-normal text-[#8C7B6B] uppercase mb-3">
//                                         Upload Documents
//                                     </p>
//                                     <p className="font-jost text-[14px] font-light text-[#8C7B6B] uppercase">
//                                         Proof of Income · ID · Bank Statements — PDF, JPG, <br /> PNG accepted · Max 20MB each
//                                     </p>
//                                 </label>
//                             </section>
//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 05</p>
//                                 <h2 className={sectionTitleClasses}>Final Details</h2>
//                                 <div className="space-y-6">
//                                     <div>
//                                         <label className={labelClasses}>Additional Comments</label>
//                                         <textarea rows={8} className={`${inputClasses} mt-3 rounded-lg`} placeholder="Any additional context about your application or situation..."></textarea>
//                                     </div>
//                                     <label className="flex items-start gap-4 cursor-pointer">

//                                         <input
//                                             type="checkbox"
//                                             className=" mt-1 min-w-11 h-10 appearance-none border border-[#E9D6B2] bg-[#FAF6EF] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] relative checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
//                                         />

//                                         <span className="font-jost text-[14px] sm:text-[16px] font-light leading-6 tracking-normal uppercase text-[#B4B4B4]">
//                                             I consent to Montoya Roe conducting a credit check as part of my loan application.
//                                             I understand this will be handled in accordance with the Australian Privacy Act and GDPR guidelines.
//                                         </span>

//                                     </label>
//                                 </div>
//                             </section>
//                             <div className="flex flex-col md:flex-row  gap-18 pt-10">
//                                 <button className="w-full sm:w-auto bg-[#2D0A0A] text-white px-10 sm:px-20 md:px-32 lg:px-52 py-4 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase hover:bg-black transition-colors">
//                                     Submit Application
//                                 </button>
//                                 <p className="font-jost text-[14px] font-light leading-5 tracking-normal uppercase text-[#B2A79D] text-start">
//                                     Protected by SSL encryption. <br /> Your data is never shared with third parties.
//                                 </p>
//                             </div>
//                         </form>
//                     </main>
//                 </div>
//             }
//             {selected === "dev" &&
//                 <div className="bg-[#F2E8D5] min-h-screen px-4 md:px-0">
//                     <div className="max-w-299.5 mx-auto">
//                         <header className="bg-[#2D0A0A] text-white py-6 md:py-8 px-4 sm:px-6 w-full">
//                             <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">

//                                 <h2 className="font-cormorant italic text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-medium leading-tight md:leading-17.5 text-[#F3E6CF]">
//                                     Development Loan Application
//                                 </h2>

//                                 <p className="font-jost text-[14px] sm:text-[16px] md:text-[20px] font-light leading-normal md:leading-7.5 tracking-normal uppercase text-[#93776B]">
//                                     Secure · Encrypted · GDPR Compliant
//                                 </p>

//                             </div>
//                         </header>
//                     </div>

//                     <main className="bg-white mb-10 shadow-sm p-8 md:p-16 lg:p-16 text-[#3D1A1A] w-full max-w-299.5 mx-auto">
//                         <form className="space-y-16">
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 01</p>
//                                 <h2 className={sectionTitleClasses}>Personal Information</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div className="md:col-span-2">
//                                         <label className={labelClasses}>Full Name *</label>
//                                         <input type="password" placeholder="e.g. James Anderson" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Email Address *</label>
//                                         <input type="email" placeholder="james@example.com" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Phone Number *</label>
//                                         <input type="tel" placeholder="+61 400 000 000" className={inputClasses} />
//                                     </div>

//                                 </div>
//                             </section>

//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 02</p>
//                                 <h2 className={sectionTitleClasses}>Site & Development Details</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                                     <div className="md:col-span-2">
//                                         <label className={labelClasses}>Site Address *</label>
//                                         <input type="text" placeholder="Full address of the development site" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Development Type *</label>
//                                         <select className={`${inputClasses} text-black/80`}>
//                                             <option>Select status</option>
//                                         </select>
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Current Zoning</label>
//                                         <input type="text" placeholder="e.g. R20, R60, R80 " className={inputClasses} />
//                                     </div>
//                                 </div>
//                             </section>

//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 03</p>
//                                 <h2 className={sectionTitleClasses}>Financial Details</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className={labelClasses}>Purchase Price / Current Value (AUD) *
//                                         </label>
//                                         <input type="number" placeholder="e.g. 1200000" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Current Debt on Property (AUD)
//                                         </label>
//                                         <input type="number" placeholder="e.g. 400000" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Expected Construction Costs (AUD) *</label>
//                                         <input type="number" placeholder="e.g. 850000" className={inputClasses} />
//                                     </div>
//                                     <div>
//                                         <label className={labelClasses}>Expected Total Sales Price (AUD) *</label>
//                                         <input type="number" placeholder="e.g. 2800000" className={inputClasses} />
//                                     </div>

//                                 </div>
//                             </section>
//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 04</p>
//                                 <h2 className={sectionTitleClasses}>Supporting Documents</h2>

//                                 <label className="block border border-dashed border-[#3D1A1A]/10 bg-[#FAF6EF] p-12 text-center cursor-pointer">
//                                     <input type="file" className="hidden" multiple />
//                                     <svg
//                                         className="mx-auto mb-4 opacity-30"
//                                         width="28"
//                                         height="28"
//                                         viewBox="0 0 24 24"
//                                         fill="none"
//                                         stroke="#3D1A1A"
//                                         strokeWidth="1.5"
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                     >
//                                         <path d="M12 16V4" />
//                                         <path d="M8 8l4-4 4 4" />
//                                     </svg>
//                                     <p className="font-jost text-[14px] font-normal text-[#8C7B6B] uppercase mb-3">
//                                         Upload Documents
//                                     </p>
//                                     <p className="font-jost text-[14px] font-light text-[#8C7B6B] uppercase">
//                                         Proof of Income · ID · Bank Statements — PDF, JPG, <br /> PNG accepted · Max 20MB each
//                                     </p>
//                                 </label>
//                             </section>
//                             <hr className="border-[#3D1A1A]/10" />
//                             <section>
//                                 <p className={sectionHeaderClasses}>Section 05</p>
//                                 <h2 className={sectionTitleClasses}>Additional Information</h2>
//                                 <div className="space-y-6">
//                                     <div>
//                                         <label className={labelClasses}>Tell us about your project</label>
//                                         <textarea rows={8} className={`${inputClasses} mt-3 rounded-lg`} placeholder="Describe the project in your own words - timeline, expected outcomes, any existing approvals or challenges, and what you’re looking for in a partner..."></textarea>
//                                     </div>
//                                     <label className="flex items-start gap-4 cursor-pointer">

//                                         <input
//                                             type="checkbox"
//                                             className=" mt-1 min-w-11 h-10 appearance-none border border-[#E9D6B2] bg-[#FAF6EF] checked:bg-[#3B0D0D] checked:border-[#3B0D0D] relative checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
//                                         />

//                                         <span className="font-jost text-[14px] sm:text-[16px] font-light leading-6 tracking-normal uppercase text-[#B4B4B4]">
//                                             I confirm that the information provided is accurate to the best of my knowledge, and I consent to Montoya Roe reviewing and assessing my application in accordance with the Australian Privacy Act and GDPR guidelines.

//                                         </span>

//                                     </label>
//                                 </div>
//                             </section>
//                             <div className="flex flex-col md:flex-row  gap-18 pt-10">
//                                 <button className="w-full sm:w-auto bg-[#2D0A0A] text-white px-10 sm:px-20 md:px-32 lg:px-52 py-4 font-jost text-[14px] font-normal leading-[100%] tracking-normal uppercase hover:bg-black transition-colors">
//                                     Submit Application
//                                 </button>
//                                 <p className="font-jost text-[14px] font-light leading-5 tracking-normal uppercase text-[#B2A79D] text-start">
//                                     Protected by SSL encryption. <br /> Your data is never shared with third parties.
//                                 </p>
//                             </div>
//                         </form>
//                     </main>
//                 </div>
//             }
//         </div>
//     )
// }
