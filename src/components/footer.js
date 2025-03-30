import React from "react";
import "../styles/footer.scss";
import { HashLink } from "react-router-hash-link";

function footer() {
  return (
    <div className="container-outer footer">
      <div className="container center footer-content">
        <div className="footer-social-container mobile-hide">
          <p>
            See what I’m up to and where I’ll be at by following me on
            Instagram.
          </p>
          <a
            href="https://www.instagram.com/terravo.photos/"
            className="footer-social-link footer-social-link-left"
          >
            <p>terravo.photos</p>
            <div className="icon icon-insta"></div>
          </a>
        </div>
        <div className="logo footer-logo" />
        <div className="footer-social-container">
          <p className="mobile-hide">
            Email me directly for package options and any other questions.
          </p>
          <a
            href="mailto:terravophotos@gmail.com"
            className="footer-social-link"
          >
            <div className="icon icon-email"></div>
            <p>terravophotos@gmail.com</p>
          </a>
          <a
            href="https://www.instagram.com/terravo.photos/"
            className="footer-social-link mobile-show"
          >
            <div className="icon icon-insta"></div>
            <p>terravo.photos</p>
          </a>
        </div>
      </div>
      <div className="container-outer footer-links-bg">
        <div className="container footer-links-container">
          <a className="footer-links" href="/">
            home
          </a>
          <div className="footer-links-divider" />
          <HashLink className="footer-links" to="/#how" smooth>
            start
          </HashLink>
          <div className="footer-links-divider" />
          <a className="footer-links" href="/packages">
            packages
          </a>
          <div className="footer-links-divider" />
          <a className="footer-links" href="/contact">
            contact
          </a>
        </div>
      </div>
      <div className="container-outer footer-rights-bg">
        <div className="container footer-rights">
          <p className="legal">© TERRA VO PHOTOS 2025 | ALL RIGHTS RESERVED </p>
          <HashLink to="#top" className="backToTop" smooth>
            <div className="backToTop-arrow"></div>
            <p>back to top</p>
          </HashLink>
        </div>
      </div>
      <div className="container-outer mobile-show backToTop-mobile-bg">
        <HashLink
          to="#top"
          className="container center backToTop-mobile"
          smooth
        >
          <div className="backToTop-arrow" />
          <p>back to top</p>
          <div className="backToTop-arrow" />
        </HashLink>
      </div>
    </div>
  );
}

export default footer;
