/* eslint-disable react/no-unescaped-entities */
import { Component } from "react";
import mixitup from "mixitup";
import Popup from "./Popup";
import VoiceAssistant from "../../assets/img/voice_assistant.webp";
import Vehicle from "../../assets/img/vehicle.webp";
import DiscordClone from "../../assets/img/discord.png";
import GenZ from "../../assets/img/genz.png";
import Research from "../../assets/img/research.png";
import PLA from "../../assets/img/pla.png";
class Work extends Component {
  state = {
    filter: "all",
    projects: [
      {
        id: 1,
        type: "app",
        title: "Gideon",
        image: VoiceAssistant,
        description:
          "Built an AI-powered voice assistant in Python using speech recognition and NLP for natural interaction. Utilized transformer-based NLP models to improve intent recognition and conversational accuracy. Created custom command classification and response generation pipelines to expand assistant functionality.Optimized performance by Fine-tuned speech modules for faster and more reliable user responses.",
        skills: ["Python", "NLP"],
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
        url: "https://github.com/neevj2006/discord-clone",
      },
      {
        id: 3,
        type: "app",
        title: "Vehicle Speed Detection System",
        image: Vehicle,
        description:
          "A multi-object tracking system built using YOLO and DeepSORT to detect and track cars from recorded video footage. Estimates vehicle speeds by converting pixel displacement to real-world units through camera calibration. Implemented in Python with OpenCV, integrating deep learning, signal processing, and data visualization techniques for accurate speed detection.",
        skills: ["Python", "OpenCV", "YOLO", "DeepSORT", "Computer Vision"],
        url: "https://github.com/neevj2006/Vehicle_Speed_Detection",
      },
      {
        id: 4,
        type: "web",
        title: "Personalized Learning Assistant",
        image: PLA,
        description:
          "An AI-driven adaptive learning web app that uses machine learning models to personalize lessons and quizzes based on user learning patterns. Features a recommendation engine that delivers tailored content and feedback using learner performance data, with predictive analytics modules that track knowledge growth and suggest targeted study materials. Applies data preprocessing and model evaluation techniques to improve learning outcome predictions and user engagement.",
        skills: ["Machine Learning", "Python", "Data Analytics", "React"],
        url: "",
      },
      {
        id: 5,
        type: "Research",
        title: "Cryptojacking Attack Analysis",
        image: Research,
        description:
          "Conducted an in-depth research study on Cryptojacking attacks under the guidance of Professor Maria Konte at Georgia Tech. Reviewed literature and case studies examining the impact of Cryptojacking on system security and performance. Evaluated attack vectors and defense methods against unauthorized cryptocurrency mining, contributing to understanding of emerging cybersecurity threats.",
        skills: [
          "Cybersecurity",
          "Research",
          "Security Analysis",
          "Cryptography",
          "Technical Writing",
          "Literature Review",
        ],
        url: "https://drive.google.com/file/d/1EQ2Ua6cbXV0A_PMKGPFlKaNDWRfcHd6z/view?usp=sharing",
        makeURL: true,
      },
      {
        id: 6,
        type: "app",
        title: "GenZ Script",
        image: GenZ,
        description:
          "A unique programming language that replaces traditional keywords with Gen Z slang, making coding more relatable and fun for younger generations. Developed using Python, this innovative project bridges the gap between modern culture and technology, encouraging creativity and engagement in the programming world.",
        skills: ["Python"],
        url: "https://github.com/neevj2006/GenZ-Script/",
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
          <span
            className={
              this.state.filter === ".research"
                ? "work_item active-work"
                : "work_item"
            }
            data-filter=".research"
            onClick={() => this.handleFilterWork(".research")}
          >
            Research
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
                    : project.type === "web"
                    ? "work_card mix web"
                    : "work_card mix research"
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
