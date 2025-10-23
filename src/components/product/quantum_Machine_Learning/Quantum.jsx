import React from 'react';
import { quantum_content, quantum_Images, Quantum_Logo_Images } from '../../../utils/constants';
import "./Quantum.css";
import ScrollObserver from "../../../utils/commonComponents/intersectObserver/IntersectObserver"
import { FaArrowRight } from 'react-icons/fa';
const Quantum = () => {
    return (





        <div className='qunatum-container'>

            <ScrollObserver>
                <section className='quatntum-hero-section'>

                    <div className='quatum-hero-box'>
                        <div className='hero-contents'>
                            <div className='quantum-logo-box'>
                                {<img src={Quantum_Logo_Images.quantumlogo} alt="" />}

                                <h1 className='main-heading' style={{ fontWeight: 700 }}>THE FUTURE OF<br />
                                    {/* <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>QUANTUM RESEARCH</span><br />
                                STARTS HERE */}

                                </h1>
                            </div>

                            <h1 className='main-heading gradient-text' style={{ fontWeight: 700 }}>QUANTUM RESEARCH</h1>
                            <h1 className='main-heading' style={{ fontWeight: 700 }}>STARTS HERE</h1>

                        </div>


                        <div className='quantum-hero-img'>

                            <img src={Quantum_Logo_Images.sidelogo} alt="" />
                        </div>
                    </div>
                    {<p className='text' >Join Our team</p>}

                    <div className='buttons-box'>
                        <button>Submit application</button>
                        <button>Explore more <FaArrowRight size={12} /></button>
                    </div>
                </section>
            </ScrollObserver>

            <ScrollObserver>
                <section className='qunatum-machine-section'>
                    <div className='cards-conatiner'>
                        <div className='machine-card'>
                            <div className='quantum-sub-heading'>
                                <h2 className='sub-heading'>Quantum Machine Learning</h2>
                                <p className='sub-text'>QML stands at the intersection of quantum computing and artificial intelligence.</p>
                            </div>
                            <div className='machine-learning-content'>
                                <div className='text-card'>
                                    <p className='text-card-description'>
                                        At Spicarts AI, we are actively exploring how
                                        quantum principles can dramatically
                                        accelerate AI performance and open new
                                        doors to solving complex, real-world problems
                                        <br />
                                        <br />
                                        Our dedicated R&D efforts in QML aim to
                                        harness this emerging technology to build
                                        faster, more scalable, and fundamentally
                                        transformative AI systems.
                                    </p>
                                </div>
                                <div className='image-card'>
                                    <img src={quantum_Images.aiagent} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='tools-card'>
                            <h2 className='sub-heading'> Tools & Tech Stack</h2>
                            <img className='tech-logos' src={Quantum_Logo_Images.techLogos} alt="" />
                        </div>


                    </div>

                </section>
            </ScrollObserver>


            <ScrollObserver>
                <section className='qml-cards-section'>
                    <div className='qml-cards-container'>
                        <div className='qml-hero-card common-card'>
                            <h2>What We Do <br />
                                in <span>QML</span>

                            </h2></div>
                        <div className='Hybrid-Quantum-card common-card '>
                            <h3 className='card-heading hybrid'> Hybrid Quantum -<br />
                                Classical Model Development</h3>
                            <p className='card-desc'>We design models that blend classical
                                neural networks with quantum circuits to
                                enhance pattern recognition, decision
                                making, and optimization.</p>
                        </div>
                        <div className='Quantum-Algorithm-card common-card '>
                            <h3 className='card-heading quantum'>Quantum Algorithm Research</h3>
                            <p className='card-desc'>Our team investigates quantum algorithms
                                for tasks like classification, clustering, and
                                generative modeling - targeting problems
                                that are intractable for classical AI.</p>

                        </div>
                        <div className='Education-card common-card'>
                            <h3 className='card-heading education'>Education & Industry
                                Collaboration
                            </h3>
                            <p className='card-desc'>We collaborate with academic institutions
                                and tech labs to co-create research, train
                                talent, and bring quantum AI knowledge to
                                wider audiences.</p>

                        </div>
                        <div className='simulation-card common-card'>
                            <h3 className='card-heading simulation'> Simulation & Prototyping</h3>
                            <p className='card-desc'>We build experimental models and test
                                them on simulators and real quantum
                                hardware using platforms like:
                                <ul>IBM Qiskit</ul>
                                <ul>Xanadu PennyLane</ul>
                                <ul>Amazon Braket</ul>
                                <ul>TensorFlow Quantum</ul>

                            </p>

                        </div>
                        <div className='description-card common-card '>
                            <p>
                                Whether you’re a researcher,
                                startup, or enterprise - if you're
                                curious about Quantum AI, we’re
                                ready to collaborate.
                            </p>

                            <button>
                                Get in touch
                            </button>
                        </div>


                    </div>
                    <div className='applications-card-conainer'>
                        <h2 className='appliactions-heading'>Applications of <span>QML</span></h2>
                        <p className='appli-desc'>QML is experimental- but the early wins are promising.</p>

                        <div className='applications-cards-box'>
                            <div className='application-card'>
                                <h3>Logistics</h3>
                                <p>Speeding up speech recognition and intent classification</p>
                            </div>
                            <div className='application-card'>
                                <h3>Healthcare</h3>
                                <p>Speeding up speech recognition and intent classification</p>
                            </div>
                            <div className='application-card'>
                                <h3>Finance</h3>
                                <p>Speeding up speech recognition and intent classification</p>
                            </div>
                        </div>
                    </div>

                </section>





            </ScrollObserver>


        </div>
    )
}

export default Quantum
