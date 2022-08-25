import React from "react";
import c from "../styles/contact/contact.module.css";

const Contact = () => {
  return (
    <div className={c.contact}>
      <div className={c.secondContact}>
        <div className={c.leftBar}>
          <iframe
            className={c.koubaMap}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25583.532690493732!2d3.0606488939601126!3d36.72396410950187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad41c48b28b5%3A0x85ce2eadf67d55fe!2sKouba!5e0!3m2!1sfr!2sdz!4v1661427421901!5m2!1sfr!2sdz"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className={c.rightBar}></div>
      </div>
    </div>
  );
};

export default Contact;
