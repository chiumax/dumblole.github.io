import React from "react";
import "../components/firebase";
import firebase from "firebase";
import Layout from "../components/layout";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    status: ""
  };
  submitContactForm = e => {
    e.preventDefault();
    let sendMail = firebase.functions().httpsCallable("sendMail");
    sendMail({
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    })
      .then(result => {
        console.log(JSON.stringify(result));
        if (result.data.response === true) {
          this.setState(prevState => ({
            name: "",
            email: "",
            subject: "",
            message: "",
            status: "contactSuccess"
          }));
        } else {
          this.setState(prevState => ({
            status: "contactFailure"
          }));
        }
      })
      .catch(error => {
        this.setState(prevState => ({
          status: "contactFailure"
        }));
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
    this.setState(prevState => ({ [e.target.name]: e.target.value }));
  };
  renderAlert = () => {
    if (this.state.status === "contactSuccess") {
      return <div className={this.state.status}>Success! Thanks for contacting me.</div>;
    } else if (this.state.status === "contactFailure") {
      return (
        <div className={this.state.status}>
          Oops! Something went wrong... Please try again and see if it works. If not, feel free to
          directly contact me at{" "}
          <a target="_blank" href={"mailto:dumblole@gmail.com"}>
            dumblole@gmail.com
          </a>
          .
        </div>
      );
    } else {
      return;
    }
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
              required
            />
            Email address
            <input
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.email}
              type="email"
              name="email"
              required
            />
            Subject
            <input
              onChange={e => {
                this.handleContactFormChange(e);
              }}
              value={this.state.subject}
              type="text"
              name="subject"
              required
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
              required
            />
            <input type="submit" value="Send" />
          </form>
        </div>
      </Layout>
    );
  }
}
// action="https://formspree.io/dumblole@gmail.com"
//             method="POST"
