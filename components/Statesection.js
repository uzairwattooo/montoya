import Link from "next/link";

const cards = [
    { num: "+$2B", text: "Funding Facilitated" },
    { num: "3", text: "core services areas" },
    { num: "100%", text: "privacy compliant" },
];

const services = [
    {
        id: "01",
        category: "FINANCE",
        title: "Home & Development Loans",
        description:
            "Residential purchase, refinance, or property development financing structured around your goals.",
        linkText: "EXPLORE FINANCE",
    },
    {
        id: "02",
        category: "PROJECTS",
        title: "Development Partnership",
        description:
            "Joint ventures and partnership capital for developers bringing ambitious projects to life.",
        linkText: "EXPLORE PARTNERSHIP",
    },
    {
        id: "03",
        category: "STRATEGY",
        title: "International Development",
        description:
            "Cross-border financing and strategic advisory for projects operating at an international scale.",
        linkText: "EXPLORE INTERNATIONAL",
    }
];

const points = [
    {
        title: "TRUST FIRST",
        description:
            "Every engagement begins with absolute transparency. Our clients know exactly where their capital goes and why."
    },
    {
        title: "BUILT FOR PROFESSIONALS",
        description:
            "We serve developers, finance professionals, and infrastructure leaders — not the general market."
    },
    {
        title: "LONG-TERM THINKING",
        description:
            "We don't chase short-term wins. We build value that compounds over time."
    }
];

const Statesection = () => {
    return (
        <>
            <section className="w-full bg-[#2D0A0A] py-12 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center">

                            <div className="w-56 border-b border-[#581818] pb-2">
                                <h2 className="font-cormorant text-[#F3E6CF] text-center text-4xl md:text-6xl font-medium md:text-start">
                                    {card.num}
                                </h2>
                            </div>
                            <p className="font-jost text-[#F3E6CF] text-xs tracking-[0.15em] mt-6 uppercase">
                                {card.text}
                            </p>

                        </div>
                    ))}
                </div>
            </section>

            <section className="w-full bg-[#F3E6CF] py-20 px-6 md:px-12 lg:px-50 text-[#2D0A0A]">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline border-b border-[#F1E3CA] pb-8 mb-20 gap-6">

                    <h2 className="font-cormorant text-[36px] sm:text-[44px] md:text-[54px] leading-tight md:leading-17.5 tracking-[-0.02em] font-medium text-[#4A1F1F]">
                        What we <span className="italic">offer</span>
                    </h2>

                    <p className="w-full md:w-118.75 font-jost text-[16px] md:text-[20px] font-normal leading-normal md:leading-[100%] tracking-normal text-left md:text-center opacity-100">
                        Select a service below to explore your options and submit an application tailored to your needs.
                    </p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`flex flex-col pt-4 pb-12 md:px-8 border-[#E9D6B2]
                            ${index !== services.length - 1 ? 'border-b' : ''}
                            md:border-b-0
                            ${index !== 0 ? 'md:border-l' : ''}`}
                        >

                            <div className="font-jost text-[12px] text-[#8C7B6B] mb-6 hover-accent uppercase cursor-pointer">
                                {service.id} — {service.category}
                            </div>

                            <h3 className="font-cormorant text-[32px] font-medium leading-9 tracking-[-0.02em] text-[#3B0D0D]">
                                {service.title}
                            </h3>

                            <p className="font-jost text-[18px] font-normal leading-6.5 tracking-normal text-[#7B5850] py-6">
                                {service.description}
                            </p>

                            <Link
                                href="#"
                                className="w-31 h-10 opacity-100 font-jost text-[14px] font-normal leading-5 tracking-normal uppercase text-[#3B0D0D] flex items-center"
                            >
                                {service.linkText} →
                            </Link>

                        </div>
                    ))}

                </div>

            </section>

            <section className="w-full bg-[#0A0A0A] py-24 px-6 md:px-12 lg:px-40 text-[#E5D5C5]">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="w-8.25 border-t-[0.4px] border-[#8C7B6B]"></div>

                            <p className="font-jost text-[14px] font-light leading-[100%] tracking-normal text-center uppercase text-[#8C7B6B]">
                                Our Philosophy
                            </p>
                        </div>

                        <h2 className="font-cormorant text-[48px] font-medium italic leading-13.5 tracking-[-0.02em] text-[#F3E6CF]">
                            “Creating legacy through precision, partnership, and long-term vision.”
                        </h2>
                    </div>

                    <div className="space-y-12 lg:pl-40">
                        {points.map((point, index) => (
                            <div key={index}>
                                <div className="relative pl-5 ">
                                    <div className="absolute -left-px top-0 w-px h-24 bg-[#341212]"></div>
                                    <h3 className="w-61.5 h-5.5 font-jost text-[16px] font-normal leading-[100%] tracking-normal uppercase text-[#F3E6CF]">
                                        {point.title}
                                    </h3>
                                    <p className="w-61.5 h-24.25 font-jost text-[16px] font-normal leading-6 tracking-normal text-[#797267]">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            <section className="w-full bg-[#3B0D0D] py-10 px-6 md:px-12 lg:px-24">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10"> z
                    <h2 className="text-center md:text-left font-cormorant text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-tight tracking-[-0.02em] text-[#F3E6CF]">
                        Ready to take your{" "}
                        <span className="italic">
                            next <br className="hidden md:block" /> step?
                        </span>
                    </h2>
                    <button className="w-full md:w-auto font-jost cursor-pointer bg-[#F3E6CF] text-[#3B0D0D] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#d8d0b8] transition-colors">
                        Start Your Application
                    </button>

                </div>
            </section>
        </>
    );
};

export default Statesection;