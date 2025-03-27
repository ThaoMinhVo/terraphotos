import React from "react";
import "../styles/navMobile.scss";
import { HashLink } from "react-router-hash-link";

function navMobile() {
  const closeNav = () => {
    document.getElementById("navMobile").classList.add("navMobile-close");
    document.body.classList.remove("lock-scrolling");
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
          <HashLink onClick={closeNav} className="navMobile-links" to="/#who" smooth>
            who
          </HashLink>
          <HashLink onClick={closeNav} className="navMobile-links" to="/#what" smooth>
            what
          </HashLink>
          <HashLink onClick={closeNav} className="navMobile-links" to="/#how" smooth>
            how
          </HashLink>
          <HashLink onClick={closeNav} className="navMobile-links" to="/contact" smooth>
            contact
          </HashLink>
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
