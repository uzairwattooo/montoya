import Image from "next/image";
import imagefooter from "./../public/images/5 1.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 md:px-12 lg:px-24 text-[#E5D5C5]">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">

          <div className="lg:col-span-6">
            <Image
              src={imagefooter}
              width={355}
              height={63}
              alt="footer"
              className="h-auto w-auto"
            />

            <p className="font-cormorant w-73.5 text-[32px] font-medium italic leading-10 tracking-[-2%] text-[#F3E6CF] max-w-sm mt-4">
              Building value. Creating legacy. Shaping the future.
            </p>
          </div>

          <div className="w-full lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-0">

            <div className="w-26.5">
              <h4 className="text-[16px] tracking-normal font-normal text-[#797267] uppercase font-jost mb-6">
                Services
              </h4>
              <ul className="space-y-3 text-sm font-sans text-[#888174]">
                <li><Link href="/firstpage" className="font-jost cursor-pointer hover:text-[#E5D5C5]">Finance</Link></li>
                <li><Link href="/development" className="font-jost cursor-pointer hover:text-[#E5D5C5]">Development Partnership</Link></li>
                <li><Link href="/international" className="font-jost cursor-pointer hover:text-[#E5D5C5]">International Development</Link></li>
              </ul>
            </div>

            <div className="w-23.5">
              <h4 className="text-[16px] tracking-normal font-normal text-[#797267] uppercase font-jost mb-6">
                Account
              </h4>
              <ul className="space-y-6 text-sm font-sans text-[#888174]">
                <li><Link href="/signup" className="font-jost cursor-pointer hover:text-[#E5D5C5]">Sign Up</Link></li>
                <li><Link href="/login" className="font-jost cursor-pointer hover:text-[#E5D5C5]">Login</Link></li>
                <li><Link href="/dashboard" className="font-jost cursor-pointer hover:text-[#E5D5C5]">My Applications</Link></li>
              </ul>
            </div>

            <div className="w-26.5">
              <h4 className="text-[16px] tracking-normal font-normal text-[#797267] uppercase font-jost mb-6">
                Legal
              </h4>
              <ul className="space-y-6 text-sm font-sans text-[#888174]">
                <li className="font-jost cursor-pointer hover:text-[#E5D5C5]">Privacy Policy</li>
                <li className="font-jost cursor-pointer hover:text-[#E5D5C5]">Terms of Use</li>
                <li className="font-jost cursor-pointer hover:text-[#E5D5C5]">GDPR Compliance</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest text-gray-600">

          <p className="font-['Arial'] text-[16px] font-normal leading-6.75 tracking-normal text-[#44413B]">
            © 2026 Montoya Roe. All rights reserved.
          </p>

          <p className="font-['Arial'] text-[16px] font-normal leading-6.75 tracking-normal text-right uppercase text-[#44413B]">
            montoyaroe.com
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;