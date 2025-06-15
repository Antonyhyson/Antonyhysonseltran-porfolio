// ... (imports remain the same)
import React from 'react';
import Slider from '../Slider/Slider';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Discover My</p>
      <h1 className="title">Innovations</h1>
      <div className="experience-details-container">
        <div className="details-container color-container">
          <h2 className="experience-sub-title project-title">Key Projects</h2>
          {/* The Slider component now encapsulates the articles AND its navigation buttons */}
          <Slider id="projects-wrapper">
            <article>
              <img src="./assets/PAC.png" alt="Product Availability Checker" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/PRODUCT-AVAILABILITY-CHECKER.git" target="_blank" rel="noopener noreferrer">PRODUCT AVAILABILITY CHECKER</a></h3>
                <p>Developed a hybrid mobile app which improved user engagement by 30% with cross-platform compatibility and received 95% positive feedback, enhancing inventory workflows for retailers.</p>
              </div>
            </article>
            <article>
              <img src="./assets/NADS.png" alt="Network Anomaly Detection System" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/Development-of-a-Network-Anomaly-Detection-System-for-Enhanced-Cybersecurity.git" target="_blank" rel="noopener noreferrer">Network Anomaly Detection System</a></h3>
                <p>Developed and evaluated a novel network anomaly detection system using machine learning models (Random Forest, MLP, XGBoost) to effectively detect diverse cyber threats across multiple benchmark datasets, achieving high accuracy and generalization.</p>
              </div>
            </article>
            <article>
              <img src="./assets/Solana.png" alt="Solana Blockchain Voting Protocol" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/Basic-Voting-System-Using-Blockchain.git" target="_blank" rel="noopener noreferrer">Solana Blockchain Voting Protocol</a></h3>
                <p>Coordinated a mini project on Solana Blockchain Voting, achieving over 1000 transactions per second and designing a secure, decentralized voting protocol with a 3-member team.</p>
              </div>
            </article>
            <article>
              <img src="./assets/EXIF.png" alt="EXIF Metadata Analysis Tool" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/EXIFTOOL.git" target="_blank" rel="noopener noreferrer">EXIF Metadata Analysis Tool</a></h3>
                <p>Developed an EXIF metadata analysis tool to efficiently extract and analyze metadata from image files, streamlining forensic investigations and data analysis processes.</p>
              </div>
            </article>
            <article>
              <img src="./assets/ROT13.png" alt="Decrypting Caesar Cipher - Rot13" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/DecryptingCaesarCipher-Rot13.git" target="_blank" rel="noopener noreferrer">Decrypting Caesar Cipher - Rot13</a></h3>
                <p>Implemented a Python-based tool for decrypting Caesar Cipher and ROT13 encrypted messages, demonstrating foundational cryptographic understanding.</p>
              </div>
            </article>
            <article>
              <img src="./assets/Keylogger.png" alt="Keylogger Application" className="project-img"/>
              <div>
                <h3><a href="https://github.com/Antonyhyson/Keylogger.git" target="_blank" rel="noopener noreferrer">Keylogger Application</a></h3>
                <p>Created a basic keylogger application for educational purposes, showcasing understanding of system interaction and data capture techniques in cybersecurity.</p>
              </div>
            </article>
          </Slider>
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = '#contact')}
      />
    </section>
  );
};

export default Projects;