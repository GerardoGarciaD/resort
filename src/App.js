import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        {/* se pone "/rooms/:slug por que para cada single room, va a existir un nombre diferente, es por eso que se pone eso, despues se mostrará como a
        accesar al nombre especifico de la recamara */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        {/* Cuando no se encuentra ninguna ruta existente, se va a deplegar la pagina de error */}
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
