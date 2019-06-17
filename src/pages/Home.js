import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from "react-router-dom";

import FeaturedRooms from "../components/FeaturedRooms";

export default class Home extends Component {
  render() {
    // Se hace el llamado al componente hero y se pasa la prop hero asi como los "hijos" (children)
    // que en este caso va a ser otro componente
    return (
      <>
        <Hero>
          {/* Se manda a llamar el componente banner que manda las props title, subtitle y los hijos
        que en este caso es el <Link> */}
          <Banner
            title="Luxurious rooms"
            subtitle="deluxe rooms starting at $299"
          >
            <Link to="/rooms" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>

        <Services />
        <FeaturedRooms />
      </>
    );
  }
}
