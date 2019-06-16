import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
export default class Rooms extends Component {
  render() {
    // Se hace el llamado al componente hero y se pasa la prop hero asi como los "hijos" (children)
    // que en este caso va a ser otro componente
    return (
      // Se hace el llamado al componente hero y se pasa la prop hero asi como los "hijos" (children)
      // que en este caso va a ser otro componente
      <Hero hero="roomsHero">
        {/* Se manda a llamar el componente banner que manda las props title, subtitle y los hijos
        que en este caso es el <Link> */}
        <Banner title="Our Rooms">
          <Link to="/" className="btn-primary">
            Back To Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
