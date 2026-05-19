import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="bg-[#F3E6CF] py-12 md:py-20">
        <div className="max-w-310 mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-10">
          <div className="flex flex-col w-full lg:w-[60%] gap-6">

            <div className="flex items-center gap-2 bg-[#F3E6CF] px-4 ">
              <div className="w-10 h-px bg-[#8C7B6B]/60" />
              <div className="flex items-center gap-2 font-jost text-[10px] sm:text-[11px] font-light tracking-[0.2em] text-[#8C7B6B] uppercase">
                <span className="font-jost font-light text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#8C7B6B]">Finance</span>
                <span className="w-0.75 h-0.75 rounded-full bg-[#8C7B6B]"></span>
                <span className="font-jost font-light text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#8C7B6B]">Projects</span>
                <span className="w-0.75 h-0.75 rounded-full bg-[#8C7B6B]"></span>
                <span className="font-jost font-light text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#8C7B6B]">Strategy</span>
              </div>
            </div>

            <p className="font-jost text-[14px] md:text-[16px] max-w-100 text-[#0A0A0A]">
              We partner with professionals across finance, development,
              and infrastructure to fund what matters most.
            </p>

            <h1 className="font-cormorant text-[40px] md:text-[56px] lg:text-[68px] font-medium leading-[70px] tracking-[-0.02em] text-[#3B0D0D]">
              Building <span className="italic">value.</span> <br />
              Shaping the future.
            </h1>
          </div>
          <div className="w-full lg:w-60 text-gray-800">
            <ul className="space-y-6 lg:space-y-5">
              <li className="hover-accent cursor-pointer">
                <Link
                  href="/firstpage"
                  className="flex gap-3 md:gap-4 items-center"
                >
                  <span className="font-cormorant text-[22px] md:text-[26px] font-medium">
                    01.
                  </span>
                  <span className="font-cormorant text-[30px] md:text-[42px] italic leading-none font-medium">
                    Finance
                  </span>
                </Link>
              </li>
              <li className="hover-accent cursor-pointer">
                <Link
                  href="/development"
                  className="flex gap-3 md:gap-4 items-center"
                >
                  <span className="font-cormorant text-[22px] md:text-[26px] font-medium">
                    02.
                  </span>

                  <span className="font-cormorant text-[30px] md:text-[42px] italic leading-none font-medium">
                    Development
                  </span>
                </Link>
              </li>
              <li className="hover-accent cursor-pointer">
                <Link
                  href="/international"
                  className="flex gap-3 md:gap-4 items-center"
                >
                  <span className="font-cormorant text-[22px] md:text-[26px] font-medium">
                    03.
                  </span>

                  <span className="font-cormorant text-[30px] md:text-[42px] italic leading-none font-medium">
                    International
                  </span>
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;


