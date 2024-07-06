/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import mixitup from "mixitup";

class Work extends Component {
  state = {
    filter: "all",
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
          <div className="work_card mix app">
            <h3 className="work_title">Voice Assistant</h3>
            <div className="work_description">
              Created a Voice Assistant using Python. Programmed a virtual
              assistant with speech recognition and voice capabilities using
              Python. Integrated open-source libraries to enable conversational
              interactions.
            </div>
            <div className="work_technologies">
              <span>Python</span>
            </div>
            <a href="https://github.com/neevjain2006/Gideon">
              <span className="work_button">
                Code
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
          <div className="work_card mix web">
            <h3 className="work_title">Expense Tracker</h3>
            <div className="work_description">
              A comprehensive web application designed to monitor and analyze
              expenses, featuring a user-friendly interface.
            </div>
            <div className="work_technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://neevjain2006.github.io/Expense-Tracker-frontend/">
              <span className="work_button">
                Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
          <div className="work_card mix app">
            <h3 className="work_title">Newsletter</h3>
            <div className="work_description">
              Developed an app to email daily news using various news APIs and
              becoming a one-stop shop app. Automated the process to run daily
              and send a customizable email digest.
            </div>
            <div className="work_technologies">
              <span>Python</span>
            </div>
            <a href="https://github.com/neevjain2006/Newsletter">
              <span className="work_button">
                Code
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
          <div className="work_card mix web">
            <h3 className="work_title">To-Do List</h3>
            <div className="work_description">
              A simple and intuitive web application that allows users to
              create, manage, and track their daily tasks and to-do items.
            </div>
            <div className="work_technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>Node</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>
            <a href="https://neevjain2006.github.io/To-Do-frontend/">
              <span className="work_button">
                Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
          <div className="work_card mix app">
            <h3 className="work_title">Face Finder</h3>
            <div className="work_description">
              Unlocked the power of facial recognition with a Python application
              that goes through folders to identify photos featuring the user's
              face, leveraging advanced algorithms to precisely match unique
              facial features.
            </div>
            <div className="work_technologies">
              <span>Python</span>
            </div>
            <a href="https://github.com/neevjain2006/Face-Finder">
              <span className="work_button">
                Code
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
          <div className="work_card mix web">
            <h3 className="work_title">Calendar</h3>
            <div className="work_description">
              Developed a calendar application, with a user-friendly UI, that
              streamlines scheduling and task management for school and coding
              courses.
            </div>
            <div className="work_technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JS</span>
              <span>Node</span>
              <span>Express</span>
            </div>
            <a href="https://neevjain2006.github.io/Calendar-frontend/">
              <span className="work_button">
                Demo
                <i className="uil uil-arrow-right work_button-icon"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
