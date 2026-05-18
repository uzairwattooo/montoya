import Export from "@/public/icons/export.svg";
export default function Admin_Dashboard() {
    const submissions = [
        { ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'UNDER REVIEW', action: 'MARK AS REVIEWED' },
        { ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Development', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
        { ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'International', date: '12 Apr 2026', status: 'PENDING INFO', action: 'MARK AS REVIEWED' },
        { ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
        { ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
    ];

    const statsCards = [
        { title: "Total Submissions", count: "8", sub: "All service types" },
        { title: "Under Review", count: "3", sub: "Actively being assessed" },
        { title: "Pending Info", count: "2", sub: "Awaiting applicant response" },
        { title: "Reviewed", count: "3", sub: "Assessment complete" },
    ];
    return (
        <main className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto p-4 md:p-6 lg:p-12 overflow-scroll">
            <p className="font-jost text-[16px] font-normal text-[#93776B] mb-4">
                Here&apos;s an overview of all applications submitted at Montoya Roe.
            </p>
            <div className="flex flex-wrap gap-4 mb-5">
                {statsCards.map((card, index) => (
                    <div
                        key={index}
                        className=" w-full sm:w-[48%] lg:w-52.75 min-h-58.25 bg-white px-8 py-6 flex flex-col justify-between border border-[#E8D5B0] border-b-[4px] gap-6">
                        <div>
                            <p className="font-jost font-light text-[14px] sm:text-[14px] leading-5 uppercase text-[#93776B] w-27.5 min-h-10 flex items-center">
                                {card.title}
                            </p>
                            <h3 className="font-cormorant text-[48px] font-medium text-[#3B0D0D] mt-2">
                                {card.count}
                            </h3>
                        </div>
                        <p className="font-jost text-[16px] font-normal text-[#93776B] w-36">
                            {card.sub}
                        </p>
                    </div>
                ))}
            </div>
            <div className="space-y-6">
                <div className="flex justify-between items-center">
                    <h3 className="font-jost text-[22px] font-normal text-[#8C7B6B]">
                        Recent Submissions
                    </h3>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center border border-[#E8D5B0] bg-[#44413B] hover:bg-[#2A0808] transition-all text-[#F3E6CF] font-jost text-[14px] font-normal tracking-wider px-5 py-1 active:opacity-90"
                    >
                        <span className="flex items-center justify-center mt-2">
                            <Export/>
                        </span>

                        <span className="uppercase">
                            Export csv
                        </span>
                    </button>
                </div>
                <div className="w-full bg-white border border-[#E9D6B2] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FAF6EF]/60 border-b border-[#E9D6B2] text-[#93776B]">
                                    <th className="p-4 pl-6 font-jost text-[12px] font-light uppercase tracking-wider">Ref</th>
                                    <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">Applicants</th>
                                    <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">Type</th>
                                    <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">Date Submitted</th>
                                    <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">Status</th>
                                    <th className="p-4 pr-6 text-left font-jost text-[12px] font-light uppercase tracking-wider">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E9D6B2]/40">
                                {submissions.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#FAF6EF]/20 transition-all">
                                        <td className="p-4 pl-6 font-jost text-[14px] text-[#ACA79D]">
                                            {row.ref}
                                        </td>
                                        <td className="p-4">
                                            <div className="font-jost text-[15px] font-normal text-[#3B0D0D]">{row.name}</div>
                                            <div className="font-jost text-[13px] text-[#ACA79D]">{row.email}</div>
                                        </td>
                                        <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                            {row.type}
                                        </td>
                                        <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                            {row.date}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center gap-2 w-full sm:w-25 h-11 px-2.5 rounded-sm text-[11px] font-jost uppercase tracking-wider  font-medium
         ${row.status === "UNDER REVIEW"
                                                        ? "bg-[#EBF3FC] text-[#2F80ED] border-[#BFD7F6]"
                                                        : row.status === "REVIEWED"
                                                            ? "bg-[#EBFDF5] text-[#219653] border-[#B7E4C7]"
                                                            : "bg-[#FFF9EC] text-[#D4A333] border-[#F3D98C]"
                                                    }`}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
                                                <span>{row.status}</span>
                                            </span>
                                        </td>
                                        <td >
                                            <button className="w-full sm:w-37.25 h-12 px-3 py-3 border border-[#491E1C] flex items-center justify-center gap-3 text-[#3B0D0D] font-jost font-normal text-[12px] leading-[100%] uppercase tracking-wider transition-all hover:bg-[#491E1C] hover:text-[#F3E6CF] cursor-pointer">
                                                {row.action}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
