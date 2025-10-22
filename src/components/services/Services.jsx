import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionIntro from '../../utils/commonComponents/SectionIntro';
import { services, categories, contentBlocks, whyCards, scrollToTop } from '../../utils/constants';
import './Services.css';
import ScrollObserver from '../../utils/commonComponents/intersectObserver/IntersectObserver';
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Services = () => {
  const handleRequestDemo = () => {
    console.log("Demo Requested!");
  };
  const videoRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
  
    const handleMouseMove = (e) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };
    const background = useMotionTemplate`radial-gradient(650px circle at ${mouseX}px ${mouseY}px, rgba(14, 165, 233, 0.15), transparent 80%)`;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="sections-con">
      {/* Section Intro */}

      <ScrollObserver>
        <section className="section-intro">
          <h1>The All-in-one Platform for your <br /> Voice Solutions</h1>
          <p>Discover our latest solutions designed to enhance your business.</p>
          {/* <button className='services-rqst-btn'>Request Demo</button> */}
        </section>


      {/* Hero Section */}
        <section className="sections-hero-section">
          <div className="sections-hero-content">
            <h2>Unlock the Power of AI with SPicArts</h2>
            <p>
              At SPicArts AI, we’re redefining the future of technology. Our cutting-edge AI solutions empower businesses to innovate, automate, and scale like never before.
              From voice-driven interactions to intelligent automation, we bring your ideas to life.
            </p>
          </div>
        </section>
      </ScrollObserver>

      {/* Product Grid */}
      <ScrollObserver>
        <div className="sections-page-container">
          {/* Header */}
          <header className="sections-header">
            <h1>Our Services</h1>
            <p>Explore our innovative solutions across various domains.</p>
          </header>

          {/* Categories Section */}
          <section className="categories-section">
            <div className="blocks-container">
              {contentBlocks.map((item, index) => {
                const isEven = index % 2 === 1;
                return (
                  <Link onClick={() => scrollToTop()} className='services-each-link' to={`/services/${item.path}`} key={index}>
                    <div
                      key={index}
                      className={`block ${isEven ? 'reverse' : ''}`}
                    >
                      <div className="description">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>

                      <div className="services-video-content">
                        <video autoPlay loop muted playsInline ref={videoRef}>
                          <source src={item.videoUrl} type="video/mp4" />
                          Your browser does not support video playback.
                        </video>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </ScrollObserver>

      {/* Why Choose Us Section */}
      <ScrollObserver>
        <section className="why-section">
          <h2 className="why-title">Why Choose SPicArts AI?</h2>
          <p className="why-description">
            AI That Understands You Like Never Before.
          </p>

          <div className="why-cards">
            {whyCards.map((card, idx) => (
              <div key={idx} className="why-card">
                <motion.div className="spotlight-bg" style={{ background }} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollObserver>
      {/* <section className="why-choose-us">
        <h2>Why Choose SPicArts AI?</h2>
        <ul className="reasons-list">
          <li>✔ Advanced AI solutions tailored to your needs.</li>
          <li>✔ Seamless integration into your workflows.</li>
          <li>✔ Lifelike, expressive AI speech that feels natural.</li>
          <li>✔ Multilingual support for global communication.</li>
          <li>✔ Scalable and reliable technology for businesses of all sizes.</li>
        </ul>
      </section> */}
    </div>
  );
};

export default Services;
