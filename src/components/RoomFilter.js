import React from "react";
// SE HACE IMPORT DE useContext QUE ES OTRA FORMA DE OBTENER EL CONTEXT, LA MAS FACIL
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
import RoomContainer from "./RoomContainer";
import { spread } from "q";

// funcion para obtener los valores unicos de las habitaciones, se obtiene como parametro
// el array en donde se va a buscar y el valor a buscar (types o guest)
const getUnique = (items, value) => {
  /* Con la funcion Set, se hace mapeo en donde va a seleccionar y guardar solo los valores unicos
    , en donde por cada item, va a buscar el valor "type" o "guest"  y lo va a insertar en un 
    array con spread operators, este mismo array es el que va a regresar la funcion */

  return [...new Set(items.map(item => item[value]))];
};

/* Se obtienen las props que se mandan desde el componente RoomContainer, que en este caso son 
todas las habitaciones */
export default function RoomFilter({ rooms }) {
  /* De esta forma se obtiene el contexto, se manda a llamar a la funcion useContext y como parametro el contexto que se emporta desde 
    el context */
  const context = useContext(RoomContext);
  //   console.log(context);

  //   Se hace el destructuring del contenido del context

  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  //   llamado a la funcion para obtener valores unicos (tipo de habitacion)
  let types = getUnique(rooms, "type");

  //   Añadir la opcion la opcion all al array al inicio del array con spread operators
  types = ["all", ...types];

  // mapeo para devolver options y ponerlo en el jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  //   llamado a la funcion para obtener valores unicos (capaidad de personas)
  let people = getUnique(rooms, "capacity");

  // mapeo para devolver options y ponerlo en el jsx
  people = people.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms"> </Title>
      <form action="" className="filter-form">
        {/* SELECT TYPE */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {/* Se muestran los tipos de habitaciones */}
            {types}
          </select>
        </div>
        {/* END OF SELECT TYPE */}

        {/* GUESTS */}
        <div className="form-group">
          <label htmlFor="capacity">Guess</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {/* Se muestran los tipos de habitaciones */}
            {people}
          </select>
        </div>
        {/* END OF GUESTS */}

        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">room Price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* End of Room Price */}

        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />

            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End of size */}

        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* End of extras */}
      </form>
    </section>
  );
}
