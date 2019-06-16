import React from "react";

// Se reciben las props title, subtitle y los hijos del componente al momento de que se le llama
export default function Banner({ title, subtitle, children }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
