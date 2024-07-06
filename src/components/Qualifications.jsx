import { Component } from "react";

class Qualifications extends Component {
  render() {
    return (
      <div className="qualification section main">
        <h2 data-heading="My Journey" className="section_title">
          Qualifications
        </h2>
        <div className="qualification_container container grid">
          <div className="education">
            <h3 className="qualification_title">
              <i className="uil uil-graduation-cap"></i>Education
            </h3>
            <div className="timeline">
              <div
                className="timeline_item"
                data-aos="flip-up"
                data-aos-duration="450"
              >
                <div className="circle_dot"></div>
                <h3 className="timeline_title">Boston University, USA</h3>
                <div className="timeline_text">
                  B.E. in Computer Engineering
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>2024 - Present
                </span>
              </div>
              <div
                className="timeline_item"
                data-aos="flip-up"
                data-aos-duration="450"
              >
                <div className="circle_dot"></div>
                <h3 className="timeline_title">
                  G. D. Goenka Public School, New Delhi, India
                </h3>
                <div className="timeline_text">High School Graduation</div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>2020 - 2024
                </span>
              </div>
            </div>
          </div>
          <div className="experience">
            <h3 className="qualification_title">
              <i className="uil uil-suitcase"></i>Experience
            </h3>
            <div className="timeline">
              <div
                className="timeline_item"
                data-aos="flip-up"
                data-aos-duration="450"
              >
                <div className="circle_dot"></div>
                <h3 className="timeline_title">
                  TalentHome Solutions LLP - Intern
                </h3>
                <div className="timeline_text">
                  Intern in a team of 4; Built functional web solutions
                  collaborating with seasoned developers; leveraged full-stack
                  abilities; worked on app development for career choices
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>April 2021 - May 2021
                </span>
              </div>
              <div
                className="timeline_item"
                data-aos="flip-up"
                data-aos-duration="450"
              >
                <div className="circle_dot"></div>
                <h3 className="timeline_title">SUPROS - Intern</h3>
                <div className="timeline_text">
                  Built a chatbot using online tools & python; Optimized codes &
                  simplified algorithms; Ensured communication within the team &
                  reporting to Mr. Amandeep Gulati (Software Engineer at Google
                  & Amazon).
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>July 2021- August 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Qualifications;
