/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from "react";
import resume from "../../assets/img/Resume.pdf";
import aboutImg from "../../assets/img/pic.jpeg";

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
          <img src={aboutImg} alt="about-img" className="about_img" />
          <div className="about_data" data-aos="fade-left">
            <h3 className="about_heading">
              Hi, I'm Neev, Student at Boston University
            </h3>
            <p className="about_description">
              I’m passionate about building intelligent systems that bridge
              software engineering and artificial intelligence. My interests lie
              in machine learning, computer vision, and automation, where I
              enjoy transforming ideas into data-driven, real-world solutions.
              I’ve developed projects ranging from an AI-powered voice assistant
              and a personalized learning platform to a vehicle speed detection
              system using YOLO and DeepSORT. Through internships I’ve applied
              AI and automation tools like Python, OpenCV, and Make.com to
              optimize workflows and operational systems. I’m always eager to
              explore new applications of AI in automation, data analysis, and
              intelligent systems with a focus on designing scalable, efficient,
              and human-centered technology.
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
