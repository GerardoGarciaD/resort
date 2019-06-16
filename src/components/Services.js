import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, debitis?"
      }
    ]
  };

  render() {
    return (
      <section className="services">
        {/*Se manda a llamar el componente Title y se manda el prop title */}
        <Title title="Services" />
        <div className="services-center">
          {/* Se hace un mapeo de los items que estan declarados dentro del array de objetos del estado */}
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
