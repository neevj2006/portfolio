/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import mixitup from "mixitup";

class Work extends Component {
  state = {
    filter: "all",
    projects: [
      {
        id: 1,
        type: "app",
        title: "Voice Assistant",
        description:
          "Created a Voice Assistant using Python. Programmed a virtual assistant with speech recognition and voice capabilities using Python. Integrated open-source libraries to enable conversational interactions.",
        skills: [{ name: "Pyhton", id: "1" }],
        url: "https://github.com/neevj2006/Gideon",
      },
      {
        id: 2,
        type: "web",
        title: "Expense Tracker",
        description:
          "A comprehensive web application designed to monitor and analyze expenses, featuring a user-friendly interface.",
        skills: [
          { name: "React", id: "2" },
          { name: "Node", id: "3" },
          { name: "Express", id: "4" },
          { name: "MongoDB", id: "5" },
        ],
        url: "https://neevj2006.github.io/Expense-Tracker-frontend/",
      },
      {
        id: 3,
        type: "app",
        title: "Newsletter",
        skills: [
          { name: "Python", id: "6" },
          { name: "MySQL", id: "7" },
        ],
        description:
          "Developed an app to email daily news using various news APIs and becoming a one-stop shop app. Automated the process to run daily and send a customizable email digest.",
        url: "https://github.com/neevj2006/Newsletter/",
      },
      {
        id: 4,
        type: "web",
        title: "To-Do List",
        description:
          "A simple and intuitive web application that allows users to create, manage, and track their daily tasks and to-do items.",
        skills: [
          { name: "React", id: "8" },
          { name: "Node", id: "9" },
          { name: "Express", id: "10" },
          { name: "MongoDB", id: "11" },
        ],
        url: "https://neevj2006.github.io/To-Do-frontend/",
      },
      {
        id: 5,
        type: "app",
        title: "Face Finder",
        description:
          "Unlocked the power of facial recognition with a Python application that goes through folders to identify photos featuring the user's face, leveraging advanced algorithms to precisely match unique facial features.",
        skills: [{ name: "Python", id: "12" }],
        url: "https://github.com/neevj2006/Face-Finder",
      },
      {
        id: 6,
        type: "web",
        title: "Calendar",
        description:
          "Developed a calendar application, with a user-friendly UI, that streamlines scheduling and task management for school and coding courses.",
        skills: [
          { name: "React", id: "13" },
          { name: "Node", id: "14" },
          { name: "Express", id: "15" },
          { name: "MongoDB", id: "16" },
        ],
        url: "https://neevj2006.github.io/Calendar-frontend/",
      },
    ],
  };

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    let mixerPortfolio = mixitup(".work_container", {
      selectors: {
        target: ".work_card",
      },
      animation: {
        duration: 300,
      },
    });
  }

  handleFilterWork(filter) {
    // console.log(filter);
    this.setState({ filter });
  }

  render() {
    return (
      <section className="work section main" id="work">
        <h3 className="section_title" data-heading="My Portfolio">
          Recent Works
        </h3>

        <div className="work_filters">
          <span
            className={
              this.state.filter === "all"
                ? "work_item active-work"
                : "work_item"
            }
            data-filter="all"
            onClick={() => this.handleFilterWork("all")}
          >
            All
          </span>
          <span
            className={
              this.state.filter === ".web"
                ? "work_item active-work"
                : "work_item"
            }
            data-filter=".web"
            onClick={() => this.handleFilterWork(".web")}
          >
            Web
          </span>
          <span
            className={
              this.state.filter === ".app"
                ? "work_item active-work"
                : "work_item"
            }
            data-filter=".app"
            onClick={() => this.handleFilterWork(".app")}
          >
            App
          </span>
        </div>

        <div className="work_container container grid">
          {this.state.projects.map((project) => {
            return (
              <div
                key={project.id}
                className={
                  project.type === "app"
                    ? "work_card mix app"
                    : "work_card mix web"
                }
              >
                <h3 className="work_title">{project.title}</h3>
                <div className="work_description">{project.description}</div>
                <div className="work_technologies">
                  {project.skills.map((skill) => {
                    return <span key={parseInt(skill.id)}>{skill.name}</span>;
                  })}
                </div>
                <a href={project.url}>
                  <span className="work_button">
                    Code
                    <i className="uil uil-arrow-right work_button-icon"></i>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Work;
