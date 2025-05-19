import React from "react";
import Playstore from "../assets/playstore.png";
import Appstore from "../assets/appstore.png";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import '../styles/Component.css';

export default function Footer() {
  return (
    <div>
      <div className="footerTop">
        <div className="footerTopLeft">
          <div className="iconContainer">
            <FaLocationDot />
          </div>
          <p className="footerText">
            TS No: 1/10, No: 176, Inner Ring Road (South Segment), Velachery,
            opp. Sunshine School, Chennai, Tamil Nadu 600042
          </p>
        </div>
        <div className="footerTopMiddle">
          <div className="iconContainer">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="footerText">+91-74182 01555</p>
            <p className="footerText" style={{marginTop:-10}}>+91-74182 02555</p>
          </div>
        </div>
        <div className="footerTopRight">
          <div className="iconContainer">
            <MdMail />
          </div>
          <p className="footerText">salesegs@esthell.com</p>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomLeft">
          <p className="footerCategory">Get Our App</p>
          <p style={{ color: "white", fontSize: 16 }}>Download the app and book your property</p>
          <div className="footerLink">
            <Link to="/">
              <img src={Playstore} style={{ width: 150 }} alt="Play Store" />
            </Link>
            <Link to="/">
              <img src={Appstore} style={{ width: 150 }} alt="App Store" />
            </Link>
          </div>
          <p className="footerCategory">Connect with us</p>
          <div className="socialIcons">
            <div className="socialIcon">
              <TiSocialFacebook size={20} color="#00174E" />
            </div>
            <div className="socialIcon">
              <RiInstagramFill size={20} color="#00174E" />
            </div>
            <div className="socialIcon">
              <IoLogoLinkedin size={20} color="#00174E" />
            </div>
            <div className="socialIcon">
              <IoLogoWhatsapp size={20} color="#00174E" />
            </div>
          </div>
        </div>
        <div className="CategoryContainer">
        <div>
          <p className="footerCategory">Explore</p>
          {['Listings', 'Listings', 'Listings', 'Listings', 'Listings'].map((item, index) => (
            <Link key={index} to="/" className="footerLinkItem">
              <FaChevronRight size={16} color="white" />
              {item}
            </Link>
          ))}
        </div>
        <div>
          <p className="footerCategory">Categories</p>
          {['Apartments', 'Home', 'Office', 'Villas', 'Flat'].map((item, index) => (
            <Link key={index} to="/" className="footerLinkItem">
              <FaChevronRight size={16} color="white" />
              {item}
            </Link>
          ))}
        </div>
        <div>
          <p className="footerCategory">Locations</p>
          {['Chennai', 'Coimbatore', 'Salem', 'Tiruvallur', 'Madurai'].map((location, index) => (
            <Link key={index} to="/" className="footerLinkItem">
              <FaChevronRight size={16} color="white" />
              {location}
            </Link>
          ))}
        </div>
        <div>
          <p className="footerCategory">Quick Links</p>
          {['About', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map((item, index) => (
            <Link key={index} to="/" className="footerLinkItem">
              <FaChevronRight size={16} color="white" />
              {item}
            </Link>
          ))}
        </div>
        </div>

      </div>
      <div className="footerCopyright">
        <p>Copyright 2025 - All right reserved</p>
      </div>
    </div>
  );
}
