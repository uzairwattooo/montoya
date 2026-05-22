import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function AdminAllApplications({
    applications,
    setApplications,
    title,

}) {
    const [selectedApplication, setSelectedApplication] = useState(null);
    const [search, setSearch] = useState("");
    const [serviceFilter, setServiceFilter] =
        useState("all");
    const [statusFilter, setStatusFilter] =
        useState("all");
    const [weekFilter, setWeekFilter] =
        useState("all");
    const getStatusColors = (status) => {
        switch (status) {
            case "under_review":
                return "bg-[#E3EDF7] text-[#2F5B88] border-[#A9C4E2]";

            case "pending":
            case "pending":
                return "bg-[#FFF9E6] text-[#8A6D22] border-[#F2DEB4]";

            case "reviewed":
                return "bg-[#E7F6EC] text-[#2E7D4F] border-[#B7DFC5]";

            default:
                return "bg-gray-100 text-gray-600 border-gray-300";
        }
    };

    const getActionLabel = (status) => {
        switch (status) {
            case "under_review":
            case "pending":
            case "pending":
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
            case "pending":
            case "pending":
                return "reviewed";

            default:
                return status;
        }
    };

    const handleStatusUpdate = async (table, id, nextStatus) => {
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
    const filteredApplications =
        applications.filter((app) => {
            const searchValue =
                search.toLowerCase();
            const matchesSearch =
                app.name
                    ?.toLowerCase()
                    .includes(searchValue) ||
                app.email
                    ?.toLowerCase()
                    .includes(searchValue) ||
                app.id
                    ?.toLowerCase()
                    .includes(searchValue);
            const matchesService =
                serviceFilter === "all"
                    ? true
                    : app.type === serviceFilter;
            const matchesStatus =
                statusFilter === "all"
                    ? true
                    : app.status === statusFilter;
            const appDate = new Date(app.created_at);
            const now = new Date();
            const isThisWeek =
                now - appDate <
                7 * 24 * 60 * 60 * 1000;
            const matchesWeek =
                weekFilter === "all"
                    ? true
                    : isThisWeek;
            return (
                matchesSearch &&
                matchesService &&
                matchesStatus &&
                matchesWeek
            );
        });
    return (
        <div className="p-4 md:p-6 lg:p-12 max-w-7xl w-full mx-auto space-y-8 flex-1 overflow-scroll">
            <h1 className="font-cormorant font-medium text-[#3B0D0D] text-[54px] leading-15 tracking-[-0.02em]">
                {title}
            </h1>

            <div className="space-y-4">
                <div className="md:col-span-2">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                        className="w-full bg-[#FFF4E0] border-none mt-2.5 p-4 font-jost text-[14px] mr-5 font-normal leading-[100%] tracking-normal text-[#ACA79D] placeholder:text-[#ACA79D]/50 focus:ring-1 focus:ring-[#3D1A1A]/20 outline-none transition-all"
                        placeholder="Search by name, email or ref"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <button className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] leading-4.5 uppercase">
                        <select
                            value={serviceFilter}
                            onChange={(e) =>
                                setServiceFilter(e.target.value)
                            }
                            className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 text-[#EBE5DA] font-jost text-[14px] uppercase outline-none"
                        >
                            <option value="all">
                                All Services
                            </option>

                            <option value="Finance">
                                Finance
                            </option>

                            <option value="Development">
                                Development
                            </option>

                            <option value="International">
                                International
                            </option>
                        </select>
                    </button>

                    <button className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] leading-4.5 uppercase">
                        <select
                            value={statusFilter}
                            onChange={(e) =>
                                setStatusFilter(e.target.value)
                            }
                            className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 text-[#EBE5DA] font-jost text-[14px] uppercase outline-none"
                        >
                            <option value="all">
                                All Status
                            </option>

                            <option value="pending">
                                Pending
                            </option>

                            <option value="under_review">
                                Under Review
                            </option>

                            <option value="pending">
                                Pending Info
                            </option>

                            <option value="reviewed">
                                Reviewed
                            </option>
                        </select>
                    </button>

                    <button
                        onClick={() =>
                            setWeekFilter(
                                weekFilter === "all"
                                    ? "this_week"
                                    : "all"
                            )
                        }
                        className="w-71.5 h-11.5 bg-[#44413B] rounded-sm px-4 py-3 flex items-center justify-center gap-5 text-[#EBE5DA] font-jost font-normal text-[14px] uppercase"
                    >
                        <span>
                            {weekFilter === "this_week"
                                ? "All Time"
                                : "This Week"}
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full bg-white border border-[#E9D6B2] overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#FAF6EF]/60 border-b border-[#E9D6B2] text-[#93776B]">
                                <th className="p-4 pl-6 font-jost text-[12px] font-light uppercase tracking-wider">
                                    Ref
                                </th>
                                <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">
                                    Applicants
                                </th>
                                <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">
                                    Type
                                </th>
                                <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">
                                    Date Submitted
                                </th>
                                <th className="p-4 font-jost text-[12px] font-light uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="p-4 pr-6 text-left font-jost text-[12px] font-light uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#E9D6B2]/40">
                            {filteredApplications.map((row, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-[#FAF6EF]/20 transition-all"
                                >
                                    <td className="pl-4 ml-10 font-jost text-[14px] text-[#ACA79D]">
                                        REF #{row.id.slice(0, 8)}
                                    </td>

                                    <td className="p-4">
                                        <div className="font-jost text-[15px] font-normal text-[#3B0D0D]">
                                            {row.name}
                                        </div>

                                        <div className="font-jost text-[12px] text-[#ACA79D]">
                                            {row.email}
                                        </div>
                                    </td>

                                    <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                        {row.type}
                                    </td>

                                    <td className="p-4 font-jost text-[14px] text-[#3B0D0D]">
                                        {new Date(row.created_at).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </td>

                                    <td className="p-4">
                                        <span
                                            className={`inline-flex items-center gap-2 w-full sm:w-25 h-11 px-2.5 rounded-sm text-[11px] font-jost uppercase tracking-wider font-medium ${getStatusColors(
                                                row.status
                                            )}`}
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0"></span>
                                            <span>{row.status.replaceAll("_", " ")}</span>
                                        </span>
                                    </td>

                                    <td>
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

                            {applications.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="p-6 text-center font-jost text-[14px] text-[#93776B]"
                                    >
                                        No applications found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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
            )
            }
        </div>
    );
}