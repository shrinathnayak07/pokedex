import React, { Component } from 'react';
import './home.scss';
import PokeImage from "../../images/Pokeball.png";


class Home extends Component {

  state = {
    showHeader : true
  }

  render() {
    console.log("s",this.state);
    return (
      <div className="App" style={{background:"#282CEC"}}>
    <div style={{
          width: "80%",
          margin: "auto",
          background: "black",
          height: !this.state.showHeader ? "0" :"100px",
          lineHeight: "5",
          borderRadius: "0 0 30px 30px",
    transition: "all 1s ease",
    }}>
      {this.state.showHeader &&
      <input style={{    height: !this.state.showHeader ? "0" :"40%",
    width: "55%",
  textAlign: "center"}}
    placeholder="Search your pokemon here"
    >
    </input>}
    </div>

        <header className="App-header">
          <a href="/pokemons" onMouseEnter={()=>this.setState({showHeader: false})}
          onMouseLeave={() => this.setState({showHeader: true})}>
          <img src={PokeImage} className="App-logo" alt="logo" /></a>
          <p>
            Pokedex at your service.
          </p>
        </header>
      </div>
    );
  }
}

export default Home;
