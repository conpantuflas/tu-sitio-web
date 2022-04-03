import React from "react";

export const PlanCard = ({ title, image, alt, description, price }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={alt} />
      <p>{description}</p>
      <p>${price}</p>
    </div>
  );
};
