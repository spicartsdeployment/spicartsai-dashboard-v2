import React from "react"; 
import { motion } from "framer-motion";
import { FaRobot, FaHouseUser, FaRocket, FaCheckCircle } from "react-icons/fa";
import { IMAGES } from "../../utils/constants";
import "./Products.css";
import ScrollObserver from "../../utils/commonComponents/intersectObserver/IntersectObserver";

const reasons = [
  {
    title: 'More Than AI—True Intelligence',
    description: 'Our technology doesn’t just listen; it understands and adapts in real-time.',
  },
  {
    title: 'Fast, Private & Reliable',
    description: 'AI that works locally, without sending everything to the cloud.',
  },
  {
    title: 'Designed for Real Life',
    description: 'Seamlessly integrated for homes, cars, wearables, and more.',
  },
];

const Products = () => {
  return (
    <div className="products-container">
      {/* Hero Section */}
        <section className="products-hero-section">
          {/* <img src={IMAGES.PRODUCTS_BG} loading="lazy" alt="Products Background" className="products-bg" /> */}
          <img src={IMAGES.PRODUCT_TOUR} loading="lazy" alt="Products tour" className="products-tour" />

          <h1>The Future of <span className="App-link">AI-Driven</span> Living</h1>
          <p>Intelligent, Intuitive, and Truly Interactive. SPicArts AI is crafting technology that blends seamlessly into everyday life.</p>
          <div className="products-cta-buttons">
            <button className="products-cta-button">Stay Updated</button>
            <button className="products-cta-button">Pre-Order Now</button>
          </div>
        </section>

      <ScrollObserver>
        <div class="products-parent">
          <div class="div1">

            <div className="product-img-container">
              <img src={IMAGES.INFOTAINENT} loading="lazy" alt="Interactive AI" className="products-img" />
            </div>
            {/* Interactive Infotainment */}
            <section className="products-section">
              <h2>Interactive Infotainment – Your Personal AI Companion</h2>
              <p>Why settle for basic infotainment when you can have a system that understands you?</p>
              <ul>
                {[
                  "Personalized AI Experiences – Adapts to your preferences, habits, and emotions.",
                  "Seamless Voice Interaction – Speak naturally, and it responds intuitively.",
                  "Edge AI Processing – No delays, no lags—just instant intelligence.",
                  "Predictive Intelligence – Plans routes, plays the right music, and adjusts to your schedule.",
                  "Multi-Device Connectivity – Syncs effortlessly across cars, homes, and devices."
                ].map((item, index) => (
                  <motion.li key={index} >
                    {/* <FaCheckCircle />  */}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </section>
          </div>
          <div class="div2">
            {/* Interactive Bot Hub */}
            <section className="products-section">
              <h2>Interactive Bot Hub – The AI-Powered Heart of Your Smart Home</h2>
              <p>Smart homes shouldn’t be complicated. Our Interactive Bot Hub makes automation truly effortless.</p>
              <ul>
                {[
                  "Conversational AI – Talks with you, understands tone, and anticipates needs.",
                  "Smart Home Control – Adjusts lights, security, and appliances based on routines.",
                  "Multilingual & Emotionally Intelligent – Speaks your language and adapts to your mood.",
                  "Proactive Assistance – Not just reminders—real assistance that predicts what you need.",
                  "AI Edge Deployment – Works without the internet for privacy and instant response."
                ].map((item, index) => (
                  <motion.li key={index} >
                    {/* <FaCheckCircle />  */}
                    {item}
                  </motion.li>
                ))}
              </ul>
            </section>
            <div className="product-img-container">
              <img src={IMAGES.BOTHUB} loading="lazy" alt="Interactive AI" className="products-img" />
            </div>
          </div>
        </div>
      </ScrollObserver>



      {/* Why SPicArts AI? */}
      {/* <section className="products-section why-spicarts-ai">
        <h2>Why SPicArts AI?</h2>
        <ul>
          {[
            "✔ More Than AI—True Intelligence – Our technology doesn’t just listen; it understands.",
            "✔ Fast, Private & Reliable – AI that works locally, without sending everything to the cloud.",
            "✔ Designed for Real Life – Built for homes, cars, and beyond."
          ].map((item, index) => (
            <motion.li key={index}>
              {item}
            </motion.li>
          ))}
        </ul>
      </section> */}

      <ScrollObserver>
        <section className="why-section">
          <h2 className="section-title">Why SpicArts AI?</h2>
          <div className="reasons-grid">
            {reasons.map((item, idx) => (
              <div className="reason-card" key={idx}>
                <FaCheckCircle className="icon" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollObserver>
      {/* Call to Action Section */}

      <ScrollObserver>
        <section className="products-cta-section">
          <h2>🌟 The Future of AI is Almost Here!</h2>
          <p>We are on the verge of something revolutionary. Our products are coming soon, and we can’t wait for you to experience them.</p>
          {/* <div className="products-cta-buttons">
          <button className="products-cta-button">Stay Updated</button>
          <button className="products-cta-button">Pre-Order Now</button>
        </div> */}
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Products;
