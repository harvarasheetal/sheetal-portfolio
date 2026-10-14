import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ContactSection.css';

const ContactSection = () => {
  // 1. Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // 2. Status handling state
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  // 3. Scroll reveal observer
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false, // Animates smoothly every time it comes into view
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Replace URL with your backend API endpoint (e.g., 'http://localhost:5000/api/contact')
      const response = await fetch('http://localhost:5000/mail/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }

      // Successful message delivery
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form

      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.message || 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header Section */}
        <p className="contact-section-label">04 — CONTACT</p>
        <h1 className="contact-title">
          Let’s <span className="highlight-text">Connect</span>
        </h1>
        <p className="contact-subtitle">Have a project? Let’s solve it together.</p>

        {/* Form Container with Framer Motion scroll reveal */}
        <motion.div
          ref={ref}
          className="contact-card"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{
            duration: 1.1, // Smooth & slow animation
            ease: [0.25, 0.1, 0.25, 1.0],
          }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Top Row: Name and Email */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* Subject Input */}
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>

            {/* Message Input */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            {/* Response Alerts */}
            {status.success && (
              <div className="form-alert alert-success">
                Message sent successfully!
              </div>
            )}
            {status.error && (
              <div className="form-alert alert-error">
                {status.error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="send-button"
              disabled={status.loading}
            >
              {status.loading ? 'Sending...' : 'Send Message ✈'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;