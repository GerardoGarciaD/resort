import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import App from "./App";

// se importa el package para la creacion de rutas
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// Se importa el RoomProvider del context
import { RoomProvider } from "./context";

ReactDOM.render(
  // Se envuelve toda la aplicacion dentro del RoomProvider del contexto
  <RoomProvider>
    {/*Se envuelve la el componente App en el router, para que en ese componente
    solo se hagan los path y switch */}
    <Router>
      <App />
    </Router>
  </RoomProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
