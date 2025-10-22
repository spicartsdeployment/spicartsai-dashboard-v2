import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn, FaChevronRight } from "react-icons/fa";
import { ICONS } from "../../utils/constants";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">

        {/* Logo & Tagline */}
        <div className="footer-logo">
          <h2>
            <Link className="tubelight-text" to="/" onClick={scrollToTop} aria-label="Go to homepage">Spicarts</Link>
            {/* <h1 className="tubelight-text">Spicarts AI</h1> */}
          </h2>
          <p>Where AI Meets Creativity</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            {/* <li>
              <Link to="/aboutus" onClick={scrollToTop} className="footer-link" aria-label="About Us">
                <span className="footer-icon">{ICONS.ChevronRight}</span> About Us
              </Link>
            </li> */}
            <li>
              <Link to="/services" onClick={scrollToTop} className="footer-link" aria-label="Services">
                <span className="footer-icon"><FaChevronRight /></span> Services
              </Link>
            </li>
            <li>
              <Link to="/request-demo" onClick={scrollToTop} className="footer-link" aria-label="Contact">
                <span className="footer-icon"><FaChevronRight /></span> Contact
              </Link>
            </li>
            <li>
              <Link to="/ai-blogs" onClick={scrollToTop} className="footer-link" aria-label="Blogs">
                <span className="footer-icon"><FaChevronRight /></span> Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>
            Email: <a href="mailto:services@spicarts.ai" aria-label="Email SpicArtsAI">services@spicarts.ai</a>
          </p>
          <p>
            Phone: <a href="tel:+91 8328015851" aria-label="Call SpicArtsAI">+91 8328015851</a>
          </p>
          <p>
            402, 5th Floor, Vaishnavi Arcade, 167A, Kukatpally Housing Board Colony, Hyderabad, Telangana, 500085.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.youtube.com/@SpicArtsAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SpicArtsAI on YouTube"
            >
              <FaYoutube aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/spicarts-ai-llp-762169344/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SpicArtsAI on LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/spicarts_ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SpicArtsAI on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 SpicArtsAI. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
