import React, { Component } from 'react';
import axios from "axios";
import "./pokeProfile.css";

class PokeProfile extends Component {

    state = {
        pokeData: {}
    }

    componentDidMount() {
        let pokemonId = this.props.match.params.id;
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`).then((json) =>
            this.setState({ pokeData: json.data }));
    }

    render() {
        let { pokeData } = this.state;
        let dataExists = Object.keys(pokeData).length > 0;


        return (
            <div className="poke-profile-container">
                {dataExists ? (<div className="poke-profile">
                    <div className="poke-img">
                        <img src={pokeData.sprites.front_default} alt="pokemon-profile" />
                    </div>
                    <div className="poke-name">
                        {pokeData.name}
                    </div>
                    <div className="poke-stats">
                        {pokeData.stats.map((elem, index) => <div key={index}>
                            {elem.stat.name}{elem.base_stat}
                        </div>)}
                    </div>
                </div>)
                    :
                    <div>Loading...</div>
                }
            </div>
        );
    }
}

export default PokeProfile;