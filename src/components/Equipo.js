import React, { Component } from "react";
import { LaLigaContext } from "./LaLiga";
class Equipo extends Component {
  render() {
    return (
      <LaLigaContext.Consumer>
        {value => {
          return Object.keys(value.state).map(idEquipo => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={idEquipo}
              >
                <p className="m-0">
                  {value.state[idEquipo].nombre}
                  <span className="ml-2 badge badge-danger">
                    {value.state[idEquipo].titulos}
                  </span>
                </p>
                <button
                  onClick={() => {
                    value.esCampeon(idEquipo);
                  }}
                  className="btn btn-success"
                  type="button"
                >
                  Es Campeòn
                </button>
              </li>
            );
          });
        }}
      </LaLigaContext.Consumer>
    );
  }
}
export default Equipo;
