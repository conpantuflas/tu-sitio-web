import React from "react";
import { StaticPlan } from "./StaticPlan";
import style from "../styles/Plans.module.css";
import { EcommercePlan } from "./EcommercePlan";

export const Plans = () => {
  return (
    <div className={style.container} id="plans">
      <h2 className={style.title}>Nuestros Planes</h2>
      <div className={style.cardsContainer}>
        <StaticPlan />
        <EcommercePlan />
      </div>
    </div>
  );
};
