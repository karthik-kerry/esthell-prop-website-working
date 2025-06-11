import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Collapse, Pagination, Dropdown, Input, Space, Modal } from "antd";
import { DownOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Slider, Button, Checkbox } from "antd";
import { TbHomeDollar } from "react-icons/tb";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import OliveSands1 from "../assets/OliveSands1.jpg";
import AccessEntry from "../assets/AccessEntry.png";
import AcGym from "../assets/AcGym.png";
import CCTV from "../assets/CCTV.png";
import Games from "../assets/Games.png";
import ModernLandscaping from "../assets/ModernLandscaping.png";
import MultiPuposeHall from "../assets/MultiPuposeHall.png";
import Parking from "../assets/Parking.png";
import PowerBackup from "../assets/PowerBackup.png";
import SwimmingPool from "../assets/SwimmingPool.png";
import VideoDoorPhone from "../assets/VideoDoorPhone.png";
import bbqAreas from "../assets/BBQareas.svg";
import lounges from "../assets/lounges.svg";
import OutdoorCinema from "../assets/OutdoorCinema.svg";
import restaurant from "../assets/restaurant.svg";
import spas from "../assets/spas.svg";
import DuplexLower from "../assets/DuplexLower.svg";
import DuplexUpper from "../assets/DuplexUpper.svg";
import FirstFloorPlan from "../assets/FirstFloorPlan.svg";
import GroundFloorPlan from "../assets/GroundFloorPlan.svg";
import SitePlan from "../assets/SitePlan.svg";
import TypicalFloorPlan from "../assets/TypicalFloorPlan.svg";
import Bedroom1 from "../assets/Bedroom1.svg";
import Bedroom2 from "../assets/Bedroom2.svg";
import Bedroom3 from "../assets/Bedroom3.svg";
import Bedroom4 from "../assets/Bedroom4.svg";
import JumeirahResidences from "../assets/JumeirahResidences.png";
import JumeirahResidences1 from "../assets/JumeirahResidences1.jpg";
import JumeirahResidences2 from "../assets/JumeirahResidences2.jpg";
import JumeirahResidences3 from "../assets/JumeirahResidences3.jpg";
import HeroBg from "../assets/hero_bg.png";
import HeroImg from "../assets/hero_img.png";
import Logo from "../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import EsthellFlats from "../assets/esthell_apartments.png";
import "../styles/ListingsPage.css";
import { LiaRoadSolid } from "react-icons/lia";
import { IoExpandOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FcGoogle } from "react-icons/fc";
import { Pagination as SwiperPagination } from "swiper/modules";
import loginHeroImage from "../assets/loginHeroImage.png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../firebase";
import JumeiraPrice from "../assets/JumeiraPrice.pdf";
import JumeiraFloorPlans from "../assets/JumeiraFloorPlans.pdf";
import EsthellBrochure from "../assets/EsthellBrochure.pdf";

export default function ListingsPage() {
  const [user] = useAuthState(auth);
  const isLoggedIn = !!user;
  console.log("User is logged in:", isLoggedIn);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { Panel } = Collapse;
  const totalProperties = 8;
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [areaValue, setAreaValue] = useState([500, 15000]);
  const [budgetValue, setBudgetValue] = useState([500000, 1000000000]);
  const [activeButton, setActiveButton] = useState("buy");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [favoriteMap, setFavoriteMap] = useState({});
  const [searchType, setSearchType] = useState("");
  const [searchSize, setSearchSize] = useState("");
  const [minRange, setMinRange] = useState("");
  const [maxRange, setMaxRange] = useState("");
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
  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleOk = () => {
    setIsLoginModalOpen(false);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google User Data:", user);
      alert("Google Sign-In successful!");
      setIsLoginModalOpen(false);
    } catch (error) {
      alert("Google Sign-In failed: " + error.message);
    }
  };
  const handlePropertyCardClick = (property) => {
    if (isLoggedIn) {
      navigate("/details", { state: { property } });
    } else {
      setIsLoginModalOpen(true);
    }
  };
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
  const currentProperties = [
    {
      id: 1,
      name: "Esthell Homes",
      location: "Velachery, Chennai",
      floorPlans: [
        { label: "SITE PLAN", src: SitePlan },
        { label: "GROUND FLOOR PLAN", src: GroundFloorPlan },
        { label: "FIRST FLOOR PLAN", src: FirstFloorPlan },
        { label: "TYPICAL FLOOR PLAN", src: TypicalFloorPlan },
        { label: "DUPLEX LOWER", src: DuplexLower },
        { label: "DUPLEX UPPER", src: DuplexUpper },
      ],
      amenities: [
        { src: AcGym, name: "Air-Conditioned Gymnasium" },
        { src: PowerBackup, name: "Power Backup" },
        { src: MultiPuposeHall, name: "Air-Conditioned Multipurpose Hall" },
        { src: VideoDoorPhone, name: "Video Door Phone" },
        { src: SwimmingPool, name: "Swimming Pool" },
        { src: CCTV, name: "CCTV" },
        { src: AccessEntry, name: "Access Controlled Entry" },
        { src: ModernLandscaping, name: "Landscaping" },
        { src: Parking, name: "Visitor Car Parking" },
        { src: Games, name: "Indoor Games" },
      ],
      pdfs: [EsthellBrochure],
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
        point3: " Opposite to Sunshine School",
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
      floorPlans: [
        { label: "BEDROOM 1", src: Bedroom1 },
        { label: "BEDROOM 2", src: Bedroom2 },
        { label: "BEDROOM 3", src: Bedroom3 },
        { label: "BEDROOM 4", src: Bedroom4 },
      ],
      amenities: [
        { src: SwimmingPool, name: "Swimming Pool" },
        { src: AcGym, name: "fitness centers" },
        { src: restaurant, name: "Restaurant" },
        { src: lounges, name: "Lounges" },
        { src: spas, name: "Spas" },
        { src: OutdoorCinema, name: "Outdoor Cinema" },
        { src: bbqAreas, name: "BBQ Areas" },
      ],
      pdfs: [JumeiraFloorPlans, JumeiraPrice],
      address:
        "Sheikh Zayed Rd - Trade Centre - Trade Centre 2 - Dubai - United Arab Emirates",
      price: "$ 955K",
      type: "Apartment ",
      images: [
        JumeirahResidences,
        JumeirahResidences1,
        JumeirahResidences2,
        JumeirahResidences3,
      ],
      builtStatus: "Ready To Occupy",
      facing: "East",
      specs: {
        bedrooms: "1/2/3/4",
        bedroomsDisplay: "1-4 BHK",
        bathsDisplay: "1-6 ",
        baths: "1/2/3/4/5/6",
        sqft: "861.76-6369.33 Sqft",
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
        sqft: "861.76-6369.33 Sqft",
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
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.7706416625597!2d55.18921127402284!3d25.14344393387834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5624716593%3A0x2dd613f31e304f3d!2sJumeirah%20Residences%20Marsa%20Al%20Arab!5e0!3m2!1sen!2sin!4v1749470166428!5m2!1sen!2sin",
    },
  ];
  const [activeButtons, setActiveButtons] = useState({
    button1: false,
    button2: false,
    button3: false,
    button4: false,
    button5: false,
    button6: false,
    button7: false,
    button8: false,
    button9: false,
    button10: false,
    button11: false,
    button12: false,
    button13: false,
    button14: false,
    button15: false,
    button16: false,
    button17: false,
    button18: false,
    button19: false,
    button20: false,
    button21: false,
  });
  const handleClearAll = () => {
    setActiveButtons({
      button1: false,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false,
      button7: false,
      button8: false,
      button9: false,
      button10: false,
      button11: false,
      button12: false,
      button13: false,
      button14: false,
      button15: false,
      button16: false,
      button17: false,
      button18: false,
      button19: false,
      button20: false,
      button21: false,
    });
    setAreaValue([500, 15000]);
    setBudgetValue([500000, 1000000000]);
    setSelectedLocations([]);
  };
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

  const navigate = useNavigate();
  const handleEnquiryClick = () => {
    navigate("/contact");
  };
  const handleCardClick = (property) => {
    navigate("/details", { state: { property } });
  };
  const checkScreenWidth = () => {
    if (window.innerWidth <= 480) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const [currentIndexes, setCurrentIndexes] = useState(
    currentProperties.map(() => 0)
  );
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
  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

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
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onCheck = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedLocations((prev) => [...prev, value]);
    } else {
      setSelectedLocations((prev) => prev.filter((item) => item !== value));
    }
  };

  const onAreaChange = (value) => {
    setAreaValue(value);
  };

  const formatValueArea = (value) => {
    return value + " sqft";
  };

  const onBudgetChange = (value) => {
    setBudgetValue(value);
  };

  const formatValueBudget = (value) => {
    if (value >= 10000000) {
      return (value / 10000000).toFixed(1) + " Cr";
    } else {
      return (value / 100000).toFixed(1) + " L";
    }
  };

  const handleClick = (buttonId) => {
    setActiveButtons((prevState) => ({
      ...prevState,
      [buttonId]: !prevState[buttonId],
    }));
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  const dropDownItems = [
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
  const items = [
    {
      key: "1",
      label: <span style={{ fontWeight: 500 }}>Budget</span>,
      children: (
        <Slider
          range
          min={500000} // Minimum range is 5 Lakhs
          max={1000000000} // Maximum range is 100 Crore
          step={100000} // Step size set to 1 Lakh (100,000)
          value={budgetValue}
          onChange={onBudgetChange}
          className="sliderContainer"
          trackStyle={{
            backgroundColor: "#001C6B",
          }}
          handleStyle={{
            backgroundColor: "#001C6B",
            borderColor: "#001C6B",
            color: "#001C6B",
          }}
          tooltipVisible={true}
          tooltip={{
            formatter: (value) => formatValueBudget(value),
            placement: "bottom",
          }}
        />
      ),
    },
    {
      key: "2",
      label: <span style={{ fontWeight: 500 }}>Type of property</span>,
      children: (
        <div className="buttonContainer">
          <div className="buttonRow">
            <Button
              onClick={() => handleClick("button1")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button1 ? "active" : "inactive"
              } button1`}
            >
              <p>1 BHK</p>
            </Button>
            <Button
              onClick={() => handleClick("button2")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button2 ? "active" : "inactive"
              } button2`}
            >
              <p>2 BHK</p>
            </Button>
          </div>
          <div className="buttonRow">
            <Button
              onClick={() => handleClick("button3")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button3 ? "active" : "inactive"
              } button3`}
            >
              <p>3 BHK</p>
            </Button>
            <Button
              onClick={() => handleClick("button4")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button4 ? "active" : "inactive"
              } button4`}
            >
              <p>4 BHK</p>
            </Button>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: <span style={{ fontWeight: 500 }}> Construction Status</span>,
      children: (
        <div className="buttonContainer">
          <div className="buttonRow">
            <Button
              onClick={() => handleClick("button5")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button5 ? "active" : "inactive"
              } button5`}
            >
              <p>New launch</p>
            </Button>
            <Button
              onClick={() => handleClick("button6")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button6 ? "active" : "inactive"
              } button6`}
            >
              <p>Under construction</p>
            </Button>
          </div>
          <div className="buttonRow">
            <Button
              onClick={() => handleClick("button7")}
              icon={<PlusOutlined />}
              className={`button ${
                activeButtons.button7 ? "active" : "inactive"
              } button7`}
            >
              <p>Ready to move</p>
            </Button>
          </div>
        </div>
      ),
    },
    // {
    //   key: "4",
    //   label: <span style={{ fontWeight: 500 }}>Posted by</span>,
    //   children: (
    //     <div className="buttonContainer">
    //       <div className="buttonRow">
    //         <Button
    //           onClick={() => handleClick("button8")}
    //           icon={<PlusOutlined />}
    //           className={`button ${
    //             activeButtons.button8 ? "active" : "inactive"
    //           } button8`}
    //         >
    //           <p>Owner</p>
    //         </Button>
    //         <Button
    //           onClick={() => handleClick("button9")}
    //           icon={<PlusOutlined />}
    //           className={`button ${
    //             activeButtons.button9 ? "active" : "inactive"
    //           } button9`}
    //         >
    //           <p>Builder</p>
    //         </Button>
    //       </div>
    //       <div className="buttonRow">
    //         <Button
    //           onClick={() => handleClick("button10")}
    //           icon={<PlusOutlined />}
    //           className={`button ${
    //             activeButtons.button10 ? "active" : "inactive"
    //           } button10`}
    //         >
    //           <p>Dealer</p>
    //         </Button>
    //         <Button
    //           onClick={() => handleClick("button11")}
    //           icon={<PlusOutlined />}
    //           className={`button ${
    //             activeButtons.button11 ? "active" : "inactive"
    //           } button11`}
    //         >
    //           <p>Feature Dealer</p>
    //         </Button>
    //       </div>
    //     </div>
    //   ),
    // },

    {
      key: "5",
      label: <span style={{ fontWeight: 500 }}>Area (sq.ft.)</span>,
      children: (
        <div>
          <Slider
            className="sliderContainer"
            range
            min={500}
            max={30000}
            step={500}
            value={areaValue}
            onChange={onAreaChange}
            trackStyle={{
              backgroundColor: "#001C6B",
            }}
            handleStyle={{
              backgroundColor: "#001C6B",
              borderColor: "#001C6B",
              color: "#001C6B",
            }}
            tooltipVisible={true}
            tooltip={{
              formatter: (value) => formatValueArea(value),
              placement: "bottom",
            }}
          />
        </div>
      ),
    },
    {
      key: "6",
      label: <span style={{ fontWeight: 500 }}>Localities</span>,
      children: (
        <div className="localitiesCheckboxWrapper">
          <Checkbox value="Velachery" onChange={onCheck}>
            Velachery
          </Checkbox>
          <Checkbox value="Uthandi" onChange={onCheck}>
            Uthandi
          </Checkbox>
          <Checkbox value="GST Road" onChange={onCheck}>
            GST Road
          </Checkbox>
          <Checkbox value="OMR" onChange={onCheck}>
            OMR
          </Checkbox>
          <Checkbox value="Tambaram" onChange={onCheck}>
            Tambaram
          </Checkbox>
          <Checkbox value="ECR" onChange={onCheck}>
            ECR
          </Checkbox>
          <Checkbox value="Guduvancheri" onChange={onCheck}>
            Guduvancheri
          </Checkbox>
          <div className="localitiesMoreButtonWrapper">
            <SearchOutlined />
            <p className="localitiesSearchText">More Localities</p>
          </div>
        </div>
      ),
    },
    {
      key: "7",
      label: <span style={{ fontWeight: 500 }}>Purchase type</span>,
      children: (
        <>
          <div className="buttonRow">
            <Button
              className={`button ${
                activeButtons.button12 ? "active" : "inactive"
              } button12`}
              onClick={() => handleClick("button12")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button12 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Resale</p>
            </Button>
            <Button
              className={`button ${
                activeButtons.button13 ? "active" : "inactive"
              } button13`}
              onClick={() => handleClick("button13")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button13 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>New Booking</p>
            </Button>
          </div>
        </>
      ),
    },
    {
      key: "8",
      label: <span style={{ fontWeight: 500 }}>Amenities</span>,
      children: (
        <>
          <div className="buttonContainer2">
            <Button
              className={`button ${
                activeButtons.button14 ? "active" : "inactive"
              } button14`}
              onClick={() => handleClick("button14")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button14 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Vaastu Compliant</p>
            </Button>
            <Button
              className={`button ${
                activeButtons.button15 ? "active" : "inactive"
              } button15`}
              onClick={() => handleClick("button15")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button15 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Security Personnel</p>
            </Button>
            <Button
              className={`button ${
                activeButtons.button16 ? "active" : "inactive"
              } button16`}
              onClick={() => handleClick("button16")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button16 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Gymnasium</p>
            </Button>
            <Button
              className={`button ${
                activeButtons.button17 ? "active" : "inactive"
              } button17`}
              onClick={() => handleClick("button17")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button17 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Park</p>
            </Button>
            <Button
              className={`button ${
                activeButtons.button18 ? "active" : "inactive"
              } button18`}
              onClick={() => handleClick("button18")}
              icon={
                <PlusOutlined
                  style={{
                    color: activeButtons.button18 ? "white" : "#1B1B1BCC",
                    opacity: "70%",
                  }}
                />
              }
            >
              <p>Parking</p>
            </Button>
            <p className="moreText">+ 6 More</p>
          </div>
        </>
      ),
    },
    {
      key: "9",
      label: <span style={{ fontWeight: 500 }}> Furnishing status</span>,
      children: (
        <div className="buttonContainer3">
          <Button
            className={`button ${
              activeButtons.button19 ? "active" : "inactive"
            } button19`}
            onClick={() => handleClick("button19")}
            icon={
              <PlusOutlined
                style={{
                  color: activeButtons.button19 ? "white" : "#1B1B1BCC",
                  opacity: "70%",
                }}
              />
            }
          >
            <p>Furnished</p>
          </Button>
          <Button
            className={`button ${
              activeButtons.button20 ? "active" : "inactive"
            } button20`}
            onClick={() => handleClick("button20")}
            icon={
              <PlusOutlined
                style={{
                  color: activeButtons.button20 ? "white" : "#1B1B1BCC",
                  opacity: "70%",
                }}
              />
            }
          >
            <p>Unfurnished</p>
          </Button>
          <Button
            className={`button ${
              activeButtons.button21 ? "active" : "inactive"
            } button21`}
            onClick={() => handleClick("button21")}
            icon={
              <PlusOutlined
                style={{
                  color: activeButtons.button21 ? "white" : "#1B1B1BCC",
                  opacity: "70%",
                }}
              />
            }
          >
            <p>Semifurnished</p>
          </Button>
        </div>
      ),
    },
  ];

  const isAnyFilterActive =
    areaValue[0] !== 500 ||
    areaValue[1] !== 15000 || // Area
    budgetValue[0] !== 500000 ||
    budgetValue[1] !== 25000000; // Budget
  const selectedBHKs = [];
  if (activeButtons.button1) selectedBHKs.push(1);
  if (activeButtons.button2) selectedBHKs.push(2);
  if (activeButtons.button3) selectedBHKs.push(3);
  if (activeButtons.button4) selectedBHKs.push(4);
  const selectedStatuses = [];
  if (activeButtons.button5) selectedStatuses.push("new launch");
  if (activeButtons.button6) selectedStatuses.push("under construction");
  if (activeButtons.button7) selectedStatuses.push("ready to move");
  const selectedPurchaseTypes = [];
  if (activeButtons.button12) selectedPurchaseTypes.push("resale");
  if (activeButtons.button13) selectedPurchaseTypes.push("new booking");
  const selectedAmenities = [];
  if (activeButtons.button14) selectedAmenities.push("vaastu compliant");
  if (activeButtons.button15) selectedAmenities.push("security personnel");
  if (activeButtons.button16) selectedAmenities.push("gymnasium");
  if (activeButtons.button17) selectedAmenities.push("park");
  if (activeButtons.button18) selectedAmenities.push("parking");
  const selectedFurnishings = [];
  if (activeButtons.button19) selectedFurnishings.push("furnished");
  if (activeButtons.button20) selectedFurnishings.push("unfurnished");
  if (activeButtons.button21) selectedFurnishings.push("semifurnished");
  const filteredProperties = isAnyFilterActive
    ? currentProperties.filter((property) => {
        // budget filter
        let priceStr = property.price.replace(/[^0-9.]/g, "");
        let priceNum = parseFloat(priceStr);
        const priceLower = property.price.trim().toLowerCase();

        if (priceLower.includes("cr")) {
          priceNum = priceNum * 10000000;
        } else if (priceLower.includes("k")) {
          priceNum = priceNum * 1000;
        } else if (priceLower.includes("l")) {
          priceNum = priceNum * 100000;
        } else if (priceLower.includes("m")) {
          priceNum = priceNum * 1000000;
        }
        priceNum = Math.round(priceNum);

        if (priceNum < budgetValue[0] || priceNum > budgetValue[1]) {
          return false;
        }
        //  BHK

        if (selectedBHKs.length > 0) {
          const bhkValues = String(property.specs.bedrooms)
            .split("/")
            .map((v) => {
              if (v.toLowerCase().includes("duplex")) return 4;
              const num = parseInt(v);
              return isNaN(num) ? null : num;
            })
            .filter((v) => v !== null);
          if (!selectedBHKs.some((bhk) => bhkValues.includes(bhk))) {
            return false;
          }
        }

        // Area filter

        if (areaValue[0] !== 500 || areaValue[1] !== 15000) {
          let minSqft = 0,
            maxSqft = 0;
          if (
            typeof property.specs.sqft === "string" &&
            property.specs.sqft.toLowerCase().includes("ground")
          ) {
            const grounds = parseFloat(property.specs.sqft);
            if (!isNaN(grounds)) {
              minSqft = maxSqft = grounds * 2400;
            }
          } else if (
            typeof property.specs.sqft === "string" &&
            property.specs.sqft.includes("-")
          ) {
            const [min, max] = property.specs.sqft
              .replace(/[^\d\.\-]/g, "")
              .split("-")
              .map(Number);
            minSqft = min;
            maxSqft = max;
          } else {
            minSqft = maxSqft = parseInt(
              String(property.specs.sqft).replace(/[^0-9]/g, "")
            );
          }

          if (areaValue[1] < minSqft || areaValue[0] > maxSqft) {
            return false;
          }
        }

        // Localities filter
        if (
          selectedLocations.length > 0 &&
          !selectedLocations.some((loc) =>
            property.filterData.localities
              .toLowerCase()
              .includes(loc.toLowerCase())
          )
        ) {
          return false;
        }
        // Purchase type filter
        if (
          selectedPurchaseTypes.length > 0 &&
          !selectedPurchaseTypes.includes(property.filterData.purchaseType)
        ) {
          return false;
        }

        // amenities
        if (
          selectedAmenities.length > 0 &&
          !property.filterData.amenities
            .map((a) => a.toLowerCase())
            .some((amenity) => selectedAmenities.includes(amenity))
        ) {
          return false;
        }
        //  constructionStatus

        if (
          selectedStatuses.length > 0 &&
          !property.filterData.constructionStatus.some((status) =>
            selectedStatuses.includes(status)
          )
        ) {
          return false;
        }

        // Furnishing status filter
        if (
          selectedFurnishings.length > 0 &&
          !selectedFurnishings.includes(
            property.filterData.furnishing.toLowerCase()
          )
        ) {
          return false;
        }

        return true;
      })
    : currentProperties;

  return (
    <div>
      <Header />
      {/* hero section */}
      <div className="ListingHeroContainer">
        <img src={HeroBg} className="ListingHeroBackgroundImage" />
        <div className="ListingHeroBlurEffect" />
        <div className="ListingHeroForm">
          <div className="ListingHeroButtonGroup">
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

          {isMobileView ? (
            <div className="ListingSearchForm">
              <Input className="ListingLocation" placeholder="Location" />

              <div className="listingGrid">
                <div className="ListingGrid1">
                  <Dropdown
                    menu={{
                      items: propertyType.map((item) => ({
                        ...item,
                        onClick: () => setSearchType(item.value),
                      })),
                    }}
                  >
                    <Space
                      className="ListingformItem"
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
                      className="ListingformItem"
                      style={{ color: searchSize ? "black" : "#bfbfbf" }}
                    >
                      {searchSize || "Property Size"}
                      <DownOutlined />
                    </Space>
                  </Dropdown>
                </div>
                <div className="ListingGrid2">
                  <Input
                    prefix="₹"
                    className="ListingformItemInput"
                    placeholder="Min Range 5L"
                    value={minRange}
                    onChange={(e) => setMinRange(e.target.value)}
                    style={{ color: minRange ? "#1b1b1b" : "#bfbfbf" }}
                  />

                  <Input
                    prefix="₹"
                    className="ListingformItemInput"
                    placeholder="Enter Max Range 50Cr"
                    value={maxRange}
                    onChange={(e) => setMaxRange(e.target.value)}
                    style={{ color: maxRange ? "#1b1b1b" : "#bfbfbf" }}
                  />
                </div>
              </div>

              <Button className="ListingSearchButton" onClick={() => {}}>
                Search
              </Button>
            </div>
          ) : (
            <div className="ListingSearchForm">
              <Input className="ListingLocation" placeholder="Location" />

              <Dropdown
                menu={{
                  items: propertyType.map((item) => ({
                    ...item,
                    onClick: () => setSearchType(item.value),
                  })),
                }}
              >
                <Space
                  className="ListingformItem"
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
                  className="ListingformItem"
                  style={{ color: searchSize ? "black" : "#bfbfbf" }}
                >
                  {searchSize || "Property Size"}
                  <DownOutlined />
                </Space>
              </Dropdown>
              <Input
                prefix="₹"
                className="ListingformItemInput"
                placeholder="Enter Min Range"
                value={minRange}
                onChange={(e) => setMinRange(e.target.value)}
                style={{ color: minRange ? "#1b1b1b" : "#bfbfbf" }}
              />

              <Input
                prefix="₹"
                className="ListingformItemInput"
                placeholder="Enter Max Range"
                value={maxRange}
                onChange={(e) => setMaxRange(e.target.value)}
                style={{ color: maxRange ? "#1b1b1b" : "#bfbfbf" }}
              />

              <Button className="ListingSearchButton" onClick={() => {}}>
                Search
              </Button>
            </div>
          )}
        </div>
      </div>

      <div className="listingsContainer">
        {isMobileView && (
          <Modal
            title="Filters"
            visible={isModalVisible}
            onCancel={hideModal}
            width={300}
            footer={null}
            style={{ height: "auto" }}
          >
            <Collapse
              items={items}
              defaultActiveKey={items.map((item) => item.key)}
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
              className="collapseContainer"
            />
            <div style={{ display: "flex", gap: 5 }}>
              <Button className="ClearButton" onClick={handleClearAll}>
                Clear All
              </Button>
              <Button className="ApplyFilterButton">Apply Filter</Button>
            </div>
          </Modal>
        )}

        {!isMobileView && (
          <div className="filterContainer">
            <div className="filterHeader">
              <p className="filterTitle">Filters</p>
              <p className="clearAll" onClick={handleClearAll}>
                Clear All
              </p>
            </div>
            <div className="separatorLine" />
            <Collapse
              items={items}
              defaultActiveKey={items.map((item) => item.key)}
              bordered={false}
              expandIconPosition="end"
              expandIcon={({ isActive }) => (
                <DownOutlined rotate={isActive ? 180 : 0} />
              )}
              className="collapseContainer"
            />
          </div>
        )}
        <Modal
          closable={{ "aria-label": "Custom Close Button" }}
          open={isLoginModalOpen}
          footer={null}
          onCancel={() => setIsLoginModalOpen(false)}
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

        {/* featured properties */}
        <div className="featuredPropertiesContainer">
          <div className="featuredPropertiesHeader">
            <p className="featuredTitle">Featured Properties</p>
            <Button className="filtersButton" onClick={showModal}>
              Filters
            </Button>
          </div>
          <div className="propertyList">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="propertyItem"
                onClick={() => handlePropertyCardClick(property)}
              >
                <div className="propertyImageWrapper">
                  <div className="imageContainer">
                    <Swiper
                      modules={[SwiperPagination]}
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
                            className="propertyImage"
                            style={{
                              width: "100%",
                              height: "289px",
                              objectFit: "cover",
                              borderRadius: 12,
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="propertyStatusWrapper">
                    <p className="propertyVerified">Verified</p>
                    <p className="propertySale">{property.status}</p>
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
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
                  className="propertyInfoWrapper"
                  onClick={() => handlePropertyCardClick(property)}
                >
                  <div className="propertyHeader">
                    <div className="propertyDetails">
                      <p className="propertyName">{property.name}</p>
                      <p className="propertyLocation">
                        {property.type} in{" "}
                        <span className="propertyLocationDetails">
                          {property.location}
                        </span>
                      </p>
                    </div>

                    <div className="ListingpriceWrapper">
                      <p className="propertyStartFrom">
                        {property.startingFrom}
                      </p>
                      <p className="propertyPrice">{property.price}</p>
                    </div>
                  </div>
                  <div className="propertySpecs">
                    {property.iconType.map((type, idx) => (
                      <div className="propertySpecItem" key={type + idx}>
                        {type === "bed" && <LuBedDouble color="#001C6B" />}
                        {type === "bath" && <PiBathtub color="#001C6B" />}
                        {type === "sqft" && <AiOutlineHome color="#001C6B" />}
                        {type === "sqfts" && <AiOutlineHome color="#001C6B" />}
                        {type === "grounds" && (
                          <IoExpandOutline color="#001C6B" />
                        )}
                        {type === "frontage" && (
                          <LiaRoadSolid color="#001C6B" />
                        )}

                        {/* Add more icon types as needed */}
                        <span className="text">
                          {type === "bed" && property.specs.bedroomsDisplay}
                          {type === "bath" &&
                            `${property.specs.bathsDisplay} Baths`}
                          {type === "sqfts" && property.detailedInfo.sqfts}
                          {type === "sqft" && property.specs.sqft}
                          {type === "grounds" && property.specs.sqft}
                          {type === "frontage" &&
                            property.detailedInfo.frontage}
                        </span>
                      </div>
                    ))}
                    {/* <div className="propertySpecItem">
                      <LuBedDouble color="#001C6B" />
                      <span className="text">
                        {property.specs.bedrooms} BHK
                      </span>
                    </div> */}
                    {/* <div className="propertySpecItem">
                      <PiBathtub color="#001C6B" />
                      <span className="text">{property.specs.baths} Baths</span>
                    </div>
                    <div className="propertySpecItem">
                      <AiOutlineHome color="#001C6B" />
                      <span className="text">{property.specs.sqft}</span>
                    </div> */}
                  </div>
                  <div
                    className="propertyHighlightsWrapper"
                    onClick={() => handlePropertyCardClick(property)}
                  >
                    <p className="hpPropHighlightsText">Highlights: </p>
                    {property.highlights.map((highlight, idx) => (
                      <p key={idx} className="propertyHighlight">
                        {highlight}
                      </p>
                    ))}
                  </div>
                  <p className="propertyDescription">{property.description}</p>
                  <div className="propertyFooter">
                    <div className="propertyFooterLeft">
                      <img src={Logo} className="propertyLogo" />
                      <div>
                        <p className="propertyFooterName">
                          {property.company.name}
                        </p>
                        <p className="propertyFooterDate">
                          Listed on: {property.listedOn}
                        </p>
                      </div>
                    </div>
                    <div className="propertyFooterRight">
                      <Button
                        onClick={handleEnquiryClick}
                        className="propertyEnquiryButton"
                      >
                        Enquiry Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="paginationContainer">
            <Pagination
              align="end"
              showSizeChanger={false}
              defaultCurrent={3}
              current={currentPage}
              pageSize={pageSize}
              total={totalProperties}
              onChange={onPageChange}
            />
          </div>
        </div>
      </div>
      {/* card details */}
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
                  <p style={{ color: "white", fontSize: 16 }}>+91 7218212345</p>
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
                  <p style={{ color: "white", fontSize: 16 }}>+91 7218212345</p>
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
  );
}
