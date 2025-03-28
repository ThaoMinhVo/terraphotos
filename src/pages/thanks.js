import React from "react";
import "../styles/thanks.scss";

const Thanks = () => {
  return (
    <div className="container-outer thanks-bg">
      <div className="container container-full thanks">
        <div className="thanks-left" />
        <div className="thanks-right">
          <h1>Thank you!!</h1>
          <p>Your message is in, and I’m so excited to connect with you! I’ll be reaching out soon to chat about your session and answer any questions. In the meantime, feel free to check out my work or say hi on social media. </p>
          <a
            href="https://www.instagram.com/terravo.photos/"
            className="thanks-link"
          >
            <div className="thanks-link-icon"></div>
            <p>terravo.photos</p>
          </a>
          <p>Can’t wait to make some magic together! </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
