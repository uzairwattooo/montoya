import Image from "next/image";
import imagefooter from "./../public/images/5 1.png"
import { Cormorant_Garamond, Jost } from "next/font/google";
const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["500"],
    style: ["normal", "italic"],
});
const jost = Jost({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});
const hoverStyle =
    "hover:text-[#888174] cursor-pointer transition-colors";
const Footer = () => {
    return (
        <footer className="w-full bg-[#050505] pt-24 pb-12 px-6 md:px-12 lg:px-24 text-[#E5D5C5]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    <div className="lg:col-span-6">
                        <Image
                            src={imagefooter}
                            width={300}
                            height={300}
                            alt="footer"
                            className="h-auto w-auto"
                        />
                        <p className={`${cormorant.className}  text-4xl font-serif italic leading-tight text-[#F3E6CF] max-w-sm mt-4`}>
                            Building value. Creating legacy. Shaping the future.
                        </p>
                    </div>
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-sans mb-6">Services</h4>
                            <ul className="space-y-4 text-sm font-sans text-gray-300">
                                <li className={`${hoverStyle, jost.className}`}>Finance</li>
                                <li className={`${hoverStyle, jost.className} leading-relaxed`}>Development Partnership</li>
                                <li className={`${hoverStyle, jost.className} leading-relaxed`}>International Development</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-sans mb-6">Account</h4>
                            <ul className="space-y-4 text-sm font-sans text-gray-300">
                                <li className={`${hoverStyle, jost.className}`}>Sign Up</li>
                                <li className={`${hoverStyle, jost.className}`}>Login</li>
                                <li className={`${hoverStyle, jost.className} leading-relaxed`}>My Applications</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-sans mb-6">Legal</h4>
                            <ul className="space-y-4 text-sm font-sans text-gray-300">
                                <li className={`${hoverStyle, jost.className}`}>Privacy Policy</li>
                                <li className={`${hoverStyle, jost.className}`}>Terms of Use</li>
                                <li className={`${hoverStyle, jost.className} leading-relaxed`}>GDPR Compliance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-900 flex  md:row justify-between items-center gap-4 text-[10px] tracking-widest text-gray-600 uppercase">
                    <p>© 2026 Montoya Roe. All rights reserved.</p>
                    <p className="hover:text-gray-400 cursor-pointer transition-colors">MONTOYAROE.COM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;