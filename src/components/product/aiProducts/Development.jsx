"use client";

import React, { useState } from "react";
import "./Product.css";
import { developmentCards, devFeatures, ICONS } from "../../../utils/constants";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeatureCardWithSpotlight = ({ feature, delay = 0 }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  return (
    <div className="feature-wrapper" onMouseMove={handleMouseMove}>
      <motion.div className="spotlight-bg" style={{ background }} />
      <div className="feature-card fade-in" style={{ animationDelay: `${delay}s` }}>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </div>
  );
};

const DevelopmentPage = () => {
  const navigate = useNavigate();
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  const getCardClass = (id) => {
    if (!expandedId) return "dev-card";
    return id === expandedId ? "dev-card expanded" : "dev-card collapsed";
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLink = (path) => {
    scrollToTop();
    navigate(path);
  }

  return (
    <div className="development-page-container">
      {/* Hero Section */}
      <section className="development-hero-section">
        <div className="development-hero-content">
          <h1>From Vision to Reality – We Build, You Succeed</h1>
          <p>
            At SPicArts AI, we don’t just develop software—we craft experiences
            that redefine digital transformation. Whether you need a
            high-performance website, an intuitive mobile app, or a powerful
            desktop application, we bring your vision to life with precision and
            innovation.
          </p>
          <p>
            From concept to deployment, we ensure your product isn’t just
            functional but future-ready.
          </p>
          <p className="development-tagline">
            We Don’t Just Develop. We Innovate.
          </p>
          <div className="development-cta-buttons">
            <button className="development-primary-btn">Let’s Talk</button>
            <button className="development-secondary-btn">Request a Demo</button>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="development-tabs-section">
        <div className="tabs-header">
          {/* <h2>Our Development Services</h2> */}
          <h2>Powering Vision Through Technology</h2>
        </div>


        <div className="dev-card-grid">
          {developmentCards.map((item) => (
            <div key={item.id} className={getCardClass(item.id)}>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="card-overlay">
                  <h2>{item.title}</h2>
                  {expandedId !== item.id ? (
                    <button
                      onClick={() => handleExpand(item.id)}
                      className="view-more"
                    >
                      View More
                    </button>
                  ) : (
                    <button
                      className="close-btn"
                      onClick={() => setExpandedId(null)}
                    >
                      ✖
                    </button>
                  )}
                </div>
              </div>

              {expandedId === item.id && (
                <div className="card-details">
                  <p className="tagline">{item.tagline}</p>
                  <p className="description">{item.description}</p>
                  <blockquote>{item.quote}</blockquote>
                  {item.highlights && (
                    <ul className="highlights">
                      {item.highlights.map((h, i) => (
                        <li key={i}>
                          <ICONS.circleCheck style={{ marginRight: "8px", color: "green" }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="cta-buttons">
                    {item.cta.map((btn, i) => (
                      <a key={i} href={btn.link} className="cta-button">
                        {btn.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Feature Cards with Spotlight Animation */}
      <section className="features-section">
        <div className="features-grid">
          {devFeatures.map((feature, index) => (
            <FeatureCardWithSpotlight
              key={index}
              feature={feature}
              delay={index * 0.2}
            />
          ))}
        </div>

        <div className="cta-section">
          <h2>Let’s turn your idea into a product users love.</h2>
          <p>
            From MVPs to market-ready platforms—we're your dev partner.
          </p>
          <div className="cta-buttons">
            <motion.button
              className="btn btn-green"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleLink('/services/development/strategy-call')}
              aria-label="Book Free Strategy Call"
            >
              🟢 Book Free Strategy Call
            </motion.button>

            <motion.button
              className="btn btn-blue"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              🔵 Show Me Work Examples
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentPage;
