import React from "react";
import aboutImg from "url:../images/tpsiteOfficeStock1.jpg";

const About = () => {
  return (
    <section id="about" className="about d-flex">
      <div className="container">
        <div className="row">
          <div className="col about-center order-first" data-aos="zoom-in" data-aos-delay="150">
            <img src={aboutImg} className="img-fluid" alt="Techport13 team collaboration" />
          </div>
          <div className="col content" data-aos="fade-right">
            <h3>Welcome to Techport13!</h3>
            <p className="fst-italic">
              Join our team at Techport13, a leading business software development and consulting company 
              at the forefront of innovation and client success. Here we are committed to helping organizations 
              optimize their operations and achieve their goals through cutting-edge software solutions and expert consultation.
              <br /><br />
              With a wide range of projects across various industries, you'll enjoy a diverse and challenging work environment.
              If you're looking to jump into exciting projects and encounter opportunities for skill enhancement, 
              then join us to shape the future of business technology. Explore the possibilities of a rewarding career at Techport13!
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i>
                We value creativity, problem-solving, and continuous learning, making it an ideal environment for personal and professional growth.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                We offer a supportive and collaborative culture that encourages your ideas and innovations to shine.
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                We prioritize work-life balance and offer competitive benefits packages to ensure the well-being of our employees.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
