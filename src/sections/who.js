import React from "react";
import "../styles/who.scss";

function who() {
  return (
    <div className="container-outer column section-margin who">
      <h2>who me?</h2>
      <div className="container-outer who-content">
        <div className="container">
          <div className="who-content-left">
            <div className="who-content-left-copy">
              <h3>I'm Terra!</h3>
              <p>
                Just a girl who knows that memories are precious and life should
                be celebrated. Every laugh, milestone, and little moment tells a
                story, and I’m here to capture them. Let’s preserve the moments
                that matter most!
              </p>
            </div>
            <div className="who-content-left-image" />
          </div>
          <div className="who-content-right">
            <div className="who-content-right-image" />
            <div className="facts-container">
              <h2 className="dark">fun facts!</h2>
              <ul>
                <li>My Vietnamese name is Thao.</li>
                <li>
                  I was raised in Atlanta, GA, but moved to SoCal in 2015.
                </li>
                <li>I have a 5-year-old Pomeranian named Bear.</li>
                <li>Sadly, I’m allergic to cats.</li>
                <li>I have a computer science degree.</li>
                <li>
                  I’ve completely ditched blue from my closet (except for light
                  jeans). Neutrals and browns are my go-to!
                </li>
                <li>
                  My other creative outlets include drawing, balloon arches,
                  flower arches, and website design (I designed this site).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default who;
