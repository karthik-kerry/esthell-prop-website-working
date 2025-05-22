import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroBg from "../assets/hero_bg.png";
import AboutUs1 from "../assets/AboutUs1.png";
import AboutUs2 from "../assets/AboutUs2.png";
import Mission1 from "../assets/Mission1.png";
import Mission2 from "../assets/Mission2.png";
import { Button } from "antd";
import Integrity from "../assets/Integrity.svg";
import Excellence from "../assets/Excellence.svg";
import Innovation from "../assets/Innovation.svg";
import Transparency from "../assets/Transparency.svg";
import Trust from "../assets/Trust.svg";
import CustomerCentric from "../assets/CustomerCentric.svg";
import Client1 from "../assets/Client1.jpg";
import Client2 from "../assets/Client2.jpg";
import Client3 from "../assets/Client3.jpg";

import { ImQuotesRight } from "react-icons/im";
import "../styles/AboutPage.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function AboutPage() {
  const [dotPosition, setDotPosition] = useState("bottom");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handlePositionChange = ({ target: { value } }) => {
    setDotPosition(value);
  };
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Header />
      <div className="aboutHeroContainer">
        <img src={HeroBg} className="aboutHeroImage" />
        <div className="aboutHeroOverlay">
          {window.innerWidth <= 480 ? (
            <>
              <h1 className="aboutHeroTitle">
                Building Trust, One Property at a Time
              </h1>
              <p className="aboutHeroDescription">
                Welcome to Esthell Properties — your trusted partner in finding
                dream homes, smart investments, and rental spaces. We guide you
                with expertise, honesty, and a personal touch every step of the
                way.
              </p>
            </>
          ) : (
            <>
              <h1 className="aboutHeroTitle">Building Trust, One Property</h1>
              <h1 className="aboutHeroSubtitle">at a Time</h1>
              <p className="aboutHeroDescription">
                Welcome to Esthell Properties — your trusted partner in finding
                dream homes, smart investments, and rental spaces. We guide you
                with expertise, honesty, and a personal touch every step of the
                way.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="aboutcontentSection">
        <div className="aboutcontentWrapper">
          {/* who are we */}
          <div className="sectionContainer1">
            <img src={AboutUs1} className="whoAreWeImg" />
            <div className="whoAreWeTextContainer">
              <p className="whoAreWeHeading">Who We Are</p>
              <p className="whoAreWeParagraph1">
                Founded in <b>2015</b>, Esthell Properties is a real estate builders
                & construction company based in Chennai, Tamil Nadu. With deep
                market knowledge and a passion for excellence, we specialize in
                premium residential properties including apartments, villas, Malls, Hotels & Resorts and
                gated communities.
              </p>
              <p className="whoAreWeParagraph2">
                We're not just about transactions we're about relationships.
                Every project we take on is backed by our commitment to quality,
                legality, and delivering real value to our customers.
              </p>
              <div>
                <Button className="whoAreWeButton">Enquiry Now</Button>
              </div>
            </div>
          </div>

          {/* our mission */}
          <div className="ourMissionContainer">
            <div className="missionSection">
              {window.innerWidth <= 480 ? (
                <>
                  <img src={Mission1} className="missionImage" />
                  <div>
                    <p className="missionText">Our Mission</p>
                    <p className="missionParagraph">
                      To deliver exceptional real estate experiences by offering
                      personalized solutions, transparent processes, and
                      long-term support for every buyer, seller, and investor we
                      serve.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="missionText">Our Mission</p>
                    <p className="missionParagraph">
                      To deliver exceptional real estate experiences by offering
                      personalized solutions, transparent processes, and
                      long-term support for every buyer, seller, and investor we
                      serve.
                    </p>
                  </div>
                  <img src={Mission1} className="missionImage" />
                </>
              )}
            </div>

            <div className="visionSection">
              <img src={Mission2} className="visionImage" />
              <div>
                <p className="visionText">Our Vision</p>
                <p className="visionParagraph">
                  To become one of the most trusted and innovative real estate
                  firms in PAN India, redefining the way people experience
                  buying, selling, and living in homes.
                </p>
              </div>
            </div>
          </div>

          {/* core values */}
          <div className="coreValuesContainer">
            <p className="coreValuesTitle">Our Core Values</p>
            <p className="coreValuesSubtitle">
              Guiding principles that shape every property journey we create.
            </p>

            <div className="coreValuesGrid">
              {/* <div className="coreValueItem">
                <img src={Integrity} className="coreValueIcon" />
                <p className="coreValueText">Integrity</p>
                <p className="coreValueDescription">
                  We operate with honesty, ethics, and accountability in all our
                  dealings.
                </p>
              </div> */}
              <div
                className="coreValueItem"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}
              >
                <img src={Integrity} className="coreValueIcon" />
                <p className="coreValueText">Integrity</p>
                <p className="coreValueDescription">
                  We operate with honesty, ethics, and accountability in all our
                  dealings.
                </p>
              </div>

              <div className="coreValueItem" 
                 onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}>
                <img src={CustomerCentric} className="coreValueIcon" />
                <p className="coreValueText">Trust & Reliability</p>
                <p className="coreValueDescription">
                   We build long-lasting relationships by delivering on our
                  promises consistently.
                </p>
              </div>

              <div className="coreValueItem"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}>
                <img src={Transparency} className="coreValueIcon" />
                <p className="coreValueText">Transparency</p>
                <p className="coreValueDescription">
                  From property details to documentation, we ensure clear and
                  open communication.
                </p>
              </div>

              <div className="coreValueItem"
                 onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}>
                <img src={Excellence} className="coreValueIcon" />
                <p className="coreValueText">Excellence</p>
                <p className="coreValueDescription">
                  We strive for quality and perfection in every project we
                  handle.
                </p>
              </div>

              <div className="coreValueItem"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}>
                <img src={Innovation} className="coreValueIcon" />
                <p className="coreValueText">Customer-Centric Approach</p>
                <p className="coreValueDescription">
                 Your needs, goals, and satisfaction are our top priority —
                  always.
                </p>
              </div>

              <div className="coreValueItem"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#001C6B";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.transition = "all 0.3s ease-in-out";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "white"));
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f2f6fa";
                  e.currentTarget.style.color = "#001C6B";
                  e.currentTarget
                    .querySelectorAll("p")
                    .forEach((p) => (p.style.color = "#001C6B"));
                }}>
                <img src={Trust} className="coreValueIcon" />
                <p className="coreValueText">Innovation</p>
                <p className="coreValueDescription">
                We adopt modern tools and smart technologies to enhance your
                  property journey.
                </p>
              </div>
            </div>
          </div>

          {/* about statistics */}
          <div className="statisticsContainer">
            <div className="statisticsItem">
              <p className="statisticsNumber">100+</p>
              <p className="statisticsDescription">properties sold</p>
            </div>
            <div className="statisticsItem">
              <p className="statisticsNumber">50+</p>
              <p className="statisticsDescription">satisfied Clients sold</p>
            </div>
            <div className="statisticsItem">
              <p className="statisticsNumber">10+</p>
              <p className="statisticsDescription">ongoing projects</p>
            </div>
            <div className="statisticsItem">
              <p className="statisticsNumber">5+</p>
              <p className="statisticsDescription">Years of Experience</p>
            </div>
          </div>

          {/* why choose us */}
          <div className="whyChooseUsContainer">
            <img src={AboutUs2} className="whyChooseUsImage" />
            <div className="whyChooseUsTextContainer">
              <p className="whyChooseUsTitle">Why Choose Us</p>
              <p className="whyChooseUsSubtitle">
                We deliver more than just properties — we build trust, comfort,
                and value.
              </p>
              <div>
                <p className="whyChooseUsPoints">
                  ✅ Over 5+ years of real estate experience.
                </p>
                <p className="whyChooseUsPoints">
                  ✅ Verified and legally clear properties.
                </p>
                <p className="whyChooseUsPoints">
                  ✅ Strong network of builders and landlords.
                </p>
                <p className="whyChooseUsPoints">
                  ✅ Dedicated team of experienced professionals.
                </p>
                <p className="whyChooseUsPoints">
                  ✅ End-to-end support: from site visit to registration.
                </p>
              </div>
            </div>
          </div>

          {/* What Our Clients Say */}
          <div className="clientsSayContainer">
            <p className="clientsSayTitle">What Our Clients Say</p>
            <p className="clientsSaySubtitle">
              Real stories from real people who found their perfect place with
              us.
            </p>
            <div className="clientsSayCardsContainer">
              <div className="clientCard">
                <p className="clientTestimonial">
                  “The team made our first home-buying experience incredibly
                  smooth & stress-free. Every detail was handled with care &
                  professionalism”
                </p>
                <div className="clientInfoContainer">
                  <div className="clientInfo">
                    <img src={Client1} className="clientImage" />
                    <div>
                      <p className="clientName">Priya</p>
                      <p className="clientLocation">Chennai</p>
                    </div>
                  </div>
                  <ImQuotesRight color="#001C6B" className="quoteIcon" />
                </div>
              </div>
              <div className="clientCard">
                <p className="clientTestimonial">
                  “I appreciated their transparency and honest approach. They
                  guided me through every step, and I felt confident making a
                  big investment.”
                </p>
                <div className="clientInfoContainer">
                  <div className="clientInfo">
                    <img src={Client2} className="clientImage" />
                    <div>
                      <p className="clientName">Karthik</p>
                      <p className="clientLocation">Chennai</p>
                    </div>
                  </div>
                  <ImQuotesRight color="#001C6B" className="quoteIcon" />
                </div>
              </div>
              <div className="clientCard">
                <p className="clientTestimonial">
                  “From site visit to registration, everything was handled
                  efficiently. Their commitment to customer satisfaction truly
                  stands out.”
                </p>
                <div className="clientInfoContainer">
                  <div className="clientInfo">
                    <img src={Client3} className="clientImage" />
                    <div>
                      <p className="clientName">Meena</p>
                      <p className="clientLocation">Chennai</p>
                    </div>
                  </div>
                  <ImQuotesRight color="#001C6B" className="quoteIcon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
