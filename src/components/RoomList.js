import React from "react";
// import del componente que se encarga de devolver las habitaciones con los estilos necesarios,
// botones, etc.
import Room from "./Room";

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h2>Unfortunately no rooms matched your search parameters</h2>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {/* Se manda a llamar al componente Room, para mostrar las habitaciones con su nombre, 
          precio, etc, en donde se pasan los parametros de id, y toda la informacion de la 
          habitacion */}
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}
