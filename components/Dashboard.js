export default function Dashboard() {
    const statCards = [
        { label: 'TOTAL APPLICATIONS', count: '3', sub: 'Across all service types' },
        { label: 'UNDER REVIEW', count: '1', sub: 'Being assessed by our team' },
        { label: 'PENDING INFO', count: '2', sub: 'Additional details required' },
    ];

    const applications = [
        {
            name: 'Home loan Application',
            ref: 'REF #MR-2026-01',
            type: 'Finance',
            date: '12 Apr 2026',
            status: 'UNDER REVIEW',
            statusColors: 'bg-[#E3EDF7] text-[#2F5B88] border-[#A9C4E2]',
        },
        {
            name: 'Development Partnership',
            ref: 'REF #MR-2026-01',
            type: 'Development',
            date: '12 Apr 2026',
            status: 'PENDING INFO',
            statusColors: 'bg-[#FFF9E6] text-[#8A6D22] border-[#F2DEB4]',
        },
        {
            name: 'International Development',
            ref: 'REF #MR-2026-01',
            type: 'International',
            date: '12 Apr 2026',
            status: 'SUBMITTED',
            statusColors: 'bg-[#F2EBF9] text-[#6A4093] border-[#D4C3E8]',
        },
    ];
    return (
        <>
            
        <hr className="text-[#E8D5B0]"/>
        <main className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto lg:p-12 space-y-8">
            <div>
                <h1 className="font-cormorant text-[48px] font-medium text-[#3B0D0D] leading-13.5 tracking-[-0.02em]">
                    Good morning, <span className="italic">James</span>.
                </h1>
                <p className="font-jost text-[16px] font-normal text-[#93776B] mt-2">
                    Here's an overview of your applications with Montoya Roe.
                </p>
            </div>
            <div className="flex flex-wrap gap-8 lg:justify-start md:justify-center">
                {statCards.map((card, i) => (
                    <div
                        key={i}
                        className="w-full lg:max-w-67 min-h-55.25 border border-[#E9D6B2]/40 px-8 py-6 flex flex-col gap-6 bg-white transition-all hover:border-[#E9D6B2]/80"
                    >
                        <span className="font-jost text-[14px] font-light uppercase tracking-wider text-[#93776B] leading-[100%]">
                            {card.label}
                        </span>
                        <span className="font-cormorant text-[64px] font-medium text-[#3B0D0D] leading-[100%] my-3">
                            {card.count}
                        </span>
                        <span className="w-36 h-11.5 font-jost text-[16px] font-normal leading-[100%] tracking-normal text-[#8C7B6B] ">
                            {card.sub}
                        </span>
                    </div>
                ))}
            </div>
            <div className="space-y-4">
                <h3 className="font-jost text-[22px] font-normal text-[#8C7B6B] leading-[100%]">
                    Recent Applications
                </h3>
                <div className="bg-white border border-[#E9D6B2]/40 rounded-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left">
                            <thead>
                                <tr className="bg-[#FAF6EF]/60 border-b border-[#E9D6B2]/30">
                                    <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#8C7B6B]">Applications</th>
                                    <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#8C7B6B]">Type</th>
                                    <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#8C7B6B]">Date Submitted</th>
                                    <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#8C7B6B]">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#E9D6B2]/20">
                                {applications.map((app, index) => (
                                    <tr key={index} className="hover:bg-[#FAF6EF]/20 transition-colors">
                                        <td className="p-5">
                                            <div className="w-full sm:w-36 min-h-17 flex flex-col ">
                                                <div className="font-jost text-[16px] font-normal text-[#3B0D0D] leading-[140%] wrap-break-words">
                                                    {app.name}
                                                </div>

                                                <div className="font-jost text-[12px] font-light uppercase tracking-wider text-[#ACA79D]">
                                                    {app.ref}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 font-jost text-[16px] font-normal text-[#3B0D0D]">
                                            {app.type}
                                        </td>
                                        <td className="p-4 font-jost text-[16px] font-normal text-[#3B0D0D]">
                                            {app.date}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center gap-2 w-full sm:w-25 h-11 px-2.5 rounded-sm text-[11px] font-jost uppercase tracking-wider border font-medium ${app.statusColors}`}
                                            >
                                                <span className="w-1.25 h-1.25 rounded-full bg-current shrink-0"></span>
                                                <span>{app.status}</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
        </>
    )
}
