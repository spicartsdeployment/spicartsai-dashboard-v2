import React from "react";
import "./Blogs.css";
import { motion } from "framer-motion";
import { FaNewspaper, FaFire, FaBookOpen, FaArrowRight } from "react-icons/fa";
import { featuredArticles, trendingTopics } from "../../utils/constants";

const Blogs = () => {
  return (
    <div className="blog-container">
      {/* Blog Header */}
      <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="blog-header">
        <h1>Welcome to the <span className="highlight">SPicArts AI Blog</span></h1>
        <p>Stay Updated with the Latest in AI and Voice Technology</p>
      </motion.div>

      {/* Blog Intro */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="blog-intro">
        <p>
          At SPicArts AI, we explore the forefront of artificial intelligence, bringing you the latest developments, insights, and innovations. 
          This blog is a hub for AI enthusiasts, tech innovators, and businesses eager to harness AI’s potential.
        </p>
      </motion.div>

      {/* Trending Topics */}
      <div className="blog-section">
        <h2><FaFire className="icon" /> Trending Topics</h2>
        <div className="trending-grid">
          {trendingTopics.map((topic, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="trending-card">
              <h3>{topic.title}</h3>
              <p>{topic.description}</p>
              <a href={topic.link} target="_blank" rel="noopener noreferrer">
                Read More <FaArrowRight />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="blog-section">
        <h2><FaBookOpen className="icon" /> Featured Articles & Research</h2>
        <ul className="featured-list">
          {featuredArticles.map((article, index) => (
            <motion.li key={index}>
              <FaNewspaper /> 
              {article}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="blog-cta">
        <h2>Stay Updated & Engage with Us!</h2>
        <p>AI is evolving rapidly—stay informed, inspired, and ahead of the curve.</p>
        {/* <button className="cta-button">📩 Subscribe Now</button> */}
      </motion.div>
    </div>
  );
};

export default Blogs;