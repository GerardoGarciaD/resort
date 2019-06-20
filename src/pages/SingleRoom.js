import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

// import del componente que crea un Hero dinamicamente con diferentes imagenes, usando el paqkage styled componentes
import StyledHero from "../components/StyledHero";

// Se importa todo el contexto
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  // Estos parametros se obtienen desde el react-router-dom, en este caso se obtiene el parametro
  // que se obtiene desde el link <Link to = {`/rooms/${slug}`}>
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      // Se obtiene el nombre de la habitacion que se manda desde el link
      slug: this.props.match.params.slug,
      defaultBcg
    };
    console.log(this.state.slug);
  }

  static contextType = RoomContext;
  // componentDidMount() {}

  render() {
    // Se obtiene la funcion para traer la informacion de una habitacion en especifica con el slug
    // esta funcion se obtiene desde el context
    const { getRoom } = this.context;

    /* Se manda a llamar a la variable del contexto, en donde se pasa como parametro el "slug" (nombre de la habitacion), esta funcion 
    trae toda la informacion de la habitacion que se busca */
    const room = getRoom(this.state.slug);
    // console.log(room);

    /* Verificacion de que la habitacion exista, por que puede ser que escriban el nombre de una 
    habitacion que no exite en la url */
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found</h3>
          <Link to="/rooms" className="btn-primary">
            Back To rooms
          </Link>
        </div>
      );
    }

    /* Se obtiene mediante destructuring toda la informacion de la recamara que se obtiene como 
    resultado */
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;

    /* Aqui se hace destructuring para que la primer imagen del grupo de imagenes del array 
    images, tome el nombre de mainImg y el resto de imagenes se guardan en el array defaultImg */
    const [mainImg, ...defaultImg] = images;
    return (
      /* Se manda a llamar al componente que crea al hero pero con imagenes dinamicas, en donde 
      se pasan mediante props */
      <>
        <StyledHero
          img={mainImg || this.state.defaultBcg}
          className="roomsHero"
        >
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back To Rooms
            </Link>
          </Banner>
        </StyledHero>

        <section className="single-room">
          {/* Seccion en donde se muestran las imagenes individualmente */}
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>

            <article className="info-">
              <h3>Info</h3>
              <h6>Price: ${price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                Capacity:{" "}
                {/* Verificacion para mostrar person si la capacidad es de 1 sola persona 
                o people si son mas de 1 */}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              {/* Verificacion de la variable pets, en donde si es true se muestra allowed 
              y si no la otra opcion */}
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              <h6>{breakfast ? "Free breakfast" : ""}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}
