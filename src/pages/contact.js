import React from "react";
import Layout from "../components/layout";

export default () => (
  <Layout>
    <div className={"contactContainer"}>
      <div className={"contactHeader"}>Say hello.</div>
      <form
        className={"contactForm"}
        action="https://formspree.io/dumblole@gmail.com"
        method="POST"
      >
        Name
        <input type="text" name="name" required />
        Email address
        <input type="email" name="email" required />
        Subject
        <input type="text" name="subject" required />
        Message
        <textarea type="textarea" name="body" rows={5} />
        <input type="submit" value="Send" />
      </form>
    </div>
  </Layout>
);
