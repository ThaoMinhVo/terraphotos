import React from "react";
import "../styles/how.scss";

function how() {
  return (
    <div className="container-outer column section-margin how-bg">
      <div className="container column center how">
        <h2>how to get started</h2>
        <div className="how-grid">
          <div className="how-grid-item">
            <p className="how-grid-item-detail">Contact me to receive package options and work out a date.</p>
            <p className="how-grid-item-name how-grid-item-name-1">select</p>
          </div>
          <div className="how-grid-item">
            <p className="how-grid-item-detail">Lock in your date with a signed contract and paid retainer.</p>
            <p className="how-grid-item-name how-grid-item-name-2">secure</p>
          </div>
          <div className="how-grid-item">
            <p className="how-grid-item-detail">I'll work with you to ensure a seamless session—scouting locations, selecting outfits, choosing props, and more.</p>
            <p className="how-grid-item-name how-grid-item-name-3">slay</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default how;
