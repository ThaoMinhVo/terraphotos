import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/contact.scss";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
    emailjs
      .sendForm(
        "service_hcgy3q8",
        "template_on6l313",
        form.current,
        "lEad0yjwZ9d_Ovcx6"
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/thanks");
        },
        (error) => {
          console.log(error.text);
          navigate("/oops");
        }
      );
  };

  return (
    <div className="container-outer contact-bg">
      <div className="container container-full contact">
        <div className="contact-left">
          <h1>Let’s Chat & Plan Your Perfect Shoot!</h1>
          <p>
            I’d love to hear from you! Whether you’re ready to book or just have
            a few questions, complete the form, and I’ll be in touch soon.
            Let’s create something beautiful together!
          </p>
        </div>
        <div className="contact-right">
          <form
            className="contact-form"
            ref={form}
            onSubmit={sendEmail}
            //action="https://formsubmit.co/terravophotos@gmail.com"
            method="POST"
          >
            <label>Name*</label>
            <input className="contact-field" type="text" name="name" required />
            <label>Email*</label>
            <input
              className="contact-field"
              type="email"
              name="email"
              required
            />
            <label>Phone number</label>
            <input className="contact-field" type="tel" name="phone" />
            <label>Package</label>
            <select className="contact-field" name="package">
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="30 minute session">30 minute session</option>
              <option value="1 hour session">1 hour session</option>
              <option value="1.5 hour session">1.5 hour session</option>
            </select>
            <label>Type of shoot*</label>
            <select className="contact-field" name="type" required>
              <option disabled selected value>
                {" "}
                -- select an option --{" "}
              </option>
              <option value="couples casual">Individual portraits</option>
              <option value="couples casual">Couples casual</option>
              <option value="couples engagement">Couples engagement</option>
              <option value="couples proposal">Couples proposal</option>
              <option value="families (adult + children)">
                Families (adult + children)
              </option>
              <option value="families (adult + dogs)">
                Families (adult + dogs)
              </option>
              <option value="families (adult + children + dogs)">
                Families (adult + children + dogs)
              </option>
              <option value="other">other</option>
            </select>
            <label>Desired date & location*</label>
            <textarea className="contact-field" name="date" required />
            <label>Extra details</label>
            <textarea className="contact-field" name="details" placeholder="Add-ons, special requests, custom packages, etc..."/>
            <input
              type="hidden"
              name="_next"
              value="https://terravophotos.com/thanks"
            ></input>
            <button className="contact-submit" type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
