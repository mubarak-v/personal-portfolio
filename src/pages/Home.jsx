import React, { useEffect } from "react";
import 'jquery.ripples';
import $ from 'jquery';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import socialLinksData from '../data/socialLinks.json';
import personalData from '../data/personalDetails.json';
import portfolioData from '../data/portfolioDetails.json'
import service from '../data/services.json'
import education from '../data/qualifications.json'
import skills from '../data/skills.json'
import heroImg from "../assets/img/personal/husni_mubarak_3.png";
import experience from '../data/experience.json'
import logo from "../assets/img/logo/husni_mubarak_logo_3.png";
import aboutImg from "../assets/img/personal/husni_mubarak_4.png";
import resumeIcon1 from "../assets/img/icon/resume-icon1.png";
import resumeIcon2 from "../assets/img/icon/resume-icon2.png";
import cv from "/assets/cv/Husni-Mubarak-V.pdf"
// main.jsx or App.jsx
import '../assets/css/style.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/fontawesome.css';
import '../assets/css/animate.css';
import '../assets/css/slick.css';
import '../assets/css/lightgallery.min.css';

// You can also import SCSS if sass is installed
import '../assets/sass/style.scss'; // This should @use all other scss partials

export const Home = () => {
  

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("button is working");




    // Send to YOU (receiver mail)
    emailjs.sendForm(
      'service_673aoax',
      'template_yg7vkuf',        // ✅ This is your existing auto-reply template
      form.current,
      'OP5e_ufdh-BGjw_Nw'
    ).then(() => {
      if (typeof e.target.name.value !== 'undefined') {
        alert(`✅ Message sent successfully! \n\nThank you for contacting me ${e.target.name.value}. I will get back to you as soon as possible!`);
      } else {
        alert(`✅ Message sent successfully! \n\nThank you for contacting me. I will get back to you as soon as possible!`);
      }
      e.target.reset();
    }).catch((error) => {
      console.error("Auto-reply error:", error);
    });
  };


  useEffect(() => {
    // Initialize jQuery and jQuery UI after component mounts
    if (window.$ && window.$.fn) {
      // Initialize jQuery UI components here
      // Example: $(".your-selector").yourJQueryUIComponent();

      // If you have specific jQuery UI components to initialize, add them here
      $(document).ready(function () {
        $(".datepicker").datepicker();
        $(".sortable").sortable();
      });

      // Initialize WOW.js if available
      if (window.WOW) {
        new window.WOW().init();
      }

      // Initialize ripple effect
      $('.st-ripple-version').ripples({
        resolution: 512,
        dropRadius: 20,
        perturbance: 0.04,
      });
    }
  }, []);
  return (

    <>




      <head>



      </head>

      <div id="home">
        <header className="st-site-header st-style1 st-sticky-header">
          <div className="st-main-header">
            <div className="container">
              <div className="st-main-header-in">
                <div className="st-main-header-left">
                  <a className="st-site-branding" href="index.html"><img src={logo} alt="husni mubarak" /></a>
                </div>
                <div className="st-main-header-right">
                  <div className="st-nav">
                    <ul className="st-nav-list st-onepage-nav">
                      <li><a href="#home" className="st-smooth-move">Home</a></li>
                      <li><a href="#about" className="st-smooth-move">About</a></li>
                      <li><a href="#resume" className="st-smooth-move">Resume</a></li>
                      <li><a href="#portfolio" className="st-smooth-move">Portfolio</a></li>
                      <li>
                        <a href="#blog" className="st-smooth-move"
                           title="Coming soon..."
                           data-tooltip="Coming soon...">
                          Blog
                        </a>
                      </li>
                      <li><a href="#contact" className="st-smooth-move">Contact</a></li>
                    </ul>
                    <div className="sp-phone">
                      <svg viewBox="0 0 513.64 513.64">
                        <g>
                          <g>
                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                          </g>
                        </g>
                      </svg>
                     <a href={personalData.phone} className="sp-phone-no">{personalData.phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="st-height-b80 st-height-lg-b80"></div>
        <section className="st-hero-wrap st-parallax">
          <div className="st-hero st-style1 st-ripple-version">
            <div className="container">
              <div className="st-hero-text">
                <h3>Hello, I’m</h3>
                <h1> {personalData.firstname} <br /> {personalData.lastname}
                </h1>
                <h2>{personalData.profession} </h2>
                <div className="st-hero-btn">
                  <a href="#contact" className="st-btn st-style1 st-color1 st-smooth-move">Hire me</a>
                </div>
              </div>
            </div>
          </div>

          <div className="st-hero-img st-to-right">
            <img className="wow fadeInRight" src={heroImg} alt="Hero" />

            <div className="st-social-group wow fadeInLeft">
              <div className="st-social-link">
                {socialLinksData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`st-social-btn ${link.active ? 'active' : ''}`}
                  >
                    <span className="st-social-icon">
                      <i className={link.iconClass}></i>
                    </span>
                    <span className="st-icon-name">{link.name}</span>
                  </a>
                ))}



              </div>
            </div>
          </div>
          <div id="particles-js"></div>
        </section>
        {/* <!-- End Hero Seciton -->

  <!-- Start About Seciton --> */}
        <section id="about" className="st-about-wrap">
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">ABOUT ME</h4>
              <h2 className="st-section-heading-subtitle">ABOUT ME</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 wow fadeInLeft">
                <div className="st-about-img-wrap">
                  <div className="st-about-img st-dynamic-bg st-bg" style={{ backgroundImage: `url(${aboutImg})` }}></div>
                </div>
                <div className="st-height-b0 st-height-lg-b30"></div>
              </div>
              <div className="col-lg-6">
                <div className="st-vertical-middle">
                  <div className="st-vertical-middle-in">
                    <div className="st-text-block st-style1">
                      <h2 className="st-text-block-title">Hi There! I'm {personalData.firstname} {personalData.lastname} </h2>
                      <h4 className="st-text-block-subtitle">{personalData.profession}</h4>
                      <div className="st-text-block-text">
                        <p>{personalData.Discription}</p>
                      </div>
                      <ul className="st-text-block-details st-mp0">
                        <li><span>Birthday</span> : <span>{personalData.Birthday}</span></li>
                        <li><span>Phone</span> : <span>{personalData.phone}</span></li>
                        <li><span>Email</span> : <span>{personalData.email}</span></li>
                        <li><span>Language</span> : <span>{personalData.Language}</span></li>
                      </ul>
                      <div className="st-text-block-btn">
                        <a href={cv} download className="st-btn st-style1 st-color1">Download CV</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Seciton -->

  <!-- Start Service Seciton --> */}
        <section>
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">SERVICES</h4>
              <h2 className="st-section-heading-subtitle">SERVICES</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>

          {/* <!-- Iconbox Container --> */}

          <div className="container">
            <div className="row">

              {
                service.map((service, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div style={{ minHeight: "360px" }} className="st-iconbox st-style1">
                      <div className="st-iconbox-icon" dangerouslySetInnerHTML={{ __html: service.icon }}>

                      </div>
                      <h2 className="st-iconbox-title"> {service.title} </h2>
                      <div className="st-iconbox-text"> {service.description} </div>
                    </div>
                    <div className="st-height-b30 st-height-lg-b30"></div>
                  </div>
                )
                )



              }

            </div>
          </div>
          <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
        {/* <!-- End Service Seciton -->

  <!-- Start Skill Seciton --> */}
        <section className="st-dark-bg">
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">MY SKILLS</h4>
              <h2 className="st-section-heading-subtitle">MY SKILLS</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="st-skill-wrap">
                  <div className="st-skill-heading">
                    <h2 className="st-skill-title">{personalData.skillsHeading}</h2>
                    <div className="st-skill-subtitle"> {personalData.skillsDescription.paragraph1} <br /><br />
                      {personalData.skillsDescription.paragraph2}
                    </div>
                  </div>
                  {/* <!-- .st-skill-heading --> */}
                </div>
              </div>

              {/* <!-- Progressbar --> */}

              <div className="col-lg-6">
                <div className="st-height-b0 st-height-lg-b30"></div>
                <div className="st-progressbar-wrap">




                  {skills.skills.map((skill, index) => (
                    <>    <div key={index} className="st-height-b30 st-height-lg-b20"></div>
                      <div className="st-single-progressbar">
                        <div className="st-progressbar-heading">
                          <h3 className="st-progressbar-title">{skill.name}   </h3>
                          <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s"> {skill.proficiency}% </div>
                        </div>
                        <div className="st-progressbar" data-progress={skill.proficiency}>
                          <div className="st-progressbar-in" style={{ width: `${skill.proficiency}%` }}></div>
                        </div>
                      </div>
                    </>

                  ))}





                  {/* <!-- .st-single-progressbar --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Skill Seciton --> */}

        {/* <!-- Start Resume Seciton --> */}
        <section id="resume" className="st-dark-bg">
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">RESUME</h4>
              <h2 className="st-section-heading-subtitle">RESUME</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>
          <div className="container">
            <div className="row">
              {/* <!-- Experience --> */}
              <div className="col-lg-6">
                <div className="st-resume-wrap">
                  <div className="st-resume-heading">
                    <img src={resumeIcon1} alt="resume-icon" />
                    <h2 className="st-resume-heading-title">Experience</h2>
                  </div>

                  <div className="st-height-b50 st-height-lg-b30"></div>

                  <div className="st-resume-timeline-wrap">


                    {

                      experience.experience.map((item, index) => (
                        <>
                          {index !== 0 && <div className="st-height-b50 st-height-lg-b30"></div>}
                          <div key={index} className="st-resume-timeline">
                            <h3 className="st-resume-timeline-title">{item.role}</h3>
                            <div className="st-resume-timeline-duration">{item.year}</div>
                            <a href={item.website} target="_blank" rel="noopener noreferrer" style={{ contain: item.company }} className="animated-link">
                              <h4 className="st-resume-timeline-subtitle animated-link">{item.company}</h4>
                            </a>

                            <div className="st-resume-timeline-text">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </>
                      ))
                    }





                  </div>
                </div>
              </div>

              {/* <!-- Education --> */}
              <div className="col-lg-6">

                <div className="st-height-b0 st-height-lg-b50"></div>
                <div className="st-resume-wrap">
                  <div className="st-resume-heading">
                    <img src={resumeIcon2} alt="resume-icon" />
                    <h2 className="st-resume-heading-title">Education</h2>
                  </div>



                  <div className="st-height-b50 st-height-lg-b30"></div>

                  <div className="st-resume-timeline-wrap">

                    {
                      education.education.map((item, index) => (
                        <>
                          {index !== 0 && <div className="st-height-b50 st-height-lg-b30"></div>}
                          <div key={index} className="st-resume-timeline">
                            <h3 className="st-resume-timeline-title">{item.degree}</h3>
                            <div className="st-resume-timeline-duration">{item.year}</div>
                            <h4 className="st-resume-timeline-subtitle">{item.institution}</h4>
                            <div className="st-resume-timeline-text">
                              <p>{item.description}</p>
                            </div>
                          </div>

                        </>
                      ))
                    }


                
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
        {/* <!-- End Resume Seciton -->

  <!-- Start Portfolio Seciton --> */}
        <section id="portfolio">
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">PORTFOLIOS</h4>
              <h2 className="st-section-heading-subtitle">PORTFOLIOS</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>


          <div className="container">
            <div className="row">


              {portfolioData.projects.map((item, index) => (
                <>
                  <div className="col-lg-4 col-md-6">
                    <div className="st-portfolio-single st-style1 st-lightgallery">
                      <div className="st-portfolio-item">
                        <a href={item.github} className="st-portfolio st-zoom st-lightbox-item">
                          <div className="st-portfolio-img st-zoom-in">
                            <img src={`/assets/img/project_cover_photo/${item.cover}`} alt={item.title} />
                          </div>
                          <div className="st-portfolio-item-hover">
                            <i className="fas fa-plus-circle"></i>
                            <h5>{item.title}</h5>
                            <p>{item.technologies.join(', ')}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ))

              }







              {portfolioData.projects.length > 6 && (
                <div className="col-lg-12 text-center">
                  <div className="st-portfolio-btn">
                    <a href="#" className="st-btn st-style1 st-color1">Load More</a>
                  </div>
                </div>


              )}



            </div>
          </div>
          <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
        {/* <!-- End Portfolio Seciton -->


  {/* <!-- End Review Seciton -->

  <!-- Start Blog Seciton --> */}
        {/* <section id="blog">
    <div className="st-height-b100 st-height-lg-b80"></div>
    <div className="container">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">BLOG</h4>
        <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div> */}

        {/* <!-- Latest News Container --> */}

        {/* <div className="container">
      <div className="row st-grid-layout">
        <div className="col-lg-4 col-md-6 st-grid-item">
          <div className="st-post-single st-style1">
            <a href="blog-details.html" className="st-post-thumb st-zoom">
              <img src={blog1} className="img-fluid st-zoom-in" alt="blog1" />
            </a>
            <div className="st-post-info">
              <div className="st-post-date">
                By:
                <a href="blog-details.html" className="st-post-author">Admin</a>
                <span className="st-post-date-divider">|</span>
                <span className="st-post-publish-date">27-09-2020</span>
              </div>
              <h4 className="st-post-title"><a href="blog-details.html">What are the latest trends in Graphic design according to you?</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 st-grid-item">
          <div className="st-post-single st-style1">
            <a href="blog-details.html" className="st-post-thumb st-zoom">
              <img src={blog2} className="img-fluid st-zoom-in" alt="blog2" />
            </a>
            <div className="st-post-info">
              <div className="st-post-date">
                By:
                <a href="blog-details.html" className="st-post-author">Admin</a>
                <span className="st-post-date-divider">|</span>
                <span className="st-post-publish-date">27-09-2020</span>
              </div>
              <h4 className="st-post-title"><a href="blog-details.html">What are the latest trends in Graphic design according to you?</a></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 st-grid-item">
          <div className="st-post-single st-style1">
            <a href="blog-details.html" className="st-post-thumb st-zoom">
              <img src={blog3} className="img-fluid st-zoom-in" alt="blog3" />
            </a>
            <div className="st-post-info">
              <div className="st-post-date">
                By:
                <a href="blog-details.html" className="st-post-author">Admin</a>
                <span className="st-post-date-divider">|</span>
                <span className="st-post-publish-date">27-09-2020</span>
              </div>
              <h4 className="st-post-title"><a href="blog-details.html">What are the latest trends in Graphic design according to you?</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}






        {/* <!-- End Blog Seciton --> */}

        {/* <!-- Start Contact Seciton --> */}
        <section id="contact" className="st-dark-bg">
          <div className="st-height-b100 st-height-lg-b80"></div>
          <div className="container">
            <div className="st-section-heading st-style1">
              <h4 className="st-section-heading-title">CONTACT ME</h4>
              <h2 className="st-section-heading-subtitle">CONTACT ME</h2>
            </div>
            <div className="st-height-b25 st-height-lg-b25"></div>
          </div>

          {/* <!-- Contact Container --> */}

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="st-contact-title">Let’s Talk </h3>
                <div id="st-alert"></div>

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="st-contact-form"
                  id="contact-form"
                >
                  <div className="st-form-field">
                    <input type="text" id="name" name="from_name" placeholder="Your Name" required />
                  </div>
                  <div className="st-form-field">
                    <input type="email" id="email" name="from_email" placeholder="Your Email" required />
                  </div>
                  <div className="st-form-field">
                    <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
                  </div>
                  <div className="st-form-field">
                    <textarea
                      cols="30"
                      rows="10"
                      id="msg"
                      name="message"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit" onClick={sendEmail}>
                    Send message
                  </button>
                </form>
              </div>
              <div className="st-height-b0 st-height-lg-b30"></div>

              <div className="col-lg-6">
                <div className="st-height-b0 st-height-lg-b40"></div>
                <h3 className="st-contact-title">Contact Info</h3>
                <div className="st-contact-text">
                  Feel free to reach out for collaborations, projects, or just to say hello. I'm always open to new opportunities and creative ideas.
                </div>
                <div className="st-contact-info-wrap">
                  <div className="st-single-contact-info">

                    <a href={`mailto:${personalData.email}`}>
                      <i className="fas fa-envelope"></i>
                    </a>

                    <div className="st-single-info-details">
                      <h4>Email</h4>
                      <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                    </div>
                  </div>
                  <div className="st-single-contact-info">
                    <a href={`tel:${personalData.phone}`}>
                      <i className="fas fa-phone-alt"></i>
                    </a>
                    <div className="st-single-info-details">
                      <h4>Phone</h4>
                      <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
                    </div>
                  </div>
                  <div className="st-single-contact-info">
                    <a href={personalData.Location} target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-map-marker-alt"></i>
                    </a>
                    <div className="st-single-info-details">
                      <h4>Address</h4>
                      <a
                        href={personalData.Location}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          {personalData.address.street} <br />
                          {personalData.address.city}, {personalData.address.state} {personalData.address.pincode}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="st-social-info">
                    <div className="st-social-text">Visite my social profile and get connected</div>
                    <div className="st-social-link">
                      {socialLinksData.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          className={`st-social-btn ${link.active ? 'active' : ''}`}
                        >
                          <span className="st-social-icon">
                            <i className={link.iconClass}></i>
                          </span>
                          <span className="st-icon-name">{link.name}</span>
                        </a>
                      ))}

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="st-height-b100 st-height-lg-b80"></div>
        </section>
        {/* <!-- End Contact Seciton --> */}

        {/* <!-- Start Footer Seciton --> */}
        <footer>
          <div className="container">
            <div className="st-copyright-wrap text-center">
              <div className="st-copyright-text">© 2025 Husni Mubarak. Built with  using React & passion.</div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer Seciton --> */}

        {/* <!-- Scripts --> */}

      </div>


    </>
  );
} 