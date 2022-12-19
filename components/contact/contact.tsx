import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import c from "./contact.module.css";
import gsap from "gsap";

import PopMessage from "./pop";
export interface IsFotm {
  ok: string;
  err: string;
}
const Contact = () => {
  const [isForm, setIsForm] = useState<IsFotm>({
    ok: "",
    err: "Error",
  });
  const [ifErr, setIfErr] = useState<boolean>(false);
  const form = useRef<any>();
  console.log(ifErr);

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (
      e.target[0].value == "" &&
      e.target[1].value == "" &&
      e.target[2].value == ""
    ) {
      setIsForm((e: any) => ({
        ...e,
        err: "fill out the empty fields",
      }));
      setIfErr(true);
      return;
    }
    if (e.target[0].value == "") {
      setIsForm((e: any) => ({ ...e, err: "Enter name please" }));
      setIfErr(true);
      return;
    }
    if (e.target[1].value == "") {
      setIsForm((e: any) => ({ ...e, err: "Enter email please" }));
      setIfErr(true);
      return;
    }
    if (e.target[2].value == "") {
      setIsForm((e: any) => ({ ...e, err: "Enter description please" }));
      setIfErr(true);
      return;
    }
    if (
      e.target[0].value != "" &&
      e.target[1].value != "" &&
      e.target[2].value != ""
    ) {
      emailjs
        .sendForm(
          "service_d27fl4v",
          "template_0030z0i",
          form.current,
          "9k_g08rcEao_BC2eh"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsForm((e: any) => ({ ...e, ok: "message envoyer" }));
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  useEffect(() => {
    if (ifErr) {
      gsap.to(`.${c.emailJsContainerMessage}`, { right: 50 + "px" });
      setTimeout(() => {
        setIfErr(false);
      }, 3000);
    } else gsap.to(`.${c.emailJsContainerMessage}`, { right: -200 + "px" });
    console.log(ifErr);
  }, [ifErr]);

  const GPS = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.7972350742916!2d3.0751690502093494!3d36.72743067939515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad69e0b18abb%3A0x3c3cfacf9c37183f!2sAlger%2C%20Kouba!5e0!3m2!1sfr!2sdz!4v1663417029614!5m2!1sfr!2sdz`;
  return (
    <div className={c.contact} id={"contact"}>
      <div className={c.secondContact}>
        <div className={c.socialMedia}></div>
        <div className={c.getInTouch}>
          <div className={c.titleContainer}>
            <h2 className={c.title}>Contact</h2>
            <p className={c.description}>
              envoyez-moi un e-mail concernant une question ou un problème
            </p>
          </div>
          <div className={c.inputContainer}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                className={c.fullName + " " + c.inputTextarea}
                placeholder="Full name"
                name="user_name"
              />
              <input
                className={c.email + " " + c.inputTextarea}
                placeholder="example@gmail.com"
                name="user_email"
              />
              <textarea
                className={c.message + " " + c.inputTextarea}
                placeholder="info"
                name="message"
              />
              <input className={c.sendBTN} type="submit" value="Send" />
            </form>
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
      <PopMessage msg={isForm} />
    </div>
  );
};

export default Contact;
