import { useState } from "react";
import { supabase } from "../lib/supabase";
import Export from "../public/icons/export.svg";
import Papa from "papaparse";
export default function Admin_Dashboard({ applications, setApplications }) {
    const [selectedApplication, setSelectedApplication] = useState(null);

    const getStatusColors = (status) => {
        switch (status) {
            case "under_review":
                return "bg-[#EEF4FB] text-[#37618B] border-[#A9C4E2]";

            case "pending_info":
                return "bg-[#FFF9EC] text-[#8A6F1D] border-[#F2DEB4]";

            case "reviewed":
                return "bg-[#F2FFF5] text-[#42A12F] border-[#B7DFC5]";

            default:
                return "bg-gray-100 text-gray-600 border-gray-300";
        }
    };
    const getActionLabel = (status) => {
        switch (status) {
            case "under_review":
                return "MARK AS REVIEWED";

            case "pending_info":
                return "MARK AS REVIEWED";

            case "reviewed":
                return "VIEW APPLICATION";

            default:
                return "MARK AS REVIEWED";
        }
    };

    const getNextStatus = (status) => {
        switch (status) {
            case "under_review":
                return "reviewed";

            case "pending_info":
                return "reviewed";

            case "reviewed":
                return "reviewed";

            default:
                return "reviewed";
        }
    };
    const handleStatusUpdate = async (
        table,
        id,
        nextStatus
    ) => {
        const { error } = await supabase
            .from(table)
            .update({
                status: nextStatus,
            })
            .eq("id", id);

        if (error) {
            alert(error.message);
            return;
        }

        setApplications((prev) =>
            prev.map((app) =>
                app.id === id
                    ? {
                        ...app,
                        status: nextStatus,
                    }
                    : app
            )
        );
    };
    const totalSubmissions = applications.length;
    const underReview = applications.filter(
        (app) => app.status === "under_review"
    ).length;

    const pendingInfo = applications.filter(
        (app) => app.status === "pending_info"
    ).length;

    const reviewed = applications.filter(
        (app) => app.status === "reviewed"
    ).length;
    const statsCards = [
        { title: "Total Submissions", count: totalSubmissions, sub: "All service types" },
        { title: "Under Review", count: underReview, sub: "Actively being assessed" },
        { title: "Pending Info", count: pendingInfo, sub: "Awaiting applicant response" },
        { title: "Reviewed", count: reviewed, sub: "Assessment complete" },
    ];
    const handleExportCSV = () => {
        const csvData = applications.map(
            (app) => ({
                Ref: `REF #${app.id.slice(0, 8)}`,
                Name: app.name,
                Email: app.email,
                Type: app.type,
                Status: app.status,
                Date: new Date(
                    app.created_at
                ).toLocaleDateString("en-GB"),
            })
        );

        const csv =
            Papa.unparse(csvData);

        const blob = new Blob([csv], {
            type: "text/csv;charset=utf-8;",
        });

        const url =
            window.URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        link.href = url;

        link.setAttribute(
            "download",
            "applications.csv"
        );

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);
    };
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
                        onClick={handleExportCSV}
                        className="inline-flex items-center justify-center border border-[#E8D5B0] bg-[#44413B] hover:bg-[#2A0808] transition-all text-[#F3E6CF] font-jost text-[14px] font-normal tracking-wider px-5 py-1 active:opacity-90"
                    >
                        <span className="flex items-center justify-center mt-2">
                            <Export />
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
                                {applications.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#FAF6EF]/20 transition-all">
                                        <td className="  pl-4 ml-10 font-jost text-[14px] text-[#ACA79D]">
                                            REF #{row.id.slice(0, 8)}
                                        </td>
                                        <td className="p-4">
                                            <div className="font-jost text-[15px] font-normal text-[#3B0D0D]">{row.name}</div>
                                            <div className="font-jost text-[12px] text-[#ACA79D]">{row.email}</div>
                                        </td>
                                        <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                            {row.type}
                                        </td>
                                        <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                            {new Date(row.created_at).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </td>
                                        <td className="p-4">
                                            <span
                                                className={`inline-flex items-center gap-2 w-full sm:w-25 h-11 px-2.5 rounded-sm text-[11px] font-jost uppercase tracking-wider  font-medium
        ${getStatusColors(row.status)}`}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
                                                <span>{row.status.replaceAll("_", " ")}</span>
                                            </span>
                                        </td>
                                        <td >
                                            <button
                                                onClick={() => {
                                                    if (row.status === "reviewed") {
                                                        setSelectedApplication(row);
                                                        return;
                                                    }
                                                    handleStatusUpdate(
                                                        row.table,
                                                        row.id,
                                                        getNextStatus(row.status)
                                                    );
                                                }}
                                                className="w-full sm:w-37.25 h-12 mx-3 px-3 py-3 border border-[#491E1C] flex items-center justify-center gap-3 text-[#3B0D0D] font-jost font-normal text-[12px] leading-[100%] uppercase tracking-wider transition-all hover:bg-[#491E1C] hover:text-[#F3E6CF] cursor-pointer"
                                            >
                                                {getActionLabel(row.status)}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {selectedApplication && (
                <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-[#E9D6B2] p-8">
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h2 className="font-cormorant text-[42px] font-medium text-[#3B0D0D]">
                                    Application Details
                                </h2>

                                <p className="font-jost text-[14px] uppercase text-[#93776B]">
                                    REF #{selectedApplication.id.slice(0, 8)}
                                </p>
                            </div>

                            <button
                                onClick={() => setSelectedApplication(null)}
                                className="text-[#3B0D0D] text-3xl"
                            >
                                ×
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(selectedApplication).map(([key, value]) => {
                                if (
                                    key === "id" ||
                                    key === "user_id" ||
                                    key === "table" ||
                                    key === "documents"
                                ) {
                                    return null;
                                }

                                return (
                                    <div
                                        key={key}
                                        className="bg-[#FAF6EF] border border-[#E9D6B2]/50 p-4"
                                    >
                                        <p className="font-jost text-[12px] uppercase text-[#93776B] mb-2">
                                            {key.replaceAll("_", " ")}
                                        </p>

                                        <p className="font-jost text-[15px] text-[#3B0D0D] break-words">
                                            {String(value || "N/A")}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8">
                            <h3 className="font-cormorant text-[28px] text-[#3B0D0D] mb-4">
                                Documents
                            </h3>

                            <div className="space-y-3">
                                {Array.isArray(selectedApplication.documents) &&
                                    selectedApplication.documents.length > 0 ? (
                                    selectedApplication.documents.map((doc, index) => (
                                        <a
                                            key={index}
                                            href={doc.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex justify-between items-center bg-[#FAF6EF] border border-[#E9D6B2]/50 p-4 font-jost text-[#3B0D0D] hover:bg-[#3B0D0D] hover:text-[#F3E6CF] transition"
                                        >
                                            <span>{doc.name}</span>
                                            <span className="uppercase text-[12px]">Download</span>
                                        </a>
                                    ))
                                ) : (
                                    <p className="font-jost text-[14px] text-[#93776B]">
                                        No documents uploaded.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
