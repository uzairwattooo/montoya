const Hero = () => {
  return (
    <>
<section className="bg-[#F3E6CF] py-12 md:py-20">
  <div className="max-w-310 mx-auto px-4 flex flex-col lg:flex-row justify-between items-start gap-10">
    <div className="flex flex-col w-full lg:w-[60%] gap-6">

      <div className="flex items-center gap-3 flex-wrap">
        <div className="w-8 h-px bg-[#8C7B6B]" />
        <span className="font-jost text-[12px] text-[#8C7B6B] uppercase cursor-pointer">
          <span className="hover-accent">Finance</span> •
          <span className="hover-accent">Projects</span> •
          <span className="hover-accent">Strategy</span>
        </span>
      </div>

      <p className="font-jost text-[14px] md:text-[16px] max-w-100 text-[#0A0A0A]">
        We partner with professionals across finance, development,
        and infrastructure to fund what matters most.
      </p>

      <h1 className="font-cormorant text-[40px] md:text-[56px] lg:text-[68px] font-[500] leading-[70px] tracking-[-0.02em] text-[#3B0D0D]">
        Building <span className="italic">value.</span> <br />
        Shaping the future.
      </h1>
    </div>
    <div className="w-full lg:w-60 text-[#8C7B6B]">

      <ul className="space-y-6 lg:space-y-2">

        <li className="flex gap-3 md:gap-4 hover-accent items-center cursor-pointer">
          <span className="font-cormorant text-[20px] md:text-[24px]">01.</span>
          <span className="font-cormorant text-[28px] md:text-[40px] italic">
            Finance
          </span>
        </li>

        <li className="flex gap-3 md:gap-4 hover-accent items-center cursor-pointer">
          <span className="font-cormorant text-[20px] md:text-[24px]">02.</span>
          <span className="font-cormorant text-[28px] md:text-[40px] italic">
            Development
          </span>
        </li>

        <li className="flex gap-3 md:gap-4 hover-accent items-center cursor-pointer">
          <span className="font-cormorant text-[20px] md:text-[24px]">03.</span>
          <span className="font-cormorant text-[28px] md:text-[40px] italic">
            International
          </span>
        </li>

      </ul>

    </div>

  </div>
</section>

    </>
  );
};

export default Hero;


