import React from 'react';
import './ResponsibleAI.css';
import { IMAGES, VIDEOS } from '../../utils/constants';

const ResponsibleAI = () => {
    return (
        <div className="responsible-ai-wrapper">
            <header className="responsible-ai-header">
                <h1>The Backbone of Responsible AI. Built for the Future.</h1>
                <p>AI That Protects, Adapts & Evolves</p>
            </header>

            <main className="responsible-ai-main">

                {/* Cube Image */}
                <div className="responsible-ai-image-container">
                    {/* <img
                        src={IMAGES.HOME_SSC_IMG}
                        alt="Cube Icon"
                        className="responsible-ai-image"
                    /> */}
                     <video
                        src={VIDEOS.WEBSITE_ANIMATION_POTRAIT}
                        alt="Cube Icon"
                        className="responsible-ai-image"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        Your browser does not support the video tag.
                    </video>
                    
                </div>
                <div className="responsible-ai-container">
                    {/* Security */}
                    <div className="responsible-ai-security-container">
                        <h2 className="responsible-ai-title">Security</h2>
                        <p>
                            AI that safeguards data, ensuring encryption, resilience, and self-healing intelligence.
                        </p>
                    </div>

                    <div className="responsible-safety-continuum-container">
                        {/* Safety */}
                        <div className="responsible-ai-safety-container">
                            <h2 className="responsible-ai-title">Safety</h2>
                            <p>
                                Real-time risk mitigation and ethical AI frameworks for proactive protection.
                            </p>
                        </div>

                        {/* Continuum */}
                        <div className="responsible-ai-continuum-container">
                            <h2 className="responsible-ai-title">Continuum</h2>
                            <p>
                                AI that learns, evolves, and improves continuously for an adaptive future.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ResponsibleAI;