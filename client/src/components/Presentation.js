import React from "react";
import style from "../styles/Presentation.module.css";

export const Presentation = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>Creamos Tú Pagina Web</h1>
        <p className={style.slogan}>
          Página web para tu negocio creamos el sitio web que tu empresa
          necesita, mejora la presencia digital de tu negocio con un sitio web
          profesional.
        </p>
        <button className={style.button}>Más Información</button>
      </div>
      <div className={style.image_container}>
        <img
          className={style.images}
          src="/img/principal.png"
          alt="imagen principal"
        />
      </div>
    </div>
  );
};
