import { Cormorant_Garamond, Jost } from "next/font/google";
import Link from "next/link";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["500"],
    style: ["normal", "italic"],
});
const jost = Jost({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});
const cards = [
    { num: "+$2B", text: "Funding Facilitated" },
    { num: "3", text: "core services areas" },
    { num: "100%", text: "privacy compliant" },
]
const services = [
    {
        id: "01",
        category: "FINANCE",
        title: "Home & Development Loans",
        description: "Residential purchase, refinance, or property development financing structured around your goals.",
        linkText: "EXPLORE FINANCE",
    },
    {
        id: "02",
        category: "PROJECTS",
        title: "Development Partnership",
        description: "Joint ventures and partnership capital for developers bringing ambitious projects to life.",
        linkText: "EXPLORE PARTNERSHIP",
    },
    {
        id: "03",
        category: "STRATEGY",
        title: "International Development",
        description: "Cross-border financing and strategic advisory for projects operating at an international scale.",
        linkText: "EXPLORE INTERNATIONAL",
    }
];
const points = [
    {
        title: "TRUST FIRST",
        description: "Every engagement begins with absolute transparency. Our clients know exactly where their capital goes and why."
    },
    {
        title: "BUILT FOR PROFESSIONALS",
        description: "We serve developers, finance professionals, and infrastructure leaders — not the general market."
    },
    {
        title: "LONG-TERM THINKING",
        description: "We don't chase short-term wins. We build value that compounds over time."
    }
];
const Statesection = () => {
    return (
        <>
            <section className="w-full bg-[#2D0A0A] py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-56 border-b border-[#4A1D1D] pb-2">
                                <h2 className={`${cormorant.className} text-[#E5D5C5] text-4xl md:text-6xl font-medium leading-17.5 tracking-normal`}>
                                    {card.num}
                                </h2>
                            </div>
                            <p className="text-[#E5D5C5]  font-sans tracking-[0.15em] mt-6 uppercase">{card.text}</p>
                        </div>

                    ))}

                </div>
            </section>
            <section className="w-full bg-[#F3E6CF] py-20 px-6 md:px-12 lg:px-50 text-[#2D0A0A]">
                <div className="flex flex-col md:flex-row justify-between items-baseline  pb-8 mb-16">
                    <h2
                        className={`${cormorant.className} text-[38px] md:text-[65px] leading-tight md:leading-17.5 font-medium tracking-[-0.02em] text-[#4A1F1F]`}
                    >
                        What we offer
                    </h2>
                    <p
                        className={`${jost.className} max-w-md text-[20px] font-normal leading-[100%] tracking-normal text-center`}>
                        Select a service below to explore your options and submit an
                        application tailored to your needs.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {services.map((service, index) => (
                        <div

                            key={service.id}
                            className={`flex flex-col pt-4 pb-12 md:px-8 border-[#a08f71]
                            ${index !== services.length - 1 ? 'border-b' : ''}
                            md:border-b-0
                            ${index !== 0 ? 'md:border-l' : ''}`}
                        >
                            <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-400 font-sans mb-6">
                                <span>{service.id} — {service.category}</span>
                            </div>
                            <h3 className={` ${cormorant.className} text-3xl md:text-4xl font-serif leading-tight mb-8 min-h-20`}>
                                {service.title}
                            </h3>

                            <p className={`${jost.className}text-[#7B5850] leading-relaxed mb-10 grow font-normal`}>
                                {service.description}
                            </p>
                            <Link
                                href="#"
                                className="text-[11px] w-32 font-bold tracking-[0.15em] flex items-center hover:opacity-70 transition-opacity"
                            >
                                {service.linkText} →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="w-full  bg-[#050505] py-24 px-6 md:px-12 lg:px-40 text-[#E5D5C5] overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
                    <div className="relative">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-8 h-0.5 bg-gray-600"></div>
                            <span className="text-[12px] tracking-[0.2em] text-gray-400 uppercase font-sans">
                                Our Philosophy
                            </span>
                        </div>
                        <p
                            className={`${cormorant.className} text-[50px] leading-13.5 font-medium italic tracking-[-0.02em] text-white`}
                        >
                            "Creating legacy through precision, partnership, and long-term vision."
                        </p>
                    </div>
                    <div className="space-y-12 lg:pl-20 border-l border-gray-800 lg:border-none">
                        {points.map((point, index) => (
                            <div key={index} className="relative pl-6 lg:pl-0">
                                <div className="absolute -left-3 top-0 w-0.5 h-full bg-red-900/30 hidden lg:block"></div>

                                <h4 className="text-xs font-bold tracking-[0.2em] mb-3 font-sans opacity-90">
                                    {point.title}
                                </h4>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans max-w-sm">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <section className="w-full bg-[#3B0D0D] py-16 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <h2
                        className={`${cormorant.className} text-[48px] leading-13.5 font-medium tracking-[-0.02em] text-white`}
                    >
                        Ready to take your <span className="italic ">next <br /> step?</span>
                    </h2>
                    <button className="bg-[#F2E8D9] text-[#2D0A0A] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-white transition-colors duration-300 whitespace-nowrap">
                        Start Your Application
                    </button>
                </div>
            </section>
        </>

    );
};

export default Statesection;