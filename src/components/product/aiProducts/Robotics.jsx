import React, { useEffect, useRef, useState } from 'react';
import './Product.css'; // Import the CSS file
import { howWeWork, VIDEOS, whoWeWork, whyCardsDiff } from '../../../utils/constants';
import ScrollObserver from '../../../utils/commonComponents/intersectObserver/IntersectObserver';

const Robotics = () => {
  const [activeTab, setActiveTab] = useState('interactive-bot'); // Default active tab
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="ai-products-container">
      {/* Navbar */}
      <nav className="ai-navbar">
        <ul className="ai-navbar-links">
          <li
            className={activeTab === 'interactive-bot' ? 'active' : ''}
            onClick={() => setActiveTab('interactive-bot')}
          >
            AI Interactive Bot
          </li>
          <li
            className={activeTab === 'infotainment' ? 'active' : ''}
            onClick={() => setActiveTab('infotainment')}
          >
            Next-Gen Infotainment
          </li>
          <li
            className={activeTab === 'iot-robotics' ? 'active' : ''}
            onClick={() => setActiveTab('iot-robotics')}
          >
            IoT & Robotics
          </li>
        </ul>
      </nav>

      {/* Tab Content */}
      <ScrollObserver>
        <div className="tab-content-container">
          {/* Robotics AI Interactive Bot Tab */}
          {activeTab === 'interactive-bot' && (
            <section className="tab-content active">
              {/* <h1>AI Interactive Bot</h1> */}
              <div className="robotics-interact-con">
                <div>
                  <p>Imagine a personal assistant that actually understands your language, your mood, and your routines that’s what our AI Interactive Bot is all about. </p>
                  <p>Whether it’s controlling lights, setting reminders, or simply having a chat, it listens and responds like a companion, not a command center.</p>
                  <p>
                    Built on our SPOTi Voice Core, this bot blends into your life with natural conversations and emotion-aware
                    responses in regional languages—making it <span>feel like home, not tech.</span>
                  </p>
                  <p className='c-pale-blue'>“Talk to your space. Let it talk back.”</p>
                </div>
                <div className="robotics-ib-video-content">

                  <video autoPlay loop muted playsInline ref={videoRef}>
                    <source src={VIDEOS.AI_ITERACTIVE_BOT} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                  {/* <img src={currentContent.video} alt="tab content" /> */}
                </div>
              </div>


              <ScrollObserver>
                {/* Gen AI Client-Focused Flexibility Section */}
                <section className="gen-ai-cff-container">
                  <div className="gen-ai-cff-header c-pale-blue">Use Cases</div>
                  <div className="gen-ai-cff-grid">
                    <div className="robotics-cff-item robotics-cff-top-left">
                      <p>Control your smart home without touching a thing</p>
                    </div>
                    <div className="robotics-cff-item robotics-cff-top-right">
                      <p>Help elderly or kids use tech with simple voice commands</p>
                    </div>
                    <div className="robotics-cff-item robotics-cff-bottom-left">
                      <p>Enjoy local-language interactions that feel natural</p>
                    </div>
                    <div className="robotics-cff-item robotics-cff-bottom-right">
                      <p>Make daily routines easier "SPOTi, turn on the geyser"</p>
                    </div>
                  </div>
                </section>
              </ScrollObserver>

              {/* Why it feels Section */}
              <ScrollObserver>
                <section className="why-diff-section">
                  <h2 className="why-title-diff c-pale-blue">Why it Feels Different</h2>
                  {/* <p className="why-description">
                      AI That Understands You Like Never Before.
                  </p> */}
                  <div className="why-diff-cards">
                    {whyCardsDiff.map((card, idx) => (
                      <div key={idx} className="why-card why-diff-card">
                        {/* <h3>{card.title}</h3> */}
                        <p>{card.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </ScrollObserver>

              {/* Everycard + Footer Description */}
              <p className='service-footer-description'>Build a bot that feels like family</p>

            </section>
          )}

          {/* Next-Gen Infotainment Tab */}
          {activeTab === 'infotainment' && (
            <section className="tab-content active">
              <p className='service-footer-description'>Coming Soon..!</p>

              {/* <h1>🎵 Next-Gen Infotainment – Personalized, Smart & Seamless</h1>
              <p>We build everything—software and hardware—ensuring perfect integration.</p>
              <ul>
                <li>AI-driven personalization—your car, home, and devices adapt to you.</li>
                <li>No-touch control—speak naturally, and AI handles the rest.</li>
                <li>Predictive intelligence—your AI knows what you need before you do.</li>
              </ul>
              <p>
                <strong>Example:</strong> You step into your car, and without asking, the AI adjusts the temperature,
                plays your preferred playlist, and sets navigation based on your schedule. That’s smart infotainment.
              </p>

              <p className='service-footer-description'>Want to be part of this innovation?</p> */}

            </section>
          )}

          {/* IoT & Robotics Tab */}
          {activeTab === 'iot-robotics' && (
            <section className="">
              <section className='voice-ai-hero iot-robotics-hero'>
                <div className="voice-ai-hero-content">
                  <h1>“Got a vision? We'll bring the voice and intelligence to it”</h1>
                  <p>
                    Not all problems have off-the-shelf solutions—and that’s exactly where we shine. At SPicArts, we build custom IoT and robotics systems infused with Voice AI, tailored to your unique goals From field-ready drones to voice-enabled kiosks, if you can dream it, we can build it—with intelligence.
                  </p>
                  <p className="voice-ai-tagline">Still under development—but the vision is crystal clear.</p>
                  {/* <div className="voice-ai-cta-buttons">
                  <button className="voice-ai-primary-btn">Let’s Talk</button>
                  <button className="voice-ai-secondary-btn">Request a Demo</button>
                </div> */}
                </div>
              </section>

              {/* IoT & robotics + What We Build */}
              <section className="gen-ai-cff-container">
                <div className="gen-ai-cff-header c-pale-blue">What We Build</div>
                <div className="gen-ai-cff-grid">
                  <div className="robotics-cff-item robotics-cff-top-left">
                    <p>Voice-interactive kiosks & assistants</p>
                  </div>
                  <div className="robotics-cff-item robotics-cff-top-right">
                    <p>Inspection drones with spoken instructions</p>
                  </div>
                  <div className="robotics-cff-item robotics-cff-bottom-left">
                    <p>Educational robotics for hands-on AI learning</p>
                  </div>
                  <div className="robotics-cff-item robotics-cff-bottom-right">
                    <p>Automation tools for factories, hospitals, and smart farms</p>
                  </div>
                </div>
              </section>

              {/* IoT & robotics + How we Work */}
              <section className="why-diff-section">
                <h2 className="why-title-diff c-pale-blue">How We Work</h2>
                <div className="why-diff-cards">
                  {howWeWork.map((card, idx) => (
                    <div key={idx} className="why-card why-diff-card">
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* IoT & robotics + Who We Work With */}
              <section className="why-diff-section">
                <h2 className="why-title-diff c-pale-blue">Who We Work With</h2>
                <div className="why-diff-cards">
                  {whoWeWork.map((card, idx) => (
                    <div key={idx} className="why-card why-diff-card">
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Everycard + Footer Description */}
              <p className='service-footer-description'>Let’s co-build the future—one custom solution at a time</p>

            </section>
          )}
        </div>
      </ScrollObserver>
    </div>
  );
};

export default Robotics;