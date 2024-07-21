import { Component } from "react";

class Contact extends Component {
  state = {
    formInput: {
      name: {
        focus: false,
        value: "",
      },
      phone: {
        focus: false,
        value: "",
      },
      email: {
        focus: false,
        value: "",
      },
      message: {
        focus: false,
        value: "",
      },
    },
    error: {
      detailsReq: false,
    },
  };

  validate = () => {
    const { name, phone, email, message } = this.state.formInput;
    if (
      name.value === "" ||
      phone.value === "" ||
      email.value === "" ||
      message.value === ""
    ) {
      this.setState({ error: { detailsReq: true } });
      return false;
    }
    return true;
  };

  componentDidMount() {}

  sendMessage = async () => {
    const { name, phone, email, message } = this.state.formInput;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        phone: parseInt(phone.value),
        email: email.value,
        message: message.value,
      }),
    };
    fetch(
      "https://portfolio-backend-nxm5.onrender.com/addSiteMessage",
      requestOptions
    )
      .then((response) => {
        console.log(response.json);
        alert("Message Sent");
        this.setState({
          formInput: {
            name: {
              focus: false,
              value: "",
            },
            phone: {
              focus: false,
              value: "",
            },
            email: {
              focus: false,
              value: "",
            },
            message: {
              focus: false,
              value: "",
            },
          },
        });
      })
      .catch((err) => {
        console.log(err);
        alert("Server Error");
      });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.validate()) {
      await this.sendMessage();
    }
  };

  handleFocus = (e) => {
    const formInput = { ...this.state.formInput };
    formInput[e.target.id.slice(5)].focus = true;
    this.setState({ formInput });
  };

  handleBlur = (e) => {
    const formInput = { ...this.state.formInput };
    if (formInput[e.target.id.slice(5)].value === "") {
      formInput[e.target.id.slice(5)].focus = false;
      this.setState({ formInput });
    }
  };

  handleChange = (e) => {
    const formInput = { ...this.state.formInput };
    formInput[e.target.id.slice(5)].value = e.target.value;
    this.setState({ formInput });
  };

  render() {
    return (
      <section className="contact section main" id="contact">
        <h2 data-heading="Get in touch" className="section_title">
          Contact Me
        </h2>

        <div className="contact_container container grid">
          <div className="contact_content">
            <div className="contact_info">
              <div className="contact_card" data-aos="fade-right">
                <i className="uil uil-envelope-edit contact_icon"></i>
                <h3 className="contact_card-title">Email</h3>
                <span className="contact_card-data">neevj2006@gmail.com</span>
                <a href="mailto:neevj2006@gmail.com">
                  <span className="contact_button">
                    Write me
                    <i className="uil uil-arrow-right contact_button-icon"></i>
                  </span>
                </a>
              </div>

              <div className="contact_card" data-aos="fade-right">
                <i className="uil uil-instagram contact_icon"></i>
                <h3 className="contact_card-title">Instagram</h3>
                <span className="contact_card-data">@neevj2006</span>
                <a href="https://instagram.com/neevj2006/">
                  <span className="contact_button">
                    Write me
                    <i className="uil uil-arrow-right contact_button-icon"></i>
                  </span>
                </a>
              </div>

              <div className="contact_card" data-aos="fade-right">
                <i className="uil uil-linkedin-alt contact_icon"></i>
                <h3 className="contact_card-title">Linked In</h3>
                <span className="contact_card-data">Neev Jain</span>
                <a href="https://www.linkedin.com/in/neevj2006/">
                  <span className="contact_button">
                    Write me
                    <i className="uil uil-arrow-right contact_button-icon"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact_content">
            <form onSubmit={this.handleSubmit} className="contact_form">
              <div className="errors">
                <div className={this.state.error.detailsReq ? "show" : "hide"}>
                  * All details are mandatory
                </div>
              </div>
              <div
                className={
                  this.state.formInput.name.focus
                    ? "input_container focus"
                    : "input_container blur"
                }
              >
                <input
                  type="text"
                  className="input"
                  id="form-name"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  value={this.state.formInput.name.value}
                />
                <label htmlFor="form-name">Name</label>
                <span>Name</span>
              </div>
              <div
                className={
                  this.state.formInput.email.focus
                    ? "input_container focus"
                    : "input_container blur"
                }
              >
                <input
                  type="email"
                  className="input"
                  id="form-email"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  value={this.state.formInput.email.value}
                />
                <label htmlFor="form-email">Email</label>
                <span>Email</span>
              </div>
              <div
                className={
                  this.state.formInput.phone.focus
                    ? "input_container focus"
                    : "input_container blur"
                }
              >
                <input
                  type="number"
                  className="input"
                  id="form-phone"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  value={this.state.formInput.phone.value}
                />
                <label htmlFor="form-phone">Phone</label>
                <span>Phone</span>
              </div>
              <div
                className={
                  this.state.formInput.message.focus
                    ? "input_container focus"
                    : "input_container blur"
                }
              >
                <textarea
                  name=""
                  id="form-message"
                  className="input textarea"
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onChange={this.handleChange}
                  value={this.state.formInput.message.value}
                ></textarea>
                <label htmlFor="form-message">Message</label>
                <span>Message</span>
              </div>
              <button className="button" type="submit">
                <i className="uil uil-navigator button_icon"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
