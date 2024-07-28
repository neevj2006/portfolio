/* eslint-disable react/prop-types */
import { Component } from "react";

class Popup extends Component {
  render() {
    let project = this.props.myproject;
    return (
      <div className="portfolio_popup">
        <div className="portfolio_popup-inner">
          <div className="portfolio_popup-content grid">
            <span className="portfolio_popup-close">
              <i className="uil uil-times" onClick={this.props.closePopup}></i>
            </span>
            <div className="portfolio_thumbnail">
              <img src={project.image} alt="project-image" />
            </div>
            <div className="portfolio_popup-info">
              <div className="portfolio_popup-title">{project.title}</div>
              <div className="portfolio_popup-body">
                <p className="details_description">{project.description}</p>
                <div className="work_technologies">
                  {project.skills.map((skill, i) => {
                    return <span key={i}>{skill}</span>;
                  })}
                </div>
                <a href={project.url}>
                  <span className="work_button">
                    {project.type === "app" ? "Code" : "Demo"}

                    <i className="uil uil-arrow-right work_button-icon"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
