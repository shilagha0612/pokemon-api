import React, { useState } from 'react';
import axios from 'axios';

const Newapi = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const results = response.data.results;
      const names = results.map(pokemon => pokemon.name);
      setPokemonList(names);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default Newapi;
