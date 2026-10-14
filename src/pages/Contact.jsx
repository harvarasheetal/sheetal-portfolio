import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  MessageSquareCode, // Used for WhatsApp representation
  Building2, 
  Globe2 
} from 'lucide-react';

function Contact (){
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
        <p className="contact-section-label">You Can </p>
        <h1 className="contact-title">
        <span className="highlight-text">Reach</span>US
        </h1>
        <p className="contact-subtitle"></p>
        <div className="contsct-us">

          {/* personal contact field */}
           <div className="max-w-4xl mx-auto my-8 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
      
      {/* Contact Section */}
      <div className="bg-black border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <User className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Contact Details</h2>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-black text-slate-400 rounded-lg">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <p className="text-sm font-semibold text-slate-100">Harvara Sheetal</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg">
              <MessageSquareCode className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <a 
                href="https://wa.me/919106788622" 
                target="_blank" 
                rel="noreferrer"
                className="text-sm font-semibold text-emerald-400 hover:underline"
              >
                +91 9106788622
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <a 
                href="tel:9106788622" 
                className="text-sm font-semibold text-slate-100 hover:text-indigo-400 transition"
              >
                +91 9106788622
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-purple-500/10 text-purple-400 rounded-lg">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <a 
                href="mailto:harvarasheetal@gmail.com" 
                className="text-sm font-semibold text-slate-100 hover:text-indigo-400 transition"
              >
                harvarasheetal@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="bg-black border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl">
            <MapPin className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-white">Location Details</h2>
        </div>

        <div className="space-y-4">
          {/* City */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-slate-800 text-slate-400 rounded-lg">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <p className="text-sm font-semibold text-slate-100">Jamnagar</p>
            </div>
          </div>

          {/* State */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-slate-800 text-slate-400 rounded-lg">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <p className="text-sm font-semibold text-slate-100">Gujarat</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex items-center gap-3.5">
            <div className="p-2 bg-slate-800 text-slate-400 rounded-lg">
              <Globe2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-slate-400"></p>
              <p className="text-sm font-semibold text-slate-100">Bharat (India)</p>
            </div>
          </div>
        </div>
      </div>

    </div>


          </div>
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

export default Contact
