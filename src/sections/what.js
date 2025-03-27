import React from "react";
import "../styles/what.scss";

function what() {
  return (
    <div id="what" className="container-outer">
      <div className="container column section-margin what">
        <h2>what I offer :</h2>
        <div className="what-grid">
          <div className="what-grid-section what-grid-section-top">
            <div className="what-grid-element">
              <div className="what-grid-element-image couples">
                <p className="what-grid-element-label">couples</p>
              </div>
            </div>
          </div>
          <div className="what-grid-section what-grid-section-top">
            <div className="what-grid-element">
              <div className="what-grid-element-image portraits">
                <p className="what-grid-element-label">portraits</p>
              </div>
            </div>
          </div>
          <div className="what-grid-section what-grid-section-top">
            <div className="what-grid-element">
              <div className="what-grid-element-image fur-babies">
                <p className="what-grid-element-label">fur babies</p>
              </div>
            </div>
            <div className="what-grid-element">
              <div className="what-grid-element-image proposals">
                <p className="what-grid-element-label">proposals</p>
              </div>
            </div>
          </div>
          <div className="what-grid-section what-grid-section-bottom">
            <div className="what-grid-element">
              <div className="what-grid-element-image families">
                <p className="what-grid-element-label">families</p>
              </div>
            </div>
          </div>
          <div className="what-grid-section what-grid-section-bottom">
            <div className="what-grid-element">
              <div className="what-grid-element-image engagements">
                <p className="what-grid-element-label">engagements</p>
              </div>
            </div>
          </div>
        </div>
        <p>and more...</p>
      </div>
    </div>
  );
}

export default what;
