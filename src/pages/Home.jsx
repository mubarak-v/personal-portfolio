import React, { useEffect } from "react";
import 'jquery.ripples';
import socialLinksData from '../data/socialLinks.json';
import personalData from '../data/personalDetails.json';
import service from '../data/services.json'
import skills from '../data/skills.json'
import heroImg from  "../assets/img/section/hero-img.jpg";

import logo from "../assets/img/logo.png";
import aboutImg from "../assets/img/section/about.jpg";
import quote from "../assets/img/icon/quote.png";
import client1 from "../assets/img/client/client1.png";
import client2 from "../assets/img/client/client2.png";
import client3 from "../assets/img/client/client3.png";
import blog1 from "../assets/img/blog/blog1.jpg";
import blog2 from "../assets/img/blog/blog2.jpg";
import blog3 from "../assets/img/blog/blog3.jpg";
import resumeIcon1 from "../assets/img/icon/resume-icon1.png";
import resumeIcon2 from "../assets/img/icon/resume-icon2.png";
import portfolio1 from "../assets/img/portfolio/portfolio1.jpg";
import portfolio2 from "../assets/img/portfolio/portfolio2.jpg";
import portfolio1Lg from "../assets/img/portfolio/portfolio1_lg.jpg";
import portfolio2Lg from "../assets/img/portfolio/portfolio2_lg.jpg";
import portfolio3 from "../assets/img/portfolio/portfolio3.jpg";
import portfolio3Lg from "../assets/img/portfolio/portfolio3_lg.jpg";
import portfolio4 from "../assets/img/portfolio/portfolio4.jpg";
import portfolio4Lg from "../assets/img/portfolio/portfolio4_lg.jpg";
import portfolio5 from "../assets/img/portfolio/portfolio5.jpg";
import portfolio5Lg from "../assets/img/portfolio/portfolio5_lg.jpg";
import portfolio6 from "../assets/img/portfolio/portfolio6.jpg";
import portfolio6Lg from "../assets/img/portfolio/portfolio6_lg.jpg";







export const Home = () => {

  useEffect(() => {
    // Initialize jQuery and jQuery UI after component mounts
    if (window.$ && window.$.fn) {
      // Initialize jQuery UI components here
      // Example: $(".your-selector").yourJQueryUIComponent();
      
      // If you have specific jQuery UI components to initialize, add them here
      $(document).ready(function() {
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
{/* <Helmet>
  <title>Davis - Personal Portfolio</title>
  <link rel="icon" href={favicon} />
</Helmet> */}
{/* <script src="/assets/js/jquery.min.js"></script>
<script src="/assets/js/wow.min.js"></script>
<script src="/assets/js/slick.min.js"></script>
<script src="/assets/js/lightgallery.min.js"></script>
<script src="/assets/js/main.js"></script> */}

 
</head>

<div id="home">
  <header className="st-site-header st-style1 st-sticky-header">
    <div className="st-main-header">
      <div className="container">
        <div className="st-main-header-in">
          <div className="st-main-header-left">
            <a className="st-site-branding" href="index.html"><img src={logo} alt="Davis"/></a>
          </div>
          <div className="st-main-header-right">
            <div className="st-nav">
              <ul className="st-nav-list st-onepage-nav">
                <li><a href="#home" className="st-smooth-move">Home</a></li>
                <li><a href="#about" className="st-smooth-move">About</a></li>
                <li><a href="#resume" className="st-smooth-move">Resume</a></li>
                <li><a href="#portfolio" className="st-smooth-move">Portfolio</a></li>
                <li><a href="#blog" className="st-smooth-move">Blog</a></li>
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
                <div className="sp-phone-no">{personalData.phone}</div>
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
          <h1> {personalData.firstname} <br/> {personalData.lastname}
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
            <div className="st-about-img st-dynamic-bg st-bg" style={{backgroundImage: `url(${aboutImg})`}}></div>
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
                  {/* <li><span>From</span> : <span>2661 Hich meadow lane bear creek</span></li> */}
                  <li><span>Language</span> : <span>{personalData.Language}</span></li>
                  {/* <li><span>Freelance</span> : <span>Available</span></li> */}
                </ul>
                <div className="st-text-block-btn">
                  <a href="#" className="st-btn st-style1 st-color1">Download CV</a>
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
            service.map((service, index)=>(
              <div  key={index} className="col-lg-4 col-md-6">
              <div style={{minHeight:"360px"}} className="st-iconbox st-style1">
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
              <h2 className="st-skill-title">All the skills that I have in that field
                of work are mentioned.</h2>
              <div className="st-skill-subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores. <br /><br />Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                sed diam nonumy eirmod tempor invidunt.
              </div>
            </div>
            {/* <!-- .st-skill-heading --> */}
          </div>
        </div>

        {/* <!-- Progressbar --> */}

        <div className="col-lg-6">
          <div className="st-height-b0 st-height-lg-b30"></div>
          <div className="st-progressbar-wrap">



          
           { skills.skills.map((skill, index)=>(
              <>    <div key={index} className="st-height-b30 st-height-lg-b20"></div>
              <div className="st-single-progressbar">
                <div className="st-progressbar-heading">
                  <h3 className="st-progressbar-title">{skill.name}   </h3>
                  <div className="st-progressbar-percentage wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s"> {skill.proficiency}% </div>
                </div>
                <div className="st-progressbar" data-progress="75">
                  <div className="st-progressbar-in wow fadeInLeft"></div>
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
              <img src={resumeIcon1} alt="resume-icon"/>
              <h2 className="st-resume-heading-title">Experience</h2>
            </div>

            <div className="st-height-b50 st-height-lg-b30"></div>

            <div className="st-resume-timeline-wrap">
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">Senior UX/UI Designer</h3>
                <div className="st-resume-timeline-duration">Jan 2020 - Present</div>
                <h4 className="st-resume-timeline-subtitle">Bergnaum, Hills and Howe</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div> 
              {/* <!-- st-resume-timeline --> */}
              <div className="st-height-b50 st-height-lg-b30"></div>
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">Product Designer</h3>
                <div className="st-resume-timeline-duration">Jan 2016 - December 2019</div>
                <h4 className="st-resume-timeline-subtitle">Langosh, Sipes and Raynor</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div> 
              {/* <!-- st-resume-timeline --> */}
              <div className="st-height-b50 st-height-lg-b30"></div>
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">UI/UX Designer</h3>
                <div className="st-resume-timeline-duration">Jan 2014 - December 2015</div>
                <h4 className="st-resume-timeline-subtitle">Strosin, Maggio and Homenick</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div> 
              {/* <!-- st-resume-timeline --> */}
            </div>
          </div>
        </div>

        {/* <!-- Education --> */}
        <div className="col-lg-6">

          <div className="st-height-b0 st-height-lg-b50"></div>
          <div className="st-resume-wrap">
            <div className="st-resume-heading">
              <img src={resumeIcon2} alt="resume-icon"/>
              <h2 className="st-resume-heading-title">Education</h2>
            </div>
            <div className="st-height-b50 st-height-lg-b30"></div>

            <div className="st-resume-timeline-wrap">
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">Master of Computer Science</h3>
                <div className="st-resume-timeline-duration">2015 - 2016</div>
                <h4 className="st-resume-timeline-subtitle">University of XYZ</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div>
               {/* <!-- st-resume-timeline --> */}
              <div className="st-height-b50 st-height-lg-b30"></div>
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">Bachelor of Computer Science</h3>
                <div className="st-resume-timeline-duration">2010 - 2014</div>
                <h4 className="st-resume-timeline-subtitle">University of ABC</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div> 
              {/* <!-- st-resume-timeline --> */}
              <div className="st-height-b50 st-height-lg-b30"></div>
              <div className="st-resume-timeline">
                <h3 className="st-resume-timeline-title">Diploma in Computer Science</h3>
                <div className="st-resume-timeline-duration">2006 - 2010</div>
                <h4 className="st-resume-timeline-subtitle">XYZ Institution</h4>
                <div className="st-resume-timeline-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                </div>
              </div> 
              {/* <!-- st-resume-timeline --> */}
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
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio1Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio1} alt="portfolio"/>
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio2Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio2} alt="portfolio" />
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio3Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio3} alt="portfolio" />
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio4Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio4} alt="portfolio" />
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio5Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio5} alt="portfolio" />
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="st-portfolio-single st-style1 st-lightgallery">
            <div className="st-portfolio-item">
              <a href={portfolio6Lg} className="st-portfolio st-zoom st-lightbox-item">
                <div className="st-portfolio-img st-zoom-in">
                  <img src={portfolio6} alt="portfolio" />
                </div>
                <div className="st-portfolio-item-hover">
                  <i className="fas fa-plus-circle"></i>
                  <h5>Product Design</h5>
                  <p>Design / Marketing</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <div className="st-portfolio-btn">
            <a href="#" className="st-btn st-style1 st-color1">Load More</a>
          </div>
        </div>
      </div>
    </div>
    <div className="st-height-b100 st-height-lg-b80"></div>
  </section>
  {/* <!-- End Portfolio Seciton -->


  {/* <!-- End Review Seciton -->

  <!-- Start Blog Seciton --> */}
  <section id="blog">
    <div className="st-height-b100 st-height-lg-b80"></div>
    <div className="container">
      <div className="st-section-heading st-style1">
        <h4 className="st-section-heading-title">BLOG</h4>
        <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
      </div>
      <div className="st-height-b25 st-height-lg-b25"></div>
    </div>

    {/* <!-- Latest News Container --> */}

    <div className="container">
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
  </section>






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
          <h3 className="st-contact-title">Just say Hello</h3>
          <div id="st-alert"></div>
          <form action="#" method="POST" className="st-contact-form" id="contact-form">
            <div className="st-form-field">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="st-form-field">
              <input type="text" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="st-form-field">
              <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
            </div>
            <div className="st-form-field">
              <textarea cols="30" rows="10" id="msg" name="msg" placeholder="Your Message" required></textarea>
            </div>
            <button className="st-btn st-style1 st-color1" type="submit" id="submit" name="submit">Send message</button>
          </form>
        </div>
        <div className="st-height-b0 st-height-lg-b30"></div>

        <div className="col-lg-6">
          <div className="st-height-b0 st-height-lg-b40"></div>
          <h3 className="st-contact-title">Contact Info</h3>
          <div className="st-contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed
            suscipit feugiat.
          </div>
          <div className="st-contact-info-wrap">
            <div className="st-single-contact-info">
              <i className="fas fa-envelope"></i>
              <div className="st-single-info-details">
                <h4>Email</h4>
                <a href="#">devis@example.com</a>
                <a href="#">info@support.com</a>
              </div>
            </div>
            <div className="st-single-contact-info">
              <i className="fas fa-phone-alt"></i>
              <div className="st-single-info-details">
                <h4>Phone</h4>
                <span>+1 876-369-9009</span>
                <span>+1 213-519-1786</span>
              </div>
            </div>
            <div className="st-single-contact-info">
              <i className="fas fa-map-marker-alt"></i>
              <div className="st-single-info-details">
                <h4>Address</h4>
                <span>2661 High Meadow Lane Bear Creek, <br />Olancha, KY 93544</span>
              </div>
            </div>
            <div className="st-social-info">
              <div className="st-social-text">Visite my social profile and get connected</div>
              <div className="st-social-link">
                <a href="#" className="st-social-btn active">
                  <span className="st-social-icon"><i className="fab fa-dribbble"></i></span>
                  <span className="st-icon-name">Dribbble</span>
                </a>
                <a href="#" className="st-social-btn">
                  <span className="st-social-icon"><i className="fab fa-behance"></i></span>
                  <span className="st-icon-name">Behance</span>
                </a>
                <a href="#" className="st-social-btn">
                  <span className="st-social-icon"><i className="fab fa-twitter"></i></span>
                  <span className="st-icon-name">Twitter</span>
                </a>
                <a href="#" className="st-social-btn">
                  <span className="st-social-icon"><i className="fab fa-linkedin"></i></span>
                  <span className="st-icon-name">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="st-height-b0 st-height-lg-b40"></div>
          <h3 className="st-contact-title">My Blog</h3>
          <div className="st-contact-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed
            suscipit feugiat.
          </div>
          <div className="st-contact-info-wrap">
            <div className="st-single-contact-info">
              <a href="#" className="st-contact-single">
                <h4>My Blog</h4>
                <p>Read my latest blog posts</p>
              </a>
            </div>
            <div className="st-single-contact-info">
              <a href="#" className="st-contact-single">
                <h4>My Blog</h4>
                <p>Read my latest blog posts</p>
              </a>
            </div>
            <div className="st-single-contact-info">
              <a href="#" className="st-contact-single">
                <h4>My Blog</h4>
                <p>Read my latest blog posts</p>
              </a>
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
        <div className="st-copyright-text">© 2020. Designed by Laralink. All right reserved.</div>
      </div>
    </div>
  </footer>
  {/* <!-- End Footer Seciton --> */}

  {/* <!-- Scripts --> */}

</div>


</>
    );
} 