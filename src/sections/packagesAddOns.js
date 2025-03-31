import React from "react";
import "../styles/packagesAddOns.scss";

const packagesAddOn = () => {
  return (
    <div className="container-outer addOn-bg">
      <div className="container container-full center column addOn">
        <h2>Extras</h2>
        <table cellSpacing="" cellpadding="10">
          <thead>
            <tr>
              <th>Add-On</th>
              <th>Specifics</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">Additional Images (if available)</td>
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
              <td>Full Album</td>
              <td>Price varies based on initial package and available images.</td>
              <td>varies</td>
            </tr>
            <tr>
              <td>Additional Location</td>
              <td>Within 10 miles. Would not recommend for 30 minute sessions.</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Destination Shoot</td>
              <td>Travel fees may apply and will vary for locations over 40 minutes away.</td>
              <td>varies</td>
            </tr>
            <tr>
              <td>Photography Permits</td>
              <td>You are required to cover any photography permit fees if your chosen location requires one.</td>
              <td>varies</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default packagesAddOn;
