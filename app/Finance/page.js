import SmalFooter from '@/components/SmalFooter';
import { Play, Check } from 'lucide-react';
const items = [
    {
        title: "2 PRODUCTS",
        desc: "Home Loan · Development Loan",
    },
    {
        title: "Fast Turnaround",
        desc: "Applications reviewed within 48hrs",
    },
    {
        title: "SSL Secured",
        desc: "GDPR & Australian Privacy Compliant",
    },
];

const Finance = () => {

    return (
        <>
            <hr className='text-[#E8D5B0]' />
            <div className="min-h-screen bg-[#F3E6CF]  py-16  text-[#3D1A1A]">
                <p className="font-jost text-[14px] font-light leading-[100%] tracking-normal text-center text-[#8C7B6B] ">
                    Montoya Roe › Finance
                </p>
                <h1 className="font-cormorant text-[68px] font-medium leading-17.5 tracking-[-0.02em] text-center mb-13">
                    Finance <span className="italic">Services.</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 max-w-8xl mx-auto ">
                    <div className="relative aspect-square lg:aspect-auto bg-[#3B0D0D] flex flex-col items-center justify-center group cursor-pointer">
                        <div className="w-16 h-16 border border-white/40 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Play fill="white" className="ml-1" size={24} />
                        </div>
                        <p className="font-jost text-[16px] font-normal leading-[100%] tracking-normal text-center text-[#93776B] uppercase mt-3">
                            WATCH EXPLAINER VIDEO
                        </p>
                    </div>
                    <div className="p-8 md:p-16 flex flex-col justify-center space-y-10">
                        <section>
                            <p className="font-jost text-[14px] font-light leading-[100%] tracking-normal uppercase text-[#8C7B6B]">
                                HOW IT WORKS
                            </p>
                            <p className="w-full max-w-134.25 h-auto md:h-19 font-jost text-[16px] font-normal leading-6 my-4 tracking-normal text-[#7B5850]">
                                Whether you're purchasing your first home or funding a large-scale development, we structure the right loan around your goals — not the other way around.
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Simple online application — no branch visit required",
                                    "Secure document upload for all supporting materials",
                                    "Dedicated review within 48 business hours",
                                    "Track your application status via your client portal"
                                ].map((text, idx) => (
                                    <li key={idx} className="font-jost text-[16px] font-normal leading-[100%] tracking-normal flex gap-2 text-[#7B5850]">
                                        <Check size={18} className="mt-0.5 opacity-70 " />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <div className="grid gap-10">
                            {items.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <div className="w-px h-14 bg-[#E9D6B2]"></div>

                                    <div>
                                        <h3 className="font-cormorant text-2xl font-normal mb-1 uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="font-jost text-[16px] font-light uppercase text-[#7B5850]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
            </div>
            <SmalFooter />
        </>
    );
};

export default Finance;