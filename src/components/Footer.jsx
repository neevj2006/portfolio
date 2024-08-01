import { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer main">
        <div className="footer_bg">
          <div className="footer_container container grid">
            <div>
              <h1 className="skin footer_title">Neev</h1>
              <span className="footer_subtitle">Student Developer</span>
            </div>

            <ul className="footer_links">
              <li>
                <a href="#skills" className="footer_link">
                  Skills
                </a>
              </li>
              <li>
                <a href="#work" className="footer_link">
                  Work
                </a>
              </li>
              <li>
                <a href="#contact" className="footer_link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer_socials">
              <a
                href="https://www.linkedin.com/in/neevj2006/"
                target="_blank"
                className="footer_social"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/neevj2006"
                target="_blank"
                className="footer_social"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://instagram.com/neevj2006/"
                target="_blank"
                className="footer_social"
              >
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
          <p className="footer_copy">&#169; Neev Jain. All rights reserved</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
