import React from "react";
import "../styles/homeCta.scss";

function homeCta() {
  return (
    <div className="container-outer home-cta-bg">
      <div className="container center column home-cta">
        <div className="home-cta-content">
          <h2 className="dark">Pause!</h2>
          <p>Don't let another moment slip away—book your session today!</p>
          <a className="home-cta-btn" href="/contact">contact me</a>
        </div>
      </div>
    </div>
  );
}

export default homeCta;
