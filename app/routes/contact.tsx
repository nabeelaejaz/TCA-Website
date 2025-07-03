import { Form } from "@remix-run/react";

export default function Contact() {
  return (
    <div className="md:flex md:flex-row-reverse lg:ml-8 mt-20">
      <div className="md:w-[50%]">
        <img src="/payphone.webp" alt="payphone on the wall" />
      </div>
      <div className="md:w-[50%]">
          <Form className="grid" action="" method="post">
            <label className="carbonlabel">Name</label>
            <input className="carboninput" name="description" placeholder="Type your name" type="text" />
            <label className="carbonlabel">Email</label>
            <input className="carboninput" name="description" type="text" placeholder="Type your email address" />
            <label className="carbonlabel">Message</label>
            <textarea className="carboninput carbontextbox" name="description" placeholder="Type your message here" type="text" />
            <div className="flex">
              <button className="carbonbutton">Submit</button>
              <button className="carbonbutton carbonreset" type="reset">Reset</button>
            </div>
          </Form>
      </div>
    </div>
  );
}