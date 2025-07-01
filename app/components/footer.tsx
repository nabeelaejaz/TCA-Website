import DotTCA from "~/components/dottca";
import { Link } from "@remix-run/react";

export default function Footer() {
    return (
        <div className="mt-[100px]">
            <div className="bg-[#E8E8E8] w-[100%] h-[488px]">
                    <a href="mailto: hello@tca.com.pk"><div className="flex ml-[48px] pt-[50px]"><img className="w-10" src="email.svg" alt="Email Us" /><p className="ml-[16px] text-[24px]">hello@tca.com.pk</p></div></a>
                    <hr className="w-80 h-[1.5px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-8" />
                    <a href="tel:+923052837680"><div className="flex ml-[48px] pt-[10px]"><img className="w-10" src="phone.svg" alt="Call Us" /><p className="ml-[16px] text-[24px]">0305 2837680</p></div></a>
                    <hr className="w-80 h-[1.5px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-8" />
                    <Link to="/careers"><div className="flex ml-[48px] pt-[10px]"><img className="w-10" src="sprout.svg" alt="Work with us" /><p className="ml-[16px] text-[24px]">Careers</p></div>
                    <hr className="w-80 h-[1.5px] mx-[48px] my-4 bg-[#5E5E5E] border-0 md:my-8" /></Link>
                    <Link to="/contact"><div className="flex ml-[48px] pt-[10px]"><img className="w-10" src="phrase-sentiment.svg" alt="Contact Us" /><p className="ml-[16px] text-[24px]">Contact Us</p></div></Link>

            </div>
            
            <div className="md:mt-20 mb-20 flex ibm-plex-serif-semibold md:text-[18px]">
            <DotTCA />
            <p className="ml-4 mt-1 text-[20px]">© 2025. All Rights Reserved.</p>
            </div>
            <hr className="w-[480px] h-[1.5px] mt-[-42px] bg-[#5E5E5E] border-0 mb-24" />
            
        </div>
    );
}