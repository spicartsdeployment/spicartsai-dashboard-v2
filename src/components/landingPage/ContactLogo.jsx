import React from 'react';
import './ContactLogoPage.css';
import { IMAGES } from '../../utils/constants';

const ContactLogoPage = () => {
  return (
    <section className="contact-logo-page">
      <header className="contact-logo-page-header">
        <div className="contact-logo-page-logo-container">
          {/* Placeholder for the logo */}
          <img
            src={IMAGES.HOME_CONTACT_S_LOGO}
            alt="Spicarts Logo"
            className="contact-logo-page-logo"
          />
          {/* <h1 className="contact-logo-page-title">SPICARTS</h1> */}
          <p className="contact-logo-page-tagline">Experience the Future of AI</p>
        </div>
      </header>

      <main className="contact-logo-page-main">
        <div className="contact-logo-page-content">
          <p className="contact-logo-page-question">Want to learn more?</p>
          <p className="contact-logo-page-description">
          Explore how Spicarts can enhance your product recommendations. <span className='c-pale-blue'>Get in touch!</span>
          </p>
          {/* <a href="#contact" className="contact-logo-page-button">
            Contact us
          </a> */}
        </div>
      </main>
    </section>
  );
};

export default ContactLogoPage;