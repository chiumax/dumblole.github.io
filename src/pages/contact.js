import React from "react";
import "../components/firebase";
import firebase from "firebase";
import anime from "animejs";
import Layout from "../components/layout";
import ReCAPTCHA from "react-google-recaptcha";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "contactFailure",
    submitValid: true,
    captcha: false
  };
  captchaRef = React.createRef();
  submitContactForm = e => {
    e.preventDefault();
    this.animateAlertOut("data-alert");
    let sendMail = firebase.functions().httpsCallable("sendMail");

    sendMail({
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    })
      .then(result => {
        if (result.data.response === true) {
          this.setState(
            prevState => ({
              name: "",
              email: "",
              subject: "",
              message: "",
              status: "contactSuccess",
              submitValid: true,
              captcha: false
            }),
            () => {
              this.captchaRef.reset();
              this.animateAlertIn("data-alert");
            }
          );
        } else if (result.data.response === false) {
          this.setState(
            prevState => ({
              status: "contactFailure"
            }),
            () => this.animateAlertIn("data-alert")
          );
        }
      })
      .catch(error => {
        this.setState(
          prevState => ({
            status: "contactFailure"
          }),
          () => this.animateAlertIn("data-alert")
        );
        console.log("nodex");
      });
    console.log(
      `name:${this.state.name} email:${this.state.email} subject:${this.state.subject} message:${
        this.state.message
      }`
    );
  };

  handleContactFormChange = e => {
    e.persist();

    this.setState(
      prevState => ({ [e.target.name]: e.target.value }),
      () => {
        let submitValid =
          this.state.captcha &&
          this.state.email &&
          this.state.name &&
          this.state.subject &&
          this.state.message;
        this.setState(prevState => ({ submitValid: !submitValid }));
      }
    );
  };
  renderAlert = () => {
    if (this.state.status === "contactSuccess") {
      return (
        <div className={this.state.status} data-alert>
          Success! Thanks for contacting me.
        </div>
      );
    } else {
      return (
        <div className={this.state.status} data-alert>
          Oops! Something went wrong... Please try again and see if it works. If not, feel free to
          directly contact me at{" "}
          <a className={"inline-link"} target="_blank" href={"mailto:dumblole@gmail.com"}>
            dumblole@gmail.com
          </a>
          .
        </div>
      );
    }
  };
  animateAlertIn = el => {
    anime({
      targets: `[${el}]`,
      translateY: 0,
      duration: 500,
      easing: "easeInOutSine"
    });
  };
  animateAlertOut = el => {
    anime({
      targets: `[${el}]`,
      translateY: -30,
      duration: 500,
      easing: "easeInOutSine",
      complete: () => {
        anime({
          targets: `[${el}]`,
          opacity: 1,
          duration: 0
        });
      }
    });
  };
  callCaptcha = e => {
    this.setState(
      prevState => ({ captcha: true }),
      () => {
        let submitValid =
          this.state.captcha &&
          this.state.email &&
          this.state.name &&
          this.state.subject &&
          this.state.message;
        this.setState(prevState => ({ submitValid: !submitValid }));
      }
    );
  };
  render() {
    return (
      <Layout>
        <div className={"contactContainer"} key="contact">
          <div className={"contactHeader"}>Say hello.</div>
          {this.renderAlert()}

          <form
            className={"contactForm"}
            onSubmit={e => {
              this.submitContactForm(e);
            }}
          >
            Name
            <input
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.name}
              type="text"
              name="name"
            />
            Email address
            <input
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.email}
              type="email"
              name="email"
            />
            Subject
            <input
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.subject}
              type="text"
              name="subject"
            />
            Message
            <textarea
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.message}
              type="text"
              name="message"
              rows={5}
            />
            <ReCAPTCHA
              ref={e => (this.captchaRef = e)}
              className={"contactCaptcha"}
              onChange={e => {
                this.callCaptcha(e);
              }}
              sitekey="6Ld8tJYUAAAAAOKxJFRJDNOdI_tbzVhPNOEBq8PC"
            />
            <input type="submit" value="Send" disabled={this.state.submitValid} />
          </form>
        </div>
      </Layout>
    );
  }
}
// action="https://formspree.io/dumblole@gmail.com"
//             method="POST"
