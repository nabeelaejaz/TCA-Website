import DotTCA from "~/components/dottca";
import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <div className="md:mt-[100px] mt-[60px]">
            <div className="bg-[#E8E8E8] w-[100%] md:h-[424px] h-[340px]">
                    <a href="mailto: hello@tca.com.pk"><div className="flex ml-[48px] pt-[42px]"><img className="md:w-10 w-8" src="email.svg" alt="Email Us" /><p className="ml-[16px] md:text-[24px] text-[20px]">hello@tca.com.pk</p></div></a>
                    <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                    <a href="tel:+923052837680"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="phone.svg" alt="Call Us" /><p className="ml-[16px] md:text-[24px] text-[20px]">0305 2837680</p></div></a>
                    <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                    <Link to="/careers"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="sprout.svg" alt="Work with us" /><p className="ml-[16px] md:text-[24px] text-[20px]">Careers</p></div></Link>
                    <hr className="md:w-80 h-[1px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-6" />
                    <Link to="/contact"><div className="flex ml-[48px] pt-[10px]"><img className="md:w-10 w-8" src="phrase-sentiment.svg" alt="Contact Us" /><p className="ml-[16px] md:text-[24px] text-[20px]">Contact Us</p></div></Link>

            </div>
            
            <div className="md:mt-20 mt-10 mb-20 flex ibm-plex-serif-semibold md:text-[18px]">
            <DotTCA />
            <p className="ml-4 mt-1 md:text-[20px] text-[16px]">© 2025. All Rights Reserved.</p>
            </div>
            <hr className="md:w-[480px] h-[1px] md:mt-[-42px] mt-[-50px] bg-[#5E5E5E] border-0 md:mb-24 mb-12" />
            
        </div>
    );
}