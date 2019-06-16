import React, { Component } from "react";
import Hero from "../components/Hero";

export default class Home extends Component {
  render() {
    // Se hace el llamado al componente hero y se pasa la prop hero
    return <Hero />;
  }
}
