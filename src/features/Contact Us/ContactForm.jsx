import Button from "@components/Button";
import Input from "@components/Input";
import { socialLinks } from "@layouts/index";
import React, { useState } from "react";

const ContactForm = () => {
   const ContactFormState = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  const { isLoading, setIsLoading } = useState(false);
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
    if (!validValues) {
      // toast.error("Please fill in all fields.");
      return;
    }

    if (!isEmail) {
      // toast.error("Enter a valid email address. Please check and try again.");
      return;
    }
    if (contactData.message.length < 6) {
      // toast.error("Message length should be > 6");
      return;
    }

    // const loginDetails = {
    //   email: loginData.email,
    //   password: loginData.password,
    // };

    try {
      // await dispatchEvent(sendLoginData(loginDetails, role));

      // Navigate to the appropriate dashboard
      // navigate(
      //   role === "admin" ? "/admin/dashboard" : `/${role.toLowerCase()}/home`
      // );
    } catch (err) {
      console.log(err)
      // toast.error(error || err.message || "An unexpected error occurred.");
    }
  };
  return (
    <div className="px-4 md:px-20 pt-1 md:pt-2">
      <div className="my-12 grid grid-cols-1 lg:grid-cols-2 space-x-10 space-y-10 mx-3 md:gap-4 md:mx-10">
        <div className="">
          <h1 className="font-bold text-[25px] md:text-5xl">Get in Touch – <br /> We're Here to Help!</h1>
          <p className="text-lg mt-6">
           Have questions or need assistance? Our team is always ready to guide you on your journey.
          </p>

          <div className="flex items-start flex-col md:flex-row space-y-6 justify-between mt-7">
              <div className="w-full">
                <h3 className="font-bold text-xl">Call Center</h3>
                <p className="mt-2 text-sm text-[#fafafa">(234) 8123-45678</p>
              </div>

              <div className="w-full">
                <h3 className="font-bold text-xl">Our Location</h3>
                <p className="mt-2 text-sm text-[#fafafa">Lagos, Nigeria</p>
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
                <p className="mt-2 text-sm">contact@procurify.com</p>
              </div>
          </div>
        </div>
        <div>
            <h1 className="text-2xl font-bold">Send Us a Message</h1>
            <form onSubmit={handleSubmit} className="mt-5">
            <Input
              type="text"
              label="Full Name"
              placeholder="John Doe"
              name="fullName"
              value={contactData.fullName}
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
              label={isLoading ? "Sending..." : "Send Message"}
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
