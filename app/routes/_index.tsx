import type { MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';


export const meta: MetaFunction = () => {
  return [
    { title: "The Creative Authority" },
    { name: "description", content: "Pakistans Premium Shopify App Development & Design Agency" },
  ];
};

export default function Index() {
  return (
    <div className="w-[1200px] m-auto">
        <div className="ml-8 w-40 h-20">
          <img src="tcalogo2025.svg" alt="The Creative Authority" />
        </div>
        <div className="ml-8 mt-12">
          <img src="woman-stands.jpg" alt="Woman Stands with her arm folded in a store" />
        </div>
        <div>
          <p className="ibm-plex-serif-semibold text-[60px] text-center mt-12 leading-[72px]">Pakistan's Premium Shopify App<br></br>Development & Design Agency</p>
        </div>

        <div className="flex mt-20 ml-8">
          <div className="ibm-plex-sans-regular text-[28px] w-[50%] mr-4">
            We craft exceptional commerce through thoughtful design and user experience (UX), supporting both new Brand launches as well as existing website optimisation.

            <p className="ibm-plex-serif-semibold text-[32px] mt-8 mb-4">Customer Journey Experience</p>

            We specialise in crafting compelling customer journey experiences for your website, designed to build credibility and drive conversions. By focusing on intuitive navigation and personalised touchpoints, we ensure that every interaction with your brand is memorable and effective, leading to increased trust and successful outcomes.
          </div>
          <div className="w-[50%] ml-4">
            <img src="heart.jpg" alt="" />
          </div>

        </div>

    </div>
  );
};