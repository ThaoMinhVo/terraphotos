import React from "react";
import "../styles/oops.scss";

const Thanks = () => {
  return (
    <div className="container-outer oops-bg">
      <div className="container container-full oops">
        <h1>Oh no!</h1>
        <p>
          My form isn't working at the moment. Please reach out to me
          directly via email!
        </p>
        <a href="mailto:terravophotos@gmail.com" className="footer-social-link thanks-link">
          <div className="icon icon-email"></div>
          <p>terravophotos@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Thanks;
