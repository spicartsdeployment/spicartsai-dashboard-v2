import React from 'react';
import './AICommsWrapper.css';
import { IMAGES } from '../../utils/constants';

const AICommsWrapper = () => {
  return (
    <section className="ai-comms-wrapper">
      <header className="ai-comms-header">
        <h1>Smarter AI. More Natural Conversations. A Connected Future.</h1>
        <p>It’s AI that listens, thinks, and acts.</p>
      </header>

      <main className="ai-comms-main">
        <div className="ai-comms-container">
          {/* Container 2: Speech */}
          <div className="ai-comms-speech-container">
            <h2 className="ai-comms-title">Speech</h2>
            <p>
              Your voice is unique, and our AI makes sure it's heard clearly,
              naturally, and intelligently.
            </p>
            <p>
              With advanced noise cancellation, real-time voice detection, and
              contextual awareness, communication feels effortless, no matter the
              environment.
            </p>
          </div>

          {/* Container 1: Image */}
          <div className="ai-comms-image-container">
            <img
              src={IMAGES.HOME_PRODUCTS}
              alt="AI Image"
              className="ai-comms-image"
            />
          </div>

          {/* Container 3: Smart */}
          <div className="ai-comms-smart-container">
            <h2 className="ai-comms-title">Smart</h2>
            <p>
              Imagine AI that doesn’t just process information but truly
              understands.
            </p>
            <p>
              Powered by Generative AI, LLMs, and Neural Networks, our systems
              think, adapt, and evolve—just like us.
            </p>
          </div>

          {/* Container 4: Connected Intelligence */}
          <div className="ai-comms-connected-intelligence-container">
            <h2 className="ai-comms-title">Connected Intelligence</h2>
            <p>
              AI isn’t just about software—it’s about action.
            </p>
            <p>
              Through IoT, Robotics, and Autonomous Systems, we create a world
              where your voice can control, automate, and connect everything around
              you—from smart homes to industrial robotics.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default AICommsWrapper;