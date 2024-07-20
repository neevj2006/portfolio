import { Component } from "react";

class Skills extends Component {
  state = {
    active: "frontend",
  };

  changeSkill = (skill) => {
    this.setState({ active: skill });
  };

  render() {
    return (
      <section className="skills section main" id="skills">
        <h2 className="section_title" data-heading="My Abilities">
          My Skills
        </h2>

        <div className="skills_container container grid">
          <div className="skills_tabs">
            <div
              className={
                this.state.active === "frontend"
                  ? "skills_header skills_active"
                  : "skills_header"
              }
              id="fr"
              data-target="#frontend"
              onClick={() => this.changeSkill("frontend")}
            >
              <i className="uil uil-brackets-curly skills_icon"></i>

              <div>
                <h1 className="skills_title">Frontend</h1>
                <span className="skills_subtitle">More than 2 years</span>
              </div>

              <i className="uil uil-angle-down skills_arrow"></i>
            </div>

            <div
              className={
                this.state.active === "software"
                  ? "skills_header skills_active"
                  : "skills_header"
              }
              id="sf"
              data-target="#software"
              onClick={() => this.changeSkill("software")}
            >
              <i className="uil uil-desktop skills_icon"></i>

              <div>
                <h1 className="skills_title">Software</h1>
                <span className="skills_subtitle">More than 5 years</span>
              </div>

              <i className="uil uil-angle-down skills_arrow"></i>
            </div>

            <div
              className={
                this.state.active === "backend"
                  ? "skills_header skills_active"
                  : "skills_header"
              }
              id="bk"
              data-target="#backend"
              onClick={() => this.changeSkill("backend")}
            >
              <i className="uil uil-server skills_icon"></i>

              <div>
                <h1 className="skills_title">Backend</h1>
                <span className="skills_subtitle">More than 2 years</span>
              </div>

              <i className="uil uil-angle-down skills_arrow"></i>
            </div>

            <div
              className={
                this.state.active === "mobile"
                  ? "skills_header skills_active"
                  : "skills_header"
              }
              id="mb"
              data-target="#mobile"
              onClick={() => this.changeSkill("mobile")}
            >
              <i className="uil uil-mobile-android-alt skills_icon"></i>

              <div>
                <h1 className="skills_title">Mobile</h1>
                <span className="skills_subtitle">More than 2 years</span>
              </div>

              <i className="uil uil-angle-down skills_arrow"></i>
            </div>
          </div>

          <div className="skills_content">
            <div
              className={
                this.state.active === "frontend"
                  ? "skills_group skills_active"
                  : "skills_group"
              }
              data-content
              id="frontend"
            >
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills_number"> 80%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-80"></span>
                  </div>
                </div>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">TypeScript</h3>
                    <span className="skills_number"> 70%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-70"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React</h3>
                    <span className="skills_number"> 75%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-75"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Next.js</h3>
                    <span className="skills_number"> 75%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-75"></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                this.state.active === "software"
                  ? "skills_group skills_active"
                  : "skills_group"
              }
              data-content
              id="software"
            >
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Python</h3>
                    <span className="skills_number"> 80%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-80"></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                this.state.active === "backend"
                  ? "skills_group skills_active"
                  : "skills_group"
              }
              data-content
              id="backend"
            >
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Node</h3>
                    <span className="skills_number"> 80%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-80"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">Express</h3>
                    <span className="skills_number"> 80%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-80"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">MongoDB</h3>
                    <span className="skills_number"> 70%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-70"></span>
                  </div>
                </div>

                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skills_number"> 90%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-90"></span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                this.state.active === "mobile"
                  ? "skills_group skills_active"
                  : "skills_group"
              }
              data-content
              id="mobile"
            >
              <div className="skills_list grid">
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">React Native</h3>
                    <span className="skills_number"> 70%</span>
                  </div>

                  <div className="skills_bar">
                    <span className="skills_percentage w-70"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
