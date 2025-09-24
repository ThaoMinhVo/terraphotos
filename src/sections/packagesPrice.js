import React from "react";
import "../styles/packagesPrice.scss";

function packagesHero() {
  return (
    <div className="container-outer price-bg">
      <div className="container-full center column price">
        <h2>Packages</h2>
        <p className="price-disclaimer">
        Pricing is subject to change at any time without notice. Rates may vary, particularly during peak seasons, holidays, or for special requests. Your session price is locked in once your retainer is paid. For the latest pricing details, please reach out directly.
        </p>

        <div className="package-container">
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>30-minute</h4>
              </div>
              <p className="package-price">$200</p>
              <ul>
                <li>15 edited images</li>
                <li>1 outfit</li>
                <li>1 location</li>
              </ul>
            </div>
          </div>
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>1-hour</h4>
              </div>
              <p className="package-price">$300</p>
              <ul>
                <li>30 edited images</li>
                <li>up to 2 outfits</li>
                <li>1 location</li>
              </ul>
            </div>
          </div>
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>1.5-hour</h4>
              </div>
              <p className="package-price">$400</p>
              <ul>
                <li>50 edited images</li>
                <li>up to 3 outfits</li>
                <li>up to 2 nearby locations</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="price-disclaimer">
          *All packages come with an online gallery with download access
        </p>
      </div>
    </div>
  );
}

export default packagesHero;
