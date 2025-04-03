import React from "react";
import "../styles/navMobile.scss";
import { HashLink } from "react-router-hash-link";

function navMobile() {
  const closeNav = () => {
    document.getElementById("navMobile").classList.add("navMobile-close");
    document.body.classList.remove("lock-scrolling");
  };

  return (
    <div id="navMobile" className="container-outer navMobile navMobile-close">
      <button onClick={closeNav} className="navMobile-x-container">
        <div className="navMobile-x navMobile-x-1" />
        <div className="navMobile-x navMobile-x-2" />
      </button>
      <div className="container column navMobile-container">
        <div className="logo navMobile-logo"></div>
        <div className="navMobile-links-container">
          <a onClick={closeNav} className="navMobile-links" href="/">
            home
          </a>
          <HashLink
            onClick={closeNav}
            className="navMobile-links"
            to="/#how"
            smooth
          >
            how to start
          </HashLink>
          <a onClick={closeNav} className="navMobile-links" href="/packages">
            packages
          </a>
          <a
            onClick={closeNav}
            className="navMobile-links"
            href="/contact"
            smooth
          >
            contact
          </a>
        </div>
        <a
          href="mailto:terravophotos@gmail.com"
          className="navMobile-links navMobile-links-social"
        >
          email
        </a>
        <a
          href="https://www.instagram.com/terravo.photos/"
          className="navMobile-links navMobile-links-social"
        >
          instagram
        </a>
      </div>
    </div>
  );
}

export default navMobile;
