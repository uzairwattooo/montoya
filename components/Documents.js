
const Documents = () => {

  const documents = [
    {
      name: 'Proof_of_Income_April2026.pdf',
      size: '2.4 MB',
      category: 'HOME LOAN APPLICATION',
      status: 'UPLOADED',
      date: '12 APR 2026'
    },
    {
      name: 'Bank_Statements_Q1_2026.pdf',
      size: '4.1 MB',
      category: 'HOME LOAN APPLICATION',
      status: 'UPLOADED',
      date: '12 APR 2026'
    },
    {
      name: 'Site_Plan_Development.pdf',
      size: '6.8 MB',
      category: 'DEVELOPMENT PARTNERSHIP',
      status: 'UPLOADED',
      date: '18 APR 2026'
    },
    {
      name: 'International_Project_Proposal.pdf',
      size: '3.5 MB',
      category: 'INTERNATIONAL DEVELOPMENT',
      status: 'UPLOADED',
      date: '24 APR 2026'
    }
  ];

  return (
    <>
      <hr className="text-[#E8D5B0]" />
      <div className="flex-1 flex flex-col min-w-0 md:h-screen md:overflow-y-auto lg:p-12">
        <div className="flex-1 flex flex-col min-w-0">
          <main className="flex-1 p-6 max-w-300 w-full mx-auto space-y-6">
            <div>
              <h1 className="font-cormorant text-[54px] font-medium text-[#3B0D0D] leading-15 tracking-[-0.02em]">
                My Documents
              </h1>
              <p className="font-jost text-[16px] font-normal text-[#8C7B6B] mt-2">
                All files and attachments uploaded across your applications.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="font-jost text-[22px] font-normal text-[#8C7B6B]">
                Uploaded Files (5)
              </h3>

              <div className="bg-white border border-[#E9D6B2]/40 p-6 lg:p-10 space-y-5">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-[#FAF6EF]/50 border border-[#E9D6B2]/30 rounded-sm p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all hover:border-[#E9D6B2]/60"
                  >
                    <div className="space-y-1.5">
                      <h4 className="font-jost text-[16px] font-normal text-[#3B0D0D] ">
                        {doc.name}
                      </h4>
                      <div className="font-jost text-[14px] font-light uppercase leading-5 tracking-normal text-[#93776B]">
                        {doc.size} · {doc.category} · {doc.status} <br /> {doc.date}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-3 bg-[#FAF6EF] text-[#3B0D0D] border border-[#491E1C] font-jost text-[14px] font-normal tracking-wider px-6 py-3.5  transition-all duration-200 hover:bg-[#3B0D0D] hover:text-[#F3E6CF] active:opacity-90 group"
                    >
                      <svg
                        className="w-4 h-4 text-[#3B0D0D] group-hover:text-[#F3E6CF] transition-colors duration-200"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="12" y1="15" x2="12" y2="6"></line>
                        <polyline points="7 10 12 5 17 10"></polyline>
                        <path d="M3 16.5v3.5a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3.5"></path>
                      </svg>
                      <span className="uppercase font-medium tracking-wider">
                        Download
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </main>
        </div>

      </div>
    </>
  );
};

export default Documents;