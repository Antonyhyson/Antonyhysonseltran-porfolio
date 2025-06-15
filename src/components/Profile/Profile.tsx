import React from 'react';
import './Profile.css';

const Profile: React.FC = () => {
  const handleDownloadCV = () => {
    // Path starts with /assets/ because it's in the public folder
    window.open('/assets/Antony_Hyson_Seltran_CV.pdf', '_blank');
  };

  const handleContactInfo = () => {
    // Smooth scroll to the contact section using the anchor ID
    window.location.href = '#contact';
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src="/assets/profile-pic.jpg" alt="Antony Hyson Seltran profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Greetings, I am</p>
        <h1 className="title">Antony Hyson Seltran</h1>
        <p className="section__text__p2">Cybersecurity Analyst, Ethical Hacker</p>
        <div className="btn-container">
          {/* Note: onClick in React is camelCase */}
          <button className="btn btn-color-2" onClick={handleDownloadCV}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={handleContactInfo}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          {/* External links open in new tab */}
          <img
            src="/assets/linkedin.png"
            alt="LinkedIn profile"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/antonyhysonseltran', '_blank')}
          />
          <img
            src="/assets/email.png"
            alt="Email"
            className="icon"
            onClick={() => window.location.href = 'mailto:work.antonyhyson@gmail.com'}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;