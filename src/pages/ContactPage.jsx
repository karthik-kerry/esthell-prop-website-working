import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import OfficeLocation from "../assets/OfficeLoc.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { Input, Button, Select } from "antd";
import "../styles/ContactUsPage.css";
import { useNavigate,useLocation } from "react-router-dom";


export default function ContactPage() {
  const { TextArea } = Input;
  const { Option } = Select;
  const [selectedValue, setSelectedValue] = useState(null);
  const [value, setValue] = useState("");
  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 550);
  }, [location]);

  return (
    <div>
      <Header />
      {/* hero section */}
      <div
       className="contactHeroContainer"
      >
        <img
          src={HeroBg}
         className="contactHeroBgImage"
        />
        <div
         className="contactOverlay"
        >
          <h1
           className="contactHeroTitle"
          >
            Contact Us
          </h1>
          <p
           className="contactHeroDescription"
          >
            We’d love to hear from you. Reach out to us for any property-related
            assistance.
          </p>
        </div>
      </div>
      <div
      className="contactContactSection"
      >
        <div
          className="contactWrapper"
        >
          {/* info */}
          <div className="contactInfoContainer">
            <div className="contactCard">
              <img src={OfficeLocation} className="contactIcon" />
              <p className="contactTitle">Office Address :</p>
              <p className="contactDetails">
                TS No: 1/10, No: 176, Inner Ring Road (South Segment),
                Velachery, opp. Sunshine School, Chennai, Tamil Nadu 600042
              </p>
            </div>
            <div className="contactCard">
              <img src={mail} className="contactIcon" />
              <p className="contactTitle">Email Address :</p>
              <p className="contactDetails">info@esthell.com</p>
              <p className="contactDetails">info@esthell.com</p>
            </div>
            <div className="contactCard">
              <img src={phone} className="contactIcon" />
              <p className="contactTitle">Phone Number :</p>
              <p className="contactDetails">+91 98888 88888</p>
              <p className="contactDetails">+91 98888 88888</p>
            </div>
          </div>

          {/* talk with us */}
          <div className="formContainer">
            <div className="formCard">
              <div className="formFields">
                <div className="fieldRow">
                  <Input className="inputField" placeholder="Name" />
                  <Input className="inputField" placeholder="Email Address" />
                </div>
                <div className="fieldRow">
                  <Input className="inputField" placeholder="Phone Number" />
                  <Select
                    className="selectField"
                    placeholder="Buy"
                    value={selectedValue}
                    onChange={handleChange}
                  >
                    <Option value="product1">Product 1</Option>
                    <Option value="product2">Product 2</Option>
                    <Option value="product3">Product 3</Option>
                  </Select>
                </div>
                <TextArea
                  className="textArea"
                  placeholder="Write Your Message Here!"
                  autoSize={{ minRows: 5, maxRows: 6 }}
                />
                <Button className="submitButton">Enquiry Now</Button>
              </div>
            </div>
            <div className="contactInfo">
              <p className="contactInfoTitle">Talk With Us</p>
              <p className="contactInfoText">
                Have questions about buying, selling, or renting a property? Our
                expert team is here to help you every step of the way. Whether
                you're exploring options or ready to make a move, feel free to
                reach out — we're just a message or call away.
              </p>
              <p className="contactInfoSubtitle">Social Media :</p>
              <div className="socialIconsContainer">
                <div className="ContactSocialIcons">
                  <TiSocialFacebook size={20} color="white" />
                </div>
                <div className="ContactSocialIcons">
                  <RiInstagramFill size={20} color="white" />
                </div>
                <div className="ContactSocialIcons">
                  <IoLogoLinkedin size={20} color="white" />
                </div>
                <div className="ContactSocialIcons">
                  <IoLogoWhatsapp size={20} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9870076954066!2d80.28735957367391!3d13.10000951205284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8124677793%3A0x97f482509d2f1ff1!2sKerry%20Indev%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1746779168972!5m2!1sen!2sin"
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
