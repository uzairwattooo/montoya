"use client";

const Header = ({ activePage, setSidebarOpen }) => {
    return (
        <header className="bg-white border-b border-[#E9D6B2]/30 px-6 lg:px-12 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="md:hidden text-3xl text-[#400505]"
                >
                    ☰
                </button>

                <span className="font-jost text-[24px] font-normal text-[#400505]">
                    My {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
                </span>
            </div>
            <div className="flex items-center gap-4">
                <span className="font-jost text-[14px] font-light uppercase text-[#93776B] tracking-wider hidden sm:block">
                    Wednesday 29 April 2026
                </span>
                <div className="w-8 h-8 rounded-full bg-[#3B0D0D] text-[#F3E6CF] flex items-center justify-center font-jost text-[12px] font-medium uppercase tracking-tighter">
                    JA
                </div>
            </div>

        </header>
    );
};

export default Header;