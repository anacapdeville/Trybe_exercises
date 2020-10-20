import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import NotFound from './NotFound';
import Details from './Details';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path='/details/:key' componente={Details} />
          <Route path='/about' component={About} />
          <Route exact path='/' render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;