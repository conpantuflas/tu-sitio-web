import React from "react";
import style from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={style.container}>
      <h2 className={style.logo}>My Sitio Web</h2>
      <ul className={style.list}>
        <li>
          <a className={style.item} href="#init">
            Inicio
          </a>
        </li>
        <li>
          <a className={style.item} href="#about">
            Nosotros
          </a>
        </li>
        <li>
          <a className={style.item} href="#plans">
            Planes
          </a>
        </li>
        <li>
          <a className={style.item} href="#contact">
            Clientes
          </a>
        </li>
        <li>
          <a className={style.item} href="#contact">
            Contactanos
          </a>
        </li>
      </ul>
    </div>
  );
};
