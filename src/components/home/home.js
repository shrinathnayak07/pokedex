import React, { Component } from 'react';
import './home.scss';
import PokeImage from "../../images/Pokeball.png";


class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/pokemons"><img src={PokeImage} className="App-logo" alt="logo" /></a>
          <p>
            Pokedex at your service.
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
