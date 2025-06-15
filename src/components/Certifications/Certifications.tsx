// ... (imports remain the same)
import React from 'react';
import Slider from '../Slider/Slider';
import './Certifications.css';

const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <p className="section__text__p1">Showcasing My</p>
      <h1 className="title">Certifications & Publications</h1>
      <div className="experience-details-container">
        <div className="details-container color-container">
          <h2 className="experience-sub-title project-title">Certifications</h2>
          {/* The Slider component now encapsulates the articles AND its navigation buttons */}
          <Slider id="cert-wrapper">
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://www.linkedin.com/learning/certificates/4c65b17075c417b759027191d1b4c0e2cf6d6dfca6c5b58c9dad28fe1f14f8fa" target="_blank" rel="noopener noreferrer">IT Security Foundations: Core Concepts</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AIG/2ZFnEGEDKTQMtEv9C_AIG_Rutzxrr6ffsPHgCiZ_1728608131713_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">AIG - Shields Up: Cybersecurity Job Simulation</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Datacom/yTszJTvkHFBH6zAn3_Datacom_Rutzxrr6ffsPHgCiZ_1728987765420_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">Datacom - Cybersecurity Job Simulation</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_Rutzxrr6ffsPHgCiZ_1728833784857_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">JPMorgan Chase - Investment Banking Job Simulation</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_Rutzxrr6ffsPHgCiZ_1728471957483_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">Mastercard - Cybersecurity Job Simulation</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20US/4KqDALSkyRNPXjQGa_PwC%20US_Rutzxrr6ffsPHgCiZ_1729007473906_completion_certificate.pdf" target="_blank" rel="noopener noreferrer">PwC US - Cyber Security Consulting Job Simulation</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://www.credly.com/badges/8c1929ac-b717-42bb-b58f-cf66bdced614/public_url" target="_blank" rel="noopener noreferrer">CISCO Ethical Hacker</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://education.securiti.ai/verification/12D37487D-12D3723C4-127132B25/?swcfpc=1" target="_blank" rel="noopener noreferrer">AI Governance Certification</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://www.credly.com/badges/57a406f1-6344-4707-b31a-9a81bb9c6f9c/public_url" target="_blank" rel="noopener noreferrer">Introduction to Cybersecurity (Cisco)</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://www.credly.com/badges/2137c778-a307-4c50-a258-c24cc14dd698/public_url" target="_blank" rel="noopener noreferrer">Networking Basics (Cisco)</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3><a href="https://education.securiti.ai/verification/12741671D-1274056D4-127132B25/?swcfpc=1" target="_blank" rel="noopener noreferrer">PrivacyOps Certification</a></h3>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Certification icon" className="icon" />
              <div>
                <h3>Official ISC2 CC Online Self-Paced Training-1M</h3>
              </div>
            </article>
          </Slider>
          </div>

        <div className="details-container color-container">
          <h2 className="experience-sub-title project-title">Publications</h2>
          {/* The Slider component now encapsulates the articles AND its navigation buttons */}
          <Slider id="pub-wrapper">
            <article>
              <img src="./assets/checkmark.png" alt="Publication icon" className="icon" />
              <div>
                <h3><a href="https://ijsart.com/product-availability-checker-63834" target="_blank" rel="noopener noreferrer">PRODUCT AVAILABILITY CHECKER</a></h3>
              </div>
            </article>
          </Slider>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = '#projects')}
      />
    </section>
  );
};

export default Certifications;