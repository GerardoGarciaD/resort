import React, { Component } from "react";

// Se hace el import de la informacion de las recamaras
import items from "./data";

// Se crea el contexto
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // Se crea el objeto que se va a pasar a toda la aplicacion
  state = {
    romms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true
  };

  //   getData

  //   Se hace un lifecycled method
  componentDidMount() {
    //   this.getData
    let rooms = this.formatData(items);
    // Aqui se guardan las habiaciones que  estan "destacadas" (featured == true)
    let featuredRooms = rooms.filter(room => room.feature === true);

    // Fialmente se cambia el estado y los objetos dentro de el
    this.setState({
      /* Aqui no se pone rooms:rooms, por que la variable de el lifecycled method tiene el mismo 
        nombre que la del estado */
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false
    });
    console.log(rooms);
  }

  //   Funcionr para formatear la informacion que se obtiene de data.js
  formatData(items) {
    // Para cada elemento del array de objetos de la informacion de data.js se guarda el id, y las imagenes
    let tempItems = items.map(item => {
      let id = item.sys.id;
      //  Se obtienen las imagenes, como de igual forma estan "nesteadas" dentro de otro array de objetos
      // por cada elemento "image" que esta dentro del array, se guareda solo el url de la imagen
      let images = item.fields.images.map(image => image.fields.file.url);

      /* Finalmente se guarda la informacion mediante destructuring, en donde primero 
      se va a guardar toda la informacion de item.fields, pero se sobreescribe la seccion de
      imagenes y el id */
      let room = { ...item.fields, images, id };

      return room;
    });

    return tempItems;
  }

  render() {
    return (
      //Se pasa pasa todo el contenido del estado haciendo destructuring (...this.state)
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Se crea el consumer
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
