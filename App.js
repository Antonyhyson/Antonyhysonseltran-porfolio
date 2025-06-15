import React, { useState, useRef, useEffect } from 'react';

// Main App Component
const App = () => {
  // State for hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for scrollable sections
  const cyberExpRef = useRef(null);
  const otherExpRef = useRef(null);
  const certsRef = useRef(null);
  const projectsRef = useRef(null);

  // Function to toggle hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to smoothly scroll slider sections
  const scrollSlider = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8; // Scroll 80% of container width
      ref.current.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Effect to handle smooth scrolling for navigation links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const id = href.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
        // Close menu after clicking a link on mobile
        setIsMenuOpen(false);
      }
    };

    // Attach click listeners to all anchor tags with href starting with '#'
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    // Cleanup listeners on component unmount
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []); // Run only once on mount

  // Combine common Tailwind styles for articles to reduce repetition
  const articleBaseClasses = "flex flex-col items-start text-left gap-3 bg-white rounded-md border border-gray-200 p-4 shadow-md transition-transform duration-200 ease-in-out hover:translate-y-[-5px] hover:shadow-lg";
  const iconBaseClasses = "cursor-default h-5 mt-0.5 mb-2 filter-none"; // Adjusted for black icon color

  return (
    <div className="font-mono text-black leading-relaxed overflow-x-hidden relative z-10" style={{ scrollBehavior: 'smooth' }}>
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="fixed inset-0 min-w-full min-h-full w-auto h-auto object-cover z-[-1]" style={{ filter: 'grayscale(60%) brightness(120%) opacity(0.5)' }}>
        <source src="./assets/BG_Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Desktop Navigation */}
      <nav id="desktop-nav" className="hidden md:flex justify-around items-center h-[10vh] bg-white shadow-md px-4">
        <div className="text-xl font-bold text-black">Antony Hyson Seltran</div>
        <div>
          <ul className="flex gap-10 list-none text-base font-medium">
            <li><a href="#about" className="relative py-2 text-black hover:text-[#5DADE2] transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>About</a></li>
            <li><a href="#experience" className="relative py-2 text-black hover:text-[#5DADE2] transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Experience</a></li>
            <li><a href="#certifications" className="relative py-2 text-black hover:text-[#5DADE2] transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Certifications</a></li>
            <li><a href="#projects" className="relative py-2 text-black hover:text-[#5DADE2] transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Projects</a></li>
            <li><a href="#contact" className="relative py-2 text-black hover:text-[#5DADE2] transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Navigation */}
      <nav id="hamburger-nav" className="md:hidden flex justify-between items-center h-[10vh] bg-white shadow-md px-4 relative z-50">
        <div className="text-xl font-bold text-black">Antony Hyson Seltran</div>
        <div className="relative inline-block">
          <div className="flex flex-col justify-between h-[22px] w-[28px] cursor-pointer" onClick={toggleMenu}>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-x-2 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 translate-x-2 -translate-y-1.5' : ''}`}></span>
          </div>
          <div className={`absolute top-full right-0 bg-white w-fit min-w-[150px] overflow-hidden transition-all duration-300 ease-in-out border border-gray-200 shadow-lg rounded-md ${isMenuOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
            <ul>
              <li><a href="#about" className="block px-4 py-2 text-black text-base transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-[#5DADE2]">About</a></li>
              <li><a href="#experience" className="block px-4 py-2 text-black text-base transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-[#5DADE2]">Experience</a></li>
              <li><a href="#certifications" className="block px-4 py-2 text-black text-base transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-[#5DADE2]">Certifications</a></li>
              <li><a href="#projects" className="block px-4 py-2 text-black text-base transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-[#5DADE2]">Projects</a></li>
              <li><a href="#contact" className="block px-4 py-2 text-black text-base transition-all duration-300 ease-in-out hover:bg-gray-50 hover:text-[#5DADE2]">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Section */}
      <section id="profile" className="flex flex-col md:flex-row gap-16 pt-[10vh] min-h-[80vh] items-center justify-center px-4 w-full">
        <div className="flex h-72 w-72 md:h-96 md:w-96 rounded-full overflow-hidden border-3 border-[#5DADE2] shadow-2xl shadow-[#5DADE2]/40 flex-shrink-0">
          <img src="./assets/profile-pic.jpg" alt="Antony Hyson Seltran profile picture" className="w-full h-full object-cover" />
        </div>
        <div className="text-center max-w-lg md:max-w-xl">
          <p className="text-black text-base mb-2">Greetings, I am</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#5DADE2] mb-4">Antony Hyson Seltran</h1>
          <p className="text-black text-lg md:text-xl mb-6">Cybersecurity Analyst, Ethical Hacker</p>
          <div className="flex justify-center gap-3 md:gap-4 mt-8">
            <button
              className="btn font-semibold py-2.5 px-6 min-w-[9rem] rounded-md text-sm uppercase tracking-wider border border-gray-300 bg-gray-100 text-black shadow-md hover:bg-gray-300 hover:border-gray-400 hover:shadow-lg"
              onClick={() => window.open('./assets/Antony_Hyson_Seltran_CV.pdf')}
            >
              Download CV
            </button>
            <button
              className="btn font-semibold py-2.5 px-6 min-w-[9rem] rounded-md text-sm uppercase tracking-wider border border-[#5DADE2] bg-[#5DADE2] text-white shadow-md shadow-[#5DADE2]/30 hover:bg-[#4A93CB] hover:shadow-lg hover:shadow-[#5DADE2]/50"
              onClick={() => window.location.href='./#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container" className="flex justify-center mt-6 gap-5">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn profile"
              className="icon h-8 cursor-pointer filter-none transition-transform duration-200 ease-in-out hover:translate-y-[-3px] hover:brightness-[1.5] hover:sepia hover:hue-rotate-[180deg] hover:saturate-[1500%]"
              onClick={() => window.location.href='https://www.linkedin.com/in/antonyhysonseltran'}
            />
            <img
              src="./assets/email.png"
              alt="Email"
              className="icon h-8 cursor-pointer filter-none transition-transform duration-200 ease-in-out hover:translate-y-[-3px] hover:brightness-[1.5] hover:sepia hover:hue-rotate-[180deg] hover:saturate-[1500%]"
              onClick={() => window.location.href='mailto:work.antonyhyson@gmail.com'}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col items-center justify-center px-4 w-full pb-[8vh] pt-16">
        <p className="text-black text-base">Uncover More About</p>
        <h1 className="text-4xl font-extrabold text-[#5DADE2] mb-8">My Expertise</h1>
        <div className="flex flex-wrap justify-center items-start w-full gap-6">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-wrap justify-center gap-6 mb-8 mt-8">
              <div className="details-container p-6 bg-white rounded-md border border-gray-200 text-black text-center shadow-md min-w-[280px] flex-1">
                <img src="./assets/experience.png" alt="Experience icon" className="icon mx-auto mb-2 h-6 filter-none" />
                <h3 className="text-[#5DADE2] mb-2 text-lg">Experience</h3>
                <p className="text-black text-base">2+ years<br />Cyber Security & IT</p>
              </div>
              <div className="details-container p-6 bg-white rounded-md border border-gray-200 text-black text-center shadow-md min-w-[280px] flex-1">
                <img src="./assets/education.png" alt="Education icon" className="icon mx-auto mb-2 h-6 filter-none" />
                <h3 className="text-[#5DADE2] mb-2 text-lg">Education</h3>
                <p className="text-black text-base">MSc Cyber Security Analytics<br />BE Computer Science Eng.</p>
              </div>
            </div>
            <div className="text-container p-8 text-justify max-w-[1100px] mx-auto my-4 text-black bg-transparent rounded-lg">
              <p>
                As a recent MSc Cyber Security Analytics graduate and freelance Cybersecurity Consultant, I empower small businesses and individuals with robust security solutions through expertise in vulnerability management, SIEM analysis, and incident response. My expertise spans troubleshooting, system administration (Windows/Linux), endpoint management (EDR solutions), security updates, and cybersecurity awareness training, including risk assessment and network traffic analysis. Leveraging my Computer Science Engineering background, I blend technical proficiency with a strong analytical mindset, honed through in-depth data analysis during my Master's studies. Additionally, I bring proven leadership skills, having successfully led multiple projects to completion. Passionate about continuous learning, I stay ahead of the curve in the ever-evolving cybersecurity landscape, utilizing tools like Nessus and OpenVAS.
              </p>
            </div>
          </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow absolute right-4 bottom-10 filter-none transition-transform duration-200 ease-in-out hover:translate-y-1 hover:brightness-[1.5] hover:sepia hover:hue-rotate-[200deg] hover:saturate-[1500%]" onClick={() => window.location.href='./#experience'} />
      </section>

      {/* Experience Section */}
      <section id="experience" className="flex flex-col items-center justify-center px-4 w-full mb-[10vh] pb-[8vh] pt-16">
        <p className="text-black text-base">Explore My</p>
        <h1 className="text-4xl font-extrabold text-[#5DADE2] mb-8">Professional Journey</h1>
        <div className="flex flex-col items-center w-full gap-10">
          <div className="details-container p-8 bg-white rounded-md border border-gray-200 shadow-md w-full max-w-[900px] mx-auto">
            <h2 className="text-[#5DADE2] font-semibold text-xl mb-6 text-center uppercase">Cybersecurity Experience</h2>
            <div className="relative overflow-x-hidden w-full pl-5 pr-5 py-4">
              <div ref={cyberExpRef} className="flex flex-nowrap gap-6 px-5 scroll-smooth snap-x snap-mandatory overflow-x-auto custom-scrollbar">
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">CE/CE+ Compliance Consultant</h3>
                    <p className="text-black text-base">Risk Crew</p>
                    <p className="text-black text-base">June 2025 - Present (1 month)</p>
                    <p className="text-black text-base">London Area, United Kingdom</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Cyber Security Consultant (Freelance)</h3>
                    <p className="text-black text-base">August 2023 - May 2025 (1 year 10 months)</p>
                    <p className="text-black text-base">London Area, United Kingdom</p>
                    <p className="text-black text-base">Performed comprehensive risk assessments on 150+ applications, reducing security incidents by 40% and strengthening data protection for over 1,000 users. I also created and implemented security awareness training programs for 200+ employees, resulting in a 60% improvement in compliance metrics.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Student Intern</h3>
                    <p className="text-black text-base">CyberHakz Pvt-Ltd</p>
                    <p className="text-black text-base">March 2022 - March 2022 (1 month)</p>
                    <p className="text-black text-base">Chennai, Tamil Nadu, India</p>
                    <p className="text-black text-base">Facilitated incident response for over 50 cyber threats with a 95% protocol adherence rate, minimizing system downtime. I engineered an EXIF metadata analysis tool which reduced investigation time by 60%, optimizing technical workflows.</p>
                  </div>
                </article>
              </div>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg left-0" onClick={() => scrollSlider(cyberExpRef, -1)}>&#9664;</button>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg right-0" onClick={() => scrollSlider(cyberExpRef, 1)}>&#9654;</button>
            </div>
          </div>

          <div className="details-container p-8 bg-white rounded-md border border-gray-200 shadow-md w-full max-w-[900px] mx-auto">
            <h2 className="text-[#5DADE2] font-semibold text-xl mb-6 text-center uppercase">Other Experience</h2>
            <div className="relative overflow-x-hidden w-full pl-5 pr-5 py-4">
              <div ref={otherExpRef} className="flex flex-nowrap gap-6 px-5 scroll-smooth snap-x snap-mandatory overflow-x-auto custom-scrollbar">
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Front of House</h3>
                    <p className="text-black text-base">The George Public House</p>
                    <p className="text-black text-base">October 2024 - Present</p>
                    <p className="text-black text-base">Greater London, England, United Kingdom</p>
                    <p className="text-black text-base">I quickly progressed into management by demonstrating strong adaptability and work ethic, consistently acquiring new skills in a fast-paced technical environment. I enhanced multitasking, interpersonal, and customer engagement abilities, effectively conveying complex concepts and building professional relationships.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Food Runner</h3>
                    <p className="text-black text-base">The George Public House</p>
                    <p className="text-black text-base">January 2025 - May 2025 (4 months)</p>
                    <p className="text-black text-base">Greater London, England, United Kingdom</p>
                    <p className="text-black text-base">During my tenure as a Food Runner, I consistently demonstrated effective communication and strong team collaboration to ensure smooth service operations.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Freelance Photographer</h3>
                    <p className="text-black text-base">March 2019 - May 2025 (6 years 3 months)</p>
                    <p className="text-black text-base">London Area, United Kingdom</p>
                    <p className="text-black text-base">As a Freelance Photographer, I developed and honed my creative and technical skills by capturing diverse subjects and delivering high-quality visual content to clients.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Student Brand Ambassador</h3>
                    <p className="text-black text-base">Amber</p>
                    <p className="text-black text-base">August 2023 - April 2025 (1 year 10 months)</p>
                    <p className="text-black text-base">Newark, Delaware, United States</p>
                    <p className="text-black text-base">I increased brand awareness and engagement through strategic outreach and social media campaigns, significantly contributing to impactful marketing initiatives and guiding teams effectively.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Team Member</h3>
                    <p className="text-black text-base">Popeyes Louisiana Chicken UK</p>
                    <p className="text-black text-base">April 2024 - August 2024 (5 months)</p>
                    <p className="text-black text-base">Exeter, England, United Kingdom</p>
                    <p className="text-black text-base">As a Team Member, I efficiently handled customer orders and maintained operational standards in a fast-paced food service environment.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Sales Partner</h3>
                    <p className="text-black text-base">John Lewis & Partners</p>
                    <p className="text-black text-base">November 2023 - January 2024 (3 months)</p>
                    <p className="text-black text-base">Exeter, England, United Kingdom</p>
                    <p className="text-black text-base">I drove a 20% increase in holiday sales by executing tailored strategies and streamlined inventory, while also boosting customer satisfaction and average transaction value by 15% through personalized product recommendations.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Experience icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Photographer</h3>
                    <p className="text-black text-base">Sportifying India</p>
                    <p className="text-black text-base">August 2022 - January 2023 (6 months)</p>
                    <p className="text-black text-base">Chennai, Tamil Nadu, India</p>
                    <p className="text-black text-base">In this role, I captured high-quality sports event photography, contributing to the visual content strategy of Sportifying India.</p>
                  </div>
                </article>
              </div>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg left-0" onClick={() => scrollSlider(otherExpRef, -1)}>&#9664;</button>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg right-0" onClick={() => scrollSlider(otherExpRef, 1)}>&#9654;</button>
            </div>
          </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow absolute right-4 bottom-10 filter-none transition-transform duration-200 ease-in-out hover:translate-y-1 hover:brightness-[1.5] hover:sepia hover:hue-rotate-[200deg] hover:saturate-[1500%]" onClick={() => window.location.href='./#certifications'} />
      </section>

      {/* Certifications & Publications Section */}
      <section id="certifications" className="flex flex-col items-center justify-center px-4 w-full pt-16 mb-[10vh] pb-[8vh]">
        <p className="text-black text-base">Showcasing My</p>
        <h1 className="text-4xl font-extrabold text-[#5DADE2] mb-8">Certifications & Publications</h1>
        <div className="flex flex-col items-center w-full gap-10">
          <div className="details-container p-8 bg-white rounded-md border border-gray-200 shadow-md w-full max-w-[900px] mx-auto">
            <h2 className="text-[#5DADE2] font-semibold text-xl mb-6 text-center uppercase">Certifications</h2>
            <div className="relative overflow-x-hidden w-full pl-5 pr-5 py-4">
              <div ref={certsRef} className="flex flex-nowrap gap-6 px-5 scroll-smooth snap-x snap-mandatory overflow-x-auto custom-scrollbar">
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://www.linkedin.com/learning/certificates/4c65b17075c417b759027191d1b4c0e2cf6d6dfca6c5b58c9dad28fe1f14f8fa" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>IT Security Foundations: Core Concepts</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AIG/2ZFnEGEDKTQMtEv9C_AIG_Rutzxrr6ffsPHgCiZ_1728608131713_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>AIG - Shields Up: Cybersecurity Job Simulation</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Datacom/yTszJTvkHFBH6zAn3_Datacom_Rutzxrr6ffsPHgCiZ_1728987765420_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Datacom - Cybersecurity Job Simulation</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_JPMorgan%20Chase_Rutzxrr6ffsPHgCiZ_1728833784857_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>JPMorgan Chase - Investment Banking Job Simulation</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_Rutzxrr6ffsPHgCiZ_1728471957483_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Mastercard - Cybersecurity Job Simulation</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20US/4KqDALSkyRNPXjQGa_PwC%20US_Rutzxrr6ffsPHgCiZ_1729007473906_completion_certificate.pdf" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>PwC US - Cyber Security Consulting Job Simulation</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://www.credly.com/badges/8c1929ac-b717-42bb-b58f-cf66bdced614/public_url" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>CISCO Ethical Hacker</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://education.securiti.ai/verification/12D37487D-12D3723C4-127132B25/?swcfpc=1" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>AI Governance Certification</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://www.credly.com/badges/57a406f1-6344-4707-b31a-9a81bb9c6f9c/public_url" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Introduction to Cybersecurity (Cisco)</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://www.credly.com/badges/2137c778-a307-4c50-a258-c24cc14dd698/public_url" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Networking Basics (Cisco)</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://education.securiti.ai/verification/12741671D-1274056D4-127132B25/?swcfpc=1" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>PrivacyOps Certification</a></h3>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Certification icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg">Official ISC2 CC Online Self-Paced Training-1M</h3>
                  </div>
                </article>
              </div>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg left-0" onClick={() => scrollSlider(certsRef, -1)}>&#9664;</button>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg right-0" onClick={() => scrollSlider(certsRef, 1)}>&#9654;</button>
            </div>
          </div>

          <div className="details-container p-8 bg-white rounded-md border border-gray-200 shadow-md w-full max-w-[900px] mx-auto">
            <h2 className="text-[#5DADE2] font-semibold text-xl mb-6 text-center uppercase">Publications</h2>
            <div className="relative overflow-x-hidden w-full pl-5 pr-5 py-4">
              <div ref={certsRef} className="flex flex-nowrap gap-6 px-5 scroll-smooth snap-x snap-mandatory overflow-x-auto custom-scrollbar">
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/checkmark.png" alt="Publication icon" className={`${iconBaseClasses}`} />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://ijsart.com/product-availability-checker-63834" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>PRODUCT AVAILABILITY CHECKER</a></h3>
                  </div>
                </article>
              </div>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg right-0" onClick={() => scrollSlider(certsRef, 1)}>&#9654;</button>
            </div>
          </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow absolute right-4 bottom-10 filter-none transition-transform duration-200 ease-in-out hover:translate-y-1 hover:brightness-[1.5] hover:sepia hover:hue-rotate-[200deg] hover:saturate-[1500%]" onClick={() => window.location.href='./#projects'} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col items-center justify-center px-4 w-full pt-16 mb-[10vh] pb-[8vh]">
        <p className="text-black text-base">Discover My</p>
        <h1 className="text-4xl font-extrabold text-[#5DADE2] mb-8">Innovations</h1>
        <div className="flex flex-col items-center w-full gap-10">
          <div className="details-container p-8 bg-white rounded-md border border-gray-200 shadow-md w-full max-w-[900px] mx-auto">
            <h2 className="text-[#5DADE2] font-semibold text-xl mb-6 text-center uppercase">Key Projects</h2>
            <div className="relative overflow-x-hidden w-full pl-5 pr-5 py-4">
              <div ref={projectsRef} className="flex flex-nowrap gap-6 px-5 scroll-smooth snap-x snap-mandatory overflow-x-auto custom-scrollbar">
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/PAC.png" alt="Product Availability Checker" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/PRODUCT-AVAILABILITY-CHECKER.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>PRODUCT AVAILABILITY CHECKER</a></h3>
                    <p className="text-black text-base">Developed a hybrid mobile app which improved user engagement by 30% with cross-platform compatibility and received 95% positive feedback, enhancing inventory workflows for retailers.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/NADS.png" alt="Network Anomaly Detection System" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/Development-of-a-Network-Anomaly-Detection-System-for-Enhanced-Cybersecurity.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Network Anomaly Detection System</a></h3>
                    <p className="text-black text-base">Developed and evaluated a novel network anomaly detection system using machine learning models (Random Forest, MLP, XGBoost) to effectively detect diverse cyber threats across multiple benchmark datasets, achieving high accuracy and generalization.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/solana.png" alt="Solana Blockchain Voting Protocol" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/Basic-Voting-System-Using-Blockchain.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Solana Blockchain Voting Protocol</a></h3>
                    <p className="text-black text-base">Coordinated a mini project on Solana Blockchain Voting, achieving over 1000 transactions per second and designing a secure, decentralized voting protocol with a 3-member team.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/EXIF.png" alt="EXIF Metadata Analysis Tool" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/EXIFTOOL.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>EXIF Metadata Analysis Tool</a></h3>
                    <p className="text-black text-base">Developed an EXIF metadata analysis tool to efficiently extract and analyze metadata from image files, streamlining forensic investigations and data analysis processes.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/ROT13.png" alt="Decrypting Caesar Cipher - Rot13" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/DecryptingCaesarCipher-Rot13.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Decrypting Caesar Cipher - Rot13</a></h3>
                    <p className="text-black text-base">Implemented a Python-based tool for decrypting Caesar Cipher and ROT13 encrypted messages, demonstrating foundational cryptographic understanding.</p>
                  </div>
                </article>
                <article className={`${articleBaseClasses} w-[450px] min-w-[380px] snap-start`}>
                  <img src="./assets/projects/Keylogger.png" alt="Keylogger Application" className="w-[90%] h-auto object-cover mb-4 rounded-md border-none" />
                  <div>
                    <h3 className="text-black mb-1 text-lg"><a href="https://github.com/Antonyhyson/Keylogger.git" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline transition-colors duration-300 ease-in-out group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>Keylogger Application</a></h3>
                    <p className="text-black text-base">Created a basic keylogger application for educational purposes, showcasing understanding of system interaction and data capture techniques in cybersecurity.</p>
                  </div>
                </article>
              </div>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg left-0" onClick={() => scrollSlider(projectsRef, -1)}>&#9664;</button>
              <button className="slider-nav-btn absolute top-1/2 -translate-y-1/2 bg-white rounded-full border border-gray-200 w-11 h-11 flex items-center justify-center cursor-pointer z-10 text-3xl text-black shadow-md transition-all duration-300 ease-in-out hover:bg-[#5DADE2] hover:text-white hover:shadow-lg right-0" onClick={() => scrollSlider(projectsRef, 1)}>&#9654;</button>
            </div>
          </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" className="icon arrow absolute right-4 bottom-10 filter-none transition-transform duration-200 ease-in-out hover:translate-y-1 hover:brightness-[1.5] hover:sepia hover:hue-rotate-[200deg] hover:saturate-[1500%]" onClick={() => window.location.href='./#contact'} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center justify-center px-4 w-full pt-16 min-h-[50vh] pb-[8vh]">
        <h1 className="text-4xl font-extrabold text-[#5DADE2] mb-8">Connect with Me</h1>
        <div className="flex flex-wrap justify-center rounded-md border border-gray-200 bg-white p-6 shadow-lg gap-6 w-full max-w-[900px] mx-auto">
          <div className="flex items-center justify-center gap-3 my-2 md:my-0 md:mx-4">
            <img src="./assets/email.png" alt="Email icon" className="icon h-8 cursor-default filter-none" />
            <p className="text-base text-black"><a href="mailto:work.antonyhyson@gmail.com" className="text-black hover:text-[#5DADE2] no-underline relative pb-0.5 group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>work.antonyhyson@gmail.com</a></p>
          </div>
          <div className="flex items-center justify-center gap-3 my-2 md:my-0 md:mx-4">
            <img src="./assets/linkedin.png" alt="LinkedIn icon" className="icon h-6 cursor-default filter-none" />
            <p className="text-base text-black"><a href="https://www.linkedin.com/in/antonyhysonseltran" target="_blank" rel="noopener noreferrer" className="text-black hover:text-[#5DADE2] no-underline relative pb-0.5 group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>LinkedIn</a></p>
          </div>
          <div className="flex items-center justify-center gap-3 my-2 md:my-0 md:mx-4">
            <img src="./assets/phone.png" alt="Phone icon" className="icon h-6 cursor-default filter-none" />
            <p className="text-base text-black"><a href="tel:+447587668038" className="text-black hover:text-[#5DADE2] no-underline relative pb-0.5 group"><span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5DADE2] transition-all duration-300 ease-in-out group-hover:w-full"></span>+44 7587668038</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="h-[8vh] border-t border-gray-200 px-4 py-4 text-center">
        <p className="text-xs text-black m-0">Copyright &#169; 2024 Antony Hyson Seltran. All Rights Reserved.</p>
      </footer>

      {/* This is a custom style for the scrollbar, as Tailwind doesn't directly support styling it */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            background-color: #f1f1f1;
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #555;
          }

          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #888 #f1f1f1;
          }
        `}
      </style>
    </div>
  );
};

export default App;
