"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Forms.css";
import FormButtons from "./FormButtons";

const StrategyCallForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    // TODO: Replace with actual backend/API logic
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <motion.div
      className="strategy-call-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Book Your Free Strategy Call</h2>
      <p>Tell us a bit about your project and we’ll reach out shortly.</p>

      <form className="strategy-call-form" onSubmit={handleSubmit}>
        <div className="row-two">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Choose Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Briefly describe your idea or challenge"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <FormButtons onBack={handleBack} submitLabel="🚀 Schedule Strategy Call" />

        {submitted && <p className="form-success">✅ Submitted successfully!</p>}
      </form>
    </motion.div>
  );
};

export default StrategyCallForm;
