// ... (imports remain the same)
import React from 'react';
import Slider from '../Slider/Slider';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Professional Journey</h1>
      <div className="experience-details-container">
        <div className="details-container">
          <h2 className="experience-sub-title">Cybersecurity Experience</h2>
          {/* The Slider component now encapsulates the articles AND its navigation buttons */}
          <Slider id="cyber-exp-wrapper"> 
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>CE/CE+ Compliance Consultant</h3>
                <p>Risk Crew</p>
                <p>June 2025 - Present (1 month)</p>
                <p>London Area, United Kingdom</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Cyber Security Consultant (Freelance)</h3>
                <p>August 2023 - May 2025 (1 year 10 months)</p>
                <p>London Area, United Kingdom</p>
                <p>Performed comprehensive risk assessments on 150+ applications, reducing security incidents by 40% and strengthening data protection for over 1,000 users. I also created and implemented security awareness training programs for 200+ employees, resulting in a 60% improvement in compliance metrics.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Student Intern</h3>
                <p>CyberHakz Pvt-Ltd</p>
                <p>March 2022 - March 2022 (1 month)</p>
                <p>Chennai, Tamil Nadu, India</p>
                <p>Facilitated incident response for over 50 cyber threats with a 95% protocol adherence rate, minimizing system downtime. I engineered an EXIF metadata analysis tool which reduced investigation time by 60%, optimizing technical workflows.</p>
              </div>
            </article>
          </Slider>
        </div>

        <div className="details-container">
          <h2 className="experience-sub-title">Other Experience</h2>
          {/* The Slider component now encapsulates the articles AND its navigation buttons */}
          <Slider id="other-exp-wrapper"> 
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Front of House</h3>
                <p>The George Public House</p>
                <p>October 2024 - Present</p>
                <p>Greater London, England, United Kingdom</p>
                <p>I quickly progressed into management by demonstrating strong adaptability and work ethic, consistently acquiring new skills in a fast-paced technical environment. I enhanced multitasking, interpersonal, and customer engagement abilities, effectively conveying complex concepts and building professional relationships.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Food Runner</h3>
                <p>The George Public House</p>
                <p>January 2025 - May 2025 (4 months)</p>
                <p>Greater London, England, United Kingdom</p>
                <p>During my tenure as a Food Runner, I consistently demonstrated effective communication and strong team collaboration to ensure smooth service operations.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Freelance Photographer</h3>
                <p>March 2019 - May 2025 (6 years 3 months)</p>
                <p>London Area, United Kingdom</p>
                <p>As a Freelance Photographer, I developed and honed my creative and technical skills by capturing diverse subjects and delivering high-quality visual content to clients.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Student Brand Ambassador</h3>
                <p>Amber</p>
                <p>August 2023 - April 2025 (1 year 10 months)</p>
                <p>Newark, Delaware, United States</p>
                <p>I increased brand awareness and engagement through strategic outreach and social media campaigns, significantly contributing to impactful marketing initiatives and guiding teams effectively.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Team Member</h3>
                <p>Popeyes Louisiana Chicken UK</p>
                <p>April 2024 - August 2024 (5 months)</p>
                <p>Exeter, England, United Kingdom</p>
                <p>As a Team Member, I efficiently handled customer orders and maintained operational standards in a fast-paced food service environment.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Sales Partner</h3>
                <p>John Lewis & Partners</p>
                <p>November 2023 - January 2024 (3 months)</p>
                <p>Exeter, England, United Kingdom</p>
                <p>I drove a 20% increase in holiday sales by executing tailored strategies and streamlined inventory, while also boosting customer satisfaction and average transaction value by 15% through personalized product recommendations.</p>
              </div>
            </article>
            <article>
              <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
              <div>
                <h3>Photographer</h3>
                <p>Sportifying India</p>
                <p>August 2022 - January 2023 (6 months)</p>
                <p>Chennai, Tamil Nadu, India</p>
                <p>In this role, I captured high-quality sports event photography, contributing to the visual content strategy of Sportifying India.</p>
              </div>
            </article>
          </Slider>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = '#certifications')}
      />
    </section>
  );
};

export default Experience;