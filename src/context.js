import React, { Component } from "react";

// Se hace el import de la informacion de las recamaras
import items from "./data";
import { all } from "q";

// Se crea el contexto
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // Se crea el objeto que se va a pasar a toda la aplicacion
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    // "Variables" para hacer el filtro de las recamaras
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    mazSize: 0,
    pets: false,
    breakfast: false
  };

  //   getData

  //   Se hace un lifecycled method
  componentDidMount() {
    //   this.getData
    let rooms = this.formatData(items);
    // Aqui se guardan las habiaciones que  estan "destacadas" (featured == true)
    let featuredRooms = rooms.filter(room => room.featured === true);

    /* Se obtienn los valores para ponerlos como maximos default, en este caso se obtiene 
    el precio maximo, en donde se busca la habitacion con el mayor precio, pero se usa 
    spread operator, por que la funcion Math.max, necesita de un array para encontrar el maximo
    por lo que por cada item se van a ir "agregando" al array para que la funcion pueda encontrar el maximo  */
    let maxPrice = Math.max(...rooms.map(item => item.price));
    // console.log(maxPrice);
    let maxSize = Math.max(...rooms.map(item => item.size));
    // console.log(maxSize);

    // Fialmente se cambia el estado y los objetos dentro de el
    this.setState({
      /* Aqui no se pone rooms:rooms, por que la variable de el lifecycled method tiene el mismo 
        nombre que la del estado */
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
    // console.log(rooms);
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

  /* Funcion que va a devolver solo la informacion una habitacion en especifico, la que haga 
  match con el slug, al momemnto de ver una habitacion en especifico */
  getRoom = slug => {
    // Primero crea una variable que va a contener toda la informacion las habitaciones
    let tempRooms = [...this.state.rooms];
    // Despues se va a buscar la habitacion que haga match con el slug que se obtiene como parametro
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    // Se verifica si es entre un checkbox u otro tipo de input para obtener el valor
    const value = target.type === "checkbox" ? target.checked : target.value;
    // Se obtiene el nombre del input al que se le hace click, type, price, etc.
    const name = event.target.name;

    // console.log(target, value, name);

    // Finalmente se cambian los valores del estado
    this.setState(
      {
        // /* se pone [name], por que es el valor que se va a editar y proviene directamente
        // del nombre del input, type, price, etc. y despues se pone el valor del input */
        [name]: value
      },
      // Se hace la callbackfunction para filtrar las recamaras con los nuevos valores del estado
      // se hace esto por que solo se va a llamar la funcion cunado los valores del estado realmente cambian
      this.filterRooms
    );
  };

  filterRooms = () => {
    // Cuando se hace la callback function, se hace destructuring de los nuevos valores del estado
    let {
      rooms,
      type,
      capacity,
      price,
      minPrice,
      maxPrice,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    // Se guarda todo el contenido de el objeto rooms en la variable tempRooms mediante spread operator
    let tempRooms = [...rooms];

    /* Filtrado por tipo de habitacion */

    // se verifica si el tipo es diferente de all, esto para hacer el filtrado
    if (type !== "all") {
      /* se hace el filtrado en donde se busca solo las recamaras que tengan el typo especifico 
      (single, double, etc.) */
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    /* Filtrado por capacidad de personas */

    // Parsing de valores de la capacidad
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    /* Filtrado por precios */
    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price < price);

    /* Filtrado por tamaño */
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    /* Filtrado por breakfast */
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    /* Filtrado por pets */
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    // Finalmente se cambia el valor de el estado
    this.setState({
      // se actualiza sortedRooms por que es el array que se muestra y utiliza para filtrar en el componente rooms
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      /*Se pasa pasa todo el contenido del estado haciendo destructuring (...this.state), asi 
      como tambien la funcion para obtener la informacion de una habitacion en especifico */
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// Se crea el consumer
const RoomConsumer = RoomContext.Consumer;

// Otra forma para poder tener acceso al contexto desde functional components
/* en este caso se crea una funcion que toma como parametro el componente al que se le va a 
pasar el contexto, despues otra funcion en la que se obtienen los props
finalmente se regresa el RoomConsumer en donde a dentro va a estar el componente al que se 
le van a pasar las propiedades y el conntexto */
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
