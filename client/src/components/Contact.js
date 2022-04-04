import React from "react";
import style from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm("gmail", "mysitioweb", e.target, "N-wYBjSq1iNtSK4bE").then(
      result => {
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };
  return (
    <div className={style.container} id="contact">
      <h2 className={style.title}>
        ¿Deseas más información? <br />
        Contactanos!
      </h2>
      <form className={style.form} onSubmit={sendEmail}>
        <div className={style.itemForm}>
          <label className={style.label} htmlFor="name">
            Nombre:
          </label>
          <input className={style.input} type="text" id="name" name="name" />
        </div>
        <div className={style.itemForm}>
          <label className={style.label} htmlFor="lastName">
            Apellido:
          </label>
          <input
            className={style.input}
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <div className={style.itemForm}>
          <label className={style.label} htmlFor="email">
            Correo:
          </label>
          <input className={style.input} type="email" id="email" name="email" />
        </div>
        <div className={style.itemForm}>
          <label className={style.label} htmlFor="subject">
            Asunto:
          </label>
          <input
            className={style.input}
            type="text"
            id="subject"
            name="subject"
          />
        </div>
        <div className={style.itemForm}>
          <label className={style.label} htmlFor="message">
            Escribenos:
          </label>
          <textarea className={style.input} id="message" name="message" />
        </div>
        <button className={style.button} onSubmit={sendEmail}>
          Enviar
        </button>
      </form>
    </div>
  );
}
