import React, { useState, useRef, act } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import { ICONS, IMAGES } from '../../utils/constants';
import { FaRobot, FaCode, FaBrain, FaBlog, FaMoneyBillWave, FaInfoCircle, FaUserTie, FaMicroscope, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = (props) => {
  const { setIsRequestDemoOpen } = props;
  const [activeFlyout, setActiveFlyout] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [cardActive, setCardActive] = useState("ai");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Refs for timeout
  const flyoutTimeoutRef = useRef(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    scrollToTop();
    setIsMenuOpen((prev) => !prev);
  };

  const handleLink = (path) => {
    console.log('path: ', path);
    scrollToTop();
    navigate(path);
  }



  const requestDemo = () => {
    setIsRequestDemoOpen(true);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (flyoutType) => {
    if (flyoutTimeoutRef.current) {
      clearTimeout(flyoutTimeoutRef.current);
    }
    setActiveFlyout(flyoutType);
  };

  const handleMouseLeave = () => {
    flyoutTimeoutRef.current = setTimeout(() => {
      setActiveFlyout(null);
    }, 300);
  };

  const handleLogoClick = () => {
    navigate('/');
    scrollToTop();
  };

  return (
    <nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      onMouseLeave={handleMouseLeave}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="logo-con" onClick={handleLogoClick}>
        <img
          className="logo"
          loading="lazy"
          src={IMAGES.LOGO}
          alt="Company logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links desktop">
        {/* Products Dropdown */}
        <div
          className={`nav-item ${location.pathname === '/products' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('products')}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={activeFlyout === 'products' ? 'true' : 'false'}
        >
          <span onClick={() => handleLink('/products')} aria-label="Products">
            Products
          </span>
        </div>

        {/* Services Dropdown */}
        <div
          className={`nav-item ${location.pathname === '/services' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter('services')}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={activeFlyout === 'services' ? 'true' : 'false'}
        >
          <span onClick={() => handleLink('/services')} aria-label="Services">
            Services  <FaChevronDown className={`caret-icon ${activeFlyout === "services" ? "rotate" : ""}`} />
          </span>


          {activeFlyout === 'services' && (
            <div
              className="flyout bounce-in"
              aria-labelledby="services-flyout"
            >

              <div className='left-card'>

                <Link
                  onClick={scrollToTop}
                  to="/services/ai"

                  aria-label="AI Services"
                  onMouseEnter={() => setCardActive("ai")}
                  className={`nav-link cActive ${cardActive === "ai" ? "Active" : ""}`}
                >
                  <div className='icon-box'>
                    <FaBrain size={12} className='icon-resources' />
                  </div>
                  {/* <img src={IMAGES.NAV_AI_LOGO} alt="AI Icon" className="nav-icon" /> */}
                  AI
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/services/robotics"

                  aria-label="Robotics Services"
                  onMouseEnter={() => setCardActive("robotics")}
                  className={`nav-link  cActive ${cardActive === "robotics" ? "Active" : ""}`}


                >
                  <div className='icon-box'>
                    <FaRobot size={12} className='icon-resources' />
                  </div>
                  {/* <img src={IMAGES.NAV_ROBO_LOGO} alt="Robotics Icon" className="nav-icon" /> */}
                  Robotics
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/services/development"
                  onMouseEnter={() => setCardActive("development")}
                  className={`nav-link cActive ${cardActive === "development" ? "Active" : ""}`}
                  aria-label="Development Services"
                  on
                >
                  <div className='icon-box'>
                    <FaCode size={12} className='icon-resources' />
                  </div>
                  {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}
                  Development
                </Link>

              </div>

              <div className='right-card'>
                {cardActive === "ai" && (
                  <div key={cardActive} className='menu-container'>
                    <div className='image-container'>
                      <img src={IMAGES.APP_DEV} alt='img' />
                      <p>img description</p>
                    </div>
                    <div className='content-container'>
                      <p className='content-item'>AI Agents</p>
                      <p className='content-item'>Voice AI</p>
                      <p className='content-item'>Generative AI & LLM's</p>
                      <p className='content-item'>Vision AI</p>
                    </div>
                  </div>


                )}
                {cardActive === "robotics" && (
                  <div key={cardActive} className='menu-container'>

                    <div className='image-container'>
                      <img src={IMAGES.WEB_DEV} alt='img' />
                      <p>img description</p>
                    </div>
                    <div className='content-container'>
                      <p className='content-item'>IOT</p>
                      <p className='content-item'>AI Automation</p>
                      <p className='content-item'>Home Automation</p>
                      <p className='content-item'>Industry Automation</p>
                    </div>
                  </div>
                )

                }

                {cardActive === "development" && (
                  <div key={cardActive} className='menu-container'>
                    <div className='image-container'>
                      <img src={IMAGES.APP_DEV} alt='img' />
                      <p>img description</p>
                    </div>
                    <div className='content-container'>
                      <p className='content-item'>Web Application</p>
                      <p className='content-item'>Android Application</p>
                      <p className='content-item'>IOS Application</p>
                      <p className='content-item'>Desktop Application</p>
                    </div>
                  </div>
                )
                }

              </div>
            </div>
          )}
        </div>

        <div
          className={`nav-item ${location.pathname === '/ai-blogs' ? 'active' : ''}`}
          onMouseEnter={() => handleMouseEnter("ai-blogs")}
          onMouseLeave={handleMouseLeave}
          aria-haspopup="true"
          aria-expanded={activeFlyout === "ai-blogs" ? "true" : "false"}
        >
          <span aria-label="Services">
            Resources <FaChevronDown className={`caret-icon ${activeFlyout === "ai-blogs" ? "rotate" : ""}`} />
          </span>
          {activeFlyout === "ai-blogs" && (
            <div
              className='flyout-resources bounce-in'
              aria-labelledby="services-flyout"

            >
              <div className='resources-nav-container'>
                <Link
                  onClick={scrollToTop}
                  to="/quantum-machine-learning"
                  onMouseEnter={() => setCardActive("development")}
                  className={`subnav-link ${cardActive === "development" ? "Active" : ""}`}
                  aria-label="Development Services"
                  on
                >

                  {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}

                  <div className='sub-nav-card'>

                    <div className='icon-box'>
                      <FaMicroscope size={12} className='icon-resources' />
                      {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}
                    </div>

                    <div className='sub-nav-box'>
                      <p className='sub-nav-name'>Research & Development</p>
                      <p className='sub-nav-desc'>Learn about Spicarts</p>

                    </div>
                  </div>


                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/ai-blogs"
                  onMouseEnter={() => setCardActive("development")}
                  className={`subnav-link ${cardActive === "development" ? "Active" : ""}`}
                  aria-label="Development Services"
                  on
                >
                  <div className='sub-nav-card'>

                    <div className='icon-box'>
                      <FaBlog size={12} className='icon-resources' />
                      {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}
                    </div>

                    <div className='sub-nav-box'>
                      <p className='sub-nav-name'>Blogs</p>
                      <p className='sub-nav-desc'>Learn about Spicarts</p>

                    </div>
                  </div>
                </Link>
                <Link
                  onClick={scrollToTop}
                  to="/carriers"
                  onMouseEnter={() => setCardActive("development")}
                  className={`subnav-link ${cardActive === "development" ? "Active" : ""}`}
                  aria-label="Development Services"
                  on
                >

                  {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}

                  <div className='sub-nav-card'>

                    <div className='icon-box'>
                      <FaUserTie size={12} className='icon-resources' />
                      {/* <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> */}
                    </div>

                    <div className='sub-nav-box'>
                      <p className='sub-nav-name'>Careers</p>
                      <p className='sub-nav-desc'>Learn about Spicarts</p>

                    </div>
                  </div>

                </Link>

                {/* <Link
                  onClick={scrollToTop}
                  to="/aboutus"
                  onMouseEnter={() => setCardActive("development")}
                  className={`subnav-link ${cardActive === "development" ? "Active" : ""}`}
                  aria-label="Development Services"
                  on
                >

                  { <img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> }

                  <div className='sub-nav-card'>

                    <div className='icon-box'>
                      <FaInfoCircle size={12} className='icon-resources' />
                      {<img src={IMAGES.NAV_DEV_LOGO} alt="Development Icon" className="nav-icon" /> }
                    </div>

                    <div className='sub-nav-box'>
                      <p className='sub-nav-name'>About us</p>
                      <p className='sub-nav-desc'>Learn about Spicarts</p>

                    </div>
                  </div>

                </Link> */}


              </div>
            </div>
          )

          }

        </div>

        {/* Other Links */}
        {/* <Link
          onClick={scrollToTop}
          className={`nav-item ${location.pathname === '/ai-blogs' ? 'active' : ''}`}
          to="/ai-blogs"
          aria-label="AI Blogs"
        >
          <span>Blogs</span>
        </Link> */}


        <Link
          onClick={scrollToTop}
          className={`nav-item ${location.pathname === '/pricing' ? 'active' : ''}`}
          to="/pricing"
          aria-label="Pricing"
        >
          <span>Pricing</span>
        </Link>
      </div>

      {/* Sign Up & Request a Demo */}
      <div className="auth-links desktop">
        {<Link onClick={scrollToTop} to="/sign-in" className="signup-btn">
          <div className="navbar-button-container">
            <div className="navbar-button">
              <div className="text sign-in">Sign In</div>
              <div className="text sign-up">Sign Up</div>
            </div>
          </div>
        </Link>}
        <Link className='navbar-req-link' to="/request-demo" onClick={() => setIsRequestDemoOpen(true)}>
          <div className='demo-btn'>Request Demo</div>
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {/* {ICONS.HAMBURGER} */}<RxHamburgerMenu />
      </div>
      <div className={`mobile-nav ${isMenuOpen ? 'show' : ''}`}>
        <Link to="/products" onClick={toggleMenu} aria-label="Products">Products</Link>
        <Link to="/services" onClick={toggleMenu} aria-label="Services">Services</Link>
        <Link to="/ai-blogs" onClick={toggleMenu} aria-label="AI Blogs">Blogs</Link>
        <Link to="/pricing" onClick={toggleMenu} aria-label="Pricing">Pricing</Link>
        <Link to="/sign-in" className="signup-btn" onClick={toggleMenu} aria-label="Sign In/Sign Up">Sign In/Sign Up</Link>
        <Link to="/request-demo" onClick={requestDemo} aria-label="Request a Demo">Request a Demo</Link>
      </div>
    </nav>
  );
};

export default Navbar;
