import { Component } from "react";

class Qualifications extends Component {
  render() {
    return (
      <div className="qualification section">
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
                  B.Sc. in Computer Engineering
                  <br />
                  GPA: 3.85/4.0
                  <br />
                  College of Engineering Dean&apos;s List
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>2024 - May 2027
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
                  SeamsFriendly - AI Automation Intern
                </h3>
                <div className="timeline_text">
                  <ul>
                    <li>
                      Automated core operational management workflows using AI
                      models & Python scripts.
                    </li>
                    <li>
                      Devised intelligent automation pipelines to optimize
                      inventory tracking, order processing, and team
                      communication.
                    </li>
                    <li>
                      Revised process efficiency by reducing manual data
                      handling and turnaround time by over 30%.
                    </li>
                  </ul>
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>May 2025 - Aug 2025
                </span>
              </div>
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
                  <ul>
                    <li>
                      Collaborated in a team of 4 to build web applications
                      supporting career choices and guided app development
                      initiatives.
                    </li>
                    <li>
                      Collaborated closely with experienced developers to
                      enhance both front-end and back-end functionalities.
                    </li>
                  </ul>
                </div>
                <span className="timeline_date">
                  <i className="uil uil-calendar-alt"></i>April 2021 - May 2021
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
