import TcaLogo from "./tcalogo";
import { Link } from "@remix-run/react";

export default function Header() {
    return (
        <div id="header" className="flex">
          <div className="w-[50%]">
              <div className="lg:ml-8 lg:w-48 w-32 lg:h-20 md:h-12 h-8">
                 <Link to="/"><TcaLogo /></Link>
              </div>
          </div>
          <div className="w-[50%]">
            <a href="#footer"><img className="md:w-[64px] w-[44px] md:mx-[88%] mx-[72%] md:mt-[56px] mt-[40px] md:mb-[-100px] mb-[-600px]" src="ibm-watsonx--assistant.svg" alt="Talk to us" /></a>
          </div>
        </div>
    );
}