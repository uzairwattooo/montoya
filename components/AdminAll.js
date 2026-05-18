import Vector from "@/public/icons/Vector.svg";
export default function AdminAllApplications() {
    const applications = [
        { id: 1, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'UNDER REVIEW', action: 'MARK AS REVIEWED' },
        { id: 2, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Development', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
        { id: 3, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'International', date: '12 Apr 2026', status: 'PENDING INFO', action: 'MARK AS REVIEWED' },
        { id: 4, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
        { id: 5, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'International', date: '12 Apr 2026', status: 'UNDER REVIEW', action: 'MARK AS REVIEWED' },
        { id: 6, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'International', date: '12 Apr 2026', status: 'PENDING INFO', action: 'MARK AS REVIEWED' },
        { id: 7, ref: '#MR-2026-001', name: 'James Anderson', email: 'james@example.com', type: 'Finance', date: '12 Apr 2026', status: 'REVIEWED', action: 'VIEW APPLICATION' },
    ]
    return (
        <div className="p-4 md:p-6 lg:p-12 max-w-7xl w-full mx-auto space-y-8 flex-1 overflow-scroll">

            <h1 className="font-cormorant font-medium text-[#3B0D0D] text-[54px] leading-15 tracking-[-0.02em]">
                All Applications
            </h1>
            <div className="space-y-4">
                <div className="md:col-span-2">
                    <input type="text" className="w-full  bg-[#FFF4E0] border-none mt-2.5 p-4 font-jost text-[14px]  mr-5 font-normal leading-[100%] tracking-normal text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3D1A1A]/20 outline-none transition-all" placeholder="Search by name, email or ref" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] leading-4.5 uppercase">
                        <span>Service Type</span>
                        <span >
                           <Vector/>
                        </span>
                    </button>
                    <button className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] leading-4.5 uppercase">
                        <span>Status</span>
                        <span >
                           <Vector/>
                        </span>
                    </button>
                    <button className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] leading-4.5 uppercase">
                        <span>This Week</span>
                        <span >
                           <Vector/>
                        </span>
                    </button>
                </div>
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
                            {applications.map((row, idx) => (
                                <tr key={idx} className="hover:bg-[#FAF6EF]/20 transition-all">
                                    <td className="p-4 pl-6 font-jost text-[14px] text-[#ACA79D]">
                                        {row.ref}
                                    </td>
                                    <td className="p-4">
                                        <div className="font-jost text-[15px] font-normal text-[#3B0D0D]">{row.name}</div>
                                        <div className="font-jost text-3.25 text-[#ACA79D]">{row.email}</div>
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
    )
}
