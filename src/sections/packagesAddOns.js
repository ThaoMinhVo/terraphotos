import React from "react";
import "../styles/packagesAddOns.scss";

const packagesAddOn = () => {
  return (
    <div className="container-outer addOn-bg">
      <div className="container container-full center column addOn">
        <h2>Add ons</h2>
        <table cellSpacing="0" cellpadding="10">
          <thead>
            <tr>
              <th>Add-On</th>
              <th>Details</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="4">Extra Edited Images (if available)</td>
              <td>Per Image</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>15 Additional Images</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>40 Additional Images</td>
              <td>$200</td>
            </tr>
            <tr>
              <td>Full Album (Minimum of 90 Images)</td>
              <td>$250</td>
            </tr>
            <tr>
              <td>Additional 30 Minutes</td>
              <td>Only for Mini or Standard Sessions</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Extra Outfit Change</td>
              <td>Per Outfit</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Additional Location</td>
              <td>Within 10 miles</td>
              <td>$50</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default packagesAddOn;
