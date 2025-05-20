import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbShare } from "react-icons/tb";
import Property from "../assets/property.jpg";
import Property1 from "../assets/property1.jpg";
import plainimage from "../assets/plain.png";
import Visualimage from "../assets/visual.png";
import { Rate, Progress, Flex, Divider, Button } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import dimensionalView from "../assets/dimensionalView.png";
import { LuBedDouble } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineCompass } from "react-icons/ai";
import "leaflet/dist/leaflet.css";
import "../styles/DetailsPage.css";
import { IoLocationOutline } from "react-icons/io5";
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
import WallSharing from "../assets/WallSharing.png";
import DuplexLower from "../assets/DuplexLower.svg";
import DuplexUpper from "../assets/DuplexUpper.svg";
import FirstFloorPlan from "../assets/FirstFloorPlan.svg";
import GroundFloorPlan from "../assets/GroundFloorPlan.svg";
import SitePlan from "../assets/SitePlan.svg";
import TypicalFloorPlan from "../assets/TypicalFloorPlan.svg";
import {
  FaCarSide,
  FaUtensils,
  FaLeaf,
  FaShieldAlt,
  FaRegThumbsUp,
  FaRegThumbsDown,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

export default function DetailsPage() {
  const location = useLocation();
  const property = location.state?.property;

  const navigate = useNavigate();
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
  const image = [
    { src: AcGym, name: "Air-Conditioned Gymnasium" },
    { src: PowerBackup, name: "Power Backup" },
    { src: MultiPuposeHall, name: "Air-Conditioned Multipurpose Hall" },
    { src: VideoDoorPhone, name: "Video Door Phone" },
    { src: SwimmingPool, name: "Swimming Pool" },
    { src: CCTV, name: "CCTV" },
    { src: AccessEntry, name: "Access Controlled Entry" },
    { src: ModernLandscaping, name: "Modern Landscaping" },
    { src: Parking, name: "Visitor Car Parking" },
    { src: WallSharing, name: "No Common Wall Sharing" },
    { src: Games, name: "Indoor Games" },
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

  return (
    <div>
      <Header />
      <div className="detailPageWrapper">
        <div className="detailPageContent">
          <div className="detailPageLeft">
            {/* detailes image view */}
            <div className="detailPageImgContainer" >
              <div className="detailPageImageWrapper">
                <img
                  src={property.images[currentIndex]}
                  alt={property.name}
                  className="detailPageMainImage"
                />
                {/* Prev Button */}
                <button
                  onClick={() =>
                    setCurrentIndex(
                      currentIndex === 0
                        ? property.images.length - 1
                        : currentIndex - 1
                    )
                  }
                  className="detailPagePrevButton"
                >
                  <FaChevronLeft color="white" />
                </button>
                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentIndex((currentIndex + 1) % property.images.length)
                  }
                  className="detailPageNextButton"
                >
                  <FaChevronRight color="white" />
                </button>
                {/* Step Indicator */}
                <div className="detailPageStepIndicator">
                  {images.map((_, index) => (
                    <div
                      key={index}
                      className={`detailPageStepDot ${
                        currentIndex === index ? "detailPageStepDotActive" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="detailPageInfoContainer">
                <p className="detailPageVerifiedTag">Verified</p>
                <div className="detailPageIcons">
                  <TbShare color="white" className="detailPageShareIcon" />
                  <FaRegHeart color="white" className="detailPageHeartIcon" />
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
              {/* {property.images.map((img, idx) => (
  <img
    key={idx}
    src={img}
    className={`detailPageImage${idx === 0 ? " detailPageImageClickable" : ""}`}
    alt={property.name}
  />
))} */}
              {[...Array(5)].map((_, idx) => (
                <img
                  key={idx}
                  src={property.images[idx % property.images.length]}
                  className={`detailPageImage${
                    idx === 0 ? " detailPageImageClickable" : ""
                  }`}
                  alt={property.name}
                />
              ))}
            </div>
            {/* mobile static */}
            {isMobile && (
              <div className="detailPagePropertyContainer">
                <p className="detailPagePropertyTitle">{property.name}</p>
                <p className="detailPagePropertySubTitle">
                  Apartment / Plot in{" "}
                  <span className="detailPageLocation">
                    {property.location}
                  </span>
                </p>
                <div className="detailPagePriceContainer">
                  <p className="detailPageLocation"> Starting From</p>
                  <p className="detailPagePrice">{property.price}</p>
                  <p className="detailPageCharges">+ Charges</p>
                </div>
                <div className="detailPageDivider" />
                <div className="detailPageAgentContainer">
                  <p className="detailPageAgentName">{property.company.name}</p>
                  <p className="detailPageAgentListedDate">
                    Listed on: {property.listedOn}
                  </p>
                </div>
                <div>
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
              <div className="detailPagHouseInfoItem">
                <LuBedDouble className="detailPageInfoIcon" />
                <p className="detailsInfoText">
                  {property.detailedInfo.bedrooms}
                </p>
              </div>
              <div className="detailPagHouseInfoItem">
                <PiBathtub className="detailPageInfoIcon" />
                <p className="detailsInfoText">
                  {property.detailedInfo.baths} Baths
                </p>
              </div>
              <div className="detailPagHouseInfoItem">
                <AiOutlineHome className="detailPageInfoIcon" />
                <p className="detailsInfoText">{property.detailedInfo.sqft}</p>
              </div>
              <div className="detailPagHouseInfoItem">
                <AiOutlineCalendar className="detailPageInfoIcon" />
                <p className="detailsInfoText">
                  {" "}
                  Year Built:{property.yearBuilt}
                </p>
              </div>
              <div className="detailPagHouseInfoItem">
                <AiOutlineCompass className="detailPageInfoIcon" />
                <p className="detailsInfoText">
                  Facing:{property.detailedInfo.facing}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="detailPageHighlightsContainer">
              <p className="detailPageHighlightLabel">Highlights: </p>
              {property.highlights.map((highlight, idx) => (
                <p key={idx} className="propertyHighlight">
                  {highlight}
                </p>
              ))}
              <p className="detailPageHighlightItem detailPageHighlightItemGreen">
                No Brokerage
              </p>
              <p className="detailPageHighlightItem">
                <img
                  src={dimensionalView}
                  className="detailPageHighlightIcon"
                />
                3D Floor Plans Available
              </p>
            </div>

            {/* content */}
            <div className="detailPageTextContainer">
              <p className="detailPageText">
                {property.detailedInfo.description}
              </p>
            </div>
            <div className="detailPageDivider" />

            {/* Highlights Container with 6 star points */}
            <div className="detailPageHighlightsContten">
              <p className="detailPageHighlightTitle">Highlights:</p>
              <div className="detailPageHighlightsList">
                {Object.values(property.highlightsInfo).map((point, index) => (
                  <p key={index}>* {point}</p>
                ))}
              </div>
            </div>
            <div className="detailPageDivider" />
            {/* details */}
            <div>
              <p className="detailPageDetailsHeader">Details</p>
              <div className="detailPageDetailsContainer">
                {[
                  { label: "Type", value: property.detailedInfo?.bedrooms },
                  {
                    label: "Super Built-up area sqft",
                    value: property.detailedInfo?.sqft,
                  },
                  { label: "Furnishing", value: property.details?.furnishing },
                  { label: "Bathrooms", value: property.detailedInfo?.baths },
                  { label: "Facing", value: property.detailedInfo?.facing },
                  { label: "Flat No", value: property.details?.flatNo },
                  { label: "Floor", value: property.details?.FloorNo },
                  {
                    label: "Project Name",
                    value: property.name,
                  },
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
              </div>
            </div>
            <div className="detailPageDivider" />
            {/*Amenities */}
            {property.id !== 2 && (
              <>
                <div>
                  <p className="detailPageAmenitiesHeader">Amenities</p>
                  <div className="imageGrid">
                    {image.map((image, index) => (
                      <div key={index} className="imageContainer">
                        <img
                          src={image.src}
                          alt={image.name}
                          className="gridImage"
                        />
                        <p className="imageName">{image.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="detailPageDivider" />
                {/* floor plans */}
                <div>
                  <p className="detailPageFloorPlansHeader">Floor Plans</p>
                  <div className="detailPageFloorPlansContainer">
                    <div>
                      <p>SITE PLAN</p>
                      <img
                        src={SitePlan}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                    <div>
                      <p>GROUND FLOOR PLAN</p>
                      <img
                        src={GroundFloorPlan}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                  </div>
                  <div className="detailPageFloorPlansContainer">
                    <div>
                      <p>FIRST FLOOR PLAN</p>
                      <img
                        src={FirstFloorPlan}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                    <div>
                      <p>TYPICAL FLOOR PLAN</p>
                      <img
                        src={TypicalFloorPlan}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                  </div>
                  <div className="detailPageFloorPlansContainer">
                    <div>
                      <p>DUPLEX LOWER</p>
                      <img
                        src={DuplexLower}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                    <div>
                      <p>DUPLEX UPPER</p>
                      <img
                        src={DuplexUpper}
                        className="detailPageFloorPlanImage"
                      />
                    </div>
                  </div>
                </div>
                <div className="detailPageDivider" />
              </>
            )}

            {/* location */}
            <div className="DetailPageLocation">
              <div>
                {" "}
                <IoLocationOutline />
              </div>
              <div>
                <p className="locationText">
                  Esthell Golden Square TS, No: 1/10, No: 176, Inner Ring Road
                  (South Segment), Opp. Sunshine School, Velachery, Chennai –
                  600 042 Tamil Nadu, India.
                </p>
              </div>
            </div>

            {/* map */}
            <div className="detailPageMapContainer">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.9870076954066!2d80.28735957367391!3d13.10000951205284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f8124677793%3A0x97f482509d2f1ff1!2sKerry%20Indev%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1746779168972!5m2!1sen!2sin"
                className="detailPageMapIframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <div className="detailPageDivider" />
            {/* locality review */}
            <div>
              <p style={{ fontWeight: 500, fontSize: 18 }}>Locality Review</p>
              <div className="ratings-container">
                {/* Left Section - Average Rating */}
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

                {/* Right Section - Feature Ratings */}
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
            </div>
          </div>

          {/* static */}
          {!isMobile && (
            <div className="detailPagePropertyContainer">
              <p className="detailPagePropertyTitle">{property.name}</p>
              <p className="detailPagePropertySubTitle">
                {property.type} in{" "}
                <span className="detailPageLocation"> {property.location}</span>
              </p>
              <div className="detailPagePriceContainer">
                <p className="detailPageLocation"> Starting From</p>
                <p className="detailPagePrice">{property.price}</p>
                <p className="detailPageCharges">+ Charges</p>
              </div>
              <div className="detailPageDivider" />
              <div className="detailPageAgentContainer">
                <p className="detailPageAgentName">{property.company.name}</p>
                <p className="detailPageAgentListedDate">
                  Listed on: {property.listedOn}
                </p>
              </div>
              <div>
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
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                onClick={handleCardClick}
                className="similarListingsCard"
              >
                <div className="similarListingsImageContainer">
                  <div className="similarListingsImageWrapper">
                    <img
                      src={images[currentIndex]}
                      alt={`Property ${currentIndex + 1}`}
                      className="similarListingsImage"
                    />

                    <button
                      onClick={handlePrev}
                      className="similarListingsButton similarListingsPrevButton"
                    >
                      <FaChevronLeft color="white" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="similarListingsButton similarListingsNextButton"
                    >
                      <FaChevronRight color="white" />
                    </button>
                    {/* Step Indicator */}
                    <div className="similarListingsStepIndicator">
                      {images.map((_, index) => (
                        <div
                          key={index}
                          className={`similarListingsStepCircle ${
                            currentIndex === index
                              ? "similarListingsStepCircleActive"
                              : ""
                          }`}
                          onClick={() => setCurrentIndex(index)}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="similarListingsStatusContainer">
                    <p className="similarListingsVerifiedTag">Verified</p>
                    <p className="similarListingsSaleTag">Ready to occupy</p>
                    <FaRegHeart color="white" />
                  </div>
                </div>
                <div className="similarListingsPriceContainer">
                  <div>
                    <p className="similarListingsDescription">Esthell Homes</p>
                    <p className="similarListingsLocation">
                      Apartment / Plot in{" "}
                      <span className="similarListingsArea">
                        Velachery, Chennai
                      </span>
                    </p>
                  </div>
                  <p className="similarListingsPrice">₹30L</p>
                </div>

                <div className="similarListPropContainer">
                  <div className="similarListPropItem">
                    <LuBedDouble className="similarListPropIcon" />2 BHK
                  </div>
                  <div className="similarListPropItem">
                    <PiBathtub className="similarListPropIcon" />3 Baths
                  </div>
                  <div className="similarListPropItem">
                    <AiOutlineHome className="similarListPropIcon" />
                    1000 Sqft
                  </div>
                </div>

                <div className="similarListingsHighlightsContainer">
                  <p className="similarListingshighlightText">Highlights: </p>
                  <p className="similarListingsHighlight">North facing</p>
                  <p className="similarListingsHighlight">North facing</p>
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
