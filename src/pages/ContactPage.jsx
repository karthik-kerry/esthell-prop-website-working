import { useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import OfficeLocation from "../assets/officeLocation.svg";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import officeMail from "../assets/officeMail.svg";
import officePhone from "../assets/officePhone.svg";
import { Input, Button, Select } from "antd";
import "../styles/ContactUsPage.css";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

export default function ContactPage() {
  const { TextArea } = Input;
  const { Option } = Select;
  const form = useRef();
  const [selectedValue, setSelectedValue] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
    setSubmittedData(data);
    // emailjs
    //   .sendForm(
    //     "service_ekwkjks",
    //     "template_7xitgzq",
    //     form.current,
    //     "VMqSQ0o0aZJrOybL3"
    //   )
    //   .then(
    //     (result) => {
    //       alert("Message sent!");
    //     },
    //     (error) => {
    //       alert("Failed to send message");
    //     }
    //   );
  };
  return (
    <div>
      <Helmet>
        <title>Contact Us — Esthell Properties</title>
        <meta name="description" content="Learn about Esthell Properties..." />
      </Helmet>
      <Header />
      {/* hero section */}
      <div className="contactHeroContainer">
        <img src={HeroBg} alt="" className="contactHeroBgImage" />
        <div className="contactOverlay">
          <h1 className="contactHeroTitle">Contact Us</h1>
          <p className="contactHeroDescription">
            We’d love to hear from you. Reach out to us for any property-related
            assistance.
          </p>
        </div>
      </div>
      <div className="contactContactSection">
        <div className="contactWrapper">
          {/* talk with us */}
          <div className="formContainer">
            <form ref={form} onSubmit={sendEmail} className="formCard">
              <div className="formFields">
                <div className="fieldRow">
                  <Input
                    name="user_name"
                    className="inputField"
                    placeholder="Name"
                    required
                  />
                  <Input
                    name="user_email"
                    className="inputField"
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </div>
                <div className="fieldRow">
                  <Input
                    name="user_phone"
                    className="inputField"
                    placeholder="Phone Number"
                    required
                  />
                  <Select
                    name="user_selection"
                    className="selectField"
                    placeholder="Buy"
                    value={selectedValue || undefined}
                    onChange={(value) => handleChange(value)}
                  >
                    <Option value="buy">Buy</Option>
                    <Option value="rent">Rent</Option>
                    <Option value="commercial">Commercial</Option>
                  </Select>
                  {/* Hidden input to include in FormData */}
                  <input
                    type="hidden"
                    name="user_selection"
                    value={selectedValue}
                  />
                </div>
                <TextArea
                  name="message"
                  className="textArea"
                  placeholder="Write Your Message Here!"
                  autoSize={{ minRows: 5, maxRows: 6 }}
                  required
                />
                <Button htmlType="submit" className="submitButton">
                  Enquiry Now
                </Button>
              </div>
            </form>

            <div className="contactInfo">
              <div className="contactUsInfoContainer">
                <div className="contactUsCard">
                  <img src={OfficeLocation} alt="" className="contactIcon" />
                  <p>
                    TS No: 1/10, No: 176, Inner Ring Road (South Segment),,
                    Velachery,, Opp. Sunshine School,, Chennai, Tamil Nadu
                    600042
                  </p>
                </div>
                <div className="contactUsCard">
                  <img src={officeMail} alt="" className="contactIcon" />
                  <p>vpraveen@esthellproperties.com</p>
                </div>
                <div className="contactUsCard">
                  <img src={officePhone} alt="" className="contactIcon" />
                  <p>+91-72182 12345</p>
                  <p>+91-74182 01555</p>
                </div>
              </div>
              <p className="contactInfoSubtitle">Social Media :</p>
              <div className="socialIconsContainer">
                <div className="ContactSocialIcons">
                  <a
                    href="https://www.instagram.com/esthellproperties?igsh=MWhjY21tN3VzMWRnaQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiInstagramFill size={20} color="white" />
                  </a>
                </div>
                <div className="ContactSocialIcons">
                  <IoLogoLinkedin size={20} color="white" />
                </div>
                <div className="ContactSocialIcons">
                  <a
                    href="https://wa.me/917218212345?text=Hi%20I%20am%20interested%20in%20a%20property%20enquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp size={24} color="white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.0276592160058!2d80.2106945!3d12.9747379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dde1051c295%3A0xdefad79426dff8db!2sEsthell%20Homes!5e1!3m2!1sen!2sin!4v1747818028570!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
