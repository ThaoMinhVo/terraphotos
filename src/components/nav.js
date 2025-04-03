import React from "react";
import "../styles/nav.scss";
import NavMobile from "./navMobile";
import { HashLink } from "react-router-hash-link";

function nav() {
  const openNav = () => {
    document.getElementById("navMobile").classList.remove("navMobile-close");
    document.body.classList.add("lock-scrolling");
  };
  return (
    <div id="top" className="container-outer nav">
      <NavMobile />
      <div className="container nav-container">
        <a className="nav-name" href="/">
          terra.photos
        </a>
        <p className="nav-links-container">
          <a className="nav-links" href="/">
            home
          </a>
          <HashLink className="nav-links" to="/#how" smooth>
            how to start
          </HashLink>
          <a className="nav-links" href="/packages">
            packages
          </a>
          <a className="nav-links nav-links-contact" href="/contact">
            contact
          </a>
        </p>
        <div onClick={openNav} className="nav-burger">
          <div className="nav-burger-1" />
          <div className="nav-burger-2" />
          <div className="nav-burger-3" />
        </div>
      </div>
    </div>
  );
}

export default nav;
