import React from "react";
import style from "../styles/EcommercePlan.module.css";

export const EcommercePlan = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>E-commerce</h2>
        <p className={style.subtitle}>Tienda Online Administrable</p>
        <p className={style.description}>
          Vende tus productos de la mejor manera con sistema administrable para
          que puedas manejar tus productos.
        </p>
        <p className={style.price}>
          <span className={style.priceSpan}>(Desde) </span>$100.000
        </p>
      </div>
      <ul className={style.itemsContainer}>
        <li className={style.item}>
          <img src="./images/storage.svg" alt="storage" />
          <p>2GB de Almacenamiento Hosting.</p>
        </li>
        <li className={style.item}>
          <img src="./images/envelope.svg" alt="mail" />
          <p>Correos Empresariales.</p>
        </li>
        <li className={style.item}>
          <img src="./images/cart.svg" alt="cart" />
          <p>Carrito de Compras.</p>
        </li>
        <li className={style.item}>
          <img src="./images/administrable.svg" alt="admin" />
          <p>Sistema Administrable.</p>
        </li>
        <li className={style.item}>
          <img src="./images/edit.svg" alt="modify" />
          <p>Modificaciones.</p>
        </li>
        <li className={style.item}>
          <img src="./images/lock.svg" alt="lockpad" />
          <p>Certificado SSL.</p>
        </li>
        <li className={style.item}>
          <img src="./images/whatsapp.svg" alt="whatsapp" />
          <p>Botones de contacto.</p>
        </li>
        <li className={style.item}>
          <img src="./images/domain.svg" alt="domain" />
          <p>Incluye dominio .cl o .com gratis.</p>
        </li>
      </ul>
      <button className={style.button}>Saber más</button>
    </div>
  );
};
