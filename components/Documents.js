import Link from "next/link";
import Export from "../public/icons/export.svg";
const Documents = ({ applications }) => {
  const documents = applications.flatMap((app) =>
    (app.documents || []).map((doc) => ({
      ...doc,
      category: app.name,
      status: app.status,
      date: app.created_at,
    }))
  );


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
                Uploaded Files ({documents.length})
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
                        {doc.size
                          ? `${(doc.size / 1024 / 1024).toFixed(1)} MB`
                          : "Unknown Size"} ·
                        {doc.category} ·
                        {doc.status.replaceAll("_", " ")} <br /> {doc.date}
                      </div>
                    </div>
                    <Link
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      download

                      className="inline-flex items-center justify-center  bg-[#FAF6EF] text-[#3B0D0D] border border-[#491E1C] font-jost text-[14px] font-normal tracking-wider px-4 py-1.5  transition-all duration-200 hover:bg-[#3B0D0D] hover:text-[#F3E6CF] active:opacity-90 group"
                    >
                      <span className="mt-2"><Export /></span>
                      <span className="uppercase font-medium tracking-wider">
                        Download
                      </span>
                    </Link>
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