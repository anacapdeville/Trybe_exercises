import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class PokemonList extends Component {
  render() {
    return (
      <div>
        <h1>Pokedex</h1>
        <div className="allPokemons">
        {pokemons.map((pokemon) => {
          return <Pokemon key={pokemon.id} name={pokemon.name} type={pokemon.type} weight={pokemon.averageWeight.value} unit={pokemon.averageWeight.measurementUnit} url={pokemon.image} />
        })}
        </div>
      </div>
    )
  }
}

export default PokemonList;