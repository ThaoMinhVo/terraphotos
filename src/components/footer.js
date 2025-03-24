import React from "react";
import "../styles/footer.scss";

function footer() {
  return (
    <div className="container-outer footer">
      <div className="container center footer-content">
        <div className="footer-social-container mobile-hide">
          <p>
            See what I’m up to and where I’ll be at by following me on
            Instagram.
          </p>
          <a className="footer-social-link footer-social-link-left">
            <p>terravo.photos</p>
            <div className="icon icon-insta"></div>
          </a>
        </div>
        <div className="footer-logo" />
        <div className="footer-social-container">
          <p className="mobile-hide">Email me directly for package options and any other questions.</p>
          <a className="footer-social-link">
            <div className="icon icon-email"></div>
            <p>terravophotos@gmail.com</p>
          </a>
          <a className="footer-social-link mobile-show">
            <div className="icon icon-insta"></div>
            <p>terravo.photos</p>
          </a>
        </div>
      </div>
      <div className="container-outer footer-links-bg">
        <div className="container footer-links-container">
          <a className="footer-links" href="#who">
            who
          </a>
          <div className="footer-links-divider"></div>
          <a className="footer-links" href="#what">
            what
          </a>
          <div className="footer-links-divider"></div>
          <a className="footer-links" href="#how">
            how
          </a>
          <div className="footer-links-divider"></div>
          <a className="footer-links" href="/">
            contact
          </a>
        </div>
      </div>
      <div className="container-outer footer-rights-bg">
        <div className="container footer-rights">
          <p className="legal">© TERRA VO PHOTOS 2025 | ALL RIGHTS RESERVED </p>
          <div className="backToTop">
            <div className="backToTop-arrow"></div>
            <p>back to top</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
