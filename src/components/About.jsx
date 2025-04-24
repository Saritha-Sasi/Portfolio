import React from 'react'

const About = () => {

  const handleHire = (e) => {
    e.preventDefault();

    const element = e.target; // This is the element that was clicked
    const sectionIndex = element.getAttribute("data-section-index");

    showSection(element);
    updateNav(element);
    removeBackSection();
    addBackSection(sectionIndex);
  };

  // Function to remove the "back-section" class
  const removeBackSection = () => {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach((section) => section.classList.remove('back-section'));
  };

  // Function to add the "back-section" class to a specific section
  const addBackSection = (index) => {
    const allSections = document.querySelectorAll('.section');
    if (allSections[index]) {
      allSections[index].classList.add('back-section');
    }
  };

  // Function to display a specific section based on the clicked element
  const showSection = (element) => {
    const allSections = document.querySelectorAll('.section');
    allSections.forEach((section) => section.classList.remove('active'));

    const target = element.getAttribute('href').split('#')[1];
    document.querySelector(`#${target}`).classList.add('active');
  };


  return (
    <>
      <div className="main-content">
        <section className="about section " id="about">
          <div className="container">
            <div className="row">
              <div className="section-title padd-15">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="about-content padd-15">
                <div className="row">
                  <div className="about-text padd-15">
                    <h3>I'm Saritha, a <span>Frontend Developer</span></h3>
                    <p>Motivated and creative Frontend Developer with 5 years of experience in
                      building responsive and interactive web applications. Proficient in modern
                      front-end technologies and passionate about delivering seamless user
                      experiences through clean and efficient code.
                    </p>
                  </div>
                </div>

                <div className="row"> 
                  <div className="skills padd-15">
                  <h3 className="title">Tech Stack & Skills</h3>
                    <div className="row">
                      <div className="skill-item padd-15">
                        <h5>HTML</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "95%" }}></div>
                          <div className="skill-percent">95%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>CSS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "90%" }}></div>
                          <div className="skill-percent">90%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>JS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "85%" }}></div>
                          <div className="skill-percent">85%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>SAAS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "76%" }}></div>
                          <div className="skill-percent">76%</div>
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Bootstrap</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5> Tailwind CSS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Material UI</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "90%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>REACT</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>NODE</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>EXPRESS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>MONGO DB</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>WORDPRESS</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>WIX</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Adobe Photoshop</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Figma</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>CANVA</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                         
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>GIT</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                          
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>Elemnetor</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                          
                        </div>
                               <div className="skill-item padd-15">
                        <h5>WEBFLOW</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                          
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>SHOPIFY</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                          
                        </div>
                      </div>
                      <div className="skill-item padd-15">
                        <h5>APPFORM</h5>
                        <div className="progress">
                          <div className="progress-in" style={{ width: "94%" }}></div>
                          
                        </div>
                      </div>
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="buttons padd-15">
                        <a href="#contact" data-section-index="1" className="btn hire-me" onClick={handleHire}> Hire Me</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="education padd-15">
                    <h3 className="title">Education</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2014
                            </h3>
                            <h4 className="timeline-title">B.tech</h4>
                            <p className="timeline-text">
                            Bachelor of Engineering - Computer Science, Kerala University
                            </p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2009
                            </h3>
                            <h4 className="timeline-title">Diploma</h4>
                            <p className="timeline-text">
                            Diploma in Engineering - Computer Science, Kerala University</p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2006
                            </h3>
                            <h4 className="timeline-title">Plus Two</h4>
                            <p className="timeline-text">
                              Higher Secondary</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="experience padd-15">
                    <h3 className="title">Experience</h3>
                    <div className="row">
                      <div className="timeline-box padd-15">
                        <div className="timeline shadow-dark">
                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2022-Current
                            </h3>
                            <h4 className="timeline-title">Sr.UI Developer, Claysys Technologies</h4>
                            <p className="timeline-text">
                              Developed and optimized responsive app forms, ensuring seamless functionality across various
                              devices and screen sizes, Translated complex Figma designs into pixel-perfect web pages, adhering to brand guidelines
                              and modern web standards.</p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2019-2022
                            </h3>
                            <h4 className="timeline-title">Team Lead & Web Designer, Azym technologies</h4>
                            <p className="timeline-text">
                              Designed and developed visually appealing websites for clients, focusing on responsiveness
                              and user engagement, Designed visually appealing ads and posters for Facebook and other social platforms,
                              increasing brand engagement using Adobe Photoshop, Designed and Developed e-commerce websites and landing pages,
                              Collaborated with marketing teams to align designs with brand guidelines and campaign goals. </p>
                          </div>

                          <div className="timeline-item">
                            <div className="circle-dot"></div>
                            <h3 className="timeline-date">
                              <i className="fa fa-calendar"></i>2015-2019
                            </h3>
                            <h4 className="timeline-title">Freelance Web Designer</h4>
                            <p className="timeline-text">
                              Translated PSD designs into high-quality, pixel-perfect, and responsive HTML/CSS code,
                              Created engaging and conversion-focused landing pages using HTML, CSS, JavaScript & Wordpress.
                              Facebook Ads and Social Media Creatives,
                              UI Design for Mobile Apps,
                              Developed responsive websites using Bootstrap, ensuring seamless user experiences across
                              devices. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About

