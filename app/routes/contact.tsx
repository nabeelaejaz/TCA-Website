import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "73f79c76-ec77-4ca3-a47e-f57248014056");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      window.location.href = "https://tca.com.pk/success#header";
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className="md:flex md:flex-row-reverse lg:ml-8 mt-20">
      <div className="md:w-[50%]">
        <img src="/payphone.webp" alt="payphone on the wall" />
      </div>
      <div className="md:w-[50%]">
          <form className="grid" onSubmit={onSubmit}>
            <label className="carbonlabel">Name</label>
            <input className="carboninput" name="name" placeholder="Type your name" type="text" required />
            <label className="carbonlabel">Email</label>
            <input className="carboninput" name="email" type="email" placeholder="Type your email address" required />
            <label className="carbonlabel">Message</label>
            <textarea className="carboninput carbontextbox" name="message" placeholder="Type your message here" required />
            <div className="flex">
              <button className="carbonbutton">Submit</button>
              <button className="carbonbutton carbonreset" type="reset">Reset</button>
            </div>
          </form>
          <div className='mt-4 ibm-plex-sans-regular text-[24px] text-red-700'>
             <span>{result}</span>
          </div>
      </div>
    </div>
  );
}