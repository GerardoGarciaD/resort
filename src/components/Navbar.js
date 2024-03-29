import React, { Component } from "react";
import logo from "../images/logo.svg";
// Se importa el icono que se va a utilizar
import { FaAlignRight } from "react-icons/fa";
// Se hace  import al componente Link que va servir  como remplazo de <a>
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleToogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>

            <button
              onClick={this.handleToogle}
              type="button"
              className="nav-btn"
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            //   Se verifica el valor de la "variable" isOpen, para asignar diferentes clases al <ul>
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
