import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

// Se hace el llamado al componente hero y se pasa la prop hero asi como los "hijos" (children)
// que en este caso va a ser otro componente
export default class Error extends Component {
  render() {
    return (
      // Se hace el llamado al componente hero y se pasa la prop hero asi como los "hijos" (children)
      // que en este caso va a ser otro componente
      <Hero>
        {/* Se manda a llamar el componente banner que manda las props title, subtitle y los hijos
        que en este caso es el <Link> */}
        <Banner title="404" subtitle="Page Not Found">
          <Link to="/" className="btn-primary">
            Back To Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
