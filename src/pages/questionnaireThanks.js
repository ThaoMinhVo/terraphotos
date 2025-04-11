import React from "react";
import "../styles/thanks.scss";

const QuestionnaireThanks = () => {
  return (
    <div className="container-outer thanks-bg">
      <div className="container container-full thanks">
        <div className="thanks-left thanks-left-q" />
        <div className="thanks-right">
          <h1 className="q-thanks-h1">You're all set!</h1>
          <p>
            Thank you so much for helping me prepare for your session! Getting
            to know you a little better helps me create a photoshoot that truly
            reflects you. I’m so excited to capture your personalities and make
            some magic together. Can’t wait for the fun ahead!
          </p>
          <p>
            Don’t forget to check out the photoshoot guide—it’s packed with tips
            to help you feel prepared and confident for your session! Hopefully,
            it answers most of your questions, but if anything else comes up,
            feel free to reach out. I’m always here to help!
          </p>
          <a
            href="https://www.instagram.com/terravo.photos/"
            className="thanks-link"
          >
            <div className="thanks-link-icon"></div>
            <p>terravo.photos</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireThanks;
