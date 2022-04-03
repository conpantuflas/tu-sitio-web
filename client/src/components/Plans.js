import React from "react";
import { PlanCard } from "./PlanCard";

export const Plans = () => {
  const staticIncludes = [];
  return (
    <div>
      <h2>Nuestros Planes</h2>
      <div>
        <PlanCard
          title="Estática"
          subtitle="Página web estática"
          price="50.000"
          description="Página web informativa"
          includes={staticIncludes}
        />
        <PlanCard
          title="Ecommerce"
          src=""
          alt="ecommerce"
          description="Tienda online con sistema autoadministrable, boton de whatsapp, carrito de compras"
          price="120.000"
        />
      </div>
    </div>
  );
};
