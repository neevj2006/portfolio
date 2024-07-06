/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import resume from "../../assets/img/Resume.pdf";

class About extends Component {
  handleResume = () => {
    console.log("");
  };

  render() {
    return (
      <section className="about section main" id="about">
        <h2 data-heading="My Intro" className="section_title">
          About Me
        </h2>
        <div className="about_container container grid">
          <img src="assets/img/about-img.png" alt="" className="about_img" />
          <div className="about_data" data-aos="fade-left">
            <h3 className="about_heading">
              Hi, I'm Neev, Student at Boston University
            </h3>
            <p className="about_description">
              With a robust foundation in computer science and mathematics
              cultivated through coding, research, and enrichment programs, I
              aspire to further develop my technical abilities and leadership
              skills in an intellectually stimulating undergraduate environment.
              My academic excellence, passion for technology, and multifaceted
              experience make me well-prepared to positively contribute to the
              field.
            </p>
            <a
              className="button"
              href={resume}
              download="resume"
              target="_blank"
            >
              My Resume <i className="uil uil-download-alt"></i>
            </a>
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }
}

export default About;
