import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from "react-icons/fa";
import './SigninSignup.css';
import { useNavigate } from 'react-router-dom';

const SigninSignup = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleMode = () => {
    navigate(-1);
    setFormData({ name: '', email: '', password: '', terms: false });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (isSignUp && !formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (formData.password.length < 6) newErrors.password = 'At least 6 characters';
    if (isSignUp && !formData.terms) newErrors.terms = 'You must accept terms';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setFormData({ name: '', email: '', password: '', terms: false });
    setErrors({});

    console.log('Submitted:', formData);
  };

  return (
    <div className="signin-signup-container">
      <div className="signin-page-bg"></div>
      {/* Component unchanged */}
      <div className='signin-page'>
        <motion.div
          className="auth-container"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* ✅ Close Icon */}
          <FaTimes className='sign-close' onClick={toggleMode} />
          <div className="tab-switch">
            <span onClick={() => setIsSignUp(false)} className={!isSignUp ? 'active' : ''}>Sign In</span>
            <span onClick={() => setIsSignUp(true)} className={isSignUp ? 'active' : ''}>Sign Up</span>
          </div>

          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">

              {isSignUp && (
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              )}

              <div className="form-field">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="form-field">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password *"
                />
                {errors.password && <span className="error">{errors.password}</span>}
              </div>

              {isSignUp && (
                <div className="form-field checkbox-inline">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                    />
                    I accept the Terms & Conditions
                  </label>
                  {errors.terms && <span className="error">{errors.terms}</span>}
                </div>
              )}

            </div>

            <motion.button type="submit" whileTap={{ scale: 0.97 }} className="auth-btn">
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </motion.button>
          </form>


          <p className="toggle-text">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SigninSignup;
