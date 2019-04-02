import React, { Component } from "react";
const LaLigaContext = React.createContext();
export { LaLigaContext };

class LaLigaProvider extends Component {
  state = {
    equipos: [
      {
        nombre: "Real Madrid",
        titulos: 35
      },
      {
        nombre: "Barcelona",
        titulos: 25
      },
      {
        nombre: "Atletico de Madrid",
        titulos: 10
      },
      {
        nombre: "Valladolid",
        titulos: 5
      },
      {
        nombre: "Gerona",
        titulos: 2
      },
      {
        nombre: "Sevilla",
        titulos: 112
      },
      {
        nombre: "Leganes",
        titulos: 1
      }
    ]
  };
  render() {
    return (
      <LaLigaContext.Provider
        value={{
          state: this.state.equipos,
          esCampeon: id => {
            const equipos = [...this.state.equipos];
            equipos[id].titulos = equipos[id].titulos + 1;
            this.setState({
              state: equipos
            });
          }
        }}
      >
        {this.props.children}
      </LaLigaContext.Provider>
    );
  }
}

export default LaLigaProvider;
