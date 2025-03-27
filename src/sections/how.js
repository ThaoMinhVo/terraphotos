import React from "react";
import "../styles/how.scss";

function how() {
  return (
    <div id="how" className="container-outer column section-margin how-bg">
      <div className="container column center how">
        <h2>how to start</h2>
        <div className="how-grid">
          <div className="how-grid-item">
            <p className="how-grid-item-detail">Contact me to receive package options and work out availability.</p>
            <h3 className="how-grid-item-name">select</h3>
            <div className="how-number how-number-1">1</div>
          </div>
          <div className="how-grid-item">
            <p className="how-grid-item-detail">Lock in your date with a signed contract and paid retainer.</p>
            <h3 className="how-grid-item-name">secure</h3>
            <div className="how-number how-number-2">2</div>
          </div>
          <div className="how-grid-item">
            <p className="how-grid-item-detail">I'll work with you to ensure a seamless session—scouting locations, selecting outfits, choosing props, and more.</p>
            <h3 className="how-grid-item-name">slay</h3>
            <div className="how-number how-number-3">3</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default how;
