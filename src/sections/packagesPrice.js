import React from "react";
import "../styles/packagesPrice.scss";

function packagesHero() {
  return (
    <div className="container-outer price-bg">
      <div className="container-full center column price">
        <h2>Packages</h2>
        <p className="price-disclaimer">
          All pricing is subject to change at any time without prior notice.
          Rates may vary, especially during peak seasons, holidays, or for
          special requests. Booking your session secures the current pricing at
          the time of payment. For the most up-to-date pricing, please inquire
          directly.
        </p>

        <div className="package-container">
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>Speedy</h4>
              </div>
              <p className="package-price">$200</p>
              <ul>
                <li>30-minute session</li>
                <li>15 edited images</li>
                <li>1 outfit</li>
                <li>1 location</li>
              </ul>
            </div>
          </div>
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>Standard</h4>
              </div>
              <p className="package-price">$350</p>
              <ul>
                <li>1 hour session</li>
                <li>30 edited images</li>
                <li>up to 2 outfits</li>
                <li>1 location</li>
              </ul>
            </div>
          </div>
          <div className="package">
            <div className="package-detail">
              <div className="package-name">
                <h4>Super</h4>
              </div>
              <p className="package-price">$500</p>
              <ul>
                <li>1.5 hour session</li>
                <li>45 edited images</li>
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
