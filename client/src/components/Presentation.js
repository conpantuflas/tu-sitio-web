import React from "react";
import style from "../styles/Presentation.module.css";

export const Presentation = () => {
  return (
    <div className={style.container} id="init">
      <div>
        <h1 className={style.title}>Creamos Tú Pagina Web</h1>
        <p className={style.slogan}>
          Página web para tu negocio creamos el sitio web que tu empresa
          necesita, mejora la presencia digital de tu negocio con un sitio web
          profesional.
        </p>
        <a className={style.button} href="#plans">
          Más Información
        </a>
      </div>
      <div className={style.image_container}>
        <img
          className={style.images}
          src="/images/principal.png"
          alt="principal"
        />
      </div>
    </div>
  );
};
