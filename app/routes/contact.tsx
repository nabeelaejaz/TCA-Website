import { Form } from "@remix-run/react";

export default function Contact() {
  return (
    <div className="md:flex md:flex-row-reverse lg:ml-8 mt-20">
      <div className="md:w-[50%]">
        <img src="/payphone.webp" alt="payphone on the wall" />
      </div>
      <div className="md:w-[50%]">
          <form className="grid" name="contactform" netlify-honeypot="bot-field"
                    action="/success" data-netlify="true">
            <label className="carbonlabel">Name</label>
            <input className="carboninput" name="name" placeholder="Type your name" type="text" />
            <label className="carbonlabel">Email</label>
            <input className="carboninput" name="email" type="email" placeholder="Type your email address" />
            <label className="carbonlabel">Message</label>
            <textarea className="carboninput carbontextbox" name="message" placeholder="Type your message here" />
            <div className="flex">
              <button className="carbonbutton">Submit</button>
              <button className="carbonbutton carbonreset" type="reset">Reset</button>
            </div>
          </form>
      </div>
    </div>
  );
}