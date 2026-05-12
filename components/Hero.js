
import { Jost } from "next/font/google";
import { Cormorant_Garamond } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["500"],
    style: ["normal", "italic"],
});

const Hero = () => {
    return (
        <section className="w-full bg-[#EFE4D1] py-24 px-6 md:px-12 lg:px-24 text-[#2D0A0A]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-8 h-px bg-[#A39785]"></div>
                        <span className="text-[10px] tracking-[0.2em] text-[#A39785] uppercase font-sans">
                            Finance &bull; Projects &bull; Strategy
                        </span>
                    </div>
                    <p className={`${jost.className} text-sm md:text-base font-sans max-w-sm mb-5 opacity-80`}>
                        We partner with professionals across finance, development, and infrastructure to fund what matters most.
                    </p>
                    <h1 className={`${cormorant.className} text-6xl font-medium md:text-6xl lg:text-6xl italic `}>
                        Building value. <br />
                        <span className="not-italic">Shaping the future.</span>
                    </h1>
                </div>
                <div className="lg:flex lg:justify-end lg:pt-10">
                    <ul className="space-y-6">
                        <li className="group flex items-baseline gap-4 cursor-pointer">
                            <span className="text-xs font-serif italic opacity-60">01.</span>
                            <span className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl font-medium text-[#8C7B6B] italic`}>
                                Finance
                            </span>
                        </li>
                        <li className="group flex items-baseline gap-4 cursor-pointer">
                            <span className="text-xs font-serif italic opacity-60">02.</span>
                            <span className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl font-medium text-[#8C7B6B] italic`}>
                                Development
                            </span>
                        </li>
                        <li className="group flex items-baseline gap-4 cursor-pointer">
                            <span className="text-xs font-serif italic opacity-60">03.</span>
                            <span className={`${cormorant.className} text-3xl md:text-4xl lg:text-5xl font-medium text-[#8C7B6B] italic`}>
                                International
                            </span>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Hero;