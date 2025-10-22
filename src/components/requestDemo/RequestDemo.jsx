import React, { useState } from 'react';
import './RequestDemo.css';
import { serviceOptions } from '../../utils/constants';
import emailjs from 'emailjs-com'; // <-- added this line

const RequestDemo = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    services: [], // <-- Add this
    message: '', // <-- make sure message is initialized
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateField = (name, value) => {
    let error = '';

    if (name === 'firstName' && !value.trim()) {
      error = 'First name is required';
    }

    if (name === 'lastName' && !value.trim()) {
      error = 'Last name is required';
    }

    if (name === 'email') {
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = 'Invalid email';
      }
    }

    if (name === 'phone') {
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (!/^\d{10}$/.test(value)) {
        error = 'Phone number must be exactly 10 digits';
      } else if (parseInt(value, 10) <= 0) {
        error = 'Phone number must be a positive number';
      }
    }

    // Update the error state for that specific field
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fieldsToValidate = ['firstName', 'lastName', 'email', 'phone'];
    const newErrors = {};

    let isValid = true;
    fieldsToValidate.forEach((field) => {
      const isFieldValid = validateField(field, form[field]);
      if (!isFieldValid) {
        newErrors[field] = errors[field];
        isValid = false;
      }
    });

    if (!isValid) return;

    const templateParams = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      job_title: form.jobTitle,
      company: form.company,
      services: form.services.join(', '),
      message: form.message,
    };

    emailjs
      .send('service_yen58b8', 'template_1c75k6h', templateParams, 'JLbtFLwIInmlQrFv-')
      .then(() => {
        console.log('Form submitted:', form);
        setSubmitted(true);
        setForm({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          jobTitle: '',
          company: '',
          services: [],
          message: '',
        });
        setErrors({});
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error);
      });
  };

  const handleCheckboxChange = (service) => {
    try {
      const updatedServices = form?.services.includes(service)
        ? form.services.filter((s) => s !== service)
        : [...form.services, service];

      setForm({ ...form, services: updatedServices });
    } catch (error) {
      console.error('Error updating services:', error);
    }
  };

  return (
    <div className="request-demo-page">
      <div className="req-demo-page-bg"></div>
      <form className="request-form" onSubmit={handleSubmit}>
        <h2>Request a Demo</h2>

        <div className="form-grid">
          <div className="form-field">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={form.firstName}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={form.lastName}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>

          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number*"
              value={form.phone}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-field">
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={form.jobTitle}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
          </div>

          <div className="form-field">
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              onBlur={(e) => validateField(e.target.name, e.target.value)}
            />
          </div>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">Select Services You're Interested In:</label>
          <div className="checkbox-grid">
            {serviceOptions.map((option, idx) => (
              <div
                key={idx}
                className={`checkbox-option ${form?.services?.includes(option) ? 'selected' : ''}`}
                onClick={() => handleCheckboxChange(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>

        <div className="form-field">
          <textarea
            name="message"
            placeholder="How can I help you?"
            value={form.message}
            onChange={handleChange}
            className='req-demo-textarea'
            cols={30}
            rows={4}
          ></textarea>
        </div>

        <p className='req-demo-terms'>By continuing, you agree to SpicArt's Privacy Policy and consent to receive communications from us.</p>


        {/* <div className='req-demo-btn-con'> */}
        <button type="submit">Submit Request</button>
        {/* </div> */}

        {submitted && <div className="success">Thank you! We'll reach out soon.</div>}
      </form>
    </div>
  );
};

export default RequestDemo;
