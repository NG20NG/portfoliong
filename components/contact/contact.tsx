import React from "react";
import c from "./contact.module.css";

const Contact = () => {
  const GPS = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7972350742916!2d3.0751690502093494!3d36.72743067939515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad69e0b18abb%3A0x3c3cfacf9c37183f!2sAlger%2C%20Kouba!5e0!3m2!1sfr!2sdz!4v1663417029614!5m2!1sfr!2sdz`;
  return (
    <div className={c.contact} id={"contact"}>
      <div className={c.secondContact}>
        <div className={c.socialMedia}></div>
        <div className={c.getInTouch}>
          <div className={c.titleContainer}>
            <h2 className={c.title}>Entrer en contact</h2>
            <p className={c.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className={c.inputContainer}>
            <input className={c.fullName} />
            <input className={c.email} />
            <textarea className={c.message} />
            <button className={c.sendBTN}>Send</button>
          </div>
        </div>
        <div className={c.googleMap}>
          <iframe
            className={c.map}
            src={GPS}
            width="600"
            height="450"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
