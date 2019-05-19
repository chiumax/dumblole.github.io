import React from "react";
import "../components/firebase";
import firebase from "firebase";
import anime from "animejs";
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
    this.setState(
      prevState => ({
        submitValid: true
      }),
      () => {
        this.animateLoadIn("data-contactLoad");
        this.animateLoadOut("data-contactSubmit");
        this.animateAlertOut("data-alert");
        let sendMail = firebase.functions().httpsCallable("sendMail");

        sendMail({
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message
        })
          .then(result => {
            this.animateLoadIn("data-contactSubmit");
            this.animateLoadOut("data-contactLoad");
            if (result.data.response === true) {
              this.setState(
                prevState => ({
                  name: "",
                  email: "",
                  subject: "",
                  message: "",
                  status: "contactSuccess",
                  captcha: false,
                  submitValid: true
                }),
                () => {
                  this.captchaRef.reset();
                  this.animateAlertIn("data-alert");
                }
              );
            } else if (result.data.response === false) {
              this.setState(
                prevState => ({
                  status: "contactFailure",
                  submitValid: false
                }),
                () => this.animateAlertIn("data-alert")
              );
            }
          })
          .catch(error => {
            this.animateLoadIn("data-contactSubmit");
            this.animateLoadOut("data-contactLoad");
            this.setState(
              prevState => ({
                status: "contactFailure",
                submitValid: false
              }),
              () => this.animateAlertIn("data-alert")
            );
            console.log(error);
          });
      }
    );
  };

  handleContactFormChange = e => {
    e.persist();

    this.setState(
      prevState => {
        if (prevState.captcha === false) {
          this.captchaRef.execute();
        }
        return { [e.target.name]: e.target.value };
      },
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
          Oops! Something went wrong... Please try again and see if it works. You can also contact
          me at{" "}
          <a
            className={"inline-link"}
            target="_blank"
            rel="noopener noreferrer"
            href={"mailto:	business@dumblole.com"}
          >
            business@dumblole.com
          </a>
          .
        </div>
      );
    }
  };
  animateLoadIn = el => {
    anime({
      targets: `[${el}]`,
      translateY: [-60, 0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutSine"
    });
  };
  animateLoadOut = el => {
    anime({
      targets: `[${el}]`,
      translateY: [0, 60],
      opacity: [1, 0],
      duration: 500,
      easing: "easeInOutSine"
    });
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
          duration: 500
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
      <div>
        <div className={"contactContainer"} key="contact">
          <div className={"contactHeader"}>Let's talk.</div>
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
              size={"invisible"}
              badge={"bottomright"}
              className={"contactCaptcha"}
              onChange={e => {
                this.callCaptcha(e);
              }}
              sitekey="6LeNcKEUAAAAAI7e70ywr8xuQ0WMvj0p0O3W9Bel"
            />
            <div className={"contactSubmitSpin"}>
              <input
                type="submit"
                value="Send"
                disabled={this.state.submitValid}
                data-contactSubmit
              />
              <div className={"spinnerWrap"} data-contactLoad>
                <div className={"spinner"} />
              </div>
            </div>
          </form>
          <a href="https://ko-fi.com/dumblole" target="_blank" rel="noopener noreferrer">
            <img
              height="36"
              className={"kofidonate"}
              src="https://az743702.vo.msecnd.net/cdn/kofi5.png?v=2"
              border="0"
              alt="Buy Me a Coffee at ko-fi.com"
            />
          </a>
        </div>
      </div>
    );
  }
}
// action="https://formspree.io/dumblole@gmail.com"
//             method="POST"
