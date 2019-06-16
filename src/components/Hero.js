import React from "react";

/* Se reciben como parametros los "hijos" (children) que pueden ser buttons, h1, etc. y hero que se va a usar
para deteerminar la clase del header */
export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

// Se añade un valor por defecto para el prop hero en caso de que no se reciba como propiedad
Hero.defaultProps = {
  hero: "defaultHero"
};
