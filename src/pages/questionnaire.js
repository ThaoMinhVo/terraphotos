import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/questionnaire.scss";

const Questionnaire = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    // service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service
    emailjs
      .sendForm(
        "service_hcgy3q8", //your_service_id
        "template_3ls84sg", //your_template_id
        form.current,
        "lEad0yjwZ9d_Ovcx6" //public key
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate("/questionnaire/thanks");
        },
        (error) => {
          console.log(error.text);
          navigate("/questionnaire/oops");
        }
      );
  };

  return (
    <div className="container-outer column q-bg">
      <div className="container container-full column q-header">
        <h2 className="q-h2">client</h2>
        <h1 className="q-h1">QUESTIONNAIRE</h1>
      </div>

      <div className="container container q-form">
        <div className="q-left">
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
            <input className="contact-field" type="email" name="email" required />
            
            <label>Phone number</label>
            <input className="contact-field" type="tel" name="phone" />
            
            <label>What are your Instagram handles and can I follow these handles before the photoshoot?</label>
            <textarea
              className="contact-field"
              name="handles"
              placeholder="I asked if I can follow just in case this shoot is supposed to be a secrete of some sort."
            />
            
            <label>Do you consider yourselves introverted or extroverted?</label>
            <textarea
              className="contact-field"
              name="personality"
            />

            <label>Describe your relationship as a couple.</label>
            <textarea
              className="contact-field"
              name="relationship"
              placeholder="Tell me about yourselves – what do you like to do together?"
            />

            <label>Have you experienced a professional photoshoot before? How was it?</label>
            <textarea
              className="contact-field"
              name="photoshoothistory"
            /> 

            <label>Tell me about your love story. What has shaped you into who you are as a couple today?</label>
            <textarea
              className="contact-field"
              name="relationshiphistory"
            /> 

            <label>Are you comfortable getting slightly wet, sandy, or dirty during your photoshoot?</label>
            <textarea
              className="contact-field"
              name="gettingdirty"
            /> 

            <label>How do you feel about more adventurous poses like piggy back rides?</label>
            <textarea
              className="contact-field"
              name="physical"
              placeholder="Are you okay with getting physical and breaking a sweat a little? How are you with PDA?"
            /> 

            <label>Are you more attracted to fun, laughing, flirty photos or deep, soulful, romantic photos? It's totally fine if your answer is 'both'!</label>
            <textarea
              className="contact-field"
              name="phototypes"
            /> 

            <label>Anything else I should know? Anything you'd like to share about the structure of your relationship? Do you have any injuries? Are you pregnant? Any strong aversions?</label>
            <textarea
              className="contact-field"
              name="extras"
            /> 

            <label>How comfortable with public displays of affection are you both?</label>
            <textarea
              className="contact-field"
              name="pda"
            /> 
           
            <input
              type="hidden"
              name="_next"
              value="https://terravophotos.com/questionnaire/thanks"
            ></input>
            <button className="contact-submit" type="submit" value="Send">
              Submit
            </button>
          </form>
        </div>
        <div className="q-right">
          <p>
            This questionnaire isn’t required, but it helps me get to know
            you—your vibe, your comfort level, and what makes you tick! The more
            I know, the better I can tailor the shoot to fit your personalities
            and make everything flow naturally. So feel free to keep it playful
            and honest—I’m all about capturing the real you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
