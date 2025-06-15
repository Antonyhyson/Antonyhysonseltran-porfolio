import React from 'react';
import './About.css';

const About: React.FC = () => {
  const scrollToExperience = () => {
    window.location.href = '#experience';
  };

  return (
    <section id="about">
      <p className="section__text__p1">Uncover More About</p>
      <h1 className="title">My Expertise</h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="/assets/experience.png" alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>2+ years<br />Cyber Security & IT</p>
            </div>
            <div className="details-container">
              <img src="/assets/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>MSc Cyber Security Analytics<br />BE Computer Science Eng.</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              As a recent MSc Cyber Security Analytics graduate and freelance Cybersecurity Consultant, I empower small businesses and individuals with robust security solutions through expertise in vulnerability management, SIEM analysis, and incident response. My expertise spans troubleshooting, system administration (Windows/Linux), endpoint management (EDR solutions), security updates, and cybersecurity awareness training, including risk assessment and network traffic analysis. Leveraging my Computer Science Engineering background, I blend technical proficiency with a strong analytical mindset, honed through in-depth data analysis during my Master's studies. Additionally, I bring proven leadership skills, having successfully led multiple projects to completion. Passionate about continuous learning, I stay ahead of the curve in the ever-evolving cybersecurity landscape, utilizing tools like Nessus and OpenVAS.
            </p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={scrollToExperience}
      />
    </section>
  );
};

export default About;