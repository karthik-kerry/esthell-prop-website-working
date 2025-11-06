import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/TermsAndCondPage.css";
import Paragraph from "antd/es/skeleton/Paragraph";
import { Helmet } from "react-helmet";
export default function TermsAndConditions() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const sections1 = [
    {
      subTitle: "1. Esthell Village Resort (Mahabalipuram)",
      description:
        "A. Resort Room Bookings: All rooms type at Esthell Village Resort follow a graduated cancellation penalty. For each booking (Superior, Executive, Club, Premium Club, and Suites), the following applies:",
      list: [
        "Early cancellation (≥72 hours before check-in): 25% of the booking cost retained (i.e. 75% refundable).",
        "Mid-term cancellation (48–72 hours before check-in): 50% is retained.",
        "Late cancellation (24–48 hours before check-in): 75% is retained.",
        "Last-minute cancellation (<24 hours before check-in or after check-in): 100% retained (no refund).",
        "No-show (guest fails to arrive): Charged 100% of booking (treated the same as cancellation after check-in).",
      ],
    },
    {
      subTitle: "2. Esthell Hotel (Adyar, Chennai)",
      description: "Classic and Premier Rooms:",
      list: [
        "Free cancellation up to 24 hours before check-in.",
        "Full charge (100%) for any cancellation or no-show within 24 hours of check-in.",
      ],
    },
  ];
  const sections2 = [
    {
      subTitle: "1. Accepted Payment Methods",
      description: "We accept the following methods via Razorpay:",
      list: ["UPI (Google Pay, PhonePe, etc.)", "Debit/Credit Cards"],
      paragraph:
        "All transactions are encrypted and handled securely through Razorpay.",
    },
    {
      subTitle: "2. Pricing",
      description: null,
      list: [
        "The total amount shown before checkout includes applicable taxes and fees.",
        "No hidden charges will be added after payment.",
        "Memberships (Gold, Platinum, Emerald) are available as one-time purchases with no recurring billing.",
      ],
      paragraph: null,
    },
    {
      subTitle: "3. Payment Confirmation",
      description: null,
      list: [
        "After payment, you’ll receive a booking confirmation in-app and via email.",
      ],
      paragraph: null,
    },
    {
      subTitle: "4. Failed Transactions",
      description: "If your payment fails:",
      list: [
        "You can retry using a different method.",
        "No booking will be confirmed until payment is successfully processed.",
      ],
      paragraph:
        "If money is debited without confirmation, please wait 24–48 hours before contacting support.",
    },
    {
      subTitle: "5. Cancellation & Refunds",
      description: null,
      list: [
        "Cancellation policies vary based on the hotel, resort, or activity type.",
        "These will be clearly shown before you book.",
      ],
      paragraph: null,
    },
    {
      subTitle: "6. Disputes",
      description: null,
      list: ["For any payment-related disputes, contact: das@esthell.com"],
      paragraph: null,
    },
    {
      subTitle: "7. Governing Law",
      description: null,
      list: [
        "All payment-related terms are governed by Indian law and handled in Chennai, Tamil Nadu.",
      ],
      paragraph: null,
    },
  ];
  const sections3 = [
    {
      subTitle: "1. Who We Are",
      description: null,
      list: null,
      paragraph:
        "We are Continental Hotels & Resorts, an Indian hospitality brand who manage Esthell Hotels & Resorts. The Esthell App is our official platform to help users search, book, and manage hotel, resort, and activity bookings.",
    },
    {
      subTitle: "2. What Data We Collect",
      description: "When you use the Esthell App, we may collect:",
      nestedList: [
        {
          heading: "A. Personal Information",
          items: [
            "Name",
            "Phone number",
            "Email address",
            "Government ID details (Aadhaar, PAN, Passport, Driving Licence)",
          ],
        },
        {
          heading: "B. Booking & Payment Info",
          items: [
            "Booking details (date, hotel/resort/activity type)",
            "Payment method used (via Razorpay, UPI, card, etc.)",
          ],
        },
        {
          heading: "C. Technical Data",
          items: [
            "App usage data",
            "IP address",
            "Login via Google (only with your consent)",
          ],
        },
      ],
    },
    {
      subTitle: "3. Why We Collect Your Data",
      description: "We use your data to:",
      list: [
        "Process and confirm your bookings",
        "Verify your identity at check-in",
        "Provide access to membership features",
        "Improve app performance and user experience",
        "Prevent fraud and ensure security",
      ],
      paragraph: null,
    },
    {
      subTitle: "4. Google Sign-In",
      description: null,
      list: null,
      paragraph:
        "If you choose to log in using Google SSO, we access only your basic profile (name and email). We do not access or store your password or other Google account data.",
    },
    {
      subTitle: "5. Razorpay Payments",
      description: null,
      list: null,
      paragraph:
        "All payments are processed via Razorpay. We do not store your card details. Razorpay may process and store payment information under their own privacy policy.",
    },
    {
      subTitle: "6. How We Protect Your Data",
      description: null,
      list: [
        "All sensitive data is encrypted in transit and at rest.",
        "We use secure server infrastructure and limited internal access.",
        "ID proofs are stored securely and used only for verification purposes.",
      ],
      paragraph: null,
    },
    {
      subTitle: "7. Sharing Your Data",
      description: "We only share your data:",
      list: [
        "With our partner hotels/resorts (for booking and check-in purposes)",
        "With Razorpay (for payment processing)",
        "When required by law or government regulation",
      ],
      paragraph: "We do not sell or rent your data to third parties.",
    },
    {
      subTitle: "8. Data Retention",
      description: "We retain your data:",
      list: [
        "As long as your account is active",
        "For legal and operational purposes (e.g., ID proofs for hotel check-ins)",
      ],
      paragraph:
        "You may request account deletion by emailing das@esthell.com.",
    },
    {
      subTitle: "9. Your Rights",
      description: "You have the right to:",
      list: [
        "Access and update your personal data",
        "Request deletion of your data",
        "Withdraw consent for specific processing (where applicable)",
      ],
      paragraph: "To make any such request, contact us at das@esthell.com",
    },
    {
      subTitle: "10. Children’s Privacy",
      description: null,
      list: null,
      paragraph:
        "The Esthell App is not intended for use by anyone under 18 years of age. We do not knowingly collect data from minors.",
    },
    {
      subTitle: "11. Policy Updates",
      description: null,
      list: null,
      paragraph:
        "We may revise this Privacy Policy from time to time. If we do, we’ll notify users via email or in-app notification.",
    },
    {
      subTitle: "12. Contact Us",
      description: null,
      list: null,
      paragraph: [
        "Have questions about your privacy?.",
        "To make any such request, contact us at das@esthell.com",
      ],
    },
  ];
  const sections4 = [
    {
      subTitle: "1. About Us",
      description:
        "The Esthell App is owned and operated by Continental Hotels & Resorts; a hospitality company registered in India. Our platform allows you to discover and book:",
      list: [
        "Hotel and resort rooms",
        "Lawns and banquet halls",
        "Activity slots (e.g., football, cricket, spa)",
      ],
      paragraph: null,
    },
    {
      subTitle: "2. Our Services",
      description: "Through the Esthell App, you can:",
      list: [
        "Explore and compare available rooms and activities",
        "Make secure bookings via Razorpay",
        "Join our membership program for exclusive perks",
      ],
      paragraph:
        "When you make a booking, you enter into a direct contractual relationship with the respective hotel, resort, or service provider.",
    },
    {
      subTitle: "3. Using the App",
      description: "To use our services, you must:",
      list: [
        "Be at least 18 years old",
        "Provide accurate personal information",
        "Use your own email ID or sign in with Google",
      ],
      paragraph:
        "You are responsible for keeping your account secure and notifying us immediately of any unauthorized use.",
    },
    {
      subTitle: "4. Membership Program",
      description: "We offer tiered memberships: Gold, Platinum, and Emerald.",
      list: null,
      paragraph:
        "You can purchase a membership (one-time payment only, no auto-renewals) Or upgrade automatically based on your total number of bookings Membership benefits may vary by tier and include perks like discounts, faster check-ins, and reward points.",
    },
    {
      subTitle: "5. Razorpay Payments",
      description: null,
      list: [
        "All payments are securely processed via Razorpay. We accept UPI, wallet, credit/debit cards.",
        "The total price shown at checkout includes all applicable charges.",
        "We do not charge any hidden fees.",
      ],
      paragraph: null,
    },
    {
      subTitle: "6. ID Proof and Verification",
      description: null,
      list: null,
      paragraph:
        "For certain bookings, especially hotel/resort stays and activity zones, valid government-issued ID (e.g., Aadhaar, PAN, passport) may be required at check-in.",
    },
    {
      subTitle: "7. Cancellation Policy",
      description: null,
      list: null,
      paragraph:
        "Cancellation terms depend on the specific hotel, room type, or activity booked. The policy will be clearly displayed before you confirm your booking.",
    },
    {
      subTitle: "8. What You Can’t Do",
      description: "You agree not to:",
      list: [
        "Use the app for any unlawful or fraudulent activity",
        "Misuse or attempt to hack the platform",
        "Create fake bookings or submit misleading information",
        "Copy, scrape, or use our content without permission",
      ],
      paragraph: null,
    },
    {
      subTitle: "9. Limitation of Liability",
      description:
        "We do our best to ensure smooth service, but we are not liable for:",
      list: [
        "Inaccuracies in listings provided by hotels/resorts",
        "Temporary downtime or errors on the app",
        "Issues at the property level (e.g., maintenance, overbooking)",
      ],
      paragraph: null,
    },
    {
      subTitle: "10. Changes to the Terms",
      description: null,
      list: null,
      paragraph:
        "We may update these Terms of Service from time to time. When we do, we’ll notify users via the app or email. Continued use of the app means you accept the new terms.",
    },
    {
      subTitle: "11. Governing Law",
      description: null,
      list: null,
      paragraph:
        "These terms are governed by the laws of India, with legal jurisdiction in Chennai, Tamil Nadu.",
    },
    {
      subTitle: "12. Contact Us",
      description: null,
      list: null,
      paragraph:
        "If you have any questions about these terms or need help with a booking, contact our support team at: das@esthell.com",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Terms & Conditions — Esthell Properties</title>
        <meta name="description" content="Learn about Esthell Properties..." />
      </Helmet>
      <Header />
      <div
        style={{ display: "flex", flexDirection: "column" }}
        id="cancellation"
      >
        {/* section1 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px 100px",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div>
            <p className="TacTitle">Esthell Hotels & Resorts</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="Title">Esthell App — Cancellation Policy</p>

            <div style={{ marginTop: -60 }}>
              {sections1.map((section, index) => (
                <div key={index} className="contentWrapper">
                  <p className="subTitle">{section.subTitle}</p>
                  <p className="description">{section.description}</p>
                  <ul className="description">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="list">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div id="payment"></div>
        </div>

        {/* section2 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px 100px",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div className="tandcPageDivider" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="Title">Esthell App — Payment Terms</p>

            <div style={{ marginTop: -60 }}>
              <p className="introText">
                These Payment Terms apply when you make a booking through the
                Esthell App.
              </p>

              {sections2.map((section, index) => (
                <div key={index} className="contentWrapper">
                  <p className="subTitle">{section.subTitle}</p>

                  {section.description && (
                    <p className="description">{section.description}</p>
                  )}

                  {section.list && section.list.length > 0 && (
                    <ul className="description">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="list">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.paragraph &&
                    (Array.isArray(section.paragraph) ? (
                      section.paragraph.map((para, idx) => (
                        <p key={idx} className="paragraph">
                          {typeof para === "string" &&
                          para.includes("das@esthell.com") ? (
                            <>
                              {para.split("das@esthell.com")[0]}
                              <span className="highlight">das@esthell.com</span>
                              {para.split("das@esthell.com")[1]}
                            </>
                          ) : (
                            para
                          )}
                        </p>
                      ))
                    ) : (
                      <p className="paragraph">
                        {typeof section.paragraph === "string" &&
                        section.paragraph.includes("das@esthell.com") ? (
                          <>
                            {section.paragraph.split("das@esthell.com")[0]}
                            <span className="highlight">das@esthell.com</span>
                            {section.paragraph.split("das@esthell.com")[1]}
                          </>
                        ) : (
                          section.paragraph
                        )}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div id="privacy"></div>
        </div>

        {/* section3 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px 100px",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div className="tandcPageDivider" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="Title">Esthell App — Privacy Policy</p>

            <div style={{ marginTop: -60 }}>
              <p className="introText">
                At Esthell Hotels & Resorts, we respect your privacy and are
                committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, and protect the information you
                share with us through the Esthell App.
              </p>
              {sections3.map((section, index) => (
                <div key={index} className="contentWrapper">
                  <p className="subTitle">{section.subTitle}</p>

                  {section.description && (
                    <p className="description">{section.description}</p>
                  )}

                  {section.list && section.list.length > 0 && (
                    <ul className="description">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="list">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.nestedList && (
                    <div className="nestedSection">
                      {section.nestedList.map((group, idx) => (
                        <div key={idx} style={{ marginBottom: "35px" }}>
                          <p className="description">
                            <strong>{group.heading}</strong>
                          </p>
                          <ul className="description">
                            {group.items.map((item, i) => (
                              <li key={i} className="list">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.paragraph &&
                    (Array.isArray(section.paragraph) ? (
                      section.paragraph.map((para, idx) => (
                        <p key={idx} className="paragraph">
                          {para.includes("das@esthell.com") ? (
                            <>
                              {para.split("das@esthell.com")[0]}
                              <span className="highlight">das@esthell.com</span>
                              {para.split("das@esthell.com")[1]}
                            </>
                          ) : (
                            para
                          )}
                        </p>
                      ))
                    ) : (
                      <p className="paragraph">
                        {section.paragraph.includes("das@esthell.com") ? (
                          <>
                            {section.paragraph.split("das@esthell.com")[0]}
                            <span className="highlight">das@esthell.com</span>
                            {section.paragraph.split("das@esthell.com")[1]}
                          </>
                        ) : (
                          section.paragraph
                        )}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
          <div id="terms"></div>
        </div>

        {/* section4 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px 100px",
            gap: 20,
            justifyContent: "flex-start",
          }}
        >
          <div className="tandcPageDivider" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="Title">Esthell App — Terms of Service</p>

            <div style={{ marginTop: -60 }}>
              <p className="introText">
                Welcome to the Esthell App. By accessing or using our app, you
                agree to these Terms of Service. Please read them carefully
                before making any bookings.
              </p>

              {sections4.map((section, index) => (
                <div key={index} className="contentWrapper">
                  <p className="subTitle">{section.subTitle}</p>

                  {section.description && (
                    <p className="description">{section.description}</p>
                  )}

                  {section.list && section.list.length > 0 && (
                    <ul className="description">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="list">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.paragraph &&
                    (Array.isArray(section.paragraph) ? (
                      section.paragraph.map((para, idx) => (
                        <p key={idx} className="paragraph">
                          {para.includes("das@esthell.com") ? (
                            <>
                              {para.split("das@esthell.com")[0]}
                              <span className="highlight">das@esthell.com</span>
                              {para.split("das@esthell.com")[1]}
                            </>
                          ) : (
                            para
                          )}
                        </p>
                      ))
                    ) : (
                      <p className="paragraph">
                        {section.paragraph.includes("das@esthell.com") ? (
                          <>
                            {section.paragraph.split("das@esthell.com")[0]}
                            <span className="highlight">das@esthell.com</span>
                            {section.paragraph.split("das@esthell.com")[1]}
                          </>
                        ) : (
                          section.paragraph
                        )}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
