/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import mixitup from "mixitup";
import Popup from "./Popup";
import VoiceAssistant from "../../assets/img/voice_assistant.webp";
import DiscordClone from "../../assets/img/discord.png";
import Newsletter from "../../assets/img/newsletter.png";
import ToDoList from "../../assets/img/to_do_list.png";
import FaceFinder from "../../assets/img/face_finder.png";
import Calendar from "../../assets/img/calendar.png";
class Work extends Component {
  state = {
    filter: "all",
    projects: [
      {
        id: 1,
        type: "app",
        title: "Voice Assistant",
        image: VoiceAssistant,
        description:
          "Created a virtual assistant using Python, equipped with speech recognition and voice capabilities. Integrated open-source libraries to enable conversational interactions and provide a seamless user experience. Enhanced with custom commands and responses tailored to user needs.",
        skills: ["Python"],
        url: "https://github.com/neevj2006/Gideon",
      },
      {
        id: 2,
        type: "web",
        title: "Discord Clone",
        image: DiscordClone,
        description:
          "A full-stack web application replicating the core functionalities of Discord. It features real-time messaging, voice and video chat, and server management capabilities, providing a seamless and interactive user experience.",
        skills: [
          "React",
          "Next",
          "TypeScript",
          "Prisma",
          "Socket.io",
          "Tailwind",
        ],
        url: "https://discord-production-3e9b.up.railway.app/",
      },
      {
        id: 3,
        type: "app",
        title: "Newsletter",
        image: Newsletter,
        description:
          "Developed an app to email daily news using various news APIs, becoming a one-stop shop for daily updates. Automated the process to run daily and send a customizable email digest to users. Implemented user preferences for topic selection and delivery time.",
        skills: ["Python", "MySQL"],
        url: "https://github.com/neevj2006/Newsletter/",
      },
      {
        id: 4,
        type: "web",
        title: "To-Do List",
        image: ToDoList,
        description:
          "Built a simple and intuitive web application that allows users to create, manage, and track their daily tasks and to-do items, enhancing productivity and organization.",
        skills: ["React", "Node", "Express", "MongoDB"],
        url: "https://neevj2006.github.io/To-Do-frontend/",
      },
      {
        id: 5,
        type: "app",
        title: "Face Finder",
        image: FaceFinder,
        description:
          "Unlocked the power of facial recognition with a Python application that scans folders to identify photos featuring the user's face, leveraging advanced algorithms to precisely match unique facial features.",
        skills: ["Python"],
        url: "https://github.com/neevj2006/Face-Finder",
      },
      {
        id: 6,
        type: "web",
        title: "Calendar",
        image: Calendar,
        description:
          "Developed a user-friendly calendar application that streamlines scheduling and task management for school and coding courses, helping users stay organized and manage their time efficiently.",
        skills: ["React", "Node", "Express", "MongoDB"],
        url: "https://neevj2006.github.io/Calendar-frontend/",
      },
    ],
    popup: false,
    popupContent: {},
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

  allowScroll() {
    document.body.style.overflow = "auto";
  }

  blockScroll() {
    document.body.style.overflow = "hidden";
  }

  handleFilterWork(filter) {
    // console.log(filter);
    this.setState({ filter });
  }

  closePopup() {
    this.allowScroll();
    this.setState({ popup: false });
  }

  openPopup(id) {
    const project = this.state.projects.filter((project) => {
      return project.id === id;
    });
    this.blockScroll();
    this.setState({ popup: true, popupContent: project[0] });
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
                <div className="work_thumbnail">
                  <img
                    src={project.image}
                    alt="project-image"
                    className="work_img"
                  />
                </div>
                <div className="work_content">
                  <h3 className="work_title">{project.title}</h3>
                  <span
                    className="work_button"
                    onClick={() => this.openPopup(project.id)}
                  >
                    More
                    <i className="uil uil-arrow-right work_button-icon"></i>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {this.state.popup && (
          <Popup
            myproject={this.state.popupContent}
            closePopup={() => this.closePopup()}
          ></Popup>
        )}
      </section>
    );
  }
}

export default Work;
