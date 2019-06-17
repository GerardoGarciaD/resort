import React, { Component } from "react";
// Se hace el import del context que se creo
import { RoomContext } from "../context";
// Componente para mostrar el gif de carfga mientras se muestra la informacion
import Loading from "./Loading";
import Room from "./Room";
// Se llama al componente que añade estilo a los titulos de las secciones
import Title from "./Title";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // Se obtienen los objetos loading, featuredRooms desde el contexto y se guarda con el alias "rooms"
    let { loading, featuredRooms: rooms } = this.context;
    // console.log(featuredRooms);
    /* Funcion que va a regresar la "referencia" el "llamado" al componente Room, por cada item 
    que se encuentre en el objeto room, en donde al componente Room se pasan las props key y room */
    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Rooms" />
        <div className="featured-rooms-center">
          {/* se verifica si loading es true, entonces se despliega el componente Loading, en caso contrario 
          se muestra el contenido de la variable rooms */}
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
