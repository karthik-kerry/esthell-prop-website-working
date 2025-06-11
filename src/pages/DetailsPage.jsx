import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import { Button, Modal } from "antd";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import "leaflet/dist/leaflet.css";
import "../styles/DetailsPage.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
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
import OliveSands1 from "../assets/OliveSands1.jpg";
import JumeirahResidences from "../assets/JumeirahResidences.png";
import JumeirahResidences1 from "../assets/JumeirahResidences1.jpg";
import JumeirahResidences2 from "../assets/JumeirahResidences2.jpg";
import JumeirahResidences3 from "../assets/JumeirahResidences3.jpg";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaRoadSolid } from "react-icons/lia";
import { IoExpandOutline } from "react-icons/io5";
import JumeiraPrice from "../assets/JumeiraPrice.pdf";
import JumeiraFloorPlans from "../assets/JumeiraFloorPlans.pdf";
import EsthellBrochure from "../assets/EsthellBrochure.pdf";
import {
  FaCarSide,
  FaUtensils,
  FaLeaf,
  FaShieldAlt,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from "react-icons/fa";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, googleProvider } from "../firebase";
import { FcGoogle } from "react-icons/fc";

export default function DetailsPage() {
  const [user] = useAuthState(auth);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const toggleFullScreen = () => setIsFullScreen((v) => !v);
  const location = useLocation();
  const property = location.state?.property;
  const [favoriteMap, setFavoriteMap] = useState({});
  const navigate = useNavigate();
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
    if (!user) {
      setIsModalOpen(true);
    }
  }, [user]);
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavoriteMap(JSON.parse(stored));
  }, []);
  const handleEnquiryClick = () => {
    navigate("/contact");
  };
  const handleViewAll = () => {
    navigate("/listings");
  };
  const [rating, setRating] = useState(4.2);

  const starProgress = [
    { progress: 100, label: "5", filled: true },
    { progress: 100, label: "4", filled: true },
    { progress: rating % 1 === 0 ? 100 : 50, label: "3", filled: true },
    { progress: 0, label: "2", filled: false },
    { progress: 0, label: "1", filled: false },
  ];

  // change here
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

  const progressWidth = (rating / 5) * 100;
  const images = [Property, Property1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [floorPlanIndex, setFloorPlanIndex] = useState(0);
  const similarListings = currentProperties
    .filter((p) => p.id !== property.id)
    .slice(0, 3);
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
  const handleCardClick = () => {
    navigate("/details");
  };

  const handleDownloadPropertyPdfs = (property) => {
    if (!property?.pdfs || property.pdfs.length === 0) {
      alert("No PDFs available for this property.");
      return;
    }

    property.pdfs.forEach((pdfUrl, index) => {
      const link = document.createElement("a");
      link.href = pdfUrl;
      const fileName = pdfUrl.split("/").pop() || `document-${index + 1}.pdf`;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  const handleShare = () => {
    const shareData = {
      id: property?.id,
      title: property?.name,
      text: `Check out this property: ${property?.name} in ${property?.location}`,
      url: window?.location?.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        console.error("Share failed:", err);
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google User Data:", user); // Log user data
      alert("Google Sign-In successful!");
      setIsModalOpen(false);
    } catch (error) {
      alert("Google Sign-In failed: " + error.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="detailPageWrapper">
        <div className="detailPageContent">
          <div className="detailPageLeft">
            {/* detailes image view */}

            <div className="detailPageImgContainer">
              <div className="detailPageImageWrapper">
                <Swiper
                  modules={[Pagination]}
                  pagination={{ clickable: true }}
                  spaceBetween={10}
                  slidesPerView={1}
                  style={{ borderRadius: 12 }}
                >
                  {property?.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={property?.name}
                        className="detailPageMainImage"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="detailPageInfoContainer">
                <p className="detailPageVerifiedTag">Verified</p>
                <p className="propertySale">{property?.status}</p>
                <div className="detailPageIcons">
                  <TbShare
                    color="white"
                    className="detailPageShareIcon"
                    onClick={handleShare}
                  />

                  <div onClick={() => handleHeartClick(property?.id)}>
                    {favoriteMap[property?.id] ? (
                      <FaHeart color="red" className="detailPageHeartIcon" />
                    ) : (
                      <FaRegHeart
                        color="white"
                        className="detailPageHeartIcon"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* series of images */}
            <div
              ref={scrollContainerRef}
              className="detailPageScrollContainer"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              {property.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  className={`detailPageImage${
                    idx === 0 ? " detailPageImageClickable" : ""
                  }`}
                  alt={property.name}
                />
              ))}
              {/* {[...Array(2)].map((_, idx) => (
                <img
                  key={idx}
                  src={property?.images[idx % property?.images.length]}
                  className={`detailPageImage${
                    idx === 0 ? " detailPageImageClickable" : ""
                  }`}
                  alt={property?.name}
                />
              ))} */}
            </div>
            {/* mobile static */}
            {isMobile && (
              <div className="detailPagePropertyContainer">
                <p className="detailPagePropertyTitle">{property?.name}</p>
                <p className="detailPagePropertySubTitle">
                  Apartment / Plot in{" "}
                  <span className="detailPageLocation">
                    {property?.location}
                  </span>
                </p>
                <div className="detailPagePriceContainer">
                  <p className="detailStartFrom">{property?.startingFrom}</p>
                  <p className="detailPagePrice">{property?.price}</p>
                  <p className="detailPageCharges">+ Charges</p>
                </div>
                <div className="detailPageDivider" />
                <div className="detailPageAgentContainer">
                  <p className="detailPageAgentName">
                    {property?.company?.name}
                  </p>
                  <p className="detailPageAgentListedDate">
                    Listed on: {property?.listedOn}
                  </p>
                </div>
                <div className="detailContactContainer">
                  <div className="detailcontactItem">
                    <FaPhoneAlt color="#001C6B" />
                    <p className="detailcontactText">
                      <a href="tel:+917218212345" className="phoneLink">
                        +91 72182 12345
                      </a>{" "}
                      /
                      <a href="tel:+917418201555" className="phoneLink">
                        +91 74182 01555
                      </a>
                    </p>
                  </div>
                  <div className="detailcontactItem">
                    <IoMdMail color="#001C6B" />
                    <p className="detailcontactText">
                      <a
                        href="mailto:vpraveen@esthellproperties.com"
                        className="emailLink"
                      >
                        vpraveen@esthellproperties.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="detailcontactItem">
                  <IoLogoWhatsapp
                    color="#67C15E"
                    className="detailwhatsappIcon"
                  />
                  <Button
                    onClick={handleEnquiryClick}
                    className="detailPageEnquiryButton"
                  >
                    Enquiry Now
                  </Button>
                </div>
              </div>
            )}
            {/* houseInfo */}
            <div className="detailPageHouseInfoContainer">
              {property?.iconType.map((type, idx) => (
                <div className="detailPagHouseInfoItem" key={type + idx}>
                  {type === "bed" && <LuBedDouble color="#001C6B" />}
                  {type === "bath" && <PiBathtub color="#001C6B" />}
                  {type === "sqft" && <AiOutlineHome color="#001C6B" />}
                  {type === "sqfts" && <AiOutlineHome color="#001C6B" />}
                  {type === "grounds" && <IoExpandOutline color="#001C6B" />}
                  {type === "frontage" && <LiaRoadSolid color="#001C6B" />}

                  {/* Add more icon types as needed */}
                  <span className="text">
                    {type === "bed" && property?.specs?.bedroomsDisplay}
                    {type === "bath" &&
                      `${property?.specs?.bathsDisplay} Baths`}
                    {type === "sqfts" && property?.detailedInfo?.sqfts}
                    {type === "sqft" && property?.specs?.sqft}
                    {type === "grounds" && property?.specs?.sqft}
                    {type === "frontage" && property?.detailedInfo?.frontage}
                  </span>
                </div>
              ))}
              <div className="detailPagHouseInfoItem">
                <AiOutlineCalendar className="detailPageInfoIcon" />
                <p className="detailsInfoText"> {property?.builtStatus}</p>
              </div>
              {property?.detailedInfo?.facing && (
                <div className="detailPagHouseInfoItem">
                  <AiOutlineCompass className="detailPageInfoIcon" />
                  <p className="detailsInfoText">
                    Facing: {property?.detailedInfo?.facing}
                  </p>
                </div>
              )}
            </div>

            {/* content */}
            <div className="detailPageTextContainer">
              <p className="detailPageText">
                {property?.detailedInfo?.description}
              </p>
            </div>
            <div className="detailPageDivider" />

            {/* Highlights Container with 6 star points */}
            <div className="detailPageHighlightsContten">
              <p className="detailPageHighlightTitle">Highlights:</p>
              <div className="detailPageHighlightsList">
                {Object.values(property?.highlightsInfo).map((point, index) => (
                  <p key={index}>* {point}</p>
                ))}
              </div>
            </div>
            <div className="detailPageDivider" />
            {/* details */}
            <div>
              <p className="detailPageDetailsHeader">Details</p>
              {/* <div className="detailPageDetailsContainer">
                {[
                  { label: "Type", value: property?.detailedInfo?.bedrooms },
                  {
                    label: "Super Built-up area sqft",
                    value: property?.detailedInfo?.sqft,
                  },
                  { label: "Furnishing", value: property?.details?.furnishing },
                  { label: "Bathrooms", value: property?.detailedInfo?.baths },
                  { label: "Facing", value: property?.detailedInfo?.facing },
                  // { label: "Flat No", value: property.details?.flatNo },

                  // { label: "Floor", value: property.details?.FloorNo },
                ].map((item, index) => (
                  <div key={index} className="detailPageDetailItem">
                    <div className="detailPageDetailLabel">
                      <p className="detailPageDetailText">{item.label}</p>
                    </div>
                    <div className="detailPageDetailValue">
                      <p>:</p>
                    </div>
                    <div className="detailPageDetailValue">
                      <p className="detailPageDetailText">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div> */}
              <div className="detailPageDetailsContainer">
                {[
                  { label: "Type", value: property?.detailedInfo?.bedrooms },
                  {
                    label: "Super Built-up area sqft",
                    value: property?.detailedInfo?.sqft,
                  },
                  { label: "Furnishing", value: property?.details?.furnishing },
                  { label: "Bathrooms", value: property?.detailedInfo?.baths },
                  { label: "Facing", value: property?.detailedInfo?.facing },
                  // { label: "Flat No", value: property.details?.flatNo },
                  // { label: "Floor", value: property.details?.FloorNo },
                ]
                  .filter(
                    (item) =>
                      item.value && item.value !== "-" && item.value !== " "
                  )
                  .map((item, index) => (
                    <div key={index} className="detailPageDetailItem">
                      <div className="detailPageDetailLabel">
                        <p className="detailPageDetailText">{item.label}</p>
                      </div>
                      <div className="detailPageDetailValue">
                        <p>:</p>
                      </div>
                      <div className="detailPageDetailValue">
                        <p className="detailPageDetailText">{item.value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="detailPageDivider" />
            {/*Amenities */}
            {property?.amenities && property.amenities.length > 0 && (
              <>
                <div>
                  <p className="detailPageAmenitiesHeader">Amenities</p>
                  <div className="imageGrid">
                    {property.amenities.map((amenity, idx) => (
                      <div key={idx} className="imageContainer">
                        <img
                          src={amenity.src}
                          alt={amenity.name}
                          className="gridImage"
                        />
                        <p className="imageName">{amenity.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="detailPageDivider" />
                {/* floor plans */}
                {property?.floorPlans && property.floorPlans.length > 0 && (
                  <div className="detailPageFloorPlanSlider">
                    <button
                      className="detailPageFloorPlanArrow"
                      onClick={() =>
                        setFloorPlanIndex(
                          floorPlanIndex === 0
                            ? property.floorPlans.length - 1
                            : floorPlanIndex - 1
                        )
                      }
                    >
                      <FaChevronLeft color="#001C6B" size={18} />
                    </button>
                    <div className="detailPageFloorPlanSingle">
                      <p>{property.floorPlans[floorPlanIndex].label}</p>
                      <img
                        src={property.floorPlans[floorPlanIndex].src}
                        className="detailPageFloorPlanImage"
                        alt={property.floorPlans[floorPlanIndex].label}
                        onClick={toggleFullScreen}
                        style={{ cursor: "zoom-in" }}
                      />
                    </div>
                    <button
                      className="detailPageFloorPlanArrow"
                      onClick={() =>
                        setFloorPlanIndex(
                          (floorPlanIndex + 1) % property.floorPlans.length
                        )
                      }
                    >
                      <FaChevronRight color="#001C6B" size={18} />
                    </button>
                  </div>
                )}
                {isFullScreen &&
                  property?.floorPlans &&
                  property.floorPlans.length > 0 && (
                    <div className="fullScreen" onClick={toggleFullScreen}>
                      <div
                        className="detailPageFloorPlanSingle"
                        onClick={(e) => e.stopPropagation()}
                        style={{
                          background: "#fff",
                          borderRadius: 18,
                          padding: 24,
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          minWidth: 320,
                        }}
                      >
                        {/* Close Icon */}
                        <button
                          onClick={toggleFullScreen}
                          className="closeIcon"
                          aria-label="Close"
                        >
                          &times;
                        </button>
                        {/* Left Arrow */}
                        <button
                          className="detailPageFloorPlanArrow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFloorPlanIndex(
                              floorPlanIndex === 0
                                ? property.floorPlans.length - 1
                                : floorPlanIndex - 1
                            );
                          }}
                          style={{
                            position: "absolute",
                            left: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#001C6B",
                            zIndex: 2,
                          }}
                          aria-label="Previous"
                        >
                          <FaChevronLeft size={24} />
                        </button>
                        {/* Right Arrow */}
                        <button
                          className="detailPageFloorPlanArrow"
                          onClick={(e) => {
                            e.stopPropagation();
                            setFloorPlanIndex(
                              (floorPlanIndex + 1) % property.floorPlans.length
                            );
                          }}
                          style={{
                            position: "absolute",
                            right: 12,
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#001C6B",
                            zIndex: 2,
                          }}
                          aria-label="Next"
                        >
                          <FaChevronRight size={24} />
                        </button>
                        <p style={{ marginBottom: 16 }}>
                          {property.floorPlans[floorPlanIndex].label}
                        </p>
                        <img
                          src={property.floorPlans[floorPlanIndex].src}
                          className="fullScreenImage"
                          alt={property.floorPlans[floorPlanIndex].label}
                          style={{ cursor: "zoom-out" }}
                          onClick={toggleFullScreen}
                        />
                      </div>
                    </div>
                  )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    onClick={() => handleDownloadPropertyPdfs(property)}
                    className="downloadButton"
                  >
                    Download
                    <MdOutlineFileDownload />
                  </Button>
                </div>
                <div className="detailPageDivider" />
              </>
            )}

            {/* location */}
            <div className="DetailPageLocation">
              <div className="DetailPageLocationWrapper">
                <IoLocationOutline style={{ width: "5%" }} />
                <p className="locationText">{property?.address}</p>
              </div>
            </div>

            {/* map */}
            <div className="detailPageMapContainer">
              <iframe
                src={property?.map}
                className="detailPageMapIframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="detailPageDivider" />
            {/* locality review */}
            {/* <div>
              <p style={{ fontWeight: 500, fontSize: 18 }}>Locality Review</p>
              <div className="ratings-container">
               
                <div className="left-panel">
                  <div className="average-score">
                    4.2<span className="small"> / 5</span>
                  </div>
                  <div className="stars">★★★★☆</div>
                  <p className="review-rate">Average Rating</p>
                  <p className="review-count">(61 Total Reviews)</p>

                  <div className="bar-container">
                    <div className="bar">
                      <div className="bar-fill" style={{ width: "70%" }}></div>
                      <span>5 ★</span>
                    </div>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: "50%" }}></div>
                      <span>4 ★</span>
                    </div>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: "10%" }}></div>
                      <span>3 ★</span>
                    </div>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: "10%" }}></div>
                      <span>2 ★</span>
                    </div>
                    <div className="bar">
                      <div className="bar-fill" style={{ width: "10%" }}></div>
                      <span>1 ★</span>
                    </div>
                  </div>

                  <a href="#" className="ratings-link">
                    See how ratings are calculated
                  </a>
                </div>

            
                <div className="right-panel">
                  <h3>Ratings by Features</h3>
                  <div className="features">
                    <div className="feature">
                      <FaCarSide className="icon" />
                      <div>
                        <p className="IconText">Connectivity</p>
                        <p className="IconSubText">4.3 out of 5</p>
                      </div>
                    </div>
                    <div className="feature">
                      <FaUtensils className="icon" />
                      <div>
                        <p className="IconText">Lifestyle</p>
                        <p className="IconSubText">4.1 out of 5</p>
                      </div>
                    </div>
                    <div className="feature">
                      <FaLeaf className="icon" />
                      <div>
                        <p className="IconText">Environment </p>
                        <p className="IconSubText">4.1 out of 5</p>
                      </div>
                    </div>
                    <div className="feature">
                      <FaShieldAlt className="icon" />
                      <div>
                        <p className="IconText">Safety </p>
                        <p className="IconSubText">4.1 out of 5</p>
                      </div>
                    </div>
                  </div>

                  <h4>
                    Popular Mentions{" "}
                    <span className="green-text">100% Positive Mentions</span>
                  </h4>

                  <div className="likes-dislikes">
                    <div className="likes">
                      <FaRegThumbsUp className="thumb-icon" />
                      <div className="row1">
                        <p className="mention">
                          Easy Cab/Auto Availability (37)
                        </p>
                        <p className="mention">Good Public Transport (37)</p>
                        <p className="mention">Good Schools are nearby (36)</p>
                      </div>
                      <div className="row2">
                        <p className="mention">
                          Markets at a walkable distance (29)
                        </p>
                        <p className="mention">
                          Metro Connectivity nearby (23)
                        </p>
                        <p className="mention">Well-maintained Roads (17)</p>
                      </div>
                    </div>

                    <div className="dislikes">
                      <FaRegThumbsDown className="thumb-icon" />
                      <div className="row1">
                        <p className="mention">Frequent Traffic Jams (20)</p>
                        <p className="mention">Frequent Parking Issues (17)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          {/* static */}
          {!isMobile && (
            <div className="detailPagePropertyContainer">
              <p className="detailPagePropertyTitle">{property?.name}</p>
              <p className="detailPagePropertySubTitle">
                {property?.type} in{" "}
                <span className="detailPageLocation">
                  {" "}
                  {property?.location}
                </span>
              </p>
              <div className="detailPagePriceContainer">
                <p className="detailStartFrom">{property?.startingFrom}</p>
                <p className="detailPagePrice">{property?.price}</p>
                <p className="detailPageCharges">+ Charges</p>
              </div>
              <div className="detailPageDivider" />
              <div className="detailPageAgentContainer">
                <p className="detailPageAgentName">{property?.company?.name}</p>
                <p className="detailPageAgentListedDate">
                  Listed on: {property?.listedOn}
                </p>
              </div>
              <div className="detailContactContainer">
                <div className="detailcontactItem">
                  <FaPhoneAlt color="#001C6B" />
                  <p className="detailcontactText">
                    <a href="tel:+917218212345" className="phoneLink">
                      +91 72182 12345
                    </a>{" "}
                    /
                    <a href="tel:+917418201555" className="phoneLink">
                      +91 74182 01555
                    </a>
                  </p>
                </div>
                <div className="detailcontactItem">
                  <IoMdMail color="#001C6B" />
                  <p className="detailcontactText">
                    <a
                      href="mailto:vpraveen@esthellproperties.com"
                      className="emailLink"
                    >
                      vpraveen@esthellproperties.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="detailcontactItem">
                <a
                  href={`https://wa.me/917218212345?text=Hi%20I%20am%20interested%20in%20a%20property%20enquiry%20for%20${encodeURIComponent(
                    property?.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp
                    color="#67C15E"
                    className="detailwhatsappIcon"
                  />
                </a>
                <Button
                  onClick={handleEnquiryClick}
                  className="detailPageEnquiryButton"
                >
                  Enquiry Now
                </Button>
              </div>
            </div>
          )}
        </div>
        {/* view all */}
        <div>
          <div className="similarListingsHeader">
            <p className="similarListingsTitle">Similar Listings</p>
            <p className="similarListingsViewAll" onClick={handleViewAll}>
              View All
            </p>
          </div>
          <div className="similarListingsGrid">
            {similarListings.length === 0 && (
              <div style={{ padding: 24, color: "#888" }}>
                No similar listings found.
              </div>
            )}
            {similarListings.map((property) => (
              <div
                key={property?.id}
                onClick={() => navigate("/details", { state: { property } })}
                className="similarListingsCard"
              >
                <div className="similarListingsImageContainer">
                  <div className="similarListingsImageWrapper">
                    <Swiper
                      modules={[Pagination]}
                      pagination={{ clickable: true }}
                      spaceBetween={10}
                      slidesPerView={1}
                      style={{ borderRadius: 12 }}
                    >
                      {property?.images.map((img, idx) => (
                        <SwiperSlide key={idx}>
                          <img
                            src={img}
                            alt={property?.name}
                            className="similarListingsImage"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="similarListingsStatusContainer">
                    <p className="similarListingsVerifiedTag">Verified</p>
                    <p className="similarListingsSaleTag">{property?.status}</p>
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        handleHeartClick(property?.id);
                      }}
                    >
                      {favoriteMap[property?.id] ? (
                        <FaHeart color="red" className="detailPageHeartIcon" />
                      ) : (
                        <FaRegHeart
                          color="white"
                          className="detailPageHeartIcon"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="similarListingsPriceContainer">
                  <div>
                    <p className="similarListingsDescription">
                      {property?.name}
                    </p>
                    <p className="similarListingsLocation">
                      {property?.type} in{" "}
                      <span className="similarListingsArea">
                        {" "}
                        {property?.location}
                      </span>
                    </p>
                  </div>
                  <div className="priceWrapper">
                    <p className="hpStartFrom">{property?.startingFrom}</p>
                    <p className="hpPropPrice">{property?.price}</p>
                  </div>
                </div>
                <div className="similarListPropContainer">
                  {property?.iconType.map((type, idx) => (
                    <div className="hpPropDetailItem" key={type + idx}>
                      {type === "bed" && <LuBedDouble color="#001C6B" />}
                      {type === "bath" && <PiBathtub color="#001C6B" />}
                      {type === "sqft" && <AiOutlineHome color="#001C6B" />}
                      {type === "sqfts" && <AiOutlineHome color="#001C6B" />}
                      {type === "grounds" && (
                        <IoExpandOutline color="#001C6B" />
                      )}
                      {type === "frontage" && <LiaRoadSolid color="#001C6B" />}
                      <span className="text">
                        {type === "bed" && `${property?.specs?.bedrooms} BHK`}
                        {type === "bath" && `${property?.specs?.baths} Baths`}
                        {type === "sqfts" && property?.detailedInfo?.sqfts}
                        {type === "sqft" && property?.specs?.sqft}
                        {type === "grounds" && property?.specs?.sqft}
                        {type === "frontage" &&
                          property?.detailedInfo?.frontage}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="similarListingsHighlightsContainer">
                  <p className="similarListingshighlightText">Highlights: </p>
                  {property?.highlights.slice(0, 2).map((highlight, idx) => (
                    <p key={idx} className="similarListingsHighlight">
                      {highlight}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
