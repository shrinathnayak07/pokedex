import React, { Component } from 'react';
import axios from "axios";
import { getPokemonIdFromUrl } from "../../helpers/stringConvertor";
import './pokeList.scss';

class Home extends Component {

    state = {
        pokemonList: []
    }

    componentDidMount() {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100").then(
            json => this.setState({ pokemonList: json.data.results })
        )
    }

    render() {
        let { pokemonList } = this.state;
        return (
            <div className="PokeListPage">
                {pokemonList.length > 0 && <div className="each-pokemon">
                    {pokemonList.map((elem, index) =>
                        <a href={`/pokemons/${getPokemonIdFromUrl(elem.url)}`}>
                        <div key={index}>{elem.name}</div>
                        </a>)}
                </div>}
            </div>
        );
    }
}

export default Home;
