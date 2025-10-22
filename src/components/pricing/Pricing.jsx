//Pricing component
import React from 'react';
import './Pricing.css';


const Pricing = () => {
    return (
        <div className="pricing-wrapper fade-in">
      <div className="pricing-container">
        <h1>💰 Flexible Pricing. Tailored to You.</h1>
        <p>
          We understand every business is unique — that’s why we don’t believe in one-size-fits-all pricing.
          Whether you’re looking for a full solution or a single module, we’ll craft a plan that fits your
          <span className="highlight"> goals, budget, and timeline.</span>
        </p>
        <p className="cta-intro">
          🔵 Want to know the cost for your idea?<br />
          Let’s chat. We’ll understand your needs and share a custom quote.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn">Request a Quote</button>
          <button className="cta-btn outline">Talk to Sales</button>
          <button className="cta-btn ghost">Book a Free Consultation</button>
        </div>
      </div>
    </div>
    );
}

export default Pricing;