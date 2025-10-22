import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; // <<== IMPORT AnimatePresence
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { products, services } from './utils/constants';
import Robotics from './components/product/aiProducts/Robotics';
import Development from './components/product/aiProducts/Development';
import AIProducts from './components/product/aiProducts/AI';
import Blogs from './components/aiBlogs/Blogs';
import Pricing from './components/pricing/Pricing';
import RequestDemo from './components/requestDemo/RequestDemo';
import SigninSignup from './components/signInSignUp/SigninSignup';
import './App.css';
import StrategyCallForm from './components/forms/BookAStrategyCall';
import { Helmet } from "react-helmet-async";
import Quantum from './components/product/quantum_Machine_Learning/Quantum';
import Carriers from './components/carriers/Carriers';


const LandingPage = lazy(() => import('./components/landingPage/LandingPage'));
const Products = lazy(() => import('./components/product/Products'));
const ItemDetailPage = lazy(() => import('./utils/commonComponents/ItemDetailPage'));
const Services = lazy(() => import('./components/services/Services'));
const AboutUs = lazy(() => import('./components/about/About'));

const AppRoutes = () => {
  const location = useLocation();
  const hideFooter = location.pathname === '/request-demo';

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="main-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services/ai" element={<AIProducts items={products} />} />
            <Route path="/services/robotics" element={<Robotics items={products} />} />
            <Route path="/services/development" element={<Development items={products} />} />
            <Route path="/quantum-machine-learning" element={<Quantum />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ItemDetailPage items={services} title="Service Details" />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ai-blogs" element={<Blogs />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/sign-in" element={<SigninSignup />} />
            <Route path="/carriers" element={<Carriers />} />
            <Route path="/request-demo" element={<RequestDemo />} />
            <Route path="/services/development/strategy-call" element={<StrategyCallForm />} />
          </Routes>
        </div>
      </main>

      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* { <Router>
       
        <head>
          <title>SpicArts AI</title>
          <meta name="description" content="SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services to help businesses stay ahead of the competition." />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="SPicArts AI - Advanced AI Solutions" />
          <meta property="og:description" content="SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services to help businesses stay ahead of the competition." />
          <meta property="og:image" content="https://www.spicarts.ai/assets/images/og-image.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.spicarts.ai" />
          <link rel="canonical" href="https://www.spicarts.ai" />
        </head>
        <AppRoutes />
      </Router> } */}

      <Helmet>
        <title>SpicArts AI</title>
        <meta
          name="description"
          content="SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services to help businesses stay ahead of the competition."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SpicArts AI - Advanced AI Solutions" />
        <meta
          property="og:description"
          content="SPicArts AI offers advanced AI solutions, custom software, web development, and mobile app development services to help businesses stay ahead of the competition."
        />
        <meta
          property="og:image"
          content="https://www.spicarts.ai/assets/images/og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.spicarts.ai" />
        <link rel="canonical" href="https://www.spicarts.ai" />
      </Helmet>

      <AnimatePresence mode="wait">
        <AppRoutes />
      </AnimatePresence>

    </Suspense>
  );
};

export default App;
