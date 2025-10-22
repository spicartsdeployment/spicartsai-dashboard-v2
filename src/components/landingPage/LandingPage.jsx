import React, { useEffect, useRef, useState } from 'react';
import './LandingPage.css';

import { contentData, VIDEOS } from '../../utils/constants';
import TypewriterText from '../../utils/commonComponents/TypeWriter/TypeWriter';
import ScrollObserver from '../../utils/commonComponents/intersectObserver/IntersectObserver';
import AICommsWrapper from './AICommsWrapper';
import ResponsibleAI from './ResponsibleAI';
import ContactLogoPage from './ContactLogo';

const tabs = [
  { id: "voice-ai", label: "AI" },
  { id: "robotics", label: "Robotics" },
  { id: "website-app-development", label: "Development" },
];

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [starsSmall, setStarsSmall] = useState([]);
  const [starsMedium, setStarsMedium] = useState([]);
  const [starsBig, setStarsBig] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to generate random stars
  const generateStars = (count, size) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 2000;
      const y = Math.random() * 2000;
      stars.push(`${x}px ${y}px ${size}px #FFF`);
    }
    return stars.join(", ");
  };

  useEffect(() => {
    setStarsSmall(generateStars(700, 1));
    setStarsMedium(generateStars(200, 2));
    setStarsBig(generateStars(100, 3));
  }, []);

  const [currentContent, setCurrentContent] = useState({ text: "", video: "", boxes: [] });

  useEffect(() => {
    const tabContent = contentData.find((item) => item.tab === activeTab);
    if (tabContent) setCurrentContent(tabContent);
  }, [activeTab]);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="landing-page routes-con">
      {/* ========== Hero Section ========== */}
      <ScrollObserver>
        <section className="hero section">
          <div className="background">
            <div className="stars" style={{ boxShadow: starsSmall }} />
            <div className="stars2" style={{ boxShadow: starsMedium }} />
            <div className="stars3" style={{ boxShadow: starsBig }} />
          </div>
          <div className='hero-content'>
            <h1>Powering the Future of <span className="c-pale-blue">AI-Driven</span> Solutions</h1>
            <p>
              SPicArts AI creates intelligence that feels natural—seamless, intuitive, and truly human. It is more than just artificial intelligence. It’s intelligence that feels real.
              From voice driven automation to real time conversational AI, we build technology that feels less like software and more like second nature.
            </p>
            <p>
              AI that <TypewriterText strings={["Listens", "Understands", "Speaks"]} className="inline-text" />
              —unlock the potential of AI to transform your business.
            </p>
          </div>
        </section>
      </ScrollObserver>

      {/* ========== What We Do Section ========== */}
      <ScrollObserver>
        <section className="section">
          <div className="lan-page-parent">
            <div className="left">
              <p className="left-header">What We Do</p>
              <p className='left-description'>AI That Thinks, Speaks & Innovates</p>
              <div className="tabs">
                {tabs.map((tab) => (
                  <p key={tab.id}
                    className={activeTab === tab.id ? "tab-item active-tab" : "tab-item"}
                    onClick={() => setActiveTab(tab.id)}>
                    {tab.label.toUpperCase()}
                  </p>
                ))}
              </div>
            </div>

            <div className="right">
              <div className="text-content">
                <p>{currentContent.text}</p>
              </div>
              <div className="video-content">
                {currentContent.video.endsWith('.mp4') ? (
                  <video autoPlay loop muted playsInline ref={videoRef}>
                    <source src={currentContent.video} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                ) : (
                  <img src={currentContent.video} alt="tab content" />
                )}

              </div>
            </div>
          </div>



          {/* Dynamic Text Containers */}
          <div className="text-container">
            {currentContent.boxes.map((box, index) => (
              <div className="box" key={index}>
                <p className="box-header">{box.header}</p>
                <p className="box-description">{box.description}</p>
                {/* <div className="box-third-section">
                <img src={box.third_section.icon} alt={box.third_section.name} className="box-icon" />
                <p className="box-name">{box.third_section.name}</p>
              </div> */}
                <hr className="box-divider" />
              </div>
            ))}
          </div>
        </section>
      </ScrollObserver>

      {/* ========== Services Section ========== */}
      <ScrollObserver>
        <AICommsWrapper />
      </ScrollObserver>


      {/* ========== Responsible AI Section ========== */}
      <ScrollObserver>
        <ResponsibleAI />
      </ScrollObserver>

      {/* ========== Contact Section ========== */}
      <ScrollObserver>
        <ContactLogoPage />
      </ScrollObserver>
    </div>
  );
};

export default LandingPage;
