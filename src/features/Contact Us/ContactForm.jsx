import Button from "@components/Button";
import Input from "@components/Input";
import { socialLinks } from "@layouts/index";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const ContactForm = () => {
   const ContactFormState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState(ContactFormState);

  const validValues = Object.values(contactData).every((el) => el);
  const isEmail =
    contactData.email.includes("@") && contactData.email.includes(".");

  // const navigate = useNavigate();
  // const dispatchEvent = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    // console.log(contactData)
    if (!validValues) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!isEmail) {
      toast.error("Enter a valid email address. Please check and try again.");
      return;
    }
    if (contactData.message.length < 6) {
      toast.error("Message length should be > 6");
      return;
    }


    try {
      const res = await fetch('https://api.withprocurify.com/v1/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      console.log(res)
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      
      toast.success("Message sent successfully.");
      setContactData(ContactFormState);
      // navigate("/");
    } catch (err) {
      // console.log(err)
      toast.error(err || err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-4 md:px-20 pt-1 md:pt-2">
      <ToastContainer />
      <div className="my-12 grid grid-cols-1 lg:grid-cols-2 space-x-10 space-y-10 mx-3 gap-8 md:gap-4 md:mx-10">
        <div className="order-2 md:order-1">
          <h1 className="font-bold text-[25px] md:text-5xl">Get in Touch – <br /> We're Here to Help!</h1>
          <p className="text-lg mt-6">
           Have questions or need assistance? Our team is always ready to guide you on your journey.
          </p>

          <div className="flex items-start flex-col md:flex-row space-y-6 justify-between mt-7">
              <div className="w-full">
                <h3 className="font-bold text-xl">Call Center</h3>
                {/* <p className="mt-2 text-sm text-[#fafafa">(234) 8123-45678</p> */}
              </div>

              <div className="w-full">
                <h3 className="font-bold text-xl">Our Location</h3>
                <p className="mt-2 text-sm text-[#fafafa">C1548, 4th Floor, No. 190 Xianlie East Road, Dahe District, Guangzhou</p>
              </div>
          </div>
           <div className="flex items-start flex-col md:flex-row space-y-6 justify-between mt-6">
              <div className="w-full">
                <h3 className="font-bold text-xl">Social Network</h3>
                <div className="flex items-center space-x-2 mt-2">
                          {socialLinks.map((link) => (
                            <a href={link.href} key={link.id}>
                              <div className="border border-[#e0e0e0] p-2 rounded-full">
                                {<link.icon size={20} />}
                              </div>
                            </a>
                          ))}
                        </div>
              </div>

              <div className="w-full">
                <h3 className="font-bold text-xl">Email</h3>
                <p className="mt-2 text-sm">support@withprocurify.com</p>
              </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
            <h1 className="text-2xl font-bold">Send Us a Message</h1>
            <form onSubmit={handleSubmit} className="mt-5">
            <Input
              type="text"
              label="Full Name"
              placeholder="Full Name"
              name="name"
              value={contactData.name}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              label="Email Address"
              placeholder="address@example.com"
              name="email"
              value={contactData.email}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              label="Subject"
              placeholder="Subject"
              name="subject"
              value={contactData.subject}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              label="Message"
              placeholder="Your message"
              name="message"
              value={contactData.message}
              onChange={handleOnChange}
            />
           
            <Button
              label={isLoading ? "Sending Messages..." : "Send Message"}
              isLoading={isLoading}
              className="w-full flex justify-center p-5 text-sm text-white rounded-lg cursor-pointer bg-secondary"
              disabled={!validValues || !isEmail}
              style={isLoading ? { opacity: 0.9 } : {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
