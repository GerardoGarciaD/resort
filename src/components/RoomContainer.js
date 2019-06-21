import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
// Se importa la funcion que regresa el contexto y las props del context
import { withRoomConsumer } from "../context";

import Loading from "./Loading";

function RoomContainer({ context }) {
  // Se obtienen las variables que ese obtienen desde el context mediante destructuring
  const { loading, sortedRooms, rooms } = context;
  console.log(loading);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

/* Al hacer el export del componente se manda a llamar a la funcion que esta en el context,
de esta forma se tiene acceso al contexto y al context  */
export default withRoomConsumer(RoomContainer);

/* Esta es una forma de obtener el contexto en los functional components  */
// import React from "react";
// import RoomFilter from "./RoomFilter";
// import RoomList from "./RoomList";

// // import del consumer para poder tener acceso al contexto en los functional componets
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     // Para obtener los datos del contexto, se tiene que hacer una funcion
//     <RoomConsumer>
//       {/* En esta funcion se manda como "parametro" (value), el valor que se quiere obtener del contexto
//       en este caso se obtiene todo el contexto */}
//       {value => {
//         // Verificacion que se obtenga el objeto del contexto
//         // console.log(value);

//         // Destructuring del objeto que se recibe del context
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             <h1>Hello From Rooms Container</h1>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
