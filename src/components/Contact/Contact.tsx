// src/components/Contact/Contact.tsx
import React from 'react';
import './Contact.css'; // Your Contact section's specific CSS (if any)

const Contact: React.FC = () => {
  return (
    // Removed ref and className for animation
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      {/* Removed ref and className for animation */}
      <div className="contact-info-container">
        {/* Email contact info */}
        <div className="contact-info">
          <img
            src="/assets/email.png" // Ensure this image path is correct
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:work.antonyhyson@gmail.com">work.antonyhyson@gmail.com</a></p>
        </div>
        {/* LinkedIn contact info */}
        <div className="contact-info">
          <img
            src="/assets/linkedin.png" // Ensure this image path is correct
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/antonyhysonseltran" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>

      <p className="section__text__p1 signature">Built by Antony Hyson Seltran & AIGC</p>
    </section>
  );
};

export default Contact;