import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBg from "../assets/HomeBg.png";
import HomeBg1 from "../assets/HomeBg1.png";
import HeroImg from "../assets/hero_img.png";
import { Button, Dropdown, Input, Space } from "antd";
import { TbHomeDollar } from "react-icons/tb";
import { DownOutlined } from "@ant-design/icons";
import SearchIcon from "../assets/search.png";
import SelectIcon from "../assets/select.png";
import BookIcon from "../assets/book.png";
import HousesIcon from "../assets/houses.png";
import ApartmentIcon from "../assets/apartment.png";
import VillasIcon from "../assets/villas.png";
import OfficeIcon from "../assets/office.png";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import Chennai from "../assets/chennai.png";
import Coimbatore from "../assets/coimbatore.png";
import Madurai from "../assets/madurai.png";
import Trichy from "../assets/trichy.png";
import Tirunelvelli from "../assets/tirunelvelli.png";
import Tiruppur from "../assets/tiruppur.png";
import Bangalore from "../assets/bangalore.png";
import Erode from "../assets/erode.png";
import Salem from "../assets/salem.png";
import EsthellFlats from "../assets/esthell_apartments.png";
import Logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import "../styles/HomePage.css";

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        2nd menu item
      </a>
    ),
    //   icon: <SmileOutlined />,
    //   disabled: true,
  },
  {
    key: "3",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        3rd menu item
      </a>
    ),
    //   disabled: true,
  },
];
const currentProperties = [
  {
    id: 1,
    name: "Esthell Homes",
    location: "kolathur, Chennai",
    price: "₹1.64L",
    type: "Apartment / Plot ",
    images: ["/image1.jpg", "/image2.jpg", "/image3.jpg"],
    yearBuilt:2025,
    facing:"East",
    specs: {
      bedrooms: 2.5,
      baths: 2,
      sqft: "1492 Sqft",
    },
    details:{
     specification:"2BHK +2 T + S",
     furnishing:"No",
     flatNo:"9C",
     FloorNo:"9",
     builtUpArea:"1492",
    },
    highlights: ["East facing"],
    description:
      "Spacious 2.5 BHK with 2 bathrooms, ideally located near schools and the railway station for convenient living.",
    listedOn: "20 Mar 2025",
    company: {
      name: "Esthell Properties",
      logo: "/logo.png",
    },
  },
  {
    id: 2,
    name: "Esthell Homes",
    location: " kolathur, Chennai",
    price: "₹2.07 Cr",
    type: "Apartment / Plot ",
    images: ["/image4.jpg", "/image5.jpg", "/image6.jpg"],
     yearBuilt:2025,
    facing:"West",
    specs: {
      bedrooms: 3,
      baths: 3,
      sqft: "1930 Sqft",
    },
     details:{
     specification:"3BHK +3T",
     furnishing:"No",
     flatNo:"5B",
     FloorNo:"5",
     builtUpArea:"1930",
    },
    highlights: ["West facing"],
    description:
      "Spacious 3 BHK with 3 bathrooms, perfectly located near the railway station and top schools for your convenience.",
    listedOn: "20 mar 2025",
    company: {
      name: "Esthell Homes",
      logo: "/logo.png",
    },
  },
  {
    id: 3,
    name: "Esthell Homes",
    location: "Velachery, Chenna",
    price: "₹ 3.24 Cr",
    type: "Apartment / Plot ",
    images: ["/image7.jpg", "/image8.jpg", "/image9.jpg"],
     yearBuilt:2025,
    facing:"East",
    specs: {
      bedrooms: "DUPLEX 4",
      baths: 3,
      sqft: "2897 Sqft",
    },
     details:{
     specification:"4BHK +3T",
     furnishing:"No",
     flatNo:"11 C",
     FloorNo:"11",
     builtUpArea:"2897",
    },
    highlights: ["East Facing"],
    description:
      "Spacious DUPLEX apartment perfectly located near the railway station and top schools—ideal for modern living!",
    listedOn: "20 mar 2025",
    company: {
      name: "Esthell Homes",
      logo: "/logo.png",
    },
  },
  {
    id: 4,
    name: "Olive Sands",
    location: " Uthandi, Chennai",
    price: "₹9 Cr",
    type: "Individual Villa / Plot ",
    images: ["/image10.jpg", "/image11.jpg", "/image12.jpg"],
     yearBuilt:2025,
    facing:"South",
    specs: {
      bedrooms: false,
      baths: false,
      sqft: "4.55 Grounds",
    },
     details:{
     specification:"-",
     furnishing:"No",
     flatNo:"-",
     FloorNo:"-",
     builtUpArea:"4.55 Grounds",
    },
    highlights: ["South facing plot"],
    description:
      "Premium 4.55 grounds south-facing plot available at ₹9 Cr – perfect for your next dream development!",
    listedOn: "20 mar 2025",
    company: {
      name: "Esthell Homes",
      logo: "/logo.png",
    },
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const handleEnquiryClick = () => {
    navigate("/contact");
  };
  const scrollContainerRef = useRef(null);
  const topScrollContainerRef = useRef(null);
  const bottomScrollContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Property, Property1];
  const [activeButton, setActiveButton] = useState("buy");
  const [imageSrc, setImageSrc] = useState(HomeBg);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const buttonStyles = (isActive) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: screenWidth <= 480 ? 10 : 10,
    backgroundColor: isActive ? "#001C6B" : "#FFFFFF",
    height: screenWidth <= 480 ? 38 : 56,
    width: screenWidth <= 380 ? "110px" : screenWidth <= 480 ? "115px" : "auto",
    color: isActive ? "white" : "#2D2D2D99",
    border: "none",
    borderRadius: screenWidth <= 480 ? 8 : 8,
    fontSize: screenWidth <= 480 ? 10 : 16,
    fontWeight: "500",
    cursor: "pointer",
  });

 const handleViewAll = () => {
  navigate('/listings'); 
};
  const handleCardClick = (property) => {
    navigate("/details", { state: { property } });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.isDragging = true;
    container.startX = e.pageX - container.offsetLeft;
    container.scrollLeftStart = container.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const container = scrollContainerRef.current;
    if (!container || !container.isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - container.startX) * 2;
    container.scrollLeft = container.scrollLeftStart - walk;
  };

  const handleMouseUpOrLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.isDragging = false;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImageSrc(HomeBg1);
      } else {
        setImageSrc(HomeBg);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <div>
        <div className="HomeHeroContainer">
          <img src={imageSrc} className="HomeHeroBackgroundImage" />

          <div className="HomeHeroForm">
            {window.innerWidth <= 480 ? (
              <h1 className="HomeHeroText">Find Your Dream Home With Ease</h1>
            ) : (
              <h1 className="HomeHeroText">
                Find Your Dream Home
                <br /> With Ease
              </h1>
            )}
            <p className="HomeHeroDescription">
              Explore apartments, villas, and homes for rent or sale – verified
              listings, personalized
              <br /> recommendations, and expert support every step of the way.
            </p>
            <div className="HomeHeroButtonGroup">
              <Button
                style={buttonStyles(activeButton === "buy")}
                onClick={() => setActiveButton("buy")}
              >
                <TbHomeDollar
                  color={activeButton === "buy" ? "white" : "#2D2D2D99"}
                />
                Buy a Property
              </Button>

              <Button
                style={buttonStyles(activeButton === "rent")}
                onClick={() => setActiveButton("rent")}
              >
                <TbHomeDollar
                  color={activeButton === "rent" ? "white" : "#2D2D2D99"}
                />
                Rent a Property
              </Button>
              <Button
                style={buttonStyles(activeButton === "commercial")}
                onClick={() => setActiveButton("commercial")}
              >
                <TbHomeDollar
                  color={activeButton === "commercial" ? "white" : "#2D2D2D99"}
                />
                Commercial
              </Button>
            </div>
            {/* search form */}
            {window.innerWidth <= 480 ? (
              <div className="HomeSearchForm">
                <Input className="HomeLocation" placeholder="Location" />

                {/* Grid layout for smaller screens */}
                <div className="HomeGrid">
                  <div className="homeGrid1">
                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="HomeformItem">
                          Property Type
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>

                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="HomeformItem">
                          Property Size
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  <div className="homeGrid2">
                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="HomeformItem">
                          Min Range
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>

                    <Dropdown menu={{ items }}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="HomeformItem">
                          Max Range
                          <DownOutlined />
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                </div>

                <Button className="HomeSearchButton" onClick={() => {}}>
                  Search
                </Button>
              </div>
            ) : (
              <div className="HomeSearchForm">
                <Input className="HomeLocation" placeholder="Location" />

                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="HomeformItem">
                      Property Type
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="HomeformItem">
                      Property Size
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="HomeformItem">
                      Min Range
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className="HomeformItem">
                      Max Range
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Button className="HomeSearchButton" onClick={() => {}}>
                  Search
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="howItWorksContainer">
          <h2 className="sectionTitle">How It Works</h2>
          <p className="sectionSubtitle">
            Finding or listing your property is simple and stress-free.
          </p>
          <div className="howItWorksSteps">
            <div
              className="stepContainer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={SearchIcon} className="stepIcon" />
              <p className="stepTitle">01. Search for Location</p>
              <p className="stepDescription">
                Browse listings based on your preferred
                <br />
                location, price, and features.
              </p>
            </div>
            <div
              className="stepContainer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={SelectIcon} className="stepIcon" />
              <p className="stepTitle">02. Select Property Type</p>
              <p className="stepDescription">
                Contact property owners or schedule visits directly through our
                platform.
              </p>
            </div>
            <div
              className="stepContainer"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img src={BookIcon} className="stepIcon" />
              <p className="stepTitle">03. Book Your Property</p>
              <p className="stepDescription">
                Complete your deal with full support from our verified agents
                and experts.
              </p>
            </div>
          </div>
        </div>
        {/* Explore by porperty type section */}
        <div className="exploreByPropertyContainer">
          <div className="exploreByPropertyTextContainer">
            <p className="exploreByPropertyTitle">Explore by Property Type</p>
            <p className="exploreByPropertyDescription">
              Find your ideal property — whether you're <br /> buying, renting,
              or investing, we’ve got you <br /> covered.
            </p>
          </div>

          <div
            ref={scrollContainerRef}
            className={
              isMobile
                ? "exploreByPropertyScrollGridContainer"
                : "exploreByPropertyScrollContainer"
            }
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
          >
            <div onClick={() => {}} className="exploreByPropertyCard">
              <img src={HousesIcon} className="exploreByPropertyCardImage" />
              <p className="exploreByPropertyCardTitle">Houses</p>
              <p className="exploreByPropertyCardDescription">2000+ Property</p>
            </div>
            <div onClick={() => {}} className="exploreByPropertyCard">
              <img src={ApartmentIcon} className="exploreByPropertyCardImage" />
              <p className="exploreByPropertyCardTitle">Apartment</p>
              <p className="exploreByPropertyCardDescription">1200+ Property</p>
            </div>
            <div onClick={() => {}} className="exploreByPropertyCard">
              <img src={VillasIcon} className="exploreByPropertyCardImage" />
              <p className="exploreByPropertyCardTitle">Villas</p>
              <p className="exploreByPropertyCardDescription">1000+ Property</p>
            </div>
            <div onClick={() => {}} className="exploreByPropertyCard">
              <img src={OfficeIcon} className="exploreByPropertyCardImage" />
              <p className="exploreByPropertyCardTitle">Office</p>
              <p className="exploreByPropertyCardDescription">500+ Property</p>
            </div>
          </div>
        </div>

        {/* Why choose us section */}
        <div className="chooseUsContainer">
          <h2 className="chooseUsTitle">Why Choose Us</h2>
          <p className="chooseUsSubtitle">Why Thousands Trust Us</p>
          <div className="chooseUsCardContainer">
            <div
              className="chooseUsCard"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#001C6B";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = p.dataset.defaultColor || "#1B1B1B";
                });
              }}
            >
              <p className="chooseUsCardTitle" data-default-color="#1B1B1B">
                Verified Listings
              </p>
              <p
                className="chooseUsCardSubtitle"
                data-default-color="#1B1B1BCC"
              >
                All properties are reviewed to ensure trust and transparency.
              </p>
            </div>
            <div
              className="chooseUsCard"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#001C6B";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = p.dataset.defaultColor || "#1B1B1B";
                });
              }}
            >
              <p className="chooseUsCardTitle" data-default-color="#1B1B1B">
                Expert Support
              </p>
              <p
                className="chooseUsCardSubtitle"
                data-default-color="#1B1B1BCC"
              >
                Our experienced team is here to guide you throughout your
                journey.
              </p>
            </div>
            <div
              className="chooseUsCard"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#001C6B";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = p.dataset.defaultColor || "#1B1B1B";
                });
              }}
            >
              <p className="chooseUsCardTitle" data-default-color="#1B1B1B">
                Smart Search Tools
              </p>
              <p
                className="chooseUsCardSubtitle"
                data-default-color="#1B1B1BCC"
              >
                Advanced filters and map-based search help you find the perfect
                home.
              </p>
            </div>
            <div
              className="chooseUsCard"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#001C6B";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = "white";
                });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.boxShadow = "none";

                const childParagraphs = e.currentTarget.querySelectorAll("p");
                childParagraphs.forEach((p) => {
                  p.style.color = p.dataset.defaultColor || "#1B1B1B";
                });
              }}
            >
              <p className="chooseUsCardTitle" data-default-color="#1B1B1B">
                Secure Transactions
              </p>
              <p
                className="chooseUsCardSubtitle"
                data-default-color="#1B1B1BCC"
              >
                We prioritize your safety with secure, hassle-free processes.
              </p>
            </div>
          </div>
        </div>

        {/* Featured properties for sales */}
        <div className="hpPropContainer">
          <h2 className="hpPropTitle">Featured Properties for Sales</h2>
          <p className="hpPropSubtitle">
            Hand-Picked selection of quality places
          </p>
          <div className="hpPropCardGrid">
            {currentProperties.map((property, index) => (
              <div key={property.id} className="hpPropCard">
                <div className="hpPropImgContainer">
                  <div className="hpPropImageWrapper">
                    <img
                      src={images[currentIndex]}
                      alt={`Property ${currentIndex + 1}`}
                      className="hpPropImage"
                    />
                    {/* Prev Button */}
                    <button onClick={handlePrev} className="homePagePrevButton">
                      <FaChevronLeft color="white" />
                    </button>
                    {/* Next Button */}
                    <button onClick={handleNext} className="homePageNextButton">
                      <FaChevronRight color="white" />
                    </button>
                    {/* Step Indicator */}
                    <div className="hpPropStepIndicator">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`hpStepIndicatorDot ${
                            currentIndex === index
                              ? "hpStepIndicatorDotActive"
                              : ""
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="homePageLabelContainer">
                    <p className="homePageVerifiedLabel">Verified</p>
                    <p className="homePageResaleLabel">Resale</p>
                    <FaRegHeart color="white" />
                  </div>
                </div>
                <div
                  className="hpPropDetailsContainer"
                 onClick={() => handleCardClick(property)}
                >
                  <div>
                    <p className="hpPropName">{property.name}</p>
                    <p className="hpPropLocation">
                      {property.type} in{" "}
                      <span style={{ color: "#1B1B1BCC", fontWeight: "300" }}>
                        {property.location}
                      </span>
                    </p>
                  </div>
                  <p className="hpPropPrice">{property.price}</p>
                </div>
                <div className="hpPropDetails" onClick={() => handleCardClick(property)}>
                  <div className="hpPropDetailItem">
                    <LuBedDouble color="#001C6B" />{" "}
                    <span className="text">{property.specs.bedrooms} BHK</span>
                  </div>
                  <div className="hpPropDetailItem">
                    <PiBathtub color="#001C6B" />
                    <span className="text">{property.specs.baths} Baths</span>
                  </div>
                  <div className="hpPropDetailItem">
                    <AiOutlineHome color="#001C6B" />
                    <span className="text">{property.specs.sqft}</span>
                  </div>
                </div>
                <div className="hpPropHighlights" onClick={() => handleCardClick(property)}>
                  <p className="hpPropHighlightsText">Highlights: </p>
                  {property.highlights.map((highlight, idx) => (
                    <p key={idx} className="propertyHighlight">
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Button className="viewAllPropButton" onClick={handleViewAll}>
            View All Properties
          </Button>
        </div>
        {/* Cities with listing */}
        <div className="citiesWithListingContainer">
          <h2 className="citiesTitle">Cities With Listing</h2>
          <p className="citiesSubtitle">Destinations we love the most</p>
          <div className="citiesScrollContainer">
            <div
              ref={topScrollContainerRef}
              className="citiesScrollWrapper1"
              onMouseEnter={() => {
                const container = topScrollContainerRef.current;
                if (container) {
                  container.style.animationPlayState = "paused";
                }
              }}
              onMouseLeave={() => {
                const container = topScrollContainerRef.current;
                if (container) {
                  container.style.animationPlayState = "running";
                }
              }}
            >
              {[
                {
                  src: Chennai,
                  label: "Chennai",
                  properties: "1000+ properties",
                },
                {
                  src: Coimbatore,
                  label: "Coimbatore",
                  properties: "1000+ properties",
                },
                {
                  src: Madurai,
                  label: "Madurai",
                  properties: "1000+ properties",
                },
                {
                  src: Trichy,
                  label: "Trichy",
                  properties: "1000+ properties",
                },
                {
                  src: Bangalore,
                  label: "Bangalore",
                  properties: "1000+ properties",
                },
                {
                  src: Tirunelvelli,
                  label: "Tirunelvelli",
                  properties: "1000+ properties",
                },
                {
                  src: Tiruppur,
                  label: "Tiruppur",
                  properties: "1000+ properties",
                },
                { src: Erode, label: "Erode", properties: "1000+ properties" },
                { src: Salem, label: "Salem", properties: "1000+ properties" },
              ].map((city, index) => (
                <div key={index} className="cityCard">
                  <img src={city.src} alt={city.label} className="cityImage" />
                  {/* Black Blur Overlay */}
                  <div className="cityOverlay" />
                  {/* Text at Bottom Left */}
                  <p className="cityLabel">{city.label}</p>
                  <p className="cityProperties">{city.properties}</p>
                </div>
              ))}
              {/* Duplicate the cards for seamless scrolling */}
              {[
                {
                  src: Chennai,
                  label: "Chennai",
                  properties: "1000+ properties",
                },
                {
                  src: Coimbatore,
                  label: "Coimbatore",
                  properties: "1000+ properties",
                },
                {
                  src: Madurai,
                  label: "Madurai",
                  properties: "1000+ properties",
                },
                {
                  src: Trichy,
                  label: "Trichy",
                  properties: "1000+ properties",
                },
                {
                  src: Bangalore,
                  label: "Bangalore",
                  properties: "1000+ properties",
                },
                {
                  src: Tirunelvelli,
                  label: "Tirunelvelli",
                  properties: "1000+ properties",
                },
                {
                  src: Tiruppur,
                  label: "Tiruppur",
                  properties: "1000+ properties",
                },
                { src: Erode, label: "Erode", properties: "1000+ properties" },
                { src: Salem, label: "Salem", properties: "1000+ properties" },
              ].map((city, index) => (
                <div key={`duplicate-${index}`} className="cityCard">
                  <img src={city.src} alt={city.label} className="cityImage" />
                  {/* Black Blur Overlay */}
                  <div className="cityOverlay" />
                  {/* Text at Bottom Left */}
                  <p className="cityLabel">{city.label}</p>
                  <p className="cityProperties">{city.properties}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="citiesScrollContainer">
            <div
              ref={bottomScrollContainerRef}
              className="citiesScrollWrapper2"
              onMouseEnter={() => {
                const container = bottomScrollContainerRef.current;
                if (container) {
                  container.style.animationPlayState = "paused";
                }
              }}
              onMouseLeave={() => {
                const container = bottomScrollContainerRef.current;
                if (container) {
                  container.style.animationPlayState = "running";
                }
              }}
            >
              {[
                {
                  src: Chennai,
                  label: "Chennai",
                  properties: "1000+ properties",
                },
                {
                  src: Coimbatore,
                  label: "Coimbatore",
                  properties: "1000+ properties",
                },
                {
                  src: Madurai,
                  label: "Madurai",
                  properties: "1000+ properties",
                },
                {
                  src: Trichy,
                  label: "Trichy",
                  properties: "1000+ properties",
                },
                {
                  src: Bangalore,
                  label: "Bangalore",
                  properties: "1000+ properties",
                },
                {
                  src: Tirunelvelli,
                  label: "Tirunelvelli",
                  properties: "1000+ properties",
                },
                {
                  src: Tiruppur,
                  label: "Tiruppur",
                  properties: "1000+ properties",
                },
                { src: Erode, label: "Erode", properties: "1000+ properties" },
                { src: Salem, label: "Salem", properties: "1000+ properties" },
              ].map((city, index) => (
                <div key={index} className="cityCard">
                  <img src={city.src} alt={city.label} className="cityImage" />
                  {/* Black Blur Overlay */}
                  <div className="cityOverlay" />
                  {/* Text at Bottom Left */}
                  <p className="cityLabel">{city.label}</p>
                  <p className="cityProperties">{city.properties}</p>
                </div>
              ))}
              {/* Duplicate the cards for seamless scrolling */}
              {[
                {
                  src: Chennai,
                  label: "Chennai",
                  properties: "1000+ properties",
                },
                {
                  src: Coimbatore,
                  label: "Coimbatore",
                  properties: "1000+ properties",
                },
                {
                  src: Madurai,
                  label: "Madurai",
                  properties: "1000+ properties",
                },
                {
                  src: Trichy,
                  label: "Trichy",
                  properties: "1000+ properties",
                },
                {
                  src: Bangalore,
                  label: "Bangalore",
                  properties: "1000+ properties",
                },
                {
                  src: Tirunelvelli,
                  label: "Tirunelvelli",
                  properties: "1000+ properties",
                },
                {
                  src: Tiruppur,
                  label: "Tiruppur",
                  properties: "1000+ properties",
                },
                { src: Erode, label: "Erode", properties: "1000+ properties" },
                { src: Salem, label: "Salem", properties: "1000+ properties" },
              ].map((city, index) => (
                <div key={`duplicate-${index}`} className="cityCard">
                  <img src={city.src} alt={city.label} className="cityImage" />
                  {/* Black Blur Overlay */}
                  <div className="cityOverlay" />
                  {/* Text at Bottom Left */}
                  <p className="cityLabel">{city.label}</p>
                  <p className="cityProperties">{city.properties}</p>
                </div>
              ))}
            </div>
          </div>
          <style>
            {`
            @keyframes scrollLeft {
              0% {
                  transform: translateX(0);
              }
              100% {
                  transform: translateX(-50%);
              }
            }
            @keyframes scrollRight {
              0% {
                  transform: translateX(-50%);
              }
              100% {
                  transform: translateX(0);
              }
            }
          `}
          </style>
        </div>
        {/* Info Card */}
        <div className="cardContainer">
          <div
            className="card"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, #0037D1, #001C6B)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(to right, #001C6B, #0037D1)";
            }}
          >
            {isMobile ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <img src={Logo} className="cardImg" />
                  <p className="cardText">Esthell Golden Square</p>
                </div>
                <div className="positionStyle">
                  <p className="startFrom">Starts From</p>
                  <p className="startPrice">1.62 Cr + Regn</p>
                  <p className="subText">2.5 & 3 BHK, Duplex & penthouse</p>
                </div>
                <div className="cardButtons">
                  <div className="cardContactInfo" onClick={() => {}}>
                    <FaPhone color="white" />
                    <p style={{ color: "white", fontSize: 16 }}>
                      +91 7218212345
                    </p>
                  </div>
                  <div className="cardLocationInfo" onClick={() => {}}>
                    <FaLocationDot color="white" />
                    <p style={{ color: "white", fontSize: 16 }}>
                      Velachery, Chennai.
                    </p>
                  </div>
                  <div>
                    <Button onClick={handleEnquiryClick} className="cardButton">
                      Enquiry Now
                    </Button>
                  </div>
                </div>

                <img src={EsthellFlats} className="cardImage" />
              </>
            ) : (
              <>
                <img src={Logo} className="cardImg" />
                <p className="cardText">
                  Esthell Golden
                  <br /> Square
                </p>
                <div className="cardButtons">
                  <Button onClick={handleEnquiryClick} className="cardButton">
                    Enquiry Now
                  </Button>
                  <div className="cardContactInfo" onClick={() => {}}>
                    <FaPhone color="white" />
                    <p style={{ color: "white", fontSize: 16 }}>
                      +91 7218212345
                    </p>
                  </div>
                  <div className="cardLocationInfo" onClick={() => {}}>
                    <FaLocationDot color="white" />
                    <p style={{ color: "white", fontSize: 16 }}>
                      Velachery, Chennai.
                    </p>
                  </div>
                </div>
                <div className="positionStyle">
                  <p className="startFrom">Starts From</p>
                  <p className="startPrice">1.62 Cr + Regn</p>
                  <p className="subText">2.5 & 3 BHK, Duplex & penthouse</p>
                </div>
                <img src={EsthellFlats} className="cardImage" />
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
