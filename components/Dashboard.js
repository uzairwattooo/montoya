export default function Dashboard({ applications, userName }) {
    const totalApplications = applications.length;
    const underReview = applications.filter(
        (app) => app.status === "under_review"
    ).length;
    const pending = applications.filter(
        (app) => app.status === "pending"
    ).length;

    const statCards = [
        {
            label: "TOTAL APPLICATIONS",
            count: totalApplications,
            sub: "Across all service types",
        },

        {
            label: "UNDER REVIEW",
            count: underReview,
            sub: "Being assessed by our team",
        },

        {
            label: "PENDING INFO",
            count: pending,
            sub: "Additional details required",
        },
    ];
    const getStatusColors = (status) => {
        switch (status) {
            case "under_review":
                return "bg-[#EEF4FB] text-[#37618B] border-[#A9C4E2]";

            case "pending":
                return "bg-[#FFF9EC] text-[#8A6F1D] border-[#F2DEB4]";

            case "reviewed":
                return "bg-[#F2FFF5] text-[#42A12F] border-[#B7DFC5]";

            default:
                return "bg-gray-100 text-gray-600 border-gray-300";
        }
    };
    const getStatusLabel = (status) => {
        switch (status) {
            case "pending":
                return "PENDING INFO";

            case "under_review":
                return "UNDER REVIEW";

            case "reviewed":
                return "REVIEWED";

            default:
                return status.replaceAll("_", " ");
        }
    };
    const capitalizeName = (name) => {
        return name
            ?.split(" ")
            .map(
                (word) =>
                    word.charAt(0).toUpperCase() +
                    word.split(" ")[0]
                        .slice(1)
            )
            .join(" ");
    };
    return (
        <>

            <hr className="text-[#E8D5B0]" />
            <main className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto p-4 md:p-6 lg:p-12 space-y-8">
                <div>
                    <h1 className="font-cormorant text-[48px] font-medium text-[#3B0D0D] leading-13.5 tracking-[-0.02em]">
                        {
                            new Date().getHours() < 12
                                ? "Good morning,"
                                : new Date().getHours() < 18
                                    ? "Good Afternoon, "
                                    : "Good Evening, "
                        }<span className="italic">{capitalizeName(userName)}</span>.
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
                                                        REF #{app.id.slice(0, 8)}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 font-jost text-[16px] font-normal text-[#3B0D0D]">
                                                {app.type}
                                            </td>
                                            <td className="p-4 font-jost text-[16px] font-normal text-[#3B0D0D]">
                                                {new Date(app.created_at).toLocaleDateString("en-GB", {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </td>
                                            <td className="p-4">
                                                <span
                                                    className={`inline-flex items-center gap-2 w-full sm:w-25 h-11 px-2.5 rounded-sm text-[11px] font-jost uppercase tracking-wider border font-medium ${getStatusColors(app.status)}`}
                                                >
                                                    <span className="w-1.25 h-1.25 rounded-full bg-current shrink-0"></span>
                                                    <span>{getStatusLabel(app.status)}</span>
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
