import React from "react";
import { Link } from "react-router-dom";
/* import para mostrar imagen por defeto en caso de que no se encuentre ninguna en 
las props que se obtienen */
import defaultImg from "../images/room-1.jpeg";
// import de PropTypes para verificar el tipo de variables que se estan obteniendo como props
import PropTypes from "prop-types";

// Se hace el destructuring de las props que se obtienen desde el componente FeaturedRooms
export default function Room({ room }) {
  // console.log(room);

  //   se hace destructuring del objeto room que se obtiene como prop
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        {/* se verifica si existe la imagen en la posicion 0 del array images, si no se encuentra
          se muestra la imagen por defecto */}
        <img src={images[0] || defaultImg} alt="Signle Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per night</p>
        </div>
        {/* Se crea el link que va a direccionar a la pagina en donde se va a mostrar más informacion
        sobre una habitacion en especifico */}
        <Link to={`/rooms/${slug}`}>
          <div className="btn-primary room-link">Features</div>
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

// Verificacion de los tipos de props que se obtienen
Room.prototypes = {
  // Al obtenerse un objeto como prop, se tiene que verificar el contenido del objeto con shape
  room: PropTypes.shape({
    //   Se verifican los tipos de datos de los "items" del objeto
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
