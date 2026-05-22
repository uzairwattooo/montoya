

const Applications = ({ applications }) => {
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

  return (
    <>
      <hr className="text-[#E8D5B0]" />

      <div className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto lg:p-12">
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 p-6 lg:p-5 max-w-300 w-full mx-auto space-y-14">
            <div>
              <h1 className="font-cormorant text-[54px] font-medium text-[#3B0D0D] leading-13.5 tracking-[-0.02em]">
                My Applications
              </h1>
              <p className="font-jost text-[16px] font-normal text-[#93776B] mt-2">
                All submissions across Finance, Development, and International services.
              </p>
            </div>
            <div className="space-y-7">
              <h3 className="font-jost text-[22px] font-normal text-[#8C7B6B] leading-[100%]">
                All Applications ({applications.length})
              </h3>

              <div className="bg-white border border-[#E9D6B2]/40 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#FAF6EF]/60 border-b border-[#E9D6B2]/30">
                        <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#93776B]">Applications</th>
                        <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#93776B]">Type</th>
                        <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#93776B]">Date Submitted</th>
                        <th className="p-4 font-jost text-[14px] font-light uppercase tracking-wider text-[#93776B]">Status</th>
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
        </div>

      </div>
    </>
  );
};

export default Applications;