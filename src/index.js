import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/home';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
// import { Router, Route, Switch } from 'react-router'
import PokeList from './components/pokemonListPage/pokeListPage';
import PokeProfile from './components/pokeProfile/pokeProfile';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/pokemons" component={PokeList} />
        <Route path="/pokemons/:id" component={PokeProfile} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
