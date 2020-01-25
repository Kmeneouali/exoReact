import React, { Component } from "react";

class Infos extends Component {
  render() {
    return (
      <div className="Infos">
        <p>
          <span className="Infos--name">Date de sortie</span>
          <span className="Infos--bold">27 septembre 1968</span> (2h 21min)
        </p>
        <p>
          <span className="Infos--name">De</span>
          <span className="Infos--link">Stanley Kubrick</span>
        </p>
        <p>
          <span className="Infos--name">Avec</span>
          <span className="Infos--link">Keir Dullea</span>,
          <span className="Infos--link">Gary Lockwood</span>,
          <span className="Infos--link">William Sylvester</span>
        </p>
        <p>
          <span className="Infos--name">Genre</span>
          <span className="Infos--link">Science fiction</span>
        </p>
        <p>
          <span className="Infos--name">Nationalités</span>
          <span className="Infos--link">Américain, Britannique</span>
        </p>
      </div>
    );
  }
}

export default Infos;
