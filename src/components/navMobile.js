import React from "react";
import "../styles/navMobile.scss";

function navMobile() {
  const closeNav = () => {
    document.getElementById("navMobile").classList.add("navMobile-close");
  }

  return (
    <div id="navMobile" className="container-outer navMobile navMobile-close">
      <button onClick={closeNav} className="navMobile-x-container">
        <div className="navMobile-x navMobile-x-1" />
        <div className="navMobile-x navMobile-x-2" />
      </button>
      <div className="container column navMobile-container">
        <div className="logo navMobile-logo"></div>
        <div className="navMobile-links-container">
          <a className="navMobile-links" href="#who">
            who
          </a>
          <a className="navMobile-links" href="#what">
            what
          </a>
          <a className="navMobile-links" href="#how">
            how
          </a>
          <a className="navMobile-links" href="/">
            contact
          </a>
        </div>
        <div className="navMobile-socials-container">
          <a
            href="mailto:terravophotos@gmail.com"
            className="navMobile-socials"
          >
            email
          </a>
          <a
            href="https://www.instagram.com/terravo.photos/"
            className="navMobile-socials"
          >
            instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default navMobile;
