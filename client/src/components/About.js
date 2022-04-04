import React from "react";
import style from "../styles/About.module.css";

export const About = () => {
  return (
    <div className={style.container} id="about">
      <h2 className={style.title}>¿Quienes Somos?</h2>
      <p className={style.description}>
        Somos un equipo enfocado 100% en el desarrollo de sitios web, tenemos un
        muy bien preparado equipo, desarrolladores profesionales full stack
        certificados, con los conocimientos necesarios para desarrollar sitios
        web a la medida de nuestros clientes con un producto 100% original y con
        todo lo que necesites. Al ser desarrolladores web profesionales, somos
        capaces de realizar cualquier diseño que desees o cualquier herramienta
        adicional a tu sitio. Sin plantillas, totalmente personalizable y
        original para cada cliente.
      </p>
    </div>
  );
};
