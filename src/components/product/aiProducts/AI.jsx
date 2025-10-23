import React, { useState } from 'react';
import './Product.css';
import { genAIServ, ICONS, IMAGES, products } from '../../../utils/constants';
import ScrollObserver from '../../../utils/commonComponents/intersectObserver/IntersectObserver';
import CardStack from '../../../utils/commonComponents/cardStack/CardStack';
import { quantum_content } from '../../../utils/constants';

const AIProducts = () => {
    const [activePage, setActivePage] = useState('voice-ai');

    return (
        <div className="ai-products-container">
            {/* 
            <div class="card-stack">
                <div class="card card-3"></div>
                <div class="card card-2"></div>
                <div class="card card-1">
                    <h2>Hello from Card 1</h2>
                    <p>This is the top card with content.</p>
                </div>
            </div> */}

            {/* Navbar */}
            <nav className="ai-navbar">
                <ul className="ai-navbar-links">
                    <li
                        className={activePage === 'voice-ai' ? 'active' : ''}
                        onClick={() => setActivePage('voice-ai')}
                    >
                        Voice AI
                    </li>
                    <li
                        className={activePage === 'generative-ai' ? 'active' : ''}
                        onClick={() => setActivePage('generative-ai')}
                    >
                        Generative AI & AI Agents
                    </li>
                    {/* <li
                        className={activePage === 'quantum-machine-learning' ? 'active' : ''}
                        onClick={() => setActivePage('quantum-machine-learning')}

                    >
                        Quantum Machine Learning
                    </li> */}

                </ul>
            </nav>

            {/* Conditional Rendering Based on Active Page */}
            {activePage === 'voice-ai' && (
                <div className="voice-ai-container">

                    <ScrollObserver>
                        {/* Hero Section */}
                        <section className="voice-ai-hero">
                            <div className="voice-ai-hero-content">
                                <h1>Voice AI – Where Speech Becomes Power</h1>
                                <p>
                                    At SPicArts AI, we believe voice is more than just sound—it’s the most natural way to connect, create, and command technology.
                                    Our Voice AI doesn’t just listen; it understands, translates, and speaks like a human, making interactions seamless and effortless.
                                </p>
                                <p className="voice-ai-tagline">Speak. Translate. Create. Let AI Handle the Rest.</p>
                                <div className="voice-ai-cta-buttons">
                                    <button className="voice-ai-primary-btn">Let’s Talk</button>
                                    <button className="voice-ai-secondary-btn">Request a Demo</button>
                                </div>
                            </div>
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Features Section */}
                        <section className="voice-ai-features">
                            {products.map((product, index) => (
                                <div className={`product-card ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                                    <div className="content">
                                        <div className="product-desc">
                                            <h2>{product.title}</h2>
                                            <p className="description">{product.description}</p>
                                            <ul className="AI-features">
                                                {product.features.map((feature, i) => (
                                                    <li key={i}>
                                                        <ICONS.circleCheck style={{ marginRight: "8px", color: "green" }} />
                                                        {feature}
                                                    </li>
                                                ))}

                                            </ul>
                                            <p className="tagline">{product.tagline}</p>
                                        </div>

                                        <div className="product-image">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Call to Action Section */}
                        <section className="voice-ai-cta">
                            <h2>The Future of Voice AI Is Here</h2>
                            <p>Forget robotic voices and misheard words. With SPicArts AI, your voice is your power—whether it’s for communication, creation, or automation.</p>
                            <div className="voice-ai-cta-buttons">
                                <button className="voice-ai-primary-btn">Let’s Talk</button>
                                <button className="voice-ai-secondary-btn">Request a Demo</button>
                            </div>
                        </section>
                    </ScrollObserver>
                </div>
            )}

            {activePage === 'generative-ai' && (
                <div className="gen-ai-page-container">
                    <ScrollObserver>
                        {/* Hero Section */}
                        <section className="gen-ai-hero-section">
                            <div className="gen-ai-hero-content">
                                <h1>Generative AI & AI Agents</h1>
                                <p className="gen-ai-tagline">Powering the Future with Intelligence</p>
                                <p className="gen-ai-description">
                                    Revolutionizing AI with Generative Intelligence. Our expertise in Generative AI is reshaping industries by enabling AI-powered creativity, automation, and smart decision-making.
                                </p>
                                <button className="gen-ai-cta-button">Join the Waitlist</button>
                            </div>
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Generative AI Section */}
                        <section className="voice-ai-features">
                            {genAIServ.map((product, index) => (
                                <div className={`product-card ${index % 2 === 0 ? 'even' : 'odd'}`} key={index}>
                                    <div className="content">
                                        <div className="product-desc">
                                            <h2>{product.title}</h2>
                                            <p className="description">{product.description}</p>
                                            <ul className="AI-features">
                                                {product.features.map((feature, i) => (
                                                    <li key={i}>
                                                        <ICONS.circleCheck style={{ marginRight: "8px", color: "green" }} />
                                                        {feature}
                                                    </li>
                                                ))}

                                            </ul>
                                            <p className="tagline">{product.tagline}</p>
                                        </div>

                                        <div className="product-image">
                                            <img src={product.image} alt={product.title} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Gen AI Description Section */}
                        <section className="gen-ai-desc-con gen-ai-solutions">
                            <h2 className='c-pale-blue'>Flexible & Tailored Gen AI Solutions</h2>
                            <div className="gen-ai-solutions-child">
                                <div className="gen-ai-steps">
                                    <p className='gen-ai-desc-header'>"Not every brand needs everything. That’s why we build only what fits you"</p>

                                    <p>With Generative AI, the possibilities are vast—but your needs are unique.</p>
                                    <p>At SPicArts, we give you the power to mix and match only the Gen AI tools
                                        that work for your brand, product, or audience. You don’t need a full suite
                                        —you just need the right pieces, perfectly aligned.</p>
                                    <p>Whether it’s text generation with tone control, voiceovers with emotion, or
                                        image and video generation—we work with you to build exactly what you
                                        need and nothing you don’t.</p>
                                </div>
                                {/* animated gif */}
                                <div className="gen-ai-steps-right">
                                    <img className='gen-ai-tailored-sol-img' src={IMAGES.TAILORED_SOLUTIONS} alt='gen-ai' />
                                </div>
                            </div>
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Gen AI What can be cust Section */}
                        <section className="gen-ai-desc-con">
                            <h2 className='c-pale-blue'>What Can Be Customized?</h2>
                            <div className="gen-ai-wcbc-con">
                                <div className="gen-ai-wcbc-item">
                                    <p>Only need voice cloning with dubbing?</p>
                                    <span>Done.</span>
                                </div>

                                <div className="gen-ai-wcbc-item">
                                    <p>Want Gen AI copywriting with visual mockups, but not full automation?</p>
                                    <span>Easy</span>
                                </div>

                                <div className="gen-ai-wcbc-item">
                                    <p>Looking to auto-generate avatars, but with human-recorded voices?</p>
                                    <span>Let's go hybrid</span>
                                </div>
                            </div>
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        {/* Gen AI Client-Focused Flexibility Section */}
                        <section className="gen-ai-cff-container">
                            <div className="gen-ai-cff-header c-pale-blue">Client-Focused Flexibility</div>
                            <div className="gen-ai-cff-grid">
                                <div className="gen-ai-cff-item gen-ai-cff-top-left">
                                    <p>Startups</p>
                                    <p>AI-generated landing pages + explainer video</p>
                                </div>
                                <div className="gen-ai-cff-item gen-ai-cff-top-right">
                                    <p>EdTech</p>
                                    <p>Script generation + avatar-based course videos</p>
                                </div>
                                <div className="gen-ai-cff-item gen-ai-cff-bottom-left">
                                    <p>Agencies</p>
                                    <p>On-brand copywriting + graphics templates</p>
                                </div>
                                <div className="gen-ai-cff-item gen-ai-cff-bottom-right">
                                    <p>HR Teams</p>
                                    <p>Personalized onboarding scripts + avatar greetings</p>
                                </div>
                            </div>
                        </section>
                    </ScrollObserver>

                    <div className="gen-ai-lst-header">Whatever your story - we help Gen AI tell it, your way.</div>

                    <ScrollObserver>
                        {/* CTA Section */}
                        <section className="gen-ai-cta-section">
                            <h2>Be the First to Experience It</h2>
                            <p>Our AI Agent is in development and launching soon. Stay tuned as we introduce a groundbreaking way to interact with AI.</p>
                            <button className="gen-ai-cta-button">Join the Waitlist</button>
                        </section>
                    </ScrollObserver>
                </div>
            )}


            {/* {activePage === "quantum-machine-learning" && (
                <div className='quantum-machine-learning-container'>
                    <ScrollObserver>
                        <section className='quantum-hero-section voice-ai-hero'>
                            <div className='quantum-hero-content'>
                                <h1>Quantum Machine Learning</h1>
                                <p className='sub-heading'>The Future of AI, Supercharged with Quantum Computing</p>
                                <p className='quantum-desc'>
                                    At SPicArts, we are venturing into the next frontier of Artificial Intelligence — Quantum Machine Learning (QML).
                                    By combining the speed and potential of quantum computing with the intelligence of machine learning, we aim to solve complex problems that are beyond classical computing.
                                    <br />


                                </p>

                            </div>

                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        <section className='quantum-features-section'>
                            <div className='quantum-features'>
                                <h2>What We Offer</h2>

                                <div className='features-container'>
                                    <div className='feature-box'>
                                        <h3 className='feature-heading'>
                                            Quantum AI Research & Development
                                        </h3>
                                        <p className='feature-desc'>
                                            Exploring hybrid quantum-classical models for faster and more accurate AI systems.
                                        </p>
                                    </div>
                                    <div className='feature-box'>
                                        <h3 className='feature-heading'>
                                            QML-Based Optimization
                                        </h3>
                                        <p className='feature-desc'>
                                            Leveraging quantum algorithms for advanced optimization problems—supply chain, drug discovery, and financial modeling.
                                        </p>
                                    </div>
                                    <div className='feature-box'>
                                        <h3 className='feature-heading'>Educational Initiatives</h3>
                                        <p className='feature-desc'>Conducting sessions and demos to help learners and organizations understand how QML can transform industries.</p>
                                    </div>
                                    <div className='feature-box'>
                                        <h3 className='feature-heading'>Prototyping with Real Quantum Hardware</h3>
                                        <p className='feature-desc'>
                                            Building experimental models on platforms like IBM Quantum, Xanadu (PennyLane), and Qiskit.
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        <section className='usecases-section'>
                            <div className='usecases-container'>
                                <h2>Use Cases</h2>
                                <div className='usecases-box'>
                                    {quantum_content.map((usecase, index) => (


                                        <div key={index} className={`usecase-image-box div${index + 1}`}>
                                            
                                            <p>{usecase.desc}</p>

                                        </div>
                                    ))
                                    }
                                </div>
                            </div>

                        </section>
                    </ScrollObserver>

                    <ScrollObserver>
                        <section className='benifits-section'>
                            <div>
                                <h2>Who Can Benefit?</h2>


                            </div>

                        </section>
                    </ScrollObserver>

                </div>
            )

            } */}
        </div>
    );
};

export default AIProducts;
