import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { FaRocket } from "react-icons/fa";
import { Helmet } from "react-helmet";  // For SEO enhancements
import "./About.css";
import { executiveTeamData, expertiseData, leadershipData, missionData, teamMembers } from "../../utils/constants";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | SpicArts AI LLP</title>
        <meta name="description" content="Learn more about SpicArts AI, our mission, vision, expertise, leadership team, and how we are revolutionizing the future of AI with innovation and intelligence." />
      </Helmet>
      
      <main className="about-container">
        {/* Header Section */}
        <header className="about-header">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="about-title-container"
          >
            <h1 className="about-title">SPicArts AI LLP</h1>
            <p className="about-subtitle">
              Redefining the Future of AI with <span className="highlight">Innovation & Intelligence</span>
            </p>
          </motion.div>
        </header>

        {/* Vision Section */}
        <section className="full-section">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1 }} 
            className="vision-section"
          >
            <h2>Our Vision</h2>
            <p>
              We believe <span className="highlight">AI</span> should listen, understand, and act like a human. 
              From <span className="highlight">Generative AI</span> to Robotics, we create an ecosystem where AI seamlessly integrates into everyday life.
            </p>
          </motion.div>
        </section>

        {/* Expertise Section */}
<section className="about-expertise-container">
  <h2>Our Expertise</h2>
  <div className="expertise-marquee-wrapper">
    <div className="expertise-marquee">
      {/* Duplicate for seamless loop */}
      {[...expertiseData, ...expertiseData].map((item, index) => (
        <div className="expertise-card" key={index}>
          <span className="expertise-icon">{item.icon}</span>
          <span className="expertise-name">{item.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Leadership Section */}
        <section className="leadership-section">
      <h2 className="section-title">Meet Our Leadership</h2>
      <div className="founders">
        {leadershipData.map((person, index) => (
              <div className="profile-card">
              <img src={person.image} alt={person.name} />
              <div className="hover-details">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <p>{person.description}</p>
              </div>
            </div>
        ))}
      </div>

      <h3 className="section-subtitle">Our Executive Team</h3>
      <div className="executive-team">
        {executiveTeamData.map((person, index) => (
              <div className="profile-card">
              <img src={person.image} alt={person.name} />
              <div className="hover-details">
                <h3>{person.name}</h3>
                <p>{person.role}</p>
                <p>{person.description}</p>
              </div>
            </div>
        ))}
      </div>
    </section>

        {/* Mission Section */}
        <section className="mission-section">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            {missionData.map((item, index) => (
              <motion.div 
                key={index} 
                className="mission-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.icon}
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call-To-Action Section */}
        <section className="cta-section">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }} 
            className="cta-content"
          >
            <h2>Join Us on Our <span className="highlight">AI Journey</span></h2>
            <p>The future of AI is happening now. Let’s build it together!</p>
            <motion.button 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} 
              className="cta-button"
            >
              <FaRocket className="cta-icon" /> Contact Us
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default AboutUs;
