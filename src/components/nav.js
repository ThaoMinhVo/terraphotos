import React from "react";
import "../styles/nav.scss";

function nav() {
  return (
    <div className="container-outer">
      <div className="container nav-container">
        <a className="nav-name" href="/">
          terra.photos
        </a>
        <p className="nav-links-container">
          <a className="nav-links" href="#who">
            who
          </a>
          <a className="nav-links" href="#what">
            what
          </a>
          <a className="nav-links" href="#how">
            how
          </a>
          <a className="nav-links nav-links-contact" href="/">
            contact
          </a>
        </p>
        <div className="nav-burger">
          <div className="nav-burger-1" />
          <div className="nav-burger-2" />
          <div className="nav-burger-3" />
        </div>
      </div>
    </div>
  );
}

export default nav;
