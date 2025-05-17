import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import "../styles/Component.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { Drawer } from "antd";
import { useNavigate } from 'react-router-dom';

export default function Header() {
   const navigate = useNavigate();
  const handleEnquiryClick = () => {
    navigate('/contact'); 
  };
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // Link style
  const linkStyle = (path) => ({
    fontSize: 16,
    fontWeight: "500",
    color: location.pathname === path ? "#001C6B" : "#2D2D2D99",
    textDecoration: "none",
    transition: "color 0.3s",
  });

  const hoverStyle = {
    color: "#001C6B",
  };

  // Mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="headerContainer">
      <Link to="/">
        <img src={Logo} className="headerLogo" alt="Logo" />
      </Link>

      {/* Conditionally render based on isMobile */}
      {!isMobile ? (
        <>
          <div className="headerLinksContainer">
            {[
              { name: "Home", path: "/" },
              { name: "Listings", path: "/listings" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  ...linkStyle(link.path),
                  ...(hoveredLink === link.name ? hoverStyle : {}),
                }}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button  onClick={handleEnquiryClick} className="HeaderEnquiryButton">
            Enquiry Now
          </Button>
        </>
      ) : (
        // Hamburger Icon for small screens
        <div onClick={showDrawer}>
          <RxHamburgerMenu size={30} style={{margin:10}}/>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <Drawer
       
        placement={placement}
        width={250}
        height={500}
        onClose={onClose}
        open={open}
      >
        <div className="mobileDrawerLinks">
          {[
            { name: "Home", path: "/" },
            { name: "Listings", path: "/listings" },
            { name: "About Us", path: "/about" },
            { name: "Contact Us", path: "/contact" },
          ].map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={linkStyle(link.path)}
              onClick={onClose}  // Close the drawer when clicking a link
            >
              {link.name}
            </Link>
          ))}
           <Button  onClick={handleEnquiryClick}  className="HeaderEnquiryButton">
            Enquiry Now
          </Button>
        </div>
         
      </Drawer>
    </div>
  );
}
