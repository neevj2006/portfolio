import React, { Component } from "react";
import { Link } from "react-scroll";

class NavBar extends Component {
  state = {
    navOpen: false,
  };
  handleMenu = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  // Function to handle the activation of a link.
  handleSetActive = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="nav_toggle" id="nav-toggle" onClick={this.handleMenu}>
          <i className="uil uil-bars"></i>
        </div>

        <aside
          className={this.state.navOpen ? "sidebar show-sidebar" : "sidebar"}
          id="sidebar"
        >
          <nav className="nav">
            <div className="nav_logo">
              <a href="index.html" className="nav_logo-text">
                N
              </a>
            </div>

            <div className="nav_menu">
              <div className="menu">
                <ul className="nav_list">
                  <li className="nav_item">
                    <Link
                      to="home"
                      activeClass="active-link"
                      className="nav_link"
                      spy={true}
                      duration={200}
                      onSetActive={this.handleSetActive}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link
                      to="about"
                      activeClass="active-link"
                      className="nav_link"
                      spy={true}
                      duration={200}
                      onSetActive={this.handleSetActive}
                    >
                      About
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link
                      to="skills"
                      activeClass="active-link"
                      className="nav_link"
                      spy={true}
                      duration={200}
                      onSetActive={this.handleSetActive}
                    >
                      Skills
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link
                      to="work"
                      activeClass="active-link"
                      className="nav_link"
                      spy={true}
                      duration={200}
                      onSetActive={this.handleSetActive}
                    >
                      Work
                    </Link>
                  </li>
                  <li className="nav_item">
                    <Link
                      to="contact"
                      activeClass="active-link"
                      className="nav_link"
                      spy={true}
                      duration={200}
                      onSetActive={this.handleSetActive}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="nav_close" id="nav-close" onClick={this.handleMenu}>
              <i className="uil uil-times"></i>
            </div>
          </nav>
        </aside>
      </React.Fragment>
    );
  }
}

export default NavBar;
