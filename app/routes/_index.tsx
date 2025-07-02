import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "The Creative Authority" },
    { name: "description", content: "Pakistans Premium Shopify App Development & Design Agency" },
  ];
};

export default function Index() {
  return (
    <div>
        <div className="lg:ml-8 mt-20">
          <img src="woman-stands.webp" width="1168px" height="570px" alt="Woman Stands with her arm folded in a store" />
        </div>
        <div>
          <p className="ibm-plex-serif-semibold lg:text-[52px] md:text-[42px] text-[20px] text-center lg:mt-16 md:mt-12 mt-6 lg:leading-[66px] md:leading-[54px]">Pakistan's Premium Shopify App<br></br>Development & Design Agency</p>
        </div>

        <div className="md:flex md:flex-row-reverse lg:mt-20 md:mt-16 mt-6 lg:ml-8">
          <div className="md:w-[50%] md:ml-4 md:p-2 p-4 md:mt-0 mt-4">
            <img src="heart.webp" width="552px" height="421px" alt="We grow together" />
          </div>
          
          <div className="ibm-plex-sans-regular md:text-[24px] text-[18px] md:w-[50%] mr-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            We craft exceptional commerce through thoughtful design and user experience (UX), supporting both new Brand launches as well as existing website optimisation.

            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mt-8 mb-4 md:leading-[36px]">Customer Journey Experience</p>

            We specialise in crafting compelling customer journey experiences for your website, designed to build credibility and drive conversions. By focusing on intuitive navigation and personalised touchpoints, we ensure that every interaction with your brand is memorable and effective, leading to increased trust and successful outcomes.
          </div>
          
        </div>

        <div className="lg:mt-32 md:mt-16 mt-10 lg:ml-8">
          <img src="store-scanner.webp" alt="Store Scanner" />
        </div>

        <div className="ibm-plex-serif-semibold lg:text-[52px] md:text-[42px] text-[20px] text-center lg:mt-20 md:mt-16 mt-8">
          Meet Your Certified Shopify Partner
          <p className="ibm-plex-sans-regular lg:text-[36px] md:text-[32px] text-[18px]">Our Development Services Include:</p>
        </div>

        <div className="md:flex md:flex-row-reverse fl lg:mt-28 md:mt-24 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:ml-4 md:p-2 p-4 md:mt-0 mt-4">
            <img src="shopify-setup.webp" alt="Shopify Setup Displayed on Laptop" />
          </div>
          
          <div className="ibm-plex-sans-regular md:text-[24px] text-[18px] md:w-[50%] mr-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4">Shopify Store Set-up</p>

            Our experts will build your Shopify store from the scratch and make it up and running in no time. Initial store set-up includes creating the storefront with unique designs, developing product pages and listing products, adding initial layouts, and Shopify cart customisation.
          </div>
          
        </div>

        <div className="md:flex lg:mt-28 md:mt-20 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:mr-4 md:p-2 p-4">
            <img src="alesia.webp" alt="Shopify Setup Displayed on Laptop" />
          </div>

          
          <div className="ibm-plex-sans-regular md:text-[24px] text-[18px] md:w-[50%] md:ml-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4 md:leading-[36px]">Shopify Theme Customisation</p>

            Your Shopify store’s theme matters a lot as it makes the first impression. Our team will add a customised theme to your Shopify store as per your product niche so that your brand can stand out from the competition. Our expert designers will make your store visually appealing in order to ensure a great customer experience and ultimately lower the bounce rate.
          </div>         
        </div>

        <div className="md:flex md:flex-row-reverse lg:mt-28 md:mt-20 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:ml-4 md:p-2 p-4">
            <img src="teamwork.webp" alt="Shopify Setup Displayed on Laptop" />
          </div>
          
          <div className="ibm-plex-sans-regular md:text-[24px] text-[20px] md:w-[50%] mr-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4 md:leading-[36px]">Shopify Migration Services</p>

            Shopify facilitates its customers to carry their online store data from anywhere on Shopify. If you started your online journey at some other business platform but now want to shift to Shopify, we are here to do it for you. Our developers have migrated a countless number of stores onto Shopify without any hassle. Be it Wordpress, Magento, or any other site, we will safely and smoothly migrate your online store to Shopify in a short time span.
          </div>
          
        </div>

        <div className="md:flex lg:mt-28 md:mt-20 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:mr-4 md:p-2 p-4">
            <img src="instore.webp" alt="Shopify Setup Displayed on Laptop" />
          </div>
          <div className="ibm-plex-sans-regular md:text-[24px] text-[20px] md:w-[50%] md:ml-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4 md:leading-[36px]">Shopify Integration Services</p>

            We will integrate any third-party feature of your choice into your Shopify store in order to add custom functionality. Our team of developers aims to add maximum value to your Shopify store in order to make it versatile and fully functional.
          </div>         
        </div>

        <div className="md:flex md:flex-row-reverse lg:mt-28 md:mt-20 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:ml-4 md:p-2 p-4">
            <img src="ShopifySEO.webp" alt="Woman Searching on her mobile" />
          </div>
          
          <div className="ibm-plex-sans-regular md:text-[24px] text-[18px] md:w-[50%] mr-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4">Shopify SEO</p>

            SEO is an integral part of any website development plan. We have SEO experts who will do thorough market research to devise an efficient SEO strategy for your Shopify store. Our SEO optimisation techniques hold the potential to take your store to new heights of success in terms of conversion and sales.
          </div>
          
        </div>

        <div className="md:flex lg:mt-28 md:mt-20 mt-12 lg:ml-8">
          <div className="md:w-[50%] md:mr-4 md:p-2 p-4">
            <img src="production.webp" alt="Shopify in Production" />
          </div>
          <div className="ibm-plex-sans-regular md:text-[24px] text-[18px] md:w-[50%] md:ml-4 lg:leading-[36px] md:leading-[32px] leading-[28px]">
            <p className="ibm-plex-serif-semibold md:text-[32px] text-[20px] mb-4 md:leading-[36px] leadind-[28px]">Updates and Maintenance</p>

            A sustainable online store needs continuous improvements in order to stay ahead of the competition. Our team will not only manage your Shopify store but will timely update it for the betterment and ensure a seamless user experience.
          </div>         
        </div>

        <div className="lg:mt-36 md:mt-28 mt-16 lg:ml-8">
          <img src="tap-and-beep.webp" alt="Tap and Beep" />
        </div>

        <div className="md:pl-24 pl-4 md:pr-24 pr-8 md:pt-16 pt-8 lg:text-[32px] md:text-[28px] text-[20px] ibm-plex-serif-regular lg:leading-[52px]">
          For e-commerce business owners, staying competitive goes beyond offering excellent products; it’s about delivering a superior shopping experience. Shopify users know that the key to enhancing their store lies in combining the right apps with custom Shopify theme development. These integration can elevate your store to the next level, improving customer usability & boosting your conversion rate.
        </div>

        <div className="mt-16 lg:pl-24 lg:pr-48 md:pl-20 md:pr-32 ibm-plex-sans-medium md:text-[32px] text-[24px] lg:leading-[52px] text-center">
          We build unified commerce solutions for every channel.
        </div>

        <div className="flex mt-12 justify-center">
          <div className="lg:w-[350px] md:w-[260px] md:mr-8 mr-2">
            <img src="directpurchase.webp" alt="Online Transaction" />
            <p className="ibm-plex-sans-medium md:text-[28px] text-[20px] text-center mt-4">D2C</p>
          </div>
          <div className="lg:w-[350px] md:w-[260px] md:ml-8 ml-2">
            <img src="customersupport.webp" alt="Customer Support" />
            <p className="ibm-plex-sans-medium md:text-[28px] text-[20px] text-center mt-4">B2B</p>
          </div>
        </div>

        <div className="md:mt-12 mt-12 mb-12 justify-center flex">
          <Link to="/contact" className="bg-blue-800 text-white p-[50px] md:w-[460px] w-[300px] md:h-[240px] h-[200px]"><p className="mt-[-34px] md:ml-[-24px] ml-[-32px] ibm-plex-sans-semibold md:text-[38px] text-[26px]">GOT A PROJECT?</p><p className="md:ml-[-20px] ml-[-30px] md:mt-[-6px] mt-[-4px] ibm-plex-sans-regular md:text-[26px] text-[18px]">Speak With Our Experts</p><img className="size-14 md:mt-16 mt-14 md:ml-80 ml-44" src="arrow--right.svg" alt="Contact Us" /></Link>
        </div>

    </div>
  );
}; 