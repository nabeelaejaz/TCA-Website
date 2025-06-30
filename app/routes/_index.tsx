import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "The Creative Authority" },
    { name: "description", content: "Pakistans Premium Shopify App Development & Design Agency" },
  ];
};

export default function Index() {
  return (
    <div className="lg:w-[1200px] md:w-[750px] w-[320px] m-auto">
        <div className="lg:ml-8 lg:w-48 md:w-40 w-32 lg:h-20 md:h-12 h-6">
          <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" version="1.1" viewBox="0 0 800 800">
  <g>
    <path class="st1" d="M138,236.31v6.9h19.32v57.02c0,4.97,2.59,7.45,7.78,7.45h6.62v-64.47h11.59c5.19,0,7.78-2.48,7.78-7.45v-6.9h-45.37c-5.15,0-7.73,2.48-7.73,7.45Z"/>
    <path class="st1" d="M210.08,307.68h6.68v-32.29h31.41v24.84c0,4.97,2.6,7.45,7.78,7.45h6.62v-78.82h-6.62c-5.19,0-7.78,2.48-7.78,7.45v24.73h-31.41v-32.18h-6.68c-5.15,0-7.73,2.48-7.73,7.45v63.91c0,4.97,2.58,7.45,7.73,7.45Z"/>
    <path class="st1" d="M292.81,286.48v-11.09h30.91c5.19,0,7.78-2.48,7.78-7.45v-6.9h-38.69v-10.99c0-2.06.57-3.71,1.71-4.97,1.14-1.25,2.63-1.88,4.47-1.88h24.73c5.19,0,7.78-2.48,7.78-7.45v-6.9h-32.57c-2.98,0-5.71.5-8.19,1.49-2.49.99-4.65,2.41-6.49,4.25-1.84,1.84-3.28,4.08-4.31,6.71-1.03,2.63-1.54,5.55-1.54,8.75v36.43c0,3.24.52,6.16,1.57,8.78,1.05,2.61,2.48,4.84,4.3,6.68,1.82,1.84,3.98,3.26,6.49,4.25,2.5.99,5.22,1.49,8.17,1.49h32.57v-6.9c0-5-2.59-7.51-7.78-7.51h-24.73c-1.84,0-3.33-.61-4.47-1.85-1.14-1.23-1.71-2.88-1.71-4.94Z"/>
    <path class="st1" d="M155.44,389.14v-25.34c0-1.91.44-3.73,1.33-5.44.88-1.71,2.1-3.21,3.64-4.5,1.55-1.29,3.35-2.31,5.41-3.06,2.06-.76,4.25-1.13,6.57-1.13,2.76,0,5.34.5,7.76,1.49,2.41.99,4.44,2.56,6.1,4.69,1.36,1.58,2.88,2.51,4.55,2.79,1.67.28,3.32.03,4.94-.74l6.29-3.15c-1.32-3.06-3.05-5.79-5.19-8.2-2.13-2.41-4.5-4.45-7.09-6.13-2.59-1.68-5.38-2.95-8.36-3.84-2.98-.89-5.98-1.33-9-1.33-8.57,0-15.84,2.72-21.8,8.17-6.33,5.67-9.49,12.46-9.49,20.37v25.34c0,7.95,3.16,14.76,9.49,20.42,6.03,5.37,13.3,8.06,21.8,8.06,3.05,0,6.07-.43,9.05-1.3,2.98-.87,5.77-2.13,8.36-3.81,2.59-1.67,4.95-3.73,7.07-6.15,2.11-2.43,3.84-5.15,5.16-8.17l-6.07-3.09c-1.84-.92-3.53-1.16-5.08-.72-1.55.44-3,1.31-4.36,2.59-2.61,2.36-5.04,3.99-7.29,4.91-2.24.92-4.53,1.38-6.84,1.38s-4.44-.38-6.49-1.13c-2.04-.76-3.84-1.78-5.41-3.09-1.56-1.3-2.8-2.82-3.7-4.53-.9-1.71-1.35-3.51-1.35-5.38Z"/>
    <path class="st1" d="M222.98,415.97h6.62v-27.71h16.01c2.57,0,4.29.94,5.13,2.82l8.94,20.37c.63,1.44,1.64,2.55,3.04,3.34,1.4.79,3.03,1.19,4.91,1.19h9.6l-10.21-23.4c-.55-1.32-1.16-2.51-1.82-3.56-.66-1.05-1.36-2-2.1-2.84,2.14-1.07,4.06-2.42,5.77-4.06,1.71-1.64,3.16-3.48,4.36-5.52,1.2-2.04,2.11-4.24,2.73-6.6.63-2.36.94-4.8.94-7.34,0-6.77-2.14-12.64-6.41-17.61-4.6-5.26-10.12-7.89-16.56-7.89h-30.97c-5.15,0-7.73,2.49-7.73,7.45v63.92c0,4.97,2.57,7.45,7.73,7.45ZM229.61,373.85v-22.35h24.34c1.14,0,2.23.3,3.28.91,1.05.61,1.96,1.41,2.73,2.4.77.99,1.39,2.17,1.85,3.53.46,1.36.69,2.8.69,4.3s-.23,3-.69,4.36c-.46,1.36-1.07,2.55-1.85,3.56-.77,1.01-1.68,1.81-2.73,2.4-1.05.59-2.14.88-3.28.88h-24.34Z"/>
    <path class="st1" d="M305.37,394.77v-11.09h30.91c5.19,0,7.78-2.49,7.78-7.45v-6.9h-38.69v-10.98c0-2.06.57-3.72,1.71-4.97s2.63-1.88,4.47-1.88h24.73c5.19,0,7.78-2.49,7.78-7.45v-6.9h-32.57c-2.98,0-5.71.5-8.2,1.49-2.48.99-4.65,2.41-6.48,4.25-1.84,1.84-3.28,4.07-4.31,6.71-1.03,2.63-1.55,5.55-1.55,8.75v36.43c0,3.24.53,6.16,1.57,8.78,1.05,2.61,2.49,4.84,4.31,6.68,1.82,1.84,3.98,3.26,6.48,4.25,2.5.99,5.23,1.49,8.17,1.49h32.57v-6.9c0-5.01-2.6-7.51-7.78-7.51h-24.73c-1.84,0-3.33-.62-4.47-1.85-1.14-1.23-1.71-2.88-1.71-4.94Z"/>
    <path class="st1" d="M387.6,352.83l9.77,27.38h-19.48l9.71-27.38ZM372.8,394.5h29.59l5.74,16.17c.63,1.73,1.55,3.05,2.79,3.95,1.23.9,2.73,1.35,4.5,1.35h9.82l-25.67-72.36c-.44-1.1-1.08-2.09-1.91-2.95-.83-.86-1.78-1.57-2.87-2.13-1.09-.55-2.24-.97-3.48-1.27-1.23-.3-2.49-.44-3.78-.44s-2.56.14-3.81.41c-1.25.28-2.4.7-3.45,1.27-1.05.57-1.99,1.29-2.82,2.15-.83.87-1.45,1.85-1.85,2.95l-23.13,65.19c-.33.92-.48,1.8-.44,2.65.04.85.25,1.61.63,2.29.39.68.96,1.22,1.71,1.63.76.41,1.68.61,2.79.61h8c.59-1.65,1.2-3.38,1.85-5.19.64-1.8,1.29-3.62,1.93-5.47.64-1.84,1.3-3.68,1.96-5.52.66-1.84,1.29-3.61,1.88-5.3Z"/>
    <path class="st1" d="M428.31,344.6v6.9h19.32v57.02c0,4.97,2.6,7.45,7.78,7.45h6.62v-64.47h11.59c5.19,0,7.78-2.49,7.78-7.45v-6.9h-45.37c-5.15,0-7.73,2.49-7.73,7.45Z"/>
    <path class="st1" d="M500.38,415.97h6.68v-78.82h-6.68c-5.15,0-7.73,2.49-7.73,7.45v63.92c0,4.97,2.58,7.45,7.73,7.45Z"/>
    <path class="st1" d="M571.68,342.45l-20.53,57.85h-.05c-3.75-10.56-7.49-21.07-11.2-31.52-3.72-10.45-7.43-20.99-11.15-31.63h-8c-1.07,0-1.98.22-2.73.66-.76.44-1.33,1.01-1.71,1.71-.38.7-.6,1.49-.63,2.37-.04.88.09,1.73.39,2.54l23.13,65.08c.4,1.1,1.02,2.09,1.85,2.95.83.86,1.78,1.58,2.84,2.15s2.23.99,3.48,1.27c1.25.28,2.5.41,3.75.41s2.55-.14,3.78-.41c1.23-.28,2.39-.7,3.48-1.27s2.04-1.28,2.87-2.13c.83-.85,1.46-1.82,1.91-2.93l25.67-72.42h-9.82c-1.77,0-3.28.46-4.53,1.38-1.25.92-2.17,2.23-2.76,3.92Z"/>
    <path class="st1" d="M610.79,394.77v-11.09h30.91c5.19,0,7.78-2.49,7.78-7.45v-6.9h-38.69v-10.98c0-2.06.57-3.72,1.71-4.97,1.14-1.25,2.63-1.88,4.47-1.88h24.73c5.19,0,7.78-2.49,7.78-7.45v-6.9h-32.56c-2.98,0-5.71.5-8.2,1.49-2.49.99-4.65,2.41-6.49,4.25-1.84,1.84-3.28,4.07-4.3,6.71-1.03,2.63-1.55,5.55-1.55,8.75v36.43c0,3.24.53,6.16,1.57,8.78,1.05,2.61,2.48,4.84,4.3,6.68,1.82,1.84,3.98,3.26,6.49,4.25s5.22,1.49,8.17,1.49h32.56v-6.9c0-5.01-2.59-7.51-7.78-7.51h-24.73c-1.84,0-3.33-.62-4.47-1.85-1.14-1.23-1.71-2.88-1.71-4.94Z"/>
    <path class="st1" d="M170.84,461.12l9.77,27.38h-19.48l9.71-27.38ZM156.05,502.79h29.58l5.74,16.17c.63,1.73,1.55,3.05,2.79,3.95,1.23.9,2.73,1.35,4.5,1.35h9.83l-25.67-72.36c-.44-1.1-1.08-2.09-1.91-2.95-.83-.87-1.78-1.57-2.87-2.13-1.09-.55-2.24-.98-3.48-1.27-1.23-.3-2.49-.44-3.78-.44s-2.56.14-3.81.41c-1.25.27-2.4.7-3.45,1.27-1.05.57-1.99,1.29-2.81,2.15-.83.86-1.45,1.85-1.85,2.95l-23.13,65.19c-.33.92-.48,1.8-.44,2.65.04.85.25,1.61.64,2.29.39.68.96,1.22,1.71,1.63.76.4,1.68.61,2.79.61h8c.59-1.66,1.2-3.39,1.85-5.19.64-1.8,1.29-3.62,1.93-5.46.64-1.84,1.3-3.68,1.96-5.52.66-1.84,1.29-3.61,1.88-5.3Z"/>
    <path class="st1" d="M216.09,452.89v44.55c0,7.95,3.18,14.75,9.55,20.42,6.03,5.37,13.3,8.06,21.8,8.06s15.67-2.69,21.75-8.06c6.33-5.7,9.49-12.51,9.49-20.42v-52h-6.62c-5.15,0-7.73,2.48-7.73,7.45v44.55c0,1.91-.46,3.73-1.38,5.44-.92,1.71-2.15,3.21-3.7,4.5-1.55,1.29-3.34,2.31-5.38,3.06-2.04.76-4.19,1.13-6.43,1.13s-4.5-.37-6.54-1.1c-2.04-.74-3.84-1.75-5.38-3.04-1.54-1.29-2.77-2.79-3.67-4.5-.9-1.71-1.35-3.54-1.35-5.49v-52h-6.68c-5.15,0-7.73,2.48-7.73,7.45Z"/>
    <path class="st1" d="M289.45,452.89v6.9h19.32v57.02c0,4.97,2.6,7.45,7.78,7.45h6.62v-64.47h11.59c5.19,0,7.78-2.48,7.78-7.45v-6.9h-45.37c-5.15,0-7.73,2.48-7.73,7.45Z"/>
    <path class="st1" d="M361.53,524.26h6.68v-32.29h31.41v24.84c0,4.97,2.6,7.45,7.78,7.45h6.62v-78.82h-6.62c-5.19,0-7.78,2.48-7.78,7.45v24.73h-31.41v-32.18h-6.68c-5.15,0-7.73,2.48-7.73,7.45v63.92c0,4.97,2.58,7.45,7.73,7.45Z"/>
    <path class="st1" d="M495.76,496.72v-23.96c0-8.24-3.46-15.25-10.38-21.03-3.27-2.76-6.85-4.81-10.73-6.15-3.88-1.34-8.07-2.01-12.56-2.01-9.05,0-16.82,2.72-23.29,8.17-6.92,5.81-10.38,12.82-10.38,21.03v23.96c0,8.35,3.46,15.4,10.38,21.14,6.44,5.37,14.2,8.06,23.29,8.06s16.71-2.69,23.29-8.06c6.92-5.7,10.38-12.75,10.38-21.14ZM442.77,496.72v-23.96c0-1.99.51-3.88,1.55-5.69,1.03-1.8,2.43-3.39,4.19-4.75,1.77-1.36,3.82-2.43,6.16-3.2,2.34-.77,4.81-1.16,7.42-1.16s5.03.39,7.37,1.16c2.34.77,4.4,1.83,6.18,3.18,1.78,1.34,3.2,2.92,4.25,4.72,1.05,1.8,1.57,3.72,1.57,5.74v23.96c0,2.06-.53,3.99-1.57,5.79-1.05,1.81-2.47,3.38-4.25,4.72-1.79,1.34-3.85,2.4-6.18,3.17-2.34.77-4.79,1.16-7.37,1.16s-5.09-.38-7.42-1.16c-2.34-.77-4.39-1.83-6.16-3.17-1.76-1.34-3.16-2.92-4.19-4.72-1.03-1.8-1.55-3.73-1.55-5.79Z"/>
    <path class="st1" d="M517.89,524.26h6.62v-27.71h16.01c2.57,0,4.29.94,5.13,2.82l8.94,20.37c.63,1.43,1.64,2.55,3.03,3.34,1.4.79,3.04,1.19,4.91,1.19h9.6l-10.21-23.4c-.55-1.33-1.16-2.51-1.82-3.56-.66-1.05-1.36-2-2.1-2.84,2.13-1.07,4.06-2.42,5.77-4.06,1.71-1.64,3.16-3.48,4.36-5.52,1.2-2.04,2.11-4.24,2.73-6.59.63-2.36.94-4.8.94-7.34,0-6.77-2.13-12.64-6.4-17.61-4.6-5.26-10.12-7.89-16.56-7.89h-30.96c-5.15,0-7.73,2.48-7.73,7.45v63.92c0,4.97,2.58,7.45,7.73,7.45ZM524.51,482.15v-22.36h24.34c1.14,0,2.24.3,3.28.91,1.05.61,1.96,1.41,2.73,2.4.77.99,1.39,2.17,1.85,3.53.46,1.36.69,2.8.69,4.31s-.23,3-.69,4.36c-.46,1.36-1.08,2.55-1.85,3.56-.77,1.01-1.68,1.81-2.73,2.4-1.05.59-2.14.88-3.28.88h-24.34Z"/>
    <path class="st1" d="M594.22,524.26h6.68v-78.82h-6.68c-5.15,0-7.73,2.48-7.73,7.45v63.92c0,4.97,2.57,7.45,7.73,7.45Z"/>
    <path class="st1" d="M612.21,452.89v6.9h19.32v57.02c0,4.97,2.59,7.45,7.78,7.45h6.62v-64.47h11.59c5.19,0,7.78-2.48,7.78-7.45v-6.9h-45.37c-5.15,0-7.73,2.48-7.73,7.45Z"/>
    <path class="st1" d="M670.27,453.83l24.62,40.4v22.57c0,4.97,2.57,7.45,7.73,7.45h6.62v-30.03l29.81-48.79h-11.31c-1.88,0-3.51.4-4.89,1.19-1.38.79-2.55,1.98-3.51,3.56-2.83,4.64-5.61,9.21-8.33,13.72-2.72,4.51-5.52,9.08-8.39,13.72h-1.16l-19.65-32.18h-7.95c-1.33,0-2.37.28-3.12.83-.76.55-1.25,1.26-1.49,2.13-.24.86-.26,1.78-.05,2.76.2.97.56,1.87,1.07,2.68Z"/>
  </g>
  <path class="st0" d="M114.61,485.64c0,16.85-13.66,30.51-30.51,30.51s-30.51-13.66-30.51-30.51,13.66-30.51,30.51-30.51,30.51,13.66,30.51,30.51"/>
</svg>
        </div>
        <div className="lg:ml-8 mt-20">
          <img src="woman-stands.webp" alt="Woman Stands with her arm folded in a store" />
        </div>
        <div>
          <p className="ibm-plex-serif-semibold lg:text-[52px] md:text-[42px] text-[20px] text-center lg:mt-16 md:mt-12 mt-6 lg:leading-[66px] md:leading-[54px]">Pakistan's Premium Shopify App<br></br>Development & Design Agency</p>
        </div>

        <div className="md:flex md:flex-row-reverse lg:mt-20 md:mt-16 mt-6 lg:ml-8">
          <div className="md:w-[50%] md:ml-4 md:p-2 p-4 md:mt-0 mt-4">
            <img src="heart.webp" alt="We grow together" />
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
          For e-commerce business owners, staying competitive goes beyond offering excellent products; it’s about delivering a superior shopping experience. Shopify users know that the key to enhancing their store lies in combining the right apps with custom Shopify theme development. These integration can elevate your store to the next level, improving customer usability and boosting your conversion rate.
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

        <div className="md:mt-20 mt-12 mb-12 justify-center flex">
          <button className="bg-blue-800 text-white p-[50px] md:w-[460px] w-[300px] md:h-[240px] h-[200px]"><p className="mt-[-34px] md:ml-[-84px] ml-[-52px] ibm-plex-sans-semibold md:text-[38px] text-[26px]">GOT A PROJECT?</p><p className="md:ml-[-106px] ml-[-62px] md:mt-[-6px] mt-[-4px] ibm-plex-sans-regular md:text-[26px] text-[18px]">Speak With Our Experts</p><img className="size-14 md:mt-16 mt-14 md:ml-80 ml-44" src="arrow--right.svg" alt="Contact Us" /></button>
        </div>

        <div className="md:mt-28 mb-20 flex ibm-plex-serif-semibold md:text-[18px]">
          <svg className="w-[80px]" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.1 28.08">
  <circle class="cls-2" cx="11.45" cy="14.35" r="5.21"/>
  <g>
    <path class="cls-3" d="M20.53,7.59h7.49v1.14c0,.82-.43,1.23-1.28,1.23h-1.91v10.64h-1.09c-.86,0-1.28-.41-1.28-1.23v-9.41h-3.19v-1.14c0-.82.43-1.23,1.28-1.23Z"/>
    <path class="cls-3" d="M32.14,17.06c.15.28.35.53.61.75s.56.39.89.51c.34.12.69.19,1.07.19s.76-.08,1.13-.23c.37-.15.77-.42,1.2-.81.22-.21.46-.36.72-.43.26-.07.53-.03.84.12l1,.51c-.22.5-.5.95-.85,1.35-.35.4-.74.74-1.17,1.02-.43.28-.89.49-1.38.63-.49.14-.99.21-1.49.21-1.4,0-2.6-.44-3.6-1.33-1.05-.94-1.57-2.06-1.57-3.37v-4.18c0-1.31.52-2.43,1.57-3.36.98-.9,2.18-1.35,3.6-1.35.5,0,.99.07,1.49.22.49.15.95.36,1.38.63.43.28.82.61,1.17,1.01.35.4.64.85.86,1.35l-1,.5-.04.02c-.27.13-.54.17-.82.12s-.53-.2-.75-.46c-.27-.35-.61-.61-1.01-.77s-.83-.25-1.28-.25c-.38,0-.74.06-1.08.19-.34.12-.64.29-.89.51-.25.21-.46.46-.6.74-.15.28-.22.58-.22.9v4.18c0,.31.07.61.22.89Z"/>
    <path class="cls-3" d="M43.62,17.93c-.11.3-.22.61-.32.91-.11.3-.21.6-.32.9s-.21.58-.31.86h-1.32c-.18,0-.34-.03-.46-.1s-.22-.16-.28-.27c-.06-.11-.1-.24-.1-.38,0-.14.02-.29.07-.44l3.82-10.76c.07-.18.17-.34.31-.49.14-.14.29-.26.46-.36.17-.09.36-.16.57-.21.21-.05.42-.07.63-.07s.42.02.62.07c.2.05.4.12.57.21.18.09.34.21.47.35.14.14.24.31.31.49l4.24,11.95h-1.62c-.29,0-.54-.07-.74-.22-.2-.15-.36-.37-.46-.65l-.95-2.67h-4.88c-.1.28-.2.57-.31.87ZM44.77,14.7h3.22l-1.61-4.52-1.6,4.52Z"/>
  </g>
  <rect class="cls-1" x="1.5" y="1.5" width="57.1" height="25.08"/>
</svg>
          <p className="md:ml-12 ml-8 mt-1">Careers</p>
          <p className="md:ml-12 ml-8 mt-1">Contact Us</p>
        </div>

    </div>
  );
};