import React from "react";
import "../components/firebase";
import firebase from "firebase";
import Layout from "../components/layout";

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
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
        console.log("sentdex");
      })
      .catch(error => {
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

  render() {
    return (
      <Layout>
        <div className={"contactContainer"} key="contact">
          <div className={"contactHeader"}>Say hello.</div>
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
              type="textarea"
              name="message"
              rows={5}
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
