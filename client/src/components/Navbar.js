import React from "react";
import style from "../styles/Navbar.module.css";
import { Link } from "@reach/router";

export const Navbar = () => {
  return (
    <div className={style.container}>
      <h2 className={style.logo}>Tu Sitio Web</h2>
      <ul className={style.list}>
        <li>
          <Link className={style.item} to="/contact">
            Inicio
          </Link>
        </li>
        <li>
          <Link className={style.item} to="/contact">
            Nosotros
          </Link>
        </li>
        <li>
          <Link className={style.item} to="/contact">
            Planes
          </Link>
        </li>
        <li>
          <Link className={style.item} to="/contact">
            Clientes
          </Link>
        </li>
        <li>
          <Link className={style.item} to="/contact">
            Contactanos
          </Link>
        </li>
      </ul>
    </div>
  );
};
