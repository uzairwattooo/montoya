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

            <p className="font-cormorant text-[32px] font-medium italic leading-10 tracking-[-0.02em] text-[#F3E6CF] max-w-sm mt-4">
              Building value. Creating legacy. Shaping the future.
            </p>
          </div>
          <div className="lg:col-span-6 grid grid-cols-3 gap-10">
            <div>
              <p className="text-[16px] text-[#797267] uppercase font-jost mb-6">
                Services
              </p>

              <ul className="space-y-2 text-[#8C7B6B]">
                <li><Link href="/firstpage" className="font-jost hover:text-[#E5D5C5]">Finance</Link></li>
                <li><Link href="/development" className="font-jost hover:text-[#E5D5C5]">Development Partnership</Link></li>
                <li><Link href="/international" className="font-jost hover:text-[#E5D5C5]">International Development</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[16px] text-[#797267] uppercase font-jost mb-6">
                Account
              </p>

              <ul className="space-y-5 text-[#8C7B6B]">
                <li><Link href="/signup" className="font-jost hover:text-[#E5D5C5]">Sign Up</Link></li>
                <li><Link href="/login" className="font-jost hover:text-[#E5D5C5]">Login</Link></li>
                <li><Link href="/dashboard" className="font-jost hover:text-[#E5D5C5]">My <br /> Applications</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[16px] text-[#797267] uppercase font-jost mb-6">
                Legal
              </p>

              <ul className="space-y-2 lg:space-y-5 md:space-y-1 text-[#8C7B6B]">
                <li className="font-jost hover:text-[#E5D5C5] cursor-pointer">Privacy Policy</li>
                <li className="font-jost hover:text-[#E5D5C5] cursor-pointer">Terms of Use</li>
                <li className="font-jost hover:text-[#E5D5C5] cursor-pointer">GDPR <br /> Compliance</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="pt-8 border-t border-[#1E1E1E] flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#44413B] text-[14px]">
            © 2026 Montoya Roe. All rights reserved.
          </p>

          <Link
            href="https://montoyaroe.com"
            target="_blank"
            className="text-[#44413B] text-[14px] hover:text-[#E5D5C5] uppercase cursor-pointer"
          >
            montoyaroe.com
          </Link>

        </div>

      </div>
    </footer>
  );
};

export default Footer;