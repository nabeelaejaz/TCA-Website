import DotTCA from "~/components/dottca";
import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <div id="footer" className="md:mt-[80px] mt-[60px]">
            
                <div className="bg-[#E8E8E8] w-[100%] md:h-[424px] h-[340px]">
                    <div className="md:flex">
                        <div>
                            <a href="mailto: hello@tca.com.pk"><div className="flex ml-[48px] pt-[46px]"><img className="md:w-10 w-8" src="email.svg" alt="Email Us" /><p className="ml-[16px] lg:text-[24px] md:text-[22px] text-[20px]">hello@tca.com.pk</p></div></a>
                            <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                            <a href="tel:+923052837680"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="phone.svg" alt="Call Us" /><p className="ml-[16px] lg:text-[24px] md:text-[22px] text-[20px]">+92 305 2837680</p></div></a>
                            <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                            <Link to="/careers#header"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="sprout.svg" alt="Work with us" /><p className="ml-[16px] lg:text-[24px] md:text-[22px] text-[20px]">Careers</p></div></Link>
                            <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                            <Link to="/contact#header"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="phrase-sentiment.svg" alt="Contact Us" /><p className="ml-[16px] lg:text-[24px] md:text-[22px] text-[20px]">Contact Us</p></div></Link>
                        </div>
                        <div className="w-[100%]">
                                <a href="#header"><img className="lg:w-16 md:w-16 w-12 lg:mx-[88%] md:mx-[72%] mx-[84%] md:mt-[320px] mt-14 mb-0" src="arrow--up.svg" alt="Goto Top" /></a>    
                        </div>
                    </div>                
             </div>
            
            <div className="md:mt-12 mt-20 md:mb-14 mb-10 flex ibm-plex-serif-semibold md:text-[18px]">
            <Link to="/#header"><DotTCA /></Link>
            <p className="ml-4 mt-1 md:text-[20px] text-[16px]">© 2025. All Rights Reserved.</p>
            </div>
            
        </div>
    );
}