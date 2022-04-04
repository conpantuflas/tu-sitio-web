import React from "react";
import style from "../styles/StaticPlan.module.css";

export const StaticPlan = () => {
  return (
    <div className={style.container}>
      <div className={style.titleContainer}>
        <h2 className={style.title}>Informativa</h2>
        <p className={style.subtitle}>Página web informativa</p>
        <p className={style.description}>
          Entrega toda la informacion necesaria sobre tu negocio y tus redes de
          contacto.
        </p>
        <p className={style.price}>$50.000</p>
      </div>
      <ul className={style.itemsContainer}>
        <li className={style.item}>
          <img
            className={style.itemImage}
            src="./images/storage.svg"
            alt="storage"
          />
          <p>1GB de Almacenamiento Hosting</p>
        </li>
        <li className={style.item}>
          <img
            className={style.itemImage}
            src="./images/envelope.svg"
            alt="email"
          />
          <p>Correos Empresariales</p>
        </li>
        <li className={style.item}>
          <img src="./images/edit.svg" alt="modify" />
          <p>Modificaciones</p>
        </li>
        <li className={style.item}>
          <img
            className={style.itemImage}
            src="./images/lock.svg"
            alt="lockpad"
          />
          <p>Certificado SSL</p>
        </li>
        <li className={style.item}>
          <img
            className={style.itemImage}
            src="./images/whatsapp.svg"
            alt="whatsapp button"
          />
          <p>Botones de contacto</p>
        </li>
        <li className={style.item}>
          <img
            className={style.itemImage}
            src="./images/domain.svg"
            alt="domain"
          />
          <p>Incluye dominio .cl o .com gratis</p>
        </li>
      </ul>
      <button className={style.button}>Saber más</button>
    </div>
  );
};
