import React from "react";

// Se recibe como prop tile, que va a ser el titulo de la "seccion"
export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4>{title}</h4>
      <div />
    </div>
  );
}
