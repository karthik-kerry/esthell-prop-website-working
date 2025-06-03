import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBg from "../assets/HomeBg.png";
import HomeBg1 from "../assets/HomeBg1.png";
import HeroImg from "../assets/hero_img.png";
import { Button, Dropdown, Input, Space, Modal } from "antd";
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
import OliveSands1 from "../assets/OliveSands1.jpg";
import JumeirahResidences from "../assets/JumeirahResidences.png";
import JumeirahResidences1 from "../assets/JumeirahResidences1.jpg";
import JumeirahResidences2 from "../assets/JumeirahResidences2.jpg";
import JumeirahResidences3 from "../assets/JumeirahResidences3.jpg";
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
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { LiaRoadSolid } from "react-icons/lia";
import { IoExpandOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FcGoogle } from "react-icons/fc";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../styles/HomePage.css";
import loginHeroImage from "../assets/loginHeroImage.png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../firebase";

const propertyType = [
  {
    key: "1",
    label: "1 -2 BHK",
    value: "1 -2 BHK",
  },
  {
    key: "2",
    label: "2 -3 BHK",
    value: "2 -3 BHK",
  },
  {
    key: "3",
    label: "3 -4 BHK",
    value: "3 -4 BHK",
  },
  {
    key: "4",
    label: "4 -5 BHK",
    value: "4 -5 BHK",
  },
  {
    key: "5",
    label: "5+ BHK",
    value: "5+ BHK",
  },
];

const propertySize = [
  {
    key: "1",
    label: "500-1500 Sqft",
    value: "500-1500 Sqft",
  },
  {
    key: "2",
    label: "1500-3000 Sqft",
    value: "1500-3000 Sqft",
  },
  {
    key: "3",
    label: "3000-5000 Sqft",
    value: "3000-5000 Sqft",
  },
  {
    key: "4",
    label: "5000-8000 Sqft",
    value: "5000-8000 Sqft",
  },
  {
    key: "5",
    label: "8000+ Sqft",
    value: "8000+ Sqft",
  },
];
// change here
const currentProperties = [
  {
    id: 1,
    name: "Esthell Homes",
    location: "Velachery, Chennai",
    address:
      "Esthell Golden Square TS, No: 1/10, No: 176, Inner Ring Road (South Segment), Opp. Sunshine School, Velachery, Chennai – 600 042 Tamil Nadu, India.",
    price: "₹1.64 Cr",
    type: "Apartment ",
    images: [Property1, Property],
    builtStatus: "Ready To Occupy",
    facing: "East",
    specs: {
      bedrooms: "2.5/3/Duplex",
      bedroomsDisplay: "2.5 & 3 BHK / Duplex",
      bathsDisplay: "2-4",
      baths: "2/3/4",
      sqft: "1492-2897 Sqft",
    },
    details: {
      specification: "2BHK +2 T + S",
      furnishing: "No",
      flatNo: "-",
      FloorNo: "-",
      builtUpArea: "1492",
    },
    highlights: ["Behind upcoming XB mall", "700m from Velachery station"],
    description:
      "Discover premium 2.5, 3 BHK & Duplex apartments with 2–4 bathrooms, located in the heart of Velachery.",
    status: "ready to occupy",
    listedOn: "20 Mar 2025",
    company: {
      name: "Esthell Properties",
      logo: "/logo.png",
    },
    detailedInfo: {
      bedrooms: "2.5 & 3 BHK / Duplex",
      baths: "2-4",
      sqft: "1492-2897 Sqft",
      facing: "East & West",
      description:
        "Spacious 2.5/3/Duplex BHK with 2/3/4 bathrooms, ideally located near schools and the railway station for convenient living.",
    },
    highlightsInfo: {
      point1: "Just 100m meters from Puzhuthivakkam Station",
      point2: "Only 700m from Velachery Station",
      point3: "Opposite to Sunshine School",
      point4: "Nestled behind the soon-to-come XB Mall",
      point5: "Crafted with red bricks and river sand",
      point6: "No wall sharing",
      point7: "Vaastu Complaints",
      point8: "Rooms with double-layer brick walls.",
    },
    filterData: {
      constructionStatus: ["ready to move", "new launch"],
      localities: "Velachery",
      purchaseType: "new booking",
      amenities: ["parking", "gymnasium"],
      furnishing: "Unfurnished",
    },
    startingFrom: "Starting From",
    iconType: ["bed", "bath", "sqft"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.0276592160058!2d80.2106945!3d12.9747379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dde1051c295%3A0xdefad79426dff8db!2sEsthell%20Homes!5e1!3m2!1sen!2sin!4v1747815401006!5m2!1sen!2sin",
  },
  {
    id: 2,
    name: "Olive Sands",
    location: " Uthandi, Chennai",
    address: "Juhu Beach, VRS Salai Rd, Uthandi, Chennai, Tamil Nadu 600119",
    price: "₹9 Cr",
    type: "Individual Villa ",
    images: [OliveSands1, OliveSands1],
    builtStatus: "New Property",
    facing: "South",
    specs: {
      bedrooms: false,
      baths: false,
      sqft: "4.55 Grounds",
    },
    details: {
      specification: "-",
      furnishing: "No",
      flatNo: "-",
      FloorNo: "-",
      builtUpArea: "4.55 Grounds",
    },
    status: "new property",
    highlights: ["Gated Community", "Sea View plot"],
    description:
      "Premium 4.55 grounds south-facing plot available at ₹9 Cr – perfect for your next dream development!",
    listedOn: "20 mar 2025",
    company: {
      name: "Esthell Homes",
      logo: "/logo.png",
    },
    detailedInfo: {
      bedrooms: " ",
      baths: " ",
      sqft: "4.55 Grounds",
      sqfts: "10922 Sqft",
      frontage: "150 ft frontage",
      facing: "South",
      description:
        "Premium 4.55 grounds south-facing plot available at ₹9 Cr – perfect for your next dream development!",
    },
    highlightsInfo: {
      point1:
        "Beach Property, just 10m from Uthandi Toll(ECR), in a secure gated community",
    },
    filterData: {
      constructionStatus: ["under construction", "new launch"],
      localities: "Uthandi",
      purchaseType: "new booking",
      amenities: ["security personnel"],
      furnishing: "Unfurnished",
    },
    startingFrom: "",
    iconType: ["sqfts", "grounds", "frontage"],
    map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.7442069845783!2d80.248454!3d12.859791000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUxJzM1LjMiTiA4MMKwMTQnNTQuNCJF!5e0!3m2!1sen!2sin!4v1747815143397!5m2!1sen!2sin",
  },
  {
    id: 3,
    name: "Jumeirah Residences Emirates",
    location: "Sheikh Zayed Rd, Dubai, UAE",
    address:
      "Sheikh Zayed Rd - Trade Centre - Trade Centre 2 - Dubai - United Arab Emirates",
    price: "3.51 M",
    type: "Apartment ",
    images: [
      JumeirahResidences,
      JumeirahResidences1,
      JumeirahResidences2,
      JumeirahResidences3,
    ],
    builtStatus: "Ready To Occupy",
    facing: false,
    specs: {
      bedrooms: "1/2/3/4",
      bedroomsDisplay: "1-4 BHK",
      bathsDisplay: "1-6 Baths",
      baths: "1/2/3/4/5/6",
      sqft: "861.76-6,369.33 Sqft",
    },
    details: {
      specification: "2BHK +2 T + S",
      furnishing: "No",
      flatNo: "-",
      FloorNo: "-",
      builtUpArea: "1492",
    },
    highlights: ["Sky Pool & Terrace", "Private Cinema & Lounge"],
    description:
      "Spacious layouts, modern interiors, private balconies, and world-class amenities like a sky pool and wellness spaces.",
    status: "ready to occupy",
    listedOn: "03 June 2025",
    company: {
      name: "Jumeirah Residences Emirates Towers",
      logo: "/logo.png",
    },
    detailedInfo: {
      bedrooms: "1/2/3/4",
      baths: "1-6",
      sqft: "861.76-6,369.33 Sqft",
      description:
        "Spacious layouts, modern interiors, private balconies, and world-class amenities like a sky pool and wellness spaces.",
    },
    highlightsInfo: {
      point1: "Sky Pool & Terrace",
      point2: "Private Cinema & Lounge",
      point3: "Wellness & Fitness Studios",
      point4: "Nearby Jumeirah Beach",
      point5: "Nearby Museum of the Future",
      point6: "Nearby Downtown Dubai",
    },
    filterData: {
      constructionStatus: ["ready to move", "new launch"],
      localities: "Dubai",
      purchaseType: "new booking",
      amenities: [
        "parking",
        "gymnasium",
        "Restaurant",
        "Playground",
        "Pet Lawn",
        "Family Pool",
        "Infinity Pool",
        "Social Hall",
      ],
      furnishing: "Unfurnished",
    },
    startingFrom: "Starting From",
    iconType: ["bed", "bath", "sqft"],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.0276592160058!2d80.2106945!3d12.9747379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dde1051c295%3A0xdefad79426dff8db!2sEsthell%20Homes!5e1!3m2!1sen!2sin!4v1747815401006!5m2!1sen!2sin",
  },
];

export default function HomePage() {
  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;
  console.log("User is logged in:", isLoggedIn);
  const navigate = useNavigate();
  const handleEnquiryClick = () => {
    navigate("/contact");
  };
  const [favoriteMap, setFavoriteMap] = useState({});
  const scrollContainerRef = useRef(null);
  const topScrollContainerRef = useRef(null);
  const bottomScrollContainerRef = useRef(null);
  const [activeButton, setActiveButton] = useState("buy");
  const [imageSrc, setImageSrc] = useState(HomeBg);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchSize, setSearchSize] = useState("");
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleHeartClick = (propertyId) => {
    setFavoriteMap((prev) => {
      const updated = {
        ...prev,
        [propertyId]: !prev[propertyId],
      };
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavoriteMap(JSON.parse(stored));
  }, []);

  const handleViewAll = () => {
    navigate("/listings");
  };

  const [currentIndexes, setCurrentIndexes] = useState(
    currentProperties.map(() => 0)
  );
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handlePrev = (propertyIdx) => {
    setCurrentIndexes((prev) =>
      prev.map((idx, i) =>
        i === propertyIdx
          ? idx === 0
            ? currentProperties[propertyIdx].images.length - 1
            : idx - 1
          : idx
      )
    );
  };

  const handleNext = (propertyIdx) => {
    setCurrentIndexes((prev) =>
      prev.map((idx, i) =>
        i === propertyIdx
          ? (idx + 1) % currentProperties[propertyIdx].images.length
          : idx
      )
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
  function parsePriceInput(input) {
    if (!input) return 0;
    let str = input.toString().replace(/,/g, "").trim().toLowerCase();
    if (str.endsWith("l")) return parseFloat(str) * 100000;
    if (str.endsWith("cr")) return parseFloat(str) * 10000000;
    return parseFloat(str);
  }

  const handlePropertyCardClick = (property) => {
    if (isLoggedIn) {
      navigate("/details", { state: { property } });
    } else {
      setIsModalOpen(true);
    }
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

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google User Data:", user);
      alert("Google Sign-In successful!");
      setIsModalOpen(false);
    } catch (error) {
      alert("Google Sign-In failed: " + error.message);
    }
  };

  const filterProperties = () => {
    return currentProperties.filter((property) => {
      // Location filter (case-insensitive, partial match)
      if (
        searchLocation &&
        !property.location.toLowerCase().includes(searchLocation.toLowerCase())
      ) {
        return false;
      }
      // Type filter
      if (searchType && property.type.trim() !== searchType.trim()) {
        return false;
      }
      // Size filter (simple string match)
      if (searchSize && property.specs.sqft !== searchSize) {
        return false;
      }
      // Min/Max price filter (convert price to number for comparison)
      if (minRange) {
        const priceNum = Number(property.price.replace(/[^0-9.]/g, ""));
        if (priceNum < Number(minRange)) return false;
      }
      if (maxRange) {
        const priceNum = Number(property.price.replace(/[^0-9.]/g, ""));
        if (priceNum > Number(maxRange)) return false;
      }
      return true;
    });
  };
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
                <Input
                  className="HomeLocation"
                  placeholder="Location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />

                {/* Grid layout for smaller screens */}
                <div className="HomeGrid">
                  <div className="homeGrid1">
                    <Dropdown
                      menu={{
                        items: propertyType.map((item) => ({
                          ...item,
                          onClick: () => setSearchType(item.value),
                        })),
                      }}
                    >
                      <Space
                        className="HomeformItem"
                        style={{ color: searchType ? "black" : "#bfbfbf" }}
                      >
                        {searchType || "Property Type"}
                        <DownOutlined />
                      </Space>
                    </Dropdown>

                    <Dropdown
                      menu={{
                        items: propertySize.map((item) => ({
                          ...item,
                          onClick: () => setSearchSize(item.value),
                        })),
                      }}
                    >
                      <Space
                        className="HomeformItem"
                        style={{ color: searchSize ? "black" : "#bfbfbf" }}
                      >
                        {searchSize || "Property Size"}
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  </div>
                  <div className="homeGrid2">
                    <Input
                      prefix="₹"
                      className="HomeformItemInput"
                      placeholder="Min Range 5L"
                      value={minRange}
                      onChange={(e) => setMinRange(e.target.value)}
                      style={{ color: minRange ? "#1b1b1b" : "#bfbfbf" }}
                    />

                    <Input
                      prefix="₹"
                      className="HomeformItemInput"
                      placeholder="Enter Max Range 50Cr"
                      value={maxRange}
                      onChange={(e) => setMaxRange(e.target.value)}
                      style={{ color: maxRange ? "#1b1b1b" : "#bfbfbf" }}
                    />
                  </div>
                </div>

                <Button
                  className="HomeSearchButton"
                  onClick={() => {
                    navigate("/listings", {
                      state: {
                        location: searchLocation,
                        type: searchType,
                        size: searchSize,
                        minRange,
                        maxRange,
                      },
                    });
                  }}
                >
                  Search
                </Button>
              </div>
            ) : (
              <div className="HomeSearchForm">
                <Input className="HomeLocation" placeholder="Location" />

                <Dropdown
                  menu={{
                    items: propertyType.map((item) => ({
                      ...item,
                      onClick: () => setSearchType(item.value),
                    })),
                  }}
                >
                  <Space
                    className="HomeformItem"
                    style={{ color: searchType ? "black" : "#bfbfbf" }}
                  >
                    {searchType || "Property Type"}
                    <DownOutlined />
                  </Space>
                </Dropdown>

                <Dropdown
                  menu={{
                    items: propertySize.map((item) => ({
                      ...item,
                      onClick: () => setSearchSize(item.value),
                    })),
                  }}
                >
                  <Space
                    className="HomeformItem"
                    style={{ color: searchSize ? "black" : "#bfbfbf" }}
                  >
                    {searchSize || "Property Size"}
                    <DownOutlined />
                  </Space>
                </Dropdown>

                <Input
                  prefix="₹"
                  className="HomeformItemInput"
                  placeholder="Enter Min Range"
                  value={minRange}
                  onChange={(e) => setMinRange(e.target.value)}
                  style={{ color: minRange ? "#1b1b1b" : "#bfbfbf" }}
                />

                <Input
                  prefix="₹"
                  className="HomeformItemInput"
                  placeholder="Enter Max Range"
                  value={maxRange}
                  onChange={(e) => setMaxRange(e.target.value)}
                  style={{ color: maxRange ? "#1b1b1b" : "#bfbfbf" }}
                />

                <Button
                  className="HomeSearchButton"
                  onClick={() => {
                    navigate("/listings", {
                      state: {
                        location: searchLocation,
                        type: searchType,
                        size: searchSize,
                        minRange,
                        maxRange,
                      },
                    });
                  }}
                >
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
        <Modal
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          footer={null}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className="modalContainer">
            <div className="modalLeft">
              <img src={loginHeroImage} className="modalImg" />
            </div>
            <div className="modalRight">
              <img src={Logo} className="modalLogo" alt="Logo" />
              <div className="modalImgTextBottom">
                <p style={{ margin: 0 }}>Welcome to Esthell Properties</p>
              </div>
              <Button className="modalButton" onClick={handleGoogleSignIn}>
                <FcGoogle size={24} />
                Connect via Google
              </Button>
            </div>
          </div>
        </Modal>
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
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      spaceBetween={10}
                      slidesPerView={1}
                      style={{ borderRadius: 12 }}
                    >
                      {property.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={property.name}
                            className="hpPropImage"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="homePageLabelContainer">
                    <p className="homePageVerifiedLabel">Verified</p>
                    <p className="homePageSaleLabel">{property.status}</p>
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleHeartClick(property.id);
                      }}
                      style={{ zIndex: 100, cursor: "pointer" }}
                    >
                      {favoriteMap[property.id] ? (
                        <FaHeart color="red" style={{ zIndex: 100 }} />
                      ) : (
                        <FaRegHeart color="white" style={{ zIndex: 100 }} />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="hpPropDetailsContainer"
                  onClick={() => handlePropertyCardClick(property)}
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
                  <div className="priceWrapper">
                    <p className="hpStartFrom">{property.startingFrom}</p>
                    <p className="hpPropPrice">{property.price}</p>
                  </div>
                </div>
                <div
                  className="hpPropDetails"
                  onClick={() => handlePropertyCardClick(property)}
                >
                  {property.iconType.map((type, idx) => (
                    <div className="hpPropDetailItem" key={type + idx}>
                      {type === "bed" && <LuBedDouble color="#001C6B" />}
                      {type === "bath" && <PiBathtub color="#001C6B" />}
                      {type === "sqft" && <AiOutlineHome color="#001C6B" />}
                      {type === "sqfts" && <AiOutlineHome color="#001C6B" />}
                      {type === "grounds" && (
                        <IoExpandOutline color="#001C6B" />
                      )}
                      {type === "frontage" && <LiaRoadSolid color="#001C6B" />}

                      {/* Add more icon types as needed */}
                      <span className="text">
                        {type === "bed" && property.specs.bedroomsDisplay}
                        {type === "bath" &&
                          `${property.specs.bathsDisplay} Baths`}
                        {type === "sqfts" && property.detailedInfo.sqfts}
                        {type === "sqft" && property.specs.sqft}
                        {type === "grounds" && property.specs.sqft}
                        {type === "frontage" && property.detailedInfo.frontage}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="hpPropHighlights"
                  onClick={() => handlePropertyCardClick(property)}
                >
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
