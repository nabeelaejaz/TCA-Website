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
        <div className="ml-8 w-44 h-20">
          <img src="tcalogo2025.svg" alt="The Creative Authority" />
        </div>
        <div className="ml-8 mt-16">
          <img src="woman-stands.jpg" alt="Woman Stands with her arm folded in a store" />
        </div>
        <div>
          <p className="ibm-plex-serif-semibold text-[52px] text-center mt-12 leading-[66px]">Pakistan's Premium Shopify App<br></br>Development & Design Agency</p>
        </div>

        <div className="flex mt-20 ml-8">
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] mr-4 leading-[36px]">
            We craft exceptional commerce through thoughtful design and user experience (UX), supporting both new Brand launches as well as existing website optimisation.

            <p className="ibm-plex-serif-semibold text-[32px] mt-8 mb-4">Customer Journey Experience</p>

            We specialise in crafting compelling customer journey experiences for your website, designed to build credibility and drive conversions. By focusing on intuitive navigation and personalised touchpoints, we ensure that every interaction with your brand is memorable and effective, leading to increased trust and successful outcomes.
          </div>
          <div className="w-[50%] ml-4">
            <img src="heart.jpg" alt="" />
          </div>
        </div>

        <div className="mt-16 ml-8">
          <img src="store-scanner.jpg" alt="Store Scanner" />
        </div>

        <div className="ibm-plex-serif-semibold text-[52px] text-center mt-12">
          Meet Your Certified Shopify Partner
          <p className="ibm-plex-sans-regular text-[36px]">Our Development Services Include:</p>
        </div>

        <div className="flex mt-16 ml-8">
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] mr-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Shopify Store Set-up</p>

            Our experts will build your Shopify store from the scratch and make it up and running in no time. Initial store set-up includes creating the storefront with unique designs, developing product pages and listing products, adding initial layouts, and Shopify cart customisation.
          </div>
          <div className="w-[50%] ml-4">
            <img src="shopify-setup.jpg" alt="Shopify Setup Displayed on Laptop" />
          </div>
        </div>

        <div className="flex mt-16 ml-8">
          <div className="w-[50%] mr-4">
            <img src="alesia.jpg" alt="Shopify Setup Displayed on Laptop" />
          </div>
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] ml-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Shopify Theme Customisation</p>

            Your Shopify store’s theme matters a lot as it makes the first impression. Our team will add a customised theme to your Shopify store as per your product niche so that your brand can stand out from the competition. Our expert designers will make your store visually appealing in order to ensure a great customer experience and ultimately lower the bounce rate.
          </div>         
        </div>

        <div className="flex mt-16 ml-8">
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] mr-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Shopify Migration Services</p>

            Shopify facilitates its customers to carry their online store data from anywhere on Shopify. If you started your online journey at some other business platform but now want to shift to Shopify, we are here to do it for you. Our developers have migrated a countless number of stores onto Shopify without any hassle. Be it Wordpress, Magento, or any other site, we will safely and smoothly migrate your online store to Shopify in a short time span.
          </div>
          <div className="w-[50%] ml-4">
            <img src="teamwork.jpg" alt="Shopify Setup Displayed on Laptop" />
          </div>
        </div>

        <div className="flex mt-16 ml-8">
          <div className="w-[50%] mr-4">
            <img src="instore.jpg" alt="Shopify Setup Displayed on Laptop" />
          </div>
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] ml-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Shopify Integration Services</p>

            We will integrate any third-party feature of your choice into your Shopify store in order to add custom functionality. Our team of developers aims to add maximum value to your Shopify store in order to make it versatile and fully functional.
          </div>         
        </div>

        <div className="flex mt-16 ml-8">
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] mr-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Shopify SEO</p>

            SEO is an integral part of any website development plan. We have SEO experts who will do thorough market research to devise an efficient SEO strategy for your Shopify store. Our SEO optimisation techniques hold the potential to take your store to new heights of success in terms of conversion and sales.
          </div>
          <div className="w-[50%] ml-4">
            <img src="ShopifySEO.jpg" alt="Woman Searching on her mobile" />
          </div>
        </div>

        <div className="flex mt-16 ml-8">
          <div className="w-[50%] mr-4">
            <img src="production.jpg" alt="Shopify in Production" />
          </div>
          <div className="ibm-plex-sans-regular text-[24px] w-[50%] ml-4 leading-[36px]">
            <p className="ibm-plex-serif-semibold text-[32px] mb-4">Updates and Maintenance</p>

            A sustainable online store needs continuous improvements in order to stay ahead of the competition. Our team will not only manage your Shopify store but will timely update it for the betterment and ensure a seamless user experience.
          </div>         
        </div>

        <div className="mt-20 ml-8">
          <img src="tap-and-beep.jpg" alt="Tap and Beep" />
        </div>

        <div className="pl-24 pr-24 pt-16 text-[36px] ibm-plex-serif-regular leading-[52px]">
          For e-commerce business owners, staying competitive goes beyond offering excellent products; it’s about delivering a superior shopping experience. Shopify users know that the key to enhancing their store lies in combining the right apps with custom Shopify theme development. These integration can elevate your store to the next level, improving customer usability and boosting your conversion rate.
        </div>

        <div className="mt-12 pl-24 pr-48 ibm-plex-sans-medium text-[44px] leading-[52px]">
          We build unified commerce solutions for every channel.
        </div>

        <div className="flex mt-24 justify-center">
          <div className="w-[350px] mr-8">
            <img src="directpurchase.jpg" alt="" />
            <p className="ibm-plex-sans-medium text-[28px] text-center mt-4">D2C</p>
          </div>
          <div className="w-[350px] ml-8">
            <img src="customersupport.jpg" alt="" />
            <p className="ibm-plex-sans-medium text-[28px] text-center mt-4">B2B</p>
          </div>

        </div>

    </div>
  );
};