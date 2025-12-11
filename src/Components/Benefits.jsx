import React from "react";
import benefitsImg from "url:../images/tpsiteSpaceStock2.jpg";

const benefits = [
  {
    icon: "bi-cash-stack",
    title: "Generous 401k Matching",
    description: "We offer a competitive 401(k) matching program to help you build a secure financial future and maximize your retirement savings."
  },
  {
    icon: "bi-heart-pulse",
    title: "Health Insurance",
    description: "We provide top notch medical, dental, and vision coverage for you and your family, including a zero-cost option."
  },
  {
    icon: "bi-people-fill",
    title: "Team Building & Bonding",
    description: "Team building and bonding are crucial because they foster trust, collaboration, and a sense of unity among team members, leading to improved communication, productivity, and overall work satisfaction."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Perks & Benefits</h2>
          <p>
            At Techport13 we care about our employees. We believe in working hard and playing harder, 
            which is why we pride ourselves on not only our competitive salaries, but the incredible 
            benefits and extras we offer our team to help them succeed in all aspects of their lives.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1">
            {benefits.map((benefit, index) => (
              <div key={index} className={`icon-box ${index === 0 ? "mt-5 mt-lg-0" : "mt-5"}`} data-aos="fade-up" data-aos-delay={100 + index * 100}>
                <i className={`bi ${benefit.icon}`}></i>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-4 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-in" data-aos-delay="100">
            <img src={benefitsImg} alt="Benefits" className="img-fluid benefits-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
