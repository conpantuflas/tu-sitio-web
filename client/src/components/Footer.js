import React from "react";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <ul className={style.firstList}>
        <li className={style.firstListItem}>Inicio</li>
        <li className={style.firstListItem}>Contacto</li>
        <li className={style.firstListItem}>Horarios</li>
      </ul>
      <ul className={style.secondList}>
        <li className={style.secondListItem}>Preguntas Frecuentes</li>
        <li className={style.line}></li>
        <li className={style.secondListItem}>Quienes Somos</li>
        <li className={style.line}></li>
        <li>
          <img
            className={style.facebook}
            src="/images/facebook.svg"
            alt="facebook logo"
          />
        </li>
        <li>
          <img
            className={style.instagram}
            src="/images/instagram.svg"
            alt="instagram logo"
          />
        </li>
      </ul>
    </div>
  );
}
